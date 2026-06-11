import { NextRequest, NextResponse } from 'next/server'

const PREVIEW_USER = process.env.PREVIEW_USER ?? 'ryboliga'
const PREVIEW_PASS = process.env.PREVIEW_PASS ?? 'changeme'

export function middleware(req: NextRequest) {
  // Skip auth in production when explicitly disabled
  if (process.env.PREVIEW_AUTH === 'off') return NextResponse.next()

  const auth = req.headers.get('authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
      const [user, pass] = decoded.split(':')
      if (user === PREVIEW_USER && pass === PREVIEW_PASS) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Brak dostępu — strona w trybie prywatnym.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="RyboLiga Preview", charset="UTF-8"',
    },
  })
}

export const config = {
  // Chroń wszystkie ścieżki poza plikami statycznymi
  matcher: ['/((?!_next/static|_next/image|favicon.svg|icons|manifest.json).*)'],
}
