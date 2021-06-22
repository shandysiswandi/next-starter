import { useTheme } from 'next-themes';

import { Head } from '../components/Head';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head title='Home' />

      <div className='flex h-screen'>
        <div className='m-auto text-center'>
          <h1 className='dark:text-white mb-20 text-9xl'>Welcome to PAPA</h1>
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
