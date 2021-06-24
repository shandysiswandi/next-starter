import Link from 'next/link';
import {
  LightningBoltIcon,
  ChevronDownIcon,
  TranslateIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';

export const ChangeLanguage = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  return (
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
              <LinkChangeLanguage text='English' link='/' locale='en' />
              <LinkChangeLanguage text='Indonesian' link='/' locale='id' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const LinkChangeLanguage = ({
  text,
  link,
  locale,
}: {
  text: string;
  link: string;
  locale?: string;
}) => {
  return (
    <Link href={link} locale={locale}>
      <a className='block px-4 py-2 text-sm text-gray-700 capitalize dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-primary hover:rounded-md'>
        {text}
      </a>
    </Link>
  );
};
