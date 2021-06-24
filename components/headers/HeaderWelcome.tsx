import Link from 'next/link';
import {
  LightningBoltIcon,
  ChevronDownIcon,
  TranslateIcon,
} from '@heroicons/react/solid';

import { SwitchDarkMode } from 'components/switchs/SwitchDarkMode';
import { ChangeLanguage } from 'components/dropdowns/ChangeLanguage';

export const HeaderWelcome = () => {
  return (
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

            <ChangeLanguage />

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
  );
};
