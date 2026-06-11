import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RyboLiga — Wędkarskie Wyzwania',
  description: 'Dołącz do największej platformy wyzwań wędkarskich w Polsce. Rywalizuj, łap rekordy i wygraj nagrody.',
  keywords: 'wędkarstwo, wyzwania wędkarskie, turniej rybacki, połów, ranking wędkarzy, fishing challenge Poland',
  openGraph: {
    title: 'RyboLiga — Wędkarskie Wyzwania',
    description: 'Platforma wyzwań wędkarskich dla amatorów i profesjonalistów',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.svg" />
        <meta name="theme-color" content="#011530" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
