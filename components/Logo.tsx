import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  lang?: string;
}

export default function Logo({ className = "w-8 h-8", lang = "en" }: LogoProps) {
  return (
    <Link href={`/${lang}`} className={`flex items-center justify-center ${className} hover:opacity-80 transition-opacity duration-200`}>
      <img
        src="/favicon.ico"
        alt="Logo"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    </Link>
  );
}
