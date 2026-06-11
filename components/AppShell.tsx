'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fish, Home, Map, PlusCircle, Trophy, User, Bell, Search } from 'lucide-react'

const tabs = [
  { href: '/app', label: 'Feed', icon: Home },
  { href: '/app/mapa', label: 'Mapa', icon: Map },
  { href: '/app/dodaj', label: 'Dodaj', icon: PlusCircle, primary: true },
  { href: '/app/wyzwania', label: 'Wyzwania', icon: Trophy },
  { href: '/app/profil', label: 'Profil', icon: User },
]

const sideLinks = [
  { href: '/app', label: 'Feed połowów', icon: Home },
  { href: '/app/mapa', label: 'Mapa łowisk', icon: Map },
  { href: '/app/dodaj', label: 'Dodaj połów', icon: PlusCircle },
  { href: '/app/wyzwania', label: 'Wyzwania', icon: Trophy },
  { href: '/app/ranking', label: 'Ranking', icon: Trophy },
  { href: '/app/profil', label: 'Mój profil', icon: User },
]

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = (href: string) => (href === '/app' ? pathname === '/app' : pathname.startsWith(href))

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-ocean-950/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Fish className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg text-white">
              Rybo<span className="text-gold-400">Liga</span>
            </span>
          </Link>

          {/* Search (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8 px-4 py-2 rounded-full bg-white/10 border border-white/10">
            <Search size={16} className="text-white/40" />
            <input
              type="text"
              placeholder="Szukaj wędkarzy, łowisk, gatunków..."
              className="bg-transparent text-sm text-white placeholder-white/40 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-gold-400" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-700 border-2 border-white/20 flex items-center justify-center text-sm">
              🎣
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] py-6 pr-4">
          <nav className="space-y-1">
            {sideLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive(href)
                    ? 'bg-ocean-600 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-white hover:text-slate-800'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </nav>

          {/* Mini challenge promo */}
          <div className="mt-6 p-4 rounded-2xl bg-ocean-950 text-center">
            <div className="text-3xl mb-2">🏅</div>
            <p className="text-white text-sm font-semibold mb-1">Szczupak Challenge</p>
            <p className="text-white/40 text-xs mb-3">Zostało 19 dni — medal czeka!</p>
            <Link
              href="/app/wyzwania"
              className="block w-full py-2 rounded-lg bg-gold-500 text-white text-xs font-bold hover:bg-gold-600 transition-colors"
            >
              Zapisz się — 49 zł
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 py-6 pb-24 lg:pb-6">{children}</main>
      </div>

      {/* Bottom nav (mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5 h-16">
          {tabs.map(({ href, label, icon: Icon, primary }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-0.5 ${
                primary
                  ? ''
                  : isActive(href)
                  ? 'text-ocean-600'
                  : 'text-slate-400'
              }`}
            >
              {primary ? (
                <div className="w-12 h-12 -mt-5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
                  <Icon size={24} className="text-white" />
                </div>
              ) : (
                <>
                  <Icon size={20} />
                  <span className="text-[10px] font-medium">{label}</span>
                </>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
