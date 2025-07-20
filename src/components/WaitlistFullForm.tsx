'use client'

import { useState } from 'react'
import { fullWaitlistSchema } from '@/lib/validators/waitlist'

const INDUSTRY_OPTIONS = [
  "Energy",
  "Real Estate",
  "Heavy Industry",
  "Finance",
  "Other"
] as const

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
] as const

export default function WaitlistFullForm() {
  const [form, setForm] = useState({
    email: '',
    company: '',
    industry: INDUSTRY_OPTIONS[0],
    facilities: 1,
    startMonth: MONTHS[0],
    biggestPain: '',
    phone: '',
    consent: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : (name === 'facilities' ? Math.max(1, Number(value)) : value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(false)
    // Validate
    const parsed = fullWaitlistSchema.safeParse(form)
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
        setForm({
          email: '',
          company: '',
          industry: INDUSTRY_OPTIONS[0],
          facilities: 1,
          startMonth: MONTHS[0],
          biggestPain: '',
          phone: '',
          consent: false,
        })
        setError(null)
        console.log('event:waitlist_full_submit')
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
      className="bg-pearl/90 rounded-xl shadow-lg p-8 flex flex-col gap-4 max-w-2xl mx-auto"
      aria-labelledby="waitlist-full-title"
      noValidate
    >
      <h1 id="waitlist-full-title" className="text-2xl font-bold mb-2">Join the Early Access Waitlist</h1>
      <p className="mb-4 text-gray-700">
        We’re pre-seed and gathering design partners. Sign up for early access and help shape CarbonTrace MENA.
      </p>
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
      <div>
        <label htmlFor="industry" className="block font-medium mb-1">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.industry}
          onChange={handleChange}
        >
          {INDUSTRY_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="facilities" className="block font-medium mb-1">
          Number of facilities
        </label>
        <input
          id="facilities"
          name="facilities"
          type="number"
          min={1}
          required
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.facilities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="startMonth" className="block font-medium mb-1">
          When do you want to start?
        </label>
        <select
          id="startMonth"
          name="startMonth"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.startMonth}
          onChange={handleChange}
        >
          {MONTHS.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="biggestPain" className="block font-medium mb-1">
          What’s your biggest pain point?
        </label>
        <textarea
          id="biggestPain"
          name="biggestPain"
          className="w-full rounded border border-gray-300 px-3 py-2"
          rows={3}
          value={form.biggestPain}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded border border-gray-300 px-3 py-2"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          required
          aria-invalid={!!error && !form.consent}
        />
        <label htmlFor="consent" className="font-medium">
          I agree to be contacted about pilots <span className="text-red-500">*</span>
        </label>
      </div>
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
          Thanks! We’ll follow up. Meanwhile see the <a href="https://checklist.carbontracemena.com" className="underline" target="_blank" rel="noopener noreferrer">regulatory checklist</a>.
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