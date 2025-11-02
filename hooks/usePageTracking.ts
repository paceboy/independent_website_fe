'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '../lib/gtag'

export function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      pageview(pathname)
    }
  }, [pathname])
}
