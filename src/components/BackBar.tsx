'use client'

import { usePathname } from 'next/navigation'
import BackButton from './BackButton'

export default function BackBar() {
  const pathname = usePathname()
  if (pathname === '/') return null
  return (
    <div id="global-back" className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <BackButton />
      </div>
    </div>
  )
}


