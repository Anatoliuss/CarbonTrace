// FILE: src/lib/validators/waitlist.ts
import { z } from 'zod';

export const miniWaitlistSchema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
  company: z.string().min(1, { message: 'Company required' }),
  pain: z.enum([
    'Collecting data',
    'Emission factors',
    'Arabic / English formatting',
    'Verifier coordination',
  ]).optional(),
}).passthrough();

export const fullWaitlistSchema = miniWaitlistSchema.extend({
  industry: z.enum([
    'Energy',
    'Heavy Industry',
    'Transportation',
    'Other',
  ]).optional(),
  facilities: z.preprocess(
    v => (typeof v === 'string' ? parseInt(v, 10) : v),
    z.number().int().min(1, 'At least 1 facility').optional()
  ),
  startMonth: z.enum([
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  ]).optional(),
  biggestPain: z.string().optional(),
  phone: z.string().optional(),
  consent: z.literal(true).optional(),
}).passthrough();
