import { useTheme } from 'next-themes';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from 'i18next.config';
import { Head } from '../components/Head';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <>
      <Head title='Home' />

      <div className='flex h-screen'>
        <div className='m-auto text-center'>
          <h1 className='dark:text-white mb-20 text-9xl'>{t('welcome')}</h1>
          <button
            className='py-2 px-10 bg-blue-500 rounded-md focus:outline-none text-white'
            onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
          >
            {theme == 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
}
