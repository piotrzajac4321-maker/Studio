import { Trophy, TrendingUp, TrendingDown, Minus, MapPin } from 'lucide-react'

const topAnglers = [
  { rank: 1, name: 'Mariusz Kowalski', city: 'Gdańsk', points: 4820, catches: 47, badge: '🥇', trend: 'up', change: '+2', fish: '🐟', specialty: 'Szczupak' },
  { rank: 2, name: 'Anna Wiśniewska', city: 'Kraków', points: 4650, catches: 41, badge: '🥈', trend: 'up', change: '+5', fish: '🎣', specialty: 'Karp' },
  { rank: 3, name: 'Piotr Zając', city: 'Warszawa', points: 4390, catches: 38, badge: '🥉', trend: 'down', change: '-1', fish: '🐠', specialty: 'Okoń' },
  { rank: 4, name: 'Tomasz Bąk', city: 'Wrocław', points: 3970, catches: 35, badge: '4', trend: 'up', change: '+3', fish: '🦈', specialty: 'Sum' },
  { rank: 5, name: 'Krzysztof Lewandowski', city: 'Poznań', points: 3820, catches: 33, badge: '5', trend: 'same', change: '0', fish: '🐡', specialty: 'Płoć' },
  { rank: 6, name: 'Monika Dąbrowska', city: 'Łódź', points: 3640, catches: 29, badge: '6', trend: 'up', change: '+8', fish: '🎣', specialty: 'Leszcz' },
  { rank: 7, name: 'Rafał Nowak', city: 'Szczecin', points: 3510, catches: 28, badge: '7', trend: 'down', change: '-2', fish: '🐟', specialty: 'Sandacz' },
  { rank: 8, name: 'Katarzyna Malinowska', city: 'Bydgoszcz', points: 3280, catches: 26, badge: '8', trend: 'up', change: '+1', fish: '🎣', specialty: 'Okoń' },
  { rank: 9, name: 'Damian Wojciechowski', city: 'Lublin', points: 3150, catches: 24, badge: '9', trend: 'same', change: '0', fish: '🐠', specialty: 'Karp' },
  { rank: 10, name: 'Ewelina Kamińska', city: 'Białystok', points: 2940, catches: 22, badge: '10', trend: 'up', change: '+4', fish: '🐡', specialty: 'Szczupak' },
]

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'up') return <TrendingUp size={14} className="text-emerald-500" />
  if (trend === 'down') return <TrendingDown size={14} className="text-red-400" />
  return <Minus size={14} className="text-slate-400" />
}

export default function Leaderboard() {
  return (
    <section id="ranking" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-200 text-gold-600 text-sm font-semibold mb-6">
            🏆 Ranking Globalny — Czerwiec 2025
          </div>
          <h2 className="section-title mb-4">Najlepsi Wędkarze</h2>
          <p className="section-subtitle">Ranking aktualizowany w czasie rzeczywistym po każdym zatwierdzonym połowie.</p>
        </div>

        {/* Podium top 3 */}
        <div className="flex items-end justify-center gap-4 mb-10 px-4">
          {[topAnglers[1], topAnglers[0], topAnglers[2]].map((angler, idx) => {
            const heights = ['h-24', 'h-32', 'h-20']
            const podiumColors = ['bg-slate-200', 'bg-gold-400', 'bg-amber-700/30']
            const labelColors = ['text-slate-600', 'text-gold-600', 'text-amber-700']
            return (
              <div key={angler.rank} className="flex flex-col items-center gap-2 flex-1 max-w-[180px]">
                <div className="text-3xl">{angler.badge}</div>
                <div className="text-center">
                  <div className="font-bold text-slate-900 text-sm">{angler.name.split(' ')[0]}</div>
                  <div className={`font-black text-lg ${labelColors[idx]}`}>{angler.points.toLocaleString('pl-PL')}</div>
                  <div className="text-slate-400 text-xs">pkt</div>
                </div>
                <div className={`w-full ${heights[idx]} ${podiumColors[idx]} rounded-t-xl flex items-center justify-center`}>
                  <span className={`font-black text-2xl ${labelColors[idx]}`}>{idx === 1 ? '1' : idx === 0 ? '2' : '3'}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <div>#</div>
            <div>Wędkarz</div>
            <div className="text-center">Specjalność</div>
            <div className="text-right">Połowy</div>
            <div className="text-right">Punkty</div>
            <div className="text-center">Trend</div>
          </div>

          {topAnglers.map((angler, i) => (
            <div
              key={angler.rank}
              className={`grid md:grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center px-6 py-4 border-b border-slate-50 hover:bg-slate-50/70 transition-colors cursor-pointer
                ${i === 0 ? 'bg-gold-50/40' : ''}`}
            >
              {/* Rank */}
              <div className="w-8 h-8 flex items-center justify-center">
                {i < 3 ? (
                  <span className="text-xl">{angler.badge}</span>
                ) : (
                  <span className="text-slate-400 font-bold text-sm">{angler.rank}</span>
                )}
              </div>

              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 flex items-center justify-center text-lg border-2 border-white shadow-sm">
                  {angler.fish}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{angler.name}</div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin size={10} />
                    {angler.city}
                  </div>
                </div>
              </div>

              {/* Specialty */}
              <div className="hidden md:block text-center">
                <span className="text-xs font-medium text-ocean-600 bg-ocean-50 px-2 py-1 rounded-full">
                  {angler.specialty}
                </span>
              </div>

              {/* Catches */}
              <div className="hidden md:block text-right text-slate-600 font-medium">
                {angler.catches} 🎣
              </div>

              {/* Points */}
              <div className="text-right">
                <div className={`font-bold ${i === 0 ? 'text-gold-600 text-lg' : 'text-slate-900'}`}>
                  {angler.points.toLocaleString('pl-PL')}
                </div>
                <div className="text-xs text-slate-400">pkt</div>
              </div>

              {/* Trend */}
              <div className="hidden md:flex items-center justify-center gap-1">
                <TrendIcon trend={angler.trend} />
                <span className={`text-xs font-semibold ${
                  angler.trend === 'up' ? 'text-emerald-500' :
                  angler.trend === 'down' ? 'text-red-400' : 'text-slate-400'
                }`}>
                  {angler.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Your position teaser */}
        <div className="mt-6 p-4 bg-ocean-950 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Trophy size={20} className="text-gold-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Twoja pozycja</div>
              <div className="text-white/50 text-xs">Zaloguj się aby zobaczyć swoje miejsce w rankingu</div>
            </div>
          </div>
          <a href="#register" className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-gold-500 to-gold-400 text-white hover:from-gold-600 hover:to-gold-500 transition-all">
            Dołącz teraz
          </a>
        </div>
      </div>
    </section>
  )
}
