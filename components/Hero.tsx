'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, Play, MapPin, Star } from 'lucide-react'

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
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-ocean-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/80 text-sm font-medium">
                🏅 Wędkarskie wyzwania z medalami — jak biegówki, tylko na wodzie
              </span>
            </div>

            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Złów rybę.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                Zdobądź medal.
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl">Odbierz pocztą.</span>
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-8 max-w-lg">
              Płacisz wpisowe od <strong className="text-white">39 zł</strong>, bierzesz udział w wyzwaniu wędkarskim,
              a medal + koszulkę dostajesz pod drzwi. Dokładnie jak bieg 5K — ale na łowisku.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-2 mb-10">
              {[
                '🏅 Medal fizyczny + koszulka dla każdego uczestnika',
                '📱 Weryfikacja połowu przez aplikację (AI)',
                '📦 Dostawa Inpost — bezpłatna, całá Polska',
                '🏆 Dodatkowe nagrody dla najlepszych',
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-white/75 text-sm">
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#wyzwania" className="btn-primary text-base">
                Zobacz wyzwania
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
                {['🎣', '🏆', '🥇', '🎣', '🏅'].map((emoji, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 border-2 border-ocean-950 flex items-center justify-center text-sm">
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
                <p className="text-white/50 text-xs">
                  <strong className="text-white/80">847</strong> medali wysłanych w tym sezonie
                </p>
              </div>
            </div>
          </div>

          {/* Right — live dashboard */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Medal preview card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Aktywne wyzwanie</div>
                  <div className="text-white font-bold text-lg">Szczupak Challenge — Lato 2025</div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-bold">19 dni</span>
                </div>
              </div>

              {/* Medal visual */}
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl mb-4">
                <div className="relative">
                  <div className="w-5 h-8 bg-blue-600 mx-auto rounded-b-sm mb-1 opacity-80" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 ring-4 ring-yellow-300 ring-offset-2 ring-offset-transparent flex items-center justify-center shadow-xl text-2xl">
                    🥇
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold">Co otrzymujesz:</div>
                  <div className="space-y-1 mt-1">
                    {['🏅 Medal Szczupaka (Ø 7 cm)', '👕 Koszulka techniczna', '📜 Certyfikat z wynikiem', '🎁 Niespodzianka'].map((r, i) => (
                      <div key={i} className="text-white/60 text-xs">{r}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <div className="text-white/40 text-xs">Wpisowe</div>
                  <div className="text-3xl font-display font-black text-white">49 <span className="text-xl text-white/60">zł</span></div>
                </div>
                <div className="text-right">
                  <div className="text-white/40 text-xs mb-1">Zapisanych</div>
                  <div className="text-2xl font-display font-bold text-gold-400">
                    <AnimatedCounter target={284} />
                  </div>
                  <div className="text-white/30 text-xs">z 1000 miejsc</div>
                </div>
              </div>
            </div>

            {/* Recent medals sent */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/50 text-xs font-medium uppercase tracking-wide">Ostatnio wysłane medale</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Marek K.', medal: '🥇 Szczupak Challenge', loc: 'Gdańsk', time: '2 godz. temu' },
                  { name: 'Anna W.', medal: '🏅 Karpowy Maraton', loc: 'Kraków', time: 'wczoraj' },
                  { name: 'Piotr Z.', medal: '🌙 Nocny Wędkarz', loc: 'Warszawa', time: '2 dni temu' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 flex items-center justify-center text-sm border border-white/10">
                      🎣
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.name} → {item.medal}</p>
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <MapPin size={10} />
                        <span>{item.loc} · {item.time}</span>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-xs font-semibold">📦</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats mini */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '847', label: 'medali wysłanych', emoji: '🏅' },
                { val: '47', label: 'aktywnych wyzwań', emoji: '🏆' },
                { val: '14 dni', label: 'do Twojej paczki', emoji: '📦' },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-lg mb-1">{s.emoji}</div>
                  <div className="text-white font-bold text-sm">{s.val}</div>
                  <div className="text-white/40 text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
