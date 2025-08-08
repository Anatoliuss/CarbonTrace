'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type BackButtonProps = {
  className?: string
  label?: string
}

export default function BackButton({ className, label = 'Back' }: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back"
      className={clsx(
        'inline-flex items-center gap-2 text-sm rounded-md px-3 py-2',
        'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300',
        className
      )}
    >
      <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )}


