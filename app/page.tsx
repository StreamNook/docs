'use client'

import { useEffect } from 'react'

// The site root sends visitors to the docs. A static export cannot use a
// server redirect, so this runs in the browser; Cloudflare also redirects at
// the edge via public/_redirects.
export default function Home() {
  useEffect(() => {
    window.location.replace('/docs')
  }, [])

  return null
}
