import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CaretRight } from 'phosphor-react'

import { trpc } from "../utils/trpc";

import rocketseatLogoImg from '../assets/logo-rocketseat.svg';

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Teste seus conhecimentos | Rocketseat</title>
      </Head>

      <main className="max-w-xl mx-auto py-16 px-8">
        <Image src={rocketseatLogoImg} alt="" />

        <h2 className="text-xl font-medium mt-6">Qual teste você quer realizar?</h2>
        <p className="mt-1 text-sm text-zinc-400">Inicie escolhendo um dos testes da lista abaixo</p>
        
        <ul role="list" className="mt-6 border-t border-b border-zinc-800 divide-y divide-zinc-800">
          <li>
            <div className="relative group py-4 flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-amber-300">
                  <svg className="w-6 h-6" viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79.1787 37.3803C78.3004 31.905 74.73 27.308 64.1559 23.0191C60.4829 21.3309 56.3878 20.1219 55.1673 17.3385C54.7338 15.7187 54.6768 14.8061 54.9506 13.8252C55.7376 10.6426 59.5361 9.65025 62.5475 10.5628C64.4867 11.213 66.3232 12.7074 67.4296 15.0913C72.6084 11.7378 72.5969 11.7605 76.2129 9.45646C74.8897 7.40322 74.1825 6.45634 73.3156 5.57813C70.2015 2.09904 65.9582 0.308162 59.1711 0.445044C57.9962 0.593333 56.81 0.752915 55.635 0.901318C52.2473 1.75683 49.019 3.5363 47.1255 5.92033C41.4449 12.3652 43.0646 23.6465 49.9772 28.2892C56.7871 33.3994 66.7909 34.5629 68.0684 39.3424C69.3118 45.1941 63.7682 47.0875 58.2585 46.4146C54.1977 45.5705 51.9393 43.5059 49.4981 39.753C45.0039 42.3538 45.0039 42.3538 40.3841 45.0116C41.4792 47.407 42.6312 48.4907 44.4678 50.5667C53.1598 59.3842 74.9125 58.9507 78.8138 45.6047C78.9734 45.1484 80.0229 42.0913 79.1787 37.3803V37.3803ZM34.2357 1.15216H23.0114C23.0114 10.848 22.9659 20.4754 22.9659 30.1712C22.9659 36.3423 23.2853 42.0001 22.2815 43.7339C20.6389 47.1444 16.3841 46.7225 14.445 46.0608C12.4716 45.0912 11.4678 43.711 10.3043 41.7605C9.9849 41.2016 9.74535 40.7681 9.66539 40.7339C6.61988 42.5932 3.58554 44.4638 0.539917 46.3233C2.05714 49.4373 4.29277 52.1407 7.15589 53.8973C11.4335 56.4638 17.1825 57.2509 23.194 55.8707C27.1066 54.73 30.4829 52.3689 32.2509 48.7757C34.8061 44.0647 34.2585 38.3613 34.2357 32.0533C34.2928 21.7643 34.2357 11.4753 34.2357 1.15216Z" fill="#323330"/>
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="group-hover:text-violet-400 font-medium">
                  <Link href={`/submissions/1`} className="font-medium">
                    <a className="font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      JavaScript
                    </a>
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  Teste seus conhecimentos em JavaScript e DOM
                </p>
              </div>
              <div className="flex-shrink-0 self-center">
                <CaretRight className="h-5 w-5 text-zinc-400" aria-hidden="true" />
              </div>
            </div>
          </li>
          <li>
            <div className="relative group py-4 flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-500">
                  <svg className="w-6 h-6" viewBox="0 0 76 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76 34.5085C76 29.4739 69.6951 24.7026 60.0285 21.7437C62.2593 11.8913 61.2678 4.05274 56.8993 1.54316C55.8924 0.954489 54.715 0.675647 53.4293 0.675647V4.13019C54.1419 4.13019 54.715 4.26961 55.1953 4.53296C57.3021 5.74128 58.2161 10.3422 57.5035 16.2598C57.3331 17.716 57.0542 19.2496 56.7134 20.8143C53.6771 20.0707 50.362 19.4975 46.8765 19.1257C44.7852 16.2598 42.6164 13.6573 40.4321 11.3801C45.4823 6.68625 50.2226 4.1147 53.4448 4.1147V0.660156C49.1847 0.660156 43.6078 3.69644 37.969 8.96346C32.3302 3.72742 26.7534 0.722121 22.4933 0.722121V4.17667C25.7 4.17667 30.4558 6.73272 35.5059 11.3956C33.3371 13.6728 31.1684 16.2598 29.108 19.1257C25.607 19.4975 22.2919 20.0707 19.2556 20.8297C18.8993 19.2806 18.636 17.778 18.4501 16.3373C17.722 10.4196 18.6205 5.81874 20.7118 4.59493C21.1765 4.31609 21.7807 4.19216 22.4933 4.19216V0.737612C21.192 0.737612 20.0147 1.01645 18.9923 1.60512C14.6392 4.1147 13.6633 11.9378 15.9095 21.7592C6.27395 24.7335 0 29.4893 0 34.5085C0 39.5432 6.30493 44.3145 15.9715 47.2733C13.7407 57.1257 14.7322 64.9643 19.1007 67.4738C20.1076 68.0625 21.285 68.3414 22.5862 68.3414C26.8463 68.3414 32.4232 65.3051 38.062 60.0381C43.7008 65.2741 49.2776 68.2794 53.5377 68.2794C54.839 68.2794 56.0163 68.0005 57.0387 67.4119C61.3918 64.9023 62.3677 57.0792 60.1215 47.2578C69.726 44.299 76 39.5277 76 34.5085V34.5085ZM55.8304 24.1758C55.2572 26.1742 54.5446 28.2346 53.7391 30.2949C53.1039 29.0556 52.4378 27.8163 51.7097 26.577C50.9971 25.3377 50.2381 24.1294 49.479 22.952C51.6788 23.2774 53.8011 23.6801 55.8304 24.1758ZM48.7354 40.674C47.5271 42.7653 46.2878 44.7482 45.002 46.5917C42.6938 46.7931 40.3547 46.9015 38 46.9015C35.6608 46.9015 33.3216 46.7931 31.0289 46.6072C29.7432 44.7637 28.4884 42.7963 27.2801 40.7205C26.1027 38.6911 25.0338 36.6308 24.0579 34.555C25.0183 32.4791 26.1027 30.4033 27.2646 28.374C28.4729 26.2827 29.7122 24.2998 30.998 22.4563C33.3062 22.2549 35.6453 22.1465 38 22.1465C40.3392 22.1465 42.6784 22.2549 44.9711 22.4408C46.2568 24.2843 47.5116 26.2517 48.7199 28.3275C49.8973 30.3569 50.9662 32.4172 51.9421 34.493C50.9662 36.5688 49.8973 38.6447 48.7354 40.674ZM53.7391 38.6602C54.5756 40.736 55.2882 42.8118 55.8769 44.8257C53.8475 45.3214 51.7097 45.7396 49.4945 46.065C50.2536 44.8721 51.0126 43.6483 51.7252 42.3935C52.4378 41.1542 53.1039 39.8994 53.7391 38.6602ZM38.031 55.1893C36.5903 53.7021 35.1496 52.0446 33.7244 50.2321C35.1186 50.2941 36.5438 50.3405 37.9845 50.3405C39.4407 50.3405 40.8814 50.3096 42.2911 50.2321C40.8969 52.0446 39.4562 53.7021 38.031 55.1893ZM26.5055 46.065C24.3057 45.7396 22.1834 45.3369 20.1541 44.8412C20.7273 42.8428 21.4399 40.7825 22.2454 38.7221C22.8806 39.9614 23.5467 41.2007 24.2748 42.44C25.0029 43.6793 25.7464 44.8876 26.5055 46.065ZM37.9535 13.8277C39.3942 15.3149 40.8349 16.9724 42.2601 18.7849C40.8659 18.7229 39.4407 18.6765 38 18.6765C36.5438 18.6765 35.1031 18.7074 33.6934 18.7849C35.0877 16.9724 36.5283 15.3149 37.9535 13.8277ZM26.49 22.952C25.7309 24.1449 24.9719 25.3687 24.2593 26.6235C23.5467 27.8628 22.8806 29.1021 22.2454 30.3414C21.4089 28.2655 20.6963 26.1897 20.1076 24.1758C22.137 23.6956 24.2748 23.2774 26.49 22.952V22.952ZM12.4704 42.3471C6.98655 40.0079 3.43905 36.9406 3.43905 34.5085C3.43905 32.0764 6.98655 28.9936 12.4704 26.6699C13.8027 26.0968 15.2589 25.5856 16.7615 25.1053C17.6445 28.1416 18.8064 31.3018 20.247 34.5395C18.8219 37.7617 17.6755 40.9064 16.808 43.9272C15.2744 43.4469 13.8182 42.9202 12.4704 42.3471ZM20.8047 64.484C18.6979 63.2757 17.7839 58.6748 18.4965 52.7572C18.6669 51.301 18.9458 49.7674 19.2866 48.2028C22.3229 48.9463 25.638 49.5195 29.1235 49.8913C31.2148 52.7572 33.3836 55.3597 35.5679 57.6369C30.5177 62.3308 25.7774 64.9023 22.5552 64.9023C21.8581 64.8868 21.2695 64.7474 20.8047 64.484V64.484ZM57.5499 52.6797C58.278 58.5974 57.3795 63.1983 55.2882 64.4221C54.8235 64.7009 54.2193 64.8248 53.5067 64.8248C50.3 64.8248 45.5442 62.2688 40.4941 57.6059C42.6629 55.3287 44.8316 52.7417 46.892 49.8758C50.393 49.504 53.7081 48.9308 56.7444 48.1718C57.1007 49.7364 57.3795 51.239 57.5499 52.6797V52.6797ZM63.5141 42.3471C62.1818 42.9202 60.7256 43.4315 59.223 43.9117C58.34 40.8754 57.1781 37.7152 55.7375 34.4775C57.1627 31.2553 58.309 28.1106 59.1765 25.0898C60.7102 25.5701 62.1663 26.0968 63.5296 26.6699C69.0134 29.0091 72.5609 32.0764 72.5609 34.5085C72.5454 36.9406 68.998 40.0234 63.5141 42.3471V42.3471Z" fill="white"/>
                    <path d="M37.9838 41.5848C41.8937 41.5848 45.0633 38.4152 45.0633 34.5053C45.0633 30.5954 41.8937 27.4258 37.9838 27.4258C34.0739 27.4258 30.9043 30.5954 30.9043 34.5053C30.9043 38.4152 34.0739 41.5848 37.9838 41.5848Z" fill="white"/>
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="group-hover:text-violet-400 font-medium">
                  <Link href={`/submissions/1`} className="font-medium">
                    <a className="font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      React
                    </a>
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  Teste seus conhecimentos em apps front-end com React
                </p>
              </div>
              <div className="flex-shrink-0 self-center">
                <CaretRight className="h-5 w-5 text-zinc-400" aria-hidden="true" />
              </div>
            </div>
          </li>
          <li>
            <div className="relative group py-4 flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-lime-500 00">
                  <svg className="w-6 h-6" width="109" height="120" viewBox="0 0 109 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.5761 1.52468C52.5387 -0.171062 56.3974 -0.178722 59.3574 1.52468C74.2489 9.93915 89.145 18.3404 104.034 26.76C106.834 28.3374 108.708 31.454 108.679 34.6809V85.3055C108.7 88.666 106.642 91.857 103.687 93.3987C88.8446 101.767 74.0097 110.145 59.1697 118.513C56.1459 120.242 52.2097 120.109 49.2804 118.238C44.8306 115.659 40.3731 113.092 35.9229 110.515C35.0136 109.973 33.9884 109.541 33.3463 108.66C33.914 107.894 34.9289 107.799 35.7536 107.465C37.611 106.874 39.317 105.926 41.0233 105.006C41.4548 104.711 41.9816 104.824 42.3953 105.089C46.2004 107.27 49.9719 109.515 53.7897 111.676C54.6042 112.146 55.4289 111.522 56.125 111.134C70.6902 102.902 85.2731 94.7013 99.8357 86.4668C100.375 86.2072 100.674 85.6345 100.63 85.0434C100.64 68.3434 100.632 51.6404 100.635 34.9404C100.697 34.2698 100.308 33.6532 99.7021 33.3787C84.911 25.0489 70.1276 16.7064 55.3391 8.37447C55.0829 8.19832 54.7793 8.10381 54.4684 8.10335C54.1575 8.1029 53.8537 8.19652 53.597 8.37192C38.8084 16.7064 24.0276 25.0566 9.23909 33.386C8.63483 33.6609 8.2293 34.2672 8.30121 34.9404C8.30377 51.6404 8.30121 68.3434 8.30121 85.046C8.27557 85.3343 8.33891 85.6237 8.4827 85.875C8.6265 86.1263 8.84384 86.3275 9.10547 86.4515C13.0519 88.6894 17.0033 90.9115 20.9523 93.1417C23.177 94.3392 25.9084 95.0506 28.3595 94.1332C30.5225 93.3575 32.0387 91.1502 31.9974 88.8536C32.0178 72.2511 31.9872 55.646 32.0127 39.046C31.9587 38.3089 32.6578 37.7 33.3744 37.7694C35.2706 37.7566 37.1693 37.7438 39.0655 37.7745C39.857 37.7566 40.4016 38.5502 40.3038 39.2928C40.2961 56.0004 40.3242 72.7085 40.291 89.4162C40.2961 93.8689 38.4667 98.714 34.348 100.893C29.274 103.521 23.0025 102.964 17.9897 100.443C13.6502 98.2774 9.50887 95.7213 5.24632 93.4009C2.28419 91.8677 0.236107 88.6638 0.256958 85.306V34.6809C0.225894 31.3872 2.17355 28.214 5.06121 26.6596C19.9012 18.2847 34.7387 9.90341 49.5761 1.52468Z" fill="white"/>
                    <path d="M62.5225 36.5947C68.9948 36.1781 75.9237 36.3479 81.748 39.5364C86.2574 41.9798 88.7574 47.1079 88.8369 52.1177C88.711 52.7934 88.0046 53.1662 87.3595 53.1198C85.4816 53.1173 83.6033 53.1453 81.7254 53.107C80.9289 53.1377 80.4659 52.4032 80.3659 51.699C79.8263 49.3019 78.5191 46.9279 76.2629 45.7717C72.7995 44.0377 68.7837 44.1249 65.0071 44.1611C62.2501 44.3075 59.2854 44.5462 56.9497 46.1675C55.1565 47.3956 54.6118 49.8747 55.2518 51.8713C55.8552 53.3049 57.5101 53.7675 58.8642 54.1939C66.6642 56.2339 74.9297 56.0309 82.5808 58.7156C85.7484 59.81 88.8472 61.9377 89.9314 65.2543C91.3497 69.6994 90.728 75.0126 87.5655 78.5811C85.0008 81.5177 81.2654 83.116 77.5399 83.9841C72.5837 85.0892 67.4403 85.1173 62.4071 84.6266C57.6744 84.087 52.7493 82.8436 49.0957 79.619C45.9714 76.9062 44.4454 72.6794 44.5969 68.5998C44.6331 67.9109 45.3191 67.4305 45.9791 67.487C47.8701 67.4717 49.7612 67.4666 51.6523 67.4896C52.4076 67.4356 52.9676 68.0883 53.0063 68.8002C53.3552 71.0841 54.2135 73.4811 56.205 74.8351C60.0484 77.3147 64.871 77.1449 69.2718 77.2143C72.9178 77.0526 77.0106 77.0036 79.9859 74.5939C81.5557 73.2194 82.0208 70.9198 81.5965 68.9415C81.1369 67.2713 79.3897 66.493 77.8893 65.9841C70.1893 63.5483 61.8314 64.4321 54.2059 61.6777C51.1101 60.5836 48.1165 58.5151 46.9271 55.3347C45.2676 50.8334 46.028 45.2658 49.522 41.8177C52.9289 38.3879 57.8467 37.067 62.5225 36.5943V36.5947Z" fill="white"/>
                  </svg>
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="group-hover:text-violet-400 font-medium">
                  <Link href={`/submissions/1`} className="font-medium">
                    <a className="font-medium">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Node.js
                    </a>
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  Teste seus conhecimentos na construção de APIs com Node.js
                </p>
              </div>
              <div className="flex-shrink-0 self-center">
                <CaretRight className="h-5 w-5 text-zinc-400" aria-hidden="true" />
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;