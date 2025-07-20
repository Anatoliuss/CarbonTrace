import { z } from 'zod'

export const miniWaitlistSchema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
  company: z.string().min(1, { message: 'Company required' }),
  pain: z.enum([
    "Collecting data",
    "Emission factors",
    "Arabic / English formatting",
    "Verifier coordination"
  ]),
})

export const fullWaitlistSchema = miniWaitlistSchema.extend({
  industry: z.enum([
    "Energy",
    "Real Estate",
    "Heavy Industry",
    "Finance",
    "Other"
  ]),
  facilities: z.number().int().min(1, { message: 'At least 1 facility' }),
  startMonth: z.enum([
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]),
  biggestPain: z.string().optional(),
  phone: z.string().optional(),
  consent: z.boolean().refine(val => val === true, { message: 'Consent required' }),
})