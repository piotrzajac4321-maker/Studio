'use client'
import { useState } from 'react'
import { MapPin, Star, Fish, Navigation, Search, SlidersHorizontal } from 'lucide-react'

const spots = [
  {
    id: 1, name: 'Jezioro Śniardwy', region: 'Mazury', x: 68, y: 22,
    rating: 4.8, reviews: 234, species: ['Szczupak', 'Okoń', 'Sandacz'],
    catches: 1240, hot: true, type: 'Jezioro',
  },
  {
    id: 2, name: 'Zalew Zegrzyński', region: 'Mazowsze', x: 58, y: 42,
    rating: 4.5, reviews: 189, species: ['Karp', 'Leszcz', 'Sum'],
    catches: 890, hot: true, type: 'Zalew',
  },
  {
    id: 3, name: 'San — Bieszczady', region: 'Podkarpacie', x: 72, y: 86,
    rating: 4.9, reviews: 156, species: ['Lipień', 'Pstrąg', 'Głowacica'],
    catches: 445, hot: false, type: 'Rzeka',
  },
  {
    id: 4, name: 'Bałtyk — Władysławowo', region: 'Pomorze', x: 42, y: 6,
    rating: 4.6, reviews: 98, species: ['Dorsz', 'Flądra', 'Troć'],
    catches: 380, hot: false, type: 'Morze',
  },
  {
    id: 5, name: 'Odra — Wrocław', region: 'Dolny Śląsk', x: 24, y: 62,
    rating: 4.3, reviews: 145, species: ['Boleń', 'Jaź', 'Sum'],
    catches: 520, hot: false, type: 'Rzeka',
  },
  {
    id: 6, name: 'Jezioro Solińskie', region: 'Podkarpacie', x: 70, y: 92,
    rating: 4.7, reviews: 201, species: ['Sandacz', 'Okoń', 'Węgorz'],
    catches: 610, hot: true, type: 'Zalew',
  },
]

const filters = ['Wszystkie', 'Jezioro', 'Rzeka', 'Zalew', 'Morze']

export default function MapPage() {
  const [selected, setSelected] = useState<number | null>(1)
  const [filter, setFilter] = useState('Wszystkie')

  const visible = filter === 'Wszystkie' ? spots : spots.filter((s) => s.type === filter)
  const sel = spots.find((s) => s.id === selected)

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Mapa łowisk</h1>
          <p className="text-slate-400 text-sm">2 847 łowisk · 18 600 połowów w Polsce</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 flex-1 sm:w-56">
            <Search size={15} className="text-slate-400" />
            <input className="text-sm outline-none flex-1 min-w-0" placeholder="Szukaj łowiska..." />
          </div>
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === f
                ? 'bg-ocean-600 text-white'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-ocean-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-5">
        {/* Stylized map of Poland */}
        <div className="relative bg-gradient-to-br from-ocean-100 via-emerald-50 to-ocean-50 rounded-2xl border border-slate-200 aspect-[4/3] overflow-hidden">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(#0e6fa022 1px, transparent 1px), linear-gradient(90deg, #0e6fa022 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Poland outline hint */}
          <div className="absolute inset-8 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-white/40 border-2 border-ocean-200/50" />

          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur text-xs font-semibold text-slate-600 shadow-sm">
            🇵🇱 Polska — widok poglądowy
          </div>
          <button className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-ocean-600 text-white text-xs font-bold shadow-lg">
            <Navigation size={13} />
            Moja lokalizacja
          </button>

          {/* Pins */}
          {visible.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelected(spot.id)}
              className="absolute -translate-x-1/2 -translate-y-full group"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            >
              <div
                className={`relative flex items-center justify-center w-9 h-9 rounded-full shadow-lg transition-transform group-hover:scale-110 ${
                  selected === spot.id
                    ? 'bg-gold-500 ring-4 ring-gold-300/50 scale-110'
                    : spot.hot
                    ? 'bg-rose-500'
                    : 'bg-ocean-600'
                }`}
              >
                <Fish size={16} className="text-white" />
                {spot.hot && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-white text-[7px] flex items-center justify-center">
                    🔥
                  </span>
                )}
              </div>
              <div
                className={`w-2 h-2 mx-auto -mt-0.5 rotate-45 ${
                  selected === spot.id ? 'bg-gold-500' : spot.hot ? 'bg-rose-500' : 'bg-ocean-600'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Spot list / detail */}
        <div className="space-y-3">
          {sel && (
            <div className="bg-ocean-950 rounded-2xl p-5 text-white">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">{sel.name}</h3>
                  <div className="flex items-center gap-1 text-white/50 text-xs">
                    <MapPin size={11} /> {sel.region} · {sel.type}
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500/20">
                  <Star size={12} className="text-gold-400 fill-gold-400" />
                  <span className="text-gold-400 text-sm font-bold">{sel.rating}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {sel.species.map((sp) => (
                  <span key={sp} className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                    🐟 {sp}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">{sel.catches} połowów · {sel.reviews} opinii</span>
                <button className="px-4 py-2 rounded-lg bg-gold-500 text-white text-xs font-bold hover:bg-gold-600 transition-colors">
                  Nawiguj →
                </button>
              </div>
            </div>
          )}

          {visible.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setSelected(spot.id)}
              className={`w-full text-left bg-white rounded-xl border p-4 transition-all hover:shadow-md ${
                selected === spot.id ? 'border-gold-400 ring-1 ring-gold-300' : 'border-slate-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 text-sm">{spot.name}</span>
                    {spot.hot && <span className="text-xs">🔥</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{spot.region} · {spot.species.join(', ')}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star size={12} className="text-gold-500 fill-gold-400" />
                  <span className="font-bold text-slate-700">{spot.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
