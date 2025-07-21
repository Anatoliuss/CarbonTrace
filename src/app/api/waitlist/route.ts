import { NextRequest, NextResponse } from 'next/server'
import { miniWaitlistSchema, fullWaitlistSchema } from '@/lib/validators/waitlist'
import { addRecord, countRecords, inMemoryWaitlist } from '@/lib/waitlistStore'
import { promises as fs } from 'fs'
import { sendWaitlistAlert } from '@/lib/email/sendWaitlistAlert'

const WAITLIST_PATH = '/tmp/waitlist.json'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  let data
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Two-step validation: try full form, then mini form
  let parsed: any = fullWaitlistSchema.safeParse(data);
  if (!parsed.success) {
    parsed = miniWaitlistSchema.safeParse(data);
  }

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Validation failed' },
      { status: 400 }
    );
  }

  const record = {
    id: crypto.randomUUID(),
    ts: new Date().toISOString(),
    ...parsed.data,
  }

  // Write to file (append to array)
  let fileArr = []
  try {
    const file = await fs.readFile(WAITLIST_PATH, 'utf8')
    fileArr = JSON.parse(file)
    if (!Array.isArray(fileArr)) fileArr = []
  } catch {
    fileArr = []
  }
  fileArr.push(record)
  try {
    await fs.writeFile(WAITLIST_PATH, JSON.stringify(fileArr, null, 2), 'utf8')
  } catch (e) {
    // Ignore file write errors for demo
  }

  // Always add to in-memory
  addRecord(record)

  // Send alert email (do not block response)
  try {
    await sendWaitlistAlert(record)
  } catch (e) {
    console.error('alert-email-fail', e)
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}

export async function GET() {
  // Try file first
  let count = 0
  try {
    const file = await fs.readFile(WAITLIST_PATH, 'utf8')
    const arr = JSON.parse(file)
    if (Array.isArray(arr)) count = arr.length
  } catch {
    count = countRecords()
  }
  return NextResponse.json({ count })
}