import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Custom404() {
  const [dark, setDark] = useState(false);
  const { theme, setTheme } = useTheme();

  const onToogleDark = () => {
    if (dark) {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    setDark(!dark);
  };

  return (
    <div className='bg-white dark:bg-gray-800 h-screen w-screen'>
      <button onClick={onToogleDark} className='text-black dark:text-white'>
        {dark ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
