import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from 'i18next.config';
import { Head } from '../components/Head';
import { HeaderWelcome } from 'components/headers/HeaderWelcome';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head title='Home' />

      <div className='flex flex-col min-h-screen'>
        <HeaderWelcome />

        <main className='flex flex-1'>
          <div className='m-auto text-center'>
            <h1 className='dark:text-white mb-20 text-9xl'>
              {t('welcome', { name: 'PAPA' })}
            </h1>
          </div>
        </main>
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
