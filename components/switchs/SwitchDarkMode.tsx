import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export const SwitchDarkMode = ({ isDark }: { isDark: boolean }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      className='w-10 h-10 p-2 cursor-pointer transition duration-150 ease-in-out rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
    >
      {isDark ? (
        <SunIcon className='w-5 h-5' />
      ) : (
        <MoonIcon className='w-5 h-5 transform -rotate-90' />
      )}
    </div>
  );
};
