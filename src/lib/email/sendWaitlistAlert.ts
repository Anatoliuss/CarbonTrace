import { Resend } from 'resend'

const ALERT_FROM = process.env.ALERT_FROM || 'waitlist@carbontracemena.com'
const ALERT_TO = process.env.ALERT_TO || ''

export type WaitlistRecord = { [key: string]: any }

export async function sendWaitlistAlert(record: WaitlistRecord) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[waitlist] RESEND_API_KEY not set – skipping alert')
    return
  }
  const resend = new Resend(process.env.RESEND_API_KEY)
  const html = `<h2>New Waitlist Signup</h2><ul>` +
    Object.entries(record)
      .map(([k, v]) => `<li><b>${k}:</b> ${String(v)}</li>`)
      .join('') +
    `</ul>`
  await resend.emails.send({
    from: ALERT_FROM,
    to: ALERT_TO,
    subject: `Wait-list • ${record.company || record.email}`,
    html,
  })
} 