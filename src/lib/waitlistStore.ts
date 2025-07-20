type WaitlistRecord = {
    id: string
    ts: string
    [key: string]: any
  }
  
  export const inMemoryWaitlist: WaitlistRecord[] = []
  
  export function addRecord(record: WaitlistRecord) {
    inMemoryWaitlist.push(record)
  }
  
  export function countRecords() {
    return inMemoryWaitlist.length
  }