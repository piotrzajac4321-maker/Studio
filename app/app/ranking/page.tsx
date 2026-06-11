'use client'
import { useState } from 'react'
import { TrendingUp, TrendingDown, Minus, MapPin } from 'lucide-react'

const anglers = [
  { rank: 1, name: 'Mariusz Kowalski', city: 'Gdańsk', points: 4820, badge: '🥇', trend: 'up', avatar: '🧔' },
  { rank: 2, name: 'Anna Wiśniewska', city: 'Kraków', points: 4650, badge: '🥈', trend: 'up', avatar: '👩‍🦰' },
  { rank: 3, name: 'Piotr Zając', city: 'Warszawa', points: 4390, badge: '🥉', trend: 'down', avatar: '🧑' },
  { rank: 4, name: 'Tomasz Bąk', city: 'Wrocław', points: 3970, badge: '4', trend: 'up', avatar: '👨‍🦱' },
  { rank: 5, name: 'Krzysztof Lewandowski', city: 'Poznań', points: 3820, badge: '5', trend: 'same', avatar: '👨‍🦳' },
  { rank: 6, name: 'Monika Dąbrowska', city: 'Łódź', points: 3640, badge: '6', trend: 'up', avatar: '👱‍♀️' },
  { rank: 7, name: 'Rafał Nowak', city: 'Szczecin', points: 3510, badge: '7', trend: 'down', avatar: '🧑‍🦲' },
  { rank: 8, name: 'Katarzyna Malinowska', city: 'Bydgoszcz', points: 3280, badge: '8', trend: 'up', avatar: '👩' },
]

const scopes = ['Polska', 'Województwo', 'Moje miasto', 'Znajomi']

export default function RankingPage() {
  const [scope, setScope] = useState('Polska')

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-display font-bold text-slate-900 mb-1">Ranking</h1>
      <p className="text-slate-400 text-sm mb-6">Sezon 2025 · aktualizacja na żywo</p>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {scopes.map((s) => (
          <button
            key={s}
            onClick={() => setScope(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              scope === s ? 'bg-ocean-600 text-white' : 'bg-white border border-slate-200 text-slate-500'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Your rank sticky card */}
      <div className="bg-ocean-950 rounded-2xl p-4 mb-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-700 border-2 border-gold-400 flex items-center justify-center text-xl">
          🎣
        </div>
        <div className="flex-1">
          <div className="text-white font-bold text-sm">Ty — Piotr Z.</div>
          <div className="text-white/40 text-xs">3 połowy do awansu o pozycję</div>
        </div>
        <div className="text-right">
          <div className="text-gold-400 font-display font-black text-2xl">#3</div>
          <div className="text-white/40 text-xs">4 390 pkt</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50">
        {anglers.map((a, i) => (
          <div
            key={a.rank}
            className={`flex items-center gap-3 px-4 py-3.5 ${a.name === 'Piotr Zając' ? 'bg-gold-50/50' : ''}`}
          >
            <div className="w-8 text-center">
              {i < 3 ? <span className="text-xl">{a.badge}</span> : <span className="text-slate-400 font-bold text-sm">{a.rank}</span>}
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-800 flex items-center justify-center text-lg">
              {a.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-900 text-sm truncate">{a.name}</div>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <MapPin size={9} /> {a.city}
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-800 text-sm">{a.points.toLocaleString('pl-PL')}</div>
              <div className="text-[10px] text-slate-400">pkt</div>
            </div>
            <div className="w-5 flex justify-center">
              {a.trend === 'up' && <TrendingUp size={14} className="text-emerald-500" />}
              {a.trend === 'down' && <TrendingDown size={14} className="text-red-400" />}
              {a.trend === 'same' && <Minus size={14} className="text-slate-300" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
