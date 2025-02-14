import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  res.cookies.set('current_path', req.nextUrl.pathname)
  return res
}
