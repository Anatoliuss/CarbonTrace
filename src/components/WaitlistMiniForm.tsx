'use client'

import { useState } from 'react'
import { z } from 'zod'
import { miniWaitlistSchema } from '@/lib/validators/waitlist'

const PAIN_OPTIONS = [
  "Collecting data",
  "Emission factors",
  "Arabic / English formatting",
  "Verifier coordination"
] as const

type MiniForm = {
  email: string;
  company: string;
  pain: typeof PAIN_OPTIONS[number];
};

export default function WaitlistMiniForm() {
  const [form, setForm] = useState<MiniForm>({
    email: '',
    company: '',
    pain: PAIN_OPTIONS[0],
  });
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, pain: e.target.value as typeof PAIN_OPTIONS[number] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(false)
    // Validate
    const parsed = miniWaitlistSchema.safeParse(form)
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || 'Invalid input')
      setSubmitting(false)
      return
    }
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ email: '', company: '', pain: PAIN_OPTIONS[0] })
        setError(null)
        console.log('event:waitlist_inline_submit')
      } else {
        const data = await res.json()
        setError(data?.error || 'Submission failed')
      }
    } catch (err) {
      setError('Network error')
    }
    setSubmitting(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-pearl/90 rounded-xl shadow-lg p-6 flex flex-col gap-4"
      aria-labelledby="waitlist-mini-title"
      noValidate
    >
      <h3 id="waitlist-mini-title" className="text-lg font-bold mb-2">Join the Waitlist</h3>
      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!error && !form.email}
        />
      </div>
      <div>
        <label htmlFor="company" className="block font-medium mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.company}
          onChange={handleChange}
          aria-invalid={!!error && !form.company}
        />
      </div>
      <fieldset>
        <legend className="block font-medium mb-1">Biggest pain point</legend>
        <div className="flex flex-col gap-1">
          {PAIN_OPTIONS.map(opt => (
            <label key={opt} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="pain"
                value={opt}
                checked={form.pain === opt}
                onChange={handleRadio}
                required
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn-cta w-full mt-2"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? 'Submitting...' : 'Join Waitlist'}
      </button>
      {success && (
        <div className="text-green-700 mt-2" role="status" aria-live="polite">
          Added to waitlist – we’ll reach out soon.
        </div>
      )}
      {error && (
        <div className="text-red-600 mt-2" role="status" aria-live="polite">
          {error}
        </div>
      )}
    </form>
  )
}