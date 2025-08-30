import { NextResponse } from 'next/server'

export async function GET() {
  const invoices = [
    { id: 'INV-1001', amount: 3200, status: 'done',    date: '2025-08-10' },
    { id: 'INV-1002', amount: 1450, status: 'pending', date: '2025-08-14' },
    { id: 'INV-1003', amount: 5200, status: 'later', date: '2025-08-05' },
    { id: 'INV-1004', amount: 780,  status: 'done',    date: '2025-08-18' },
    { id: 'INV-1005', amount: 2100, status: 'pending', date: '2025-08-22' },
  ]

  return NextResponse.json(invoices)
}
    