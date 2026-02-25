// middleware.js - Noctarion Edge Protection
import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  const allowedKeywords = [
    'roblox', 'synapse', 'fluxus', 'krnl', 'script-ware', 'delta', 'wave',
    'solara', 'executor', 'hydrogen', 'arceus', 'bloxstrap', 'oxygen-u'
  ];

  const isExecutor = allowedKeywords.some(kw => ua.toLowerCase().includes(kw));

  if (request.nextUrl.pathname === '/premium.lua') {
    if (!isExecutor) {
      return new NextResponse('Access Denied from the void', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/premium.lua'
};
