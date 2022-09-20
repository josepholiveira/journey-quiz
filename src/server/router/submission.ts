import { createRouter } from './context'
import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { parseCookies, setCookie } from 'nookies'
import { randomUUID } from 'node:crypto'

export const submissionRouter = createRouter()
  .query('get', {
    input: z.object({
      submissionId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.submission.findUnique({
        where: {
          id: input.submissionId,
        },
        include: {
          quiz: true,
        },
      })
    },
  })
  .mutation('start', {
    input: z.object({
      quizId: z.string(),
    }),
    async resolve({ input, ctx }) {
      let { sessionId } = parseCookies({ req: ctx.req })

      if (!sessionId) {
        sessionId = randomUUID()

        setCookie({ res: ctx.res }, 'sessionId', sessionId, {
          path: '/',
          maxAge: 60 * 60 * 24 * 15, // 15 days
        })
      }

      const submission = await ctx.prisma.submission.create({
        data: {
          quizId: input.quizId,
        },
      })

      const submissionId = submission.id

      return { submissionId }
    },
  })
  .mutation('sendAnswer', {
    input: z.object({
      submissionQuestionAnswerId: z.string().cuid(),
      answerId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      const submissionQuestionAnswer =
        await ctx.prisma.submissionQuestionAnswer.findUnique({
          where: {
            id: input.submissionQuestionAnswerId,
          },
        })

      if (!submissionQuestionAnswer) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: "The question you're trying to answer doesn't exist.",
        })
      }

      // TODO: Check date is still valid.

      await ctx.prisma.submissionQuestionAnswer.update({
        where: {
          id: submissionQuestionAnswer.id,
        },
        data: {
          answerId: input.answerId,
        },
      })
    },
  })
  .query('fetchQuestion', {
    input: z.object({
      submissionId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      const submission = await ctx.prisma.submission.findUnique({
        where: {
          id: input.submissionId,
        },
        include: {
          questionAnswers: true,
        },
      })

      if (!submission) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The submission with the provided ID was not found.',
        })
      }

      // Get the submission status (what questions are already answered?)
      // Fetch the first non-answered question (if there is one)
      // Otherwise, fetch a random question that's not answered yet
      // Create a submission question answer with empty answer

      const alreadyAnsweredQuestionsIds = submission.questionAnswers.map(
        (question) => {
          return question.questionId
        },
      )

      const inProgressQuestion = submission.questionAnswers.find(
        (questionAnswer) => {
          return questionAnswer.answerId === null
        },
      )

      const currentQuestionNumber = alreadyAnsweredQuestionsIds.length || 1

      if (inProgressQuestion) {
        const currentQuestion = await ctx.prisma.question.findUnique({
          where: {
            id: inProgressQuestion.questionId,
          },
          include: {
            answers: true,
          },
        })

        return {
          status: 'ongoing',
          currentQuestionNumber,
          remainingTimeInSeconds: 5,
          description: currentQuestion?.description,
          submissionQuestionAnswerId: inProgressQuestion.id,
          answers: currentQuestion?.answers.map((answer) => {
            return {
              id: answer.id,
              description: answer.description,
            }
          }),
        }
      } else {
        const nextQuestion = await ctx.prisma.question.findFirst({
          where: {
            quizId: submission.quizId,
            id: {
              notIn: alreadyAnsweredQuestionsIds,
            },
          },
          include: {
            answers: true,
          },
        })

        if (!nextQuestion) {
          return {
            status: 'finished',
          }
        }

        const submissionQuestionAnswer =
          await ctx.prisma.submissionQuestionAnswer.create({
            data: {
              submissionId: submission.id,
              questionId: nextQuestion.id,
            },
          })

        return {
          status: 'ongoing',
          currentQuestionNumber: currentQuestionNumber + 1,
          remainingTimeInSeconds: 5,
          description: nextQuestion?.description,
          submissionQuestionAnswerId: submissionQuestionAnswer.id,
          answers: nextQuestion?.answers.map((answer) => {
            return {
              id: answer.id,
              description: answer.description,
            }
          }),
        }
      }
    },
  })
  .query('result', {
    input: z.object({
      submissionId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      const submission = await ctx.prisma.submission.findUnique({
        where: {
          id: input.submissionId,
        },
        include: {
          questionAnswers: {
            include: {
              question: true,
              answer: true,
            },
          },
        },
      })

      const score = submission?.questionAnswers.reduce(
        (score, questionAnswer) => {
          if (questionAnswer.answer?.isRightAnswer) {
            return score + questionAnswer.question.score
          } else {
            return score
          }
        },
        0,
      )

      return {
        score,
      }
    },
  })
