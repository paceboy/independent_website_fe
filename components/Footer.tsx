import Link from "next/link";

interface FooterProps {
  lang: string;
  t: any;
}

export default function Footer({ lang, t }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-6 sm:mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="text-center text-gray-600">
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">{t.copyright}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
            <Link
              href={`/${lang}/privacy`}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              href={`/${lang}/terms`}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {t.termsOfService}
            </Link>
            <Link
              href={`/${lang}/tools`}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {t.relatedToolsTitle}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
