import Link from 'next/link';
import { Globe } from 'lucide-react';

interface LanguageSwitcherSSRProps {
  currentLang: string;
  currentPath: string;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export default function LanguageSwitcherSSR({ currentLang, currentPath }: LanguageSwitcherSSRProps) {
  const currentLanguage = languages.find(l => l.code === currentLang)?.name || 'English';
  
  // 生成其他语言的链接
  const otherLanguages = languages.filter(lang => lang.code !== currentLang);
  
  return (
    <div className="relative inline-block text-left group">
      <button
        className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-200"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
        <span className="hidden sm:inline">{currentLanguage}</span>
        <span className="sm:hidden">{currentLanguage === 'English' ? 'EN' : '中文'}</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {otherLanguages.map((lang) => {
          // 构建目标路径
          const targetPath = currentPath.replace(`/${currentLang}`, `/${lang.code}`);
          return (
            <Link
              key={lang.code}
              href={targetPath}
              className="block w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-200"
            >
              {lang.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
