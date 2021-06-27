import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  LightningBoltIcon,
  ChevronDownIcon,
  TranslateIcon,
} from '@heroicons/react/solid';

import { Head } from '../src/Components/Head';
import { SwitchDarkMode } from 'src/Components/SwitchDarkMode';

export default function Home() {
  const { t } = useTranslation('common');
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <>
      <Head title='Home' />

      <div className='flex flex-col min-h-screen'>
        <header className='border-b dark:border-gray-700'>
          <div className='container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10'>
            <div className='flex items-center'>
              <LightningBoltIcon className='h-7 w-7 -mt-2 flex-shrink-0 transform rotate-12' />
              <p className='text-xl ml-2'>
                Next <strong>Starter</strong>
              </p>
            </div>

            <div className='hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2'>
              <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center'>
                <Link href='/'>
                  <a className='text-gray-500 dark:text-gray-200 hover:text-gray-800'>
                    Home
                  </a>
                </Link>

                <Link href='/'>
                  <a className='text-gray-500 dark:text-gray-200 hover:text-gray-800'>
                    Premium
                  </a>
                </Link>

                <Link href='/'>
                  <a className='text-gray-500 dark:text-gray-200 hover:text-gray-800'>
                    About
                  </a>
                </Link>
              </div>

              <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4'>
                <SwitchDarkMode />

                <div className='relative hidden lg:block'>
                  <div className='hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg'>
                    <button
                      className='text-primary font-semibold flex items-center space-x-1 focus:outline-none'
                      onClick={(e) => {
                        e.preventDefault();
                        setShowLanguage(!showLanguage);
                      }}
                    >
                      <TranslateIcon className='h-5 w-5' />
                      <ChevronDownIcon className='h-5 w-5' />
                    </button>
                  </div>

                  {!showLanguage ? null : (
                    <>
                      <div
                        className='fixed inset-0 z-10 w-full h-full'
                        onClick={(e) => {
                          e.preventDefault();
                          setShowLanguage(!showLanguage);
                        }}
                      ></div>

                      <div className='absolute left-0 z-20 p-1 mt-2 bg-white border dark:border-gray-700 rounded-md shadow-lg lg:left-auto lg:right-0 dark:bg-gray-800'>
                        <div className='w-36'>
                          <Link href='/' locale='en'>
                            <a className='block px-4 py-2 text-sm text-gray-700 capitalize dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-primary hover:rounded-md'>
                              English
                            </a>
                          </Link>
                          <Link href='/' locale='id'>
                            <a className='block px-4 py-2 text-sm text-gray-700 capitalize dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-primary hover:rounded-md'>
                              Indonesian
                            </a>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <form
                  onSubmit={(e: any) => e.preventDefault()}
                  className='flex flex-wrap justify-between md:flex-row'
                >
                  <input
                    type='search'
                    placeholder='Search'
                    required
                    className='w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40'
                  />
                </form>

                <Link href='/'>
                  <a className='flex items-center justify-center h-12 px-4 mt-2 text-sm text-center text-gray-600 transition-colors duration-200 transform border rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none'>
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className='flex flex-1'>
          <div className='m-auto text-center'>
            <div className='bg-white dark:bg-gray-700 p-4 h-64 rounded-xl shadow flex flex-row gap-5'>
              <div className='h-full w-72 rounded-xl bg-gray-200 dark:bg-gray-600 animate-pulse'></div>

              <div className='flex flex-col flex-1 gap-5 p-2'>
                <div className='flex flex-1 flex-col gap-3'>
                  <div className='bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-14 rounded-lg'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-lg'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-lg'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-lg'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-full animate-pulse h-3 rounded-lg'></div>
                </div>

                <div className='mt-auto flex gap-3'>
                  <div className='bg-gray-200 dark:bg-gray-600 w-20 h-8 animate-pulse rounded-full'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-20 h-8 animate-pulse rounded-full'></div>
                  <div className='bg-gray-200 dark:bg-gray-600 w-20 h-8 animate-pulse rounded-full ml-auto'></div>
                </div>
              </div>
            </div>

            <h1 className='dark:text-white text-9xl font-nunito'>
              {t('welcome', { name: 'PAPA' })}
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common'])),
    },
  };
};
