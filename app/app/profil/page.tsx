import { MapPin, Settings, Share2, Fish, Ruler, Trophy, Package } from 'lucide-react'

const medals = [
  { emoji: '🥇', name: 'Szczupak 2024', status: 'delivered' },
  { emoji: '🌙', name: 'Nocny Wędkarz', status: 'shipping' },
  { emoji: '⚓', name: 'Bałtyk 2024', status: 'delivered' },
  { emoji: '🏅', name: 'Karp Wiosna', status: 'delivered' },
  { emoji: '❤️', name: 'Rodzinne', status: 'delivered' },
  { emoji: '🏆', name: 'Grand Prix', status: 'locked' },
]

const stats = [
  { icon: Fish, value: '127', label: 'Połowów' },
  { icon: Ruler, value: '89 cm', label: 'Rekord' },
  { icon: Trophy, value: '5', label: 'Medali' },
  { icon: Package, value: '12', label: 'Wyzwań' },
]

const recentCatches = [
  { species: 'Szczupak', size: '72 cm', spot: 'Śniardwy', date: '11 cze', emoji: '🦷', points: 120 },
  { species: 'Okoń', size: '38 cm', spot: 'Śniardwy', date: '8 cze', emoji: '🐟', points: 65 },
  { species: 'Sandacz', size: '61 cm', spot: 'Zegrze', date: '2 cze', emoji: '🎣', points: 95 },
]

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Profile header */}
      <div className="bg-gradient-to-br from-ocean-950 to-ocean-800 rounded-3xl p-6 mb-6 fish-pattern relative overflow-hidden">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 border-4 border-gold-400 flex items-center justify-center text-4xl shadow-xl">
              🎣
            </div>
            <div>
              <h1 className="text-white font-display font-bold text-xl">Piotr Zając</h1>
              <div className="flex items-center gap-1 text-white/50 text-xs mb-2">
                <MapPin size={11} /> Warszawa · w RyboLidze od 2024
              </div>
              <div className="flex gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-[10px] font-bold">
                  🥉 #3 w Polsce
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 text-[10px] font-bold">
                  Specjalista: Okoń
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <Share2 size={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/10">
              <Icon size={15} className="text-gold-400 mx-auto mb-1" />
              <div className="text-white font-display font-bold">{value}</div>
              <div className="text-white/40 text-[10px]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Medal collection */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-900">Moja kolekcja medali</h2>
          <span className="text-xs text-slate-400">5 z 6 zdobytych</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {medals.map((m, i) => (
            <div key={i} className="text-center">
              <div
                className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-2xl mb-1.5 ${
                  m.status === 'locked'
                    ? 'bg-slate-100 grayscale opacity-40'
                    : 'bg-gradient-to-br from-yellow-200 to-amber-400 ring-2 ring-gold-300 shadow-md'
                }`}
              >
                {m.status === 'locked' ? '🔒' : m.emoji}
              </div>
              <div className="text-[10px] font-medium text-slate-600 leading-tight">{m.name}</div>
              {m.status === 'shipping' && (
                <div className="text-[9px] text-amber-500 font-bold mt-0.5">📦 W drodze</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Shipment tracker */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">📦</div>
        <div className="flex-1">
          <div className="text-sm font-bold text-amber-800">Medal &bdquo;Nocny Wędkarz&rdquo; w drodze!</div>
          <div className="text-xs text-amber-600">InPost · paczka nadana 9 cze · dostawa do 13 cze</div>
        </div>
        <button className="text-xs font-bold text-amber-700 whitespace-nowrap">Śledź →</button>
      </div>

      {/* Recent catches */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-900">Ostatnie połowy</h2>
          <button className="text-xs font-semibold text-ocean-600">Wszystkie (127) →</button>
        </div>
        <div className="space-y-3">
          {recentCatches.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-700 to-ocean-900 flex items-center justify-center text-xl">
                {c.emoji}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800 text-sm">{c.species} · {c.size}</div>
                <div className="text-xs text-slate-400">{c.spot} · {c.date}</div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                +{c.points} pkt
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
