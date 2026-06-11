import { Clock, Users, MapPin, ArrowRight, Flame, ChevronRight } from 'lucide-react'

const challenges = [
  {
    id: 1,
    emoji: '🦷',
    name: 'Szczupak Challenge',
    edition: 'Edycja Letnia 2025',
    description: 'Złów i sfotografuj szczupaka min. 50 cm. Największy wynik w ciągu 30 dni wygrywa dodatkową nagrodę.',
    category: 'Gatunek',
    categoryColor: 'bg-blue-100 text-blue-700',
    entryFee: 49,
    participants: 284,
    daysLeft: 19,
    hot: true,
    spotsLeft: 716,
    maxSpots: 1000,
    difficulty: 'Średnie',
    difficultyColor: 'text-orange-500',
    location: 'Cała Polska',
    medal: '🥇',
    medalColor: 'from-yellow-400 to-amber-500',
    rewards: ['Medal okolicznościowy', 'Koszulka XL/XXL', 'Certyfikat PDF', 'Tablica wyników'],
    topPrize: 'Wędka Shimano 800 zł',
    leader: { name: 'Marek K.', record: '89 cm' },
  },
  {
    id: 2,
    emoji: '🐟',
    name: 'Karpowy Maraton',
    edition: 'Sezon 2025',
    description: 'Suma masy karpi złowionych i wypuszczonych w ciągu miesiąca. Zrób karpiowi zdjęcie na macie.',
    category: 'Waga',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    entryFee: 49,
    participants: 412,
    daysLeft: 8,
    hot: false,
    spotsLeft: 88,
    maxSpots: 500,
    difficulty: 'Trudne',
    difficultyColor: 'text-red-500',
    location: 'Mazury',
    medal: '🏅',
    medalColor: 'from-slate-300 to-slate-400',
    rewards: ['Medal okolicznościowy', 'Koszulka polo', 'Certyfikat PDF', 'Patch wędkarski'],
    topPrize: 'Śpiwór wędkarski 400 zł',
    leader: { name: 'Anna W.', record: '42.6 kg' },
  },
  {
    id: 3,
    emoji: '🌙',
    name: 'Nocny Wędkarz',
    edition: 'Lipiec 2025',
    description: 'Połów nocny — każdy połów między 22:00 a 6:00 liczy się podwójnie. GPS weryfikuje godzinę.',
    category: 'Nocne',
    categoryColor: 'bg-purple-100 text-purple-700',
    entryFee: 39,
    participants: 156,
    daysLeft: 3,
    hot: true,
    spotsLeft: 44,
    maxSpots: 200,
    difficulty: 'Łatwe',
    difficultyColor: 'text-emerald-500',
    location: 'Cała Polska',
    medal: '🌙',
    medalColor: 'from-indigo-400 to-purple-600',
    rewards: ['Medal nocny limitowany', 'Koszulka glow-in-dark', 'Certyfikat PDF'],
    topPrize: 'Latarnia czołowa Petzl',
    leader: { name: 'Tomek B.', record: '12 ryb' },
  },
  {
    id: 4,
    emoji: '🌊',
    name: 'Bałtyk Open',
    edition: 'Sezon Letni 2025',
    description: 'Dorsz, flądra, troć z Bałtyku. Wyzwanie dla morskich rybaków — osobny ranking dla amatorów i pro.',
    category: 'Morskie',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    entryFee: 59,
    participants: 98,
    daysLeft: 25,
    hot: false,
    spotsLeft: 402,
    maxSpots: 500,
    difficulty: 'Trudne',
    difficultyColor: 'text-red-500',
    location: 'Wybrzeże Bałtyku',
    medal: '⚓',
    medalColor: 'from-cyan-400 to-blue-600',
    rewards: ['Medal morski', 'Kurtka przeciwdeszczowa', 'Certyfikat PDF', 'Naszywka'],
    topPrize: 'Sprzęt morski 600 zł',
    leader: { name: 'Krzysztof L.', record: '4.2 kg dorsz' },
  },
  {
    id: 5,
    emoji: '👨‍👩‍👧',
    name: 'Rodzina na Wodzie',
    edition: 'Wakacje 2025',
    description: 'Zapisz się z rodziną (min. 2 osoby). Suma połowów całej rodziny. Każdy uczestnik dostaje medal!',
    category: 'Rodzinne',
    categoryColor: 'bg-rose-100 text-rose-700',
    entryFee: 39,
    participants: 67,
    daysLeft: 30,
    hot: false,
    spotsLeft: 183,
    maxSpots: 250,
    difficulty: 'Łatwe',
    difficultyColor: 'text-emerald-500',
    location: 'Cała Polska',
    medal: '❤️',
    medalColor: 'from-rose-400 to-pink-600',
    rewards: ['Medal dla każdego członka', 'Koszulki rodzinne', 'Zdjęcie grupowe na certyfikacie'],
    topPrize: 'Namiot kempingowy 4-os.',
    leader: { name: 'Rodzina Nowaków', record: '23 ryby' },
  },
  {
    id: 6,
    emoji: '🏆',
    name: 'Grand Prix RyboLigi',
    edition: 'Finał Sezonu 2025',
    description: 'Największy turniej roku. Punkty z wszystkich wyzwań sumują się. Najlepsi wędkarze sezonu.',
    category: 'Grand Prix',
    categoryColor: 'bg-gold-100 text-yellow-700',
    entryFee: 99,
    participants: 203,
    daysLeft: 45,
    hot: true,
    spotsLeft: 797,
    maxSpots: 1000,
    difficulty: 'Elita',
    difficultyColor: 'text-gold-600',
    location: 'Cała Polska',
    medal: '🏆',
    medalColor: 'from-yellow-300 to-amber-500',
    rewards: ['Medal Grand Prix XL', 'Bluza premium', 'Certyfikat grawerowany', 'Tablica Sław'],
    topPrize: '3 000 zł cash prize',
    leader: { name: 'Otwarte', record: '—' },
  },
]

export default function Challenges() {
  return (
    <section id="wyzwania" className="py-24 bg-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-yellow-200 text-yellow-700 text-sm font-semibold mb-4">
              🏅 Wyzwania z medalami
            </div>
            <h2 className="section-title">
              Zapisz się. Złów. Odbierz medal.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 bg-ocean-800 focus:outline-none focus:border-ocean-400">
              <option>Wszystkie kategorie</option>
              <option>Gatunek</option>
              <option>Waga</option>
              <option>Morskie</option>
              <option>Rodzinne</option>
              <option>Grand Prix</option>
            </select>
            <select className="px-4 py-2.5 rounded-xl border border-white/10 text-sm text-slate-300 bg-ocean-800 focus:outline-none focus:border-ocean-400">
              <option>Najtańsze</option>
              <option>Kończące się</option>
              <option>Najpopularniejsze</option>
            </select>
          </div>
        </div>

        {/* Info bar */}
        <div className="flex items-center gap-3 mb-10 p-4 bg-ocean-50 border border-ocean-100 rounded-2xl">
          <div className="w-8 h-8 rounded-lg bg-ocean-100 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">📦</span>
          </div>
          <p className="text-ocean-800 text-sm">
            <strong>Jak to działa?</strong> Płacisz wpisowe → bierzesz udział → dokончasz wyzwanie →
            otrzymujesz <strong>medal + koszulkę pocztą na podany adres</strong>. Bezwarunkowo — każdy uczestnik który ukończy wyzwanie.
          </p>
        </div>

        {/* Challenge grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c) => {
            const fillPercent = Math.round(((c.maxSpots - c.spotsLeft) / c.maxSpots) * 100)
            const almostFull = fillPercent > 85

            return (
              <div key={c.id} className="challenge-card group flex flex-col">
                {/* Card header */}
                <div className={`relative bg-gradient-to-br from-ocean-900 to-ocean-950 p-6`}>
                  {c.hot && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                      <Flame size={12} className="text-orange-400" />
                      <span className="text-orange-400 text-xs font-bold">Gorące</span>
                    </div>
                  )}
                  {almostFull && !c.hot && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                      <span className="text-red-400 text-xs font-bold">Ostatnie miejsca!</span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{c.emoji}</div>
                    <div>
                      <span className={`badge text-xs ${c.categoryColor} mb-2`}>{c.category}</span>
                      <h3 className="text-white font-bold text-lg leading-tight">{c.name}</h3>
                      <p className="text-white/40 text-xs mt-0.5">{c.edition}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mt-3 leading-relaxed">{c.description}</p>

                  {/* Medal preview */}
                  <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${c.medalColor} flex items-center justify-center text-2xl shadow-lg`}>
                      {c.medal}
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1">Każdy uczestnik otrzymuje:</div>
                      <div className="flex flex-wrap gap-1">
                        {c.rewards.slice(0, 2).map((r, i) => (
                          <span key={i} className="text-xs text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                            {r}
                          </span>
                        ))}
                        {c.rewards.length > 2 && (
                          <span className="text-xs text-white/50 px-2 py-0.5">+{c.rewards.length - 2} więcej</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Users size={14} />
                      <span className="font-medium text-slate-300">{c.participants}</span>
                      <span>zapisanych</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock size={14} />
                      <span className={`font-semibold ${c.daysLeft <= 5 ? 'text-red-400' : 'text-slate-300'}`}>
                        {c.daysLeft} dni
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin size={12} />
                      <span className="text-xs">{c.location}</span>
                    </div>
                  </div>

                  {/* Spots progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span>Miejsca: {c.maxSpots - c.spotsLeft} / {c.maxSpots}</span>
                      <span className={almostFull ? 'text-red-500 font-semibold' : ''}>
                        {almostFull ? `⚠️ Tylko ${c.spotsLeft} wolnych!` : `${c.spotsLeft} dostępnych`}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          almostFull ? 'bg-red-400' : 'bg-ocean-500'
                        }`}
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Top prize */}
                  <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-100 rounded-xl mb-4">
                    <span className="text-lg">🎁</span>
                    <div>
                      <div className="text-[10px] text-yellow-600 font-semibold uppercase tracking-wide">Nagroda główna</div>
                      <div className="text-sm font-bold text-white">{c.topPrize}</div>
                    </div>
                  </div>

                  {/* Entry fee + CTA */}
                  <div className="mt-auto flex items-center gap-3">
                    <div className="flex-1">
                      <div className="text-2xl font-display font-black text-ocean-700">
                        {c.entryFee} zł
                      </div>
                      <div className="text-xs text-slate-400">wpisowe / osoba</div>
                    </div>
                    <button className="flex-1 py-3 rounded-xl bg-ocean-600 text-white font-semibold text-sm hover:bg-ocean-700 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                      Zapisz się
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            🎁 Każdy ukończony uczestnik otrzymuje medal + koszulkę wysyłane pocztą na terenie Polski
          </p>
          <a href="#all-challenges" className="btn-outline">
            Zobacz kalendarz wyzwań 2025
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
