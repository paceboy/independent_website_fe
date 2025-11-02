'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { trackLanguageSwitch } from '../lib/gtag';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState('English');

  // 根据当前路径获取当前语言
  useEffect(() => {
    const currentLocale = pathname.split('/')[1]; // 获取路径的第一部分，如 'en' 或 'zh'
    const lang = languages.find(l => l.code === currentLocale);
    if (lang) {
      setCurrentLanguage(lang.name);
    }
  }, [pathname]);

  const changeLanguage = (locale: string) => {
    const currentLocale = pathname.split('/')[1];
    const newPath = '/' + locale + pathname.slice(3); // 假设路径前两位是 /en
    
    // 追踪语言切换
    if (process.env.NODE_ENV === 'production') {
      trackLanguageSwitch(currentLocale, locale);
    }
    
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-200"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">{currentLanguage}</span>
        <span className="sm:hidden">{currentLanguage === 'English' ? 'EN' : '中文'}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-200"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
