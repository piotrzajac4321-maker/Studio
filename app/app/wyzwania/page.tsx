'use client'
import { useState } from 'react'
import { Clock, Users, ChevronRight, CheckCircle2, Medal } from 'lucide-react'

const myChallenges = [
  {
    id: 1, name: 'Szczupak Challenge', medal: '🥇', daysLeft: 19,
    progress: 72, myRank: 14, total: 284, myBest: '72 cm',
    nextGoal: 'Złów 80+ cm aby wejść do TOP 10',
  },
  {
    id: 2, name: 'Nocny Wędkarz', medal: '🌙', daysLeft: 3,
    progress: 100, myRank: 6, total: 156, myBest: '8 ryb',
    nextGoal: 'Wyzwanie ukończone! Medal w drodze 📦',
  },
]

const available = [
  { id: 3, name: 'Karpowy Maraton', medal: '🏅', fee: 49, participants: 412, daysLeft: 8, desc: 'Suma masy karpi w miesiącu' },
  { id: 4, name: 'Bałtyk Open', medal: '⚓', fee: 59, participants: 98, daysLeft: 25, desc: 'Dorsz, flądra i troć z morza' },
  { id: 5, name: 'Rodzina na Wodzie', medal: '❤️', fee: 39, participants: 67, daysLeft: 30, desc: 'Drużynowe wyzwanie rodzinne' },
  { id: 6, name: 'Grand Prix RyboLigi', medal: '🏆', fee: 99, participants: 203, daysLeft: 45, desc: 'Finał sezonu — punkty się sumują' },
]

export default function ChallengesPage() {
  const [tab, setTab] = useState<'moje' | 'dostepne'>('moje')

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-display font-bold text-slate-900 mb-1">Wyzwania</h1>
      <p className="text-slate-400 text-sm mb-6">Bierz udział, zdobywaj medale, odbieraj pocztą</p>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl mb-6 max-w-xs">
        {(['moje', 'dostepne'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            {t === 'moje' ? 'Moje (2)' : 'Dostępne'}
          </button>
        ))}
      </div>

      {tab === 'moje' && (
        <div className="space-y-4">
          {myChallenges.map((ch) => (
            <div key={ch.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-ocean-950 to-ocean-800 p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 ring-2 ring-gold-300 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                  {ch.medal}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold">{ch.name}</h3>
                  <div className="flex items-center gap-3 text-white/50 text-xs mt-0.5">
                    <span className="flex items-center gap-1"><Clock size={11} /> {ch.daysLeft} dni</span>
                    <span className="flex items-center gap-1"><Users size={11} /> {ch.total} uczestników</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-gold-400 font-display font-black text-2xl">#{ch.myRank}</div>
                  <div className="text-white/40 text-[10px]">Twoja pozycja</div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-500">Postęp wyzwania</span>
                  <span className={`font-bold ${ch.progress === 100 ? 'text-emerald-500' : 'text-ocean-600'}`}>
                    {ch.progress}%
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                  <div
                    className={`h-full rounded-full ${ch.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-ocean-500 to-ocean-400'}`}
                    style={{ width: `${ch.progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Twój najlepszy wynik</div>
                    <div className="font-bold text-slate-800">{ch.myBest}</div>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    ch.progress === 100
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                      : 'bg-ocean-50 text-ocean-600 border border-ocean-100'
                  }`}>
                    {ch.progress === 100 ? <CheckCircle2 size={13} /> : <Medal size={13} />}
                    {ch.nextGoal}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'dostepne' && (
        <div className="space-y-3">
          {available.map((ch) => (
            <div key={ch.id} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-2xl flex-shrink-0">
                {ch.medal}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 text-sm">{ch.name}</h3>
                <p className="text-slate-400 text-xs">{ch.desc}</p>
                <div className="flex items-center gap-3 text-slate-400 text-xs mt-1">
                  <span className="flex items-center gap-1"><Users size={10} /> {ch.participants}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {ch.daysLeft} dni</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-display font-black text-ocean-700">{ch.fee} zł</div>
                <button className="mt-1 flex items-center gap-0.5 px-3 py-1.5 rounded-full bg-gold-500 text-white text-xs font-bold hover:bg-gold-600 transition-colors">
                  Zapisz się <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
