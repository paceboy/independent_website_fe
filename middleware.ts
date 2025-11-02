// import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "zh"];
const defaultLocale = "en";
const cookieName = "i18nlang";

// Get the preferred locale, similar to the above or using a library
// function getLocale(request: NextRequest): string {
//   console.log('---getLocale---');
//   // Get locale from cookie
//   if (request.cookies.has(cookieName))
//     return request.cookies.get(cookieName)!.value;
//   // Get accept language from HTTP headers
//   const acceptLang = request.headers.get("Accept-Language");
//   if (!acceptLang) return defaultLocale;
//   // Get match locale
//   const headers = { "accept-language": acceptLang };
//   const languages = new Negotiator({ headers }).languages();
//   return match(languages, locales, defaultLocale);
// }

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Skip Next.js internals and static assets (any path containing a file extension)
  if (pathname.startsWith("/_next")) return NextResponse.next();
  if (pathname.includes('.')) return NextResponse.next();

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  // const locale = getLocale(request);
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  const response = NextResponse.redirect(request.nextUrl);
  // Set locale to cookie
  response.cookies.set(cookieName, locale);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
