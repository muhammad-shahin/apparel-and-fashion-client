import { useEffect, useState } from 'react';
import { LuSunMedium } from 'react-icons/lu';

const DarkTheme = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      title={`${
        theme === 'light' ? 'Switch To Dark Mode' : 'Switch To Light Mode'
      }`}
      className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] duration-500 dark:text-blue-500 dark:bg-white dark:opacity-[1]'
    >
      <LuSunMedium
        className={`text-[22px] ${theme === 'dark' && 'text-blue-400'}`}
        onClick={handleThemeToggle}
      />
    </div>
  );
};

export default DarkTheme;
