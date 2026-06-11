import { Clock, Users, Trophy, MapPin, ArrowRight, Flame } from 'lucide-react'

const challenges = [
  {
    id: 1,
    emoji: '🎣',
    name: 'Czerwcowy Szczupak',
    description: 'Złów największego szczupaka w czerwcu. Minimum 50 cm do zarejestrowania.',
    category: 'Gatunek',
    categoryColor: 'bg-blue-100 text-blue-700',
    prize: '500 zł',
    prizeType: 'Voucher Decathlon',
    participants: 284,
    daysLeft: 19,
    hot: true,
    difficulty: 'Średnie',
    difficultyColor: 'text-orange-500',
    location: 'Cała Polska',
    leader: { name: 'Marek K.', record: '89 cm', points: 1240 },
  },
  {
    id: 2,
    emoji: '🐟',
    name: 'Karpowy Maraton',
    description: 'Skumulowana waga karpi w ciągu miesiąca. Każdy połów z powrotem do wody.',
    category: 'Waga',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    prize: 'Zestaw Matrix',
    prizeType: 'Sprzęt wędkarski',
    participants: 412,
    daysLeft: 8,
    hot: false,
    difficulty: 'Trudne',
    difficultyColor: 'text-red-500',
    location: 'Mazury',
    leader: { name: 'Anna W.', record: '42.6 kg', points: 2100 },
  },
  {
    id: 3,
    emoji: '🏆',
    name: 'Liga Weekendowa',
    description: 'Cotygodniowe wyzwanie — najlepszy wynik z sobotnio-niedzielnej sesji.',
    category: 'Seria',
    categoryColor: 'bg-purple-100 text-purple-700',
    prize: '200 zł',
    prizeType: 'Przelew na konto',
    participants: 156,
    daysLeft: 3,
    hot: true,
    difficulty: 'Łatwe',
    difficultyColor: 'text-emerald-500',
    location: 'Dowolne',
    leader: { name: 'Tomek B.', record: '12 ryb', points: 890 },
  },
  {
    id: 4,
    emoji: '🌊',
    name: 'Morze Bałtyk Challenge',
    description: 'Dorsz, flądra i troć — wyzwanie dla morskich rybaków z wybrzeża.',
    category: 'Morskie',
    categoryColor: 'bg-cyan-100 text-cyan-700',
    prize: 'Wędka Shimano',
    prizeType: 'Sprzęt premium',
    participants: 98,
    daysLeft: 25,
    hot: false,
    difficulty: 'Trudne',
    difficultyColor: 'text-red-500',
    location: 'Wybrzeże',
    leader: { name: 'Krzysztof L.', record: '4.2 kg', points: 540 },
  },
  {
    id: 5,
    emoji: '👨‍👩‍👧‍👦',
    name: 'Wyzwanie Rodzinne',
    description: 'Zapisz się z rodziną — suma połowów całej drużyny decyduje o zwycięstwie.',
    category: 'Drużynowe',
    categoryColor: 'bg-rose-100 text-rose-700',
    prize: 'Wycieczka',
    prizeType: 'Weekend na Mazurach',
    participants: 67,
    daysLeft: 30,
    hot: false,
    difficulty: 'Łatwe',
    difficultyColor: 'text-emerald-500',
    location: 'Cała Polska',
    leader: { name: 'Nowak Family', record: '23 ryby', points: 380 },
  },
  {
    id: 6,
    emoji: '🦈',
    name: 'Rekordowe Łowisko',
    description: 'Pierwsze złowienie w nowym łowisku + zdjęcie GPS. Eksploruj i zdobywaj!',
    category: 'Odkrywanie',
    categoryColor: 'bg-yellow-100 text-yellow-700',
    prize: 'Pro Premium',
    prizeType: '12 miesięcy gratis',
    participants: 203,
    daysLeft: 45,
    hot: false,
    difficulty: 'Łatwe',
    difficultyColor: 'text-emerald-500',
    location: 'Cała Polska',
    leader: { name: 'Piotr J.', record: '14 łowisk', points: 700 },
  },
]

export default function Challenges() {
  return (
    <section id="wyzwania" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200 text-gold-600 text-sm font-semibold mb-4">
              🏆 Aktywne wyzwania
            </div>
            <h2 className="section-title">
              Dołącz do wyzwania
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 bg-white focus:outline-none focus:border-ocean-400">
              <option>Wszystkie kategorie</option>
              <option>Gatunek</option>
              <option>Waga</option>
              <option>Drużynowe</option>
              <option>Morskie</option>
            </select>
            <button className="px-4 py-2.5 rounded-xl bg-ocean-600 text-white text-sm font-medium hover:bg-ocean-700 transition-colors">
              Filtruj
            </button>
          </div>
        </div>

        {/* Challenge grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c) => (
            <div key={c.id} className="challenge-card group">
              {/* Card header */}
              <div className="relative bg-gradient-to-br from-ocean-900 to-ocean-950 p-6">
                {c.hot && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                    <Flame size={12} className="text-orange-400" />
                    <span className="text-orange-400 text-xs font-bold">Gorące</span>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="text-4xl">{c.emoji}</div>
                  <div>
                    <span className={`badge text-xs ${c.categoryColor} mb-2`}>{c.category}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{c.name}</h3>
                  </div>
                </div>
                <p className="text-white/50 text-sm mt-3 leading-relaxed">{c.description}</p>

                {/* Prize */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center">
                      <Trophy size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="text-gold-400 font-bold text-sm">{c.prize}</div>
                      <div className="text-white/40 text-xs">{c.prizeType}</div>
                    </div>
                  </div>
                  <div className={`text-xs font-semibold ${c.difficultyColor}`}>
                    ● {c.difficulty}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Stats row */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users size={14} />
                    <span className="font-medium text-slate-700">{c.participants}</span>
                    <span>uczestników</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock size={14} />
                    <span className={`font-semibold ${c.daysLeft <= 5 ? 'text-red-500' : 'text-slate-700'}`}>
                      {c.daysLeft} dni
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin size={12} />
                    <span className="text-xs">{c.location}</span>
                  </div>
                </div>

                {/* Leader mini */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-xs">👑</div>
                    <div>
                      <div className="text-xs text-slate-500">Lider</div>
                      <div className="text-sm font-semibold text-slate-800">{c.leader.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-ocean-700">{c.leader.record}</div>
                    <div className="text-xs text-slate-400">{c.leader.points} pkt</div>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-ocean-600 text-white font-semibold text-sm hover:bg-ocean-700 transition-colors flex items-center justify-center gap-2 group-hover:shadow-md">
                  Dołącz do wyzwania
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <a href="#all-challenges" className="btn-outline text-base">
            Zobacz wszystkie 47 wyzwań
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
