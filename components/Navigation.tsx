'use client'
import { useState, useEffect } from 'react'
import { Fish, Menu, X, Trophy, Target, Users, BarChart2 } from 'lucide-react'

const navLinks = [
  { href: '#wyzwania', label: 'Wyzwania', icon: Target },
  { href: '#ranking', label: 'Ranking', icon: Trophy },
  { href: '#jak-dziala', label: 'Jak działa', icon: BarChart2 },
  { href: '#spolecznosc', label: 'Społeczność', icon: Users },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ocean-950/95 backdrop-blur-xl shadow-lg shadow-ocean-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Fish className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Rybo<span className="text-gold-400">Liga</span>
              </span>
              <div className="text-[10px] text-white/50 font-medium tracking-widest uppercase -mt-0.5">
                Wędkarskie Wyzwania
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/app"
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Otwórz aplikację
            </a>
            <a
              href="/app/wyzwania"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-400 text-white hover:from-gold-600 hover:to-gold-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Dołącz do wyzwania
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <a href="#login" className="px-4 py-3 text-center font-medium text-white/70 hover:text-white transition-colors">
                  Zaloguj się
                </a>
                <a href="#register" className="px-4 py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-gold-500 to-gold-400 text-white">
                  Dołącz za darmo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
