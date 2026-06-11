'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, MapPin, Trophy, Star } from 'lucide-react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return <span>{count.toLocaleString('pl-PL')}{suffix}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen wave-bg fish-pattern flex flex-col justify-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-ocean-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 right-[8%] animate-float opacity-30 hidden lg:block">
        <div className="w-3 h-3 rounded-full bg-gold-400" />
      </div>
      <div className="absolute top-64 right-[20%] animate-float opacity-20 hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <div className="absolute bottom-48 left-[12%] animate-float opacity-25 hidden lg:block" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 rounded-full bg-ocean-300" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                🇵🇱 #1 platforma wyzwań wędkarskich w Polsce
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Twoje
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Wędkarskie
              </span>
              Wyzwanie
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-10 max-w-lg">
              Rywalizuj z wędkarzami z całej Polski. Dokumentuj połowy,
              zbieraj punkty i zdobywaj nagrody w miesięcznych
              turniejach online.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#register" className="btn-primary text-base">
                Zacznij za darmo
                <ArrowRight size={20} />
              </a>
              <a href="#jak-dziala" className="btn-secondary text-base">
                <Play size={18} fill="white" />
                Jak to działa?
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex -space-x-2">
                {['👨‍🦱', '👩‍🦰', '👨‍🦳', '👨', '👩'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 border-2 border-ocean-950 flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                  <span className="text-white font-semibold text-sm ml-1">4.9</span>
                </div>
                <p className="text-white/50 text-xs">Dołączyło już <strong className="text-white/80">2,400+</strong> wędkarzy</p>
              </div>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Main stat */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-3 py-1 rounded-full">
                  ↑ +34% w tym miesiącu
                </span>
              </div>
              <div className="text-5xl font-display font-black text-white mb-1">
                <AnimatedCounter target={2400} suffix="+" />
              </div>
              <p className="text-white/50 font-medium">Aktywnych wędkarzy</p>

              {/* Mini chart bars */}
              <div className="flex items-end gap-1.5 mt-6 h-12">
                {[30, 45, 38, 52, 48, 65, 72, 68, 80, 88, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-gold-500/50 to-gold-400/20"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-white/30 mt-1">
                <span>Sty</span><span>Cze</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-display font-black text-white mb-1">
                  <AnimatedCounter target={18600} suffix="+" />
                </div>
                <p className="text-white/50 text-sm font-medium">Połowów udokumentowanych</p>
                <div className="mt-3 text-2xl">🎣</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="text-3xl font-display font-black text-white mb-1">
                  <AnimatedCounter target={47} />
                </div>
                <p className="text-white/50 text-sm font-medium">Aktywnych wyzwań</p>
                <div className="mt-3 text-2xl">🏆</div>
              </div>
            </div>

            {/* Live activity */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/50 text-xs font-medium uppercase tracking-wide">Na żywo teraz</span>
              </div>
              <div className="space-y-2">
                {[
                  { user: 'Marek K.', catch: 'Szczupak 68 cm', loc: 'Mazury', time: '2 min temu' },
                  { user: 'Anna W.', catch: 'Leszcz 1.2 kg', loc: 'Wisła', time: '5 min temu' },
                  { user: 'Piotr Z.', catch: 'Karp 4.8 kg', loc: 'Warmia', time: '8 min temu' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 flex items-center justify-center text-sm border border-white/10">
                      🎣
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.user} – {item.catch}</p>
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <MapPin size={10} />
                        <span>{item.loc} · {item.time}</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-xs font-semibold">+pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
