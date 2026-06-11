import { Heart, MessageCircle, Share2, MapPin, Ruler, Weight, Verified, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const catches = [
  {
    id: 1,
    user: 'Marek Kowalski',
    avatar: '🧔',
    location: 'Jezioro Śniardwy, Mazury',
    time: '2 godz. temu',
    species: 'Szczupak',
    length: '89 cm',
    weight: '6.2 kg',
    bait: 'Wobler Rapala 11 cm',
    photo: '🦷',
    photoBg: 'from-cyan-700 to-ocean-900',
    likes: 142,
    comments: 23,
    verified: true,
    challenge: 'Szczupak Challenge',
    record: true,
  },
  {
    id: 2,
    user: 'Anna Wiśniewska',
    avatar: '👩‍🦰',
    location: 'Zalew Zegrzyński',
    time: '4 godz. temu',
    species: 'Karp',
    length: '74 cm',
    weight: '8.4 kg',
    bait: 'Kulka proteinowa truskawka',
    photo: '🐟',
    photoBg: 'from-emerald-700 to-ocean-900',
    likes: 98,
    comments: 15,
    verified: true,
    challenge: 'Karpowy Maraton',
    record: false,
  },
  {
    id: 3,
    user: 'Tomek Bąk',
    avatar: '👨‍🦱',
    location: 'San, Bieszczady',
    time: '6 godz. temu',
    species: 'Lipień',
    length: '42 cm',
    weight: '0.9 kg',
    bait: 'Sucha mucha CDC',
    photo: '🎣',
    photoBg: 'from-purple-700 to-ocean-900',
    likes: 67,
    comments: 8,
    verified: true,
    challenge: null,
    record: false,
  },
  {
    id: 4,
    user: 'Krzysztof Lewandowski',
    avatar: '🧑',
    location: 'Bałtyk, Władysławowo',
    time: 'wczoraj',
    species: 'Dorsz',
    length: '67 cm',
    weight: '3.1 kg',
    bait: 'Pilker 80 g',
    photo: '🌊',
    photoBg: 'from-blue-700 to-ocean-900',
    likes: 54,
    comments: 12,
    verified: false,
    challenge: 'Bałtyk Open',
    record: false,
  },
]

const stories = [
  { name: 'Twój połów', emoji: '➕', add: true },
  { name: 'Marek', emoji: '🧔', active: true },
  { name: 'Anna', emoji: '👩‍🦰', active: true },
  { name: 'Tomek', emoji: '👨‍🦱', active: false },
  { name: 'Kasia', emoji: '👱‍♀️', active: true },
  { name: 'Piotr', emoji: '🧑‍🦲', active: false },
]

export default function FeedPage() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Stories row */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-2 -mx-1 px-1">
        {stories.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                s.add
                  ? 'bg-slate-100 border-2 border-dashed border-slate-300'
                  : s.active
                  ? 'bg-gradient-to-br from-ocean-500 to-ocean-800 ring-2 ring-gold-400 ring-offset-2'
                  : 'bg-gradient-to-br from-ocean-500 to-ocean-800 opacity-70'
              }`}
            >
              {s.emoji}
            </div>
            <span className="text-xs text-slate-500 font-medium">{s.name}</span>
          </div>
        ))}
      </div>

      {/* Trending banner */}
      <div className="flex items-center gap-3 p-3 mb-5 rounded-xl bg-gradient-to-r from-ocean-950 to-ocean-800 text-white">
        <TrendingUp size={18} className="text-gold-400 flex-shrink-0" />
        <p className="text-sm flex-1">
          <strong>Szczupaki biorą!</strong> 34 połowy zgłoszone dziś na Mazurach
        </p>
        <Link href="/app/mapa" className="text-gold-400 text-xs font-bold whitespace-nowrap">
          Zobacz →
        </Link>
      </div>

      {/* Feed */}
      <div className="space-y-5">
        {catches.map((c) => (
          <article key={c.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-800 flex items-center justify-center text-lg">
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 text-sm">{c.user}</span>
                  {c.verified && <Verified size={14} className="text-ocean-500 fill-ocean-100" />}
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <MapPin size={10} />
                  <span className="truncate">{c.location}</span>
                  <span>· {c.time}</span>
                </div>
              </div>
              {c.challenge && (
                <span className="px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-yellow-700 text-[10px] font-bold whitespace-nowrap">
                  🏅 {c.challenge}
                </span>
              )}
            </div>

            {/* Photo area */}
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${c.photoBg} flex items-center justify-center`}>
              <span className="text-8xl drop-shadow-2xl">{c.photo}</span>
              {c.record && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-gold-500 text-white text-xs font-black shadow-lg">
                  🏆 REKORD WYZWANIA
                </div>
              )}
              {c.verified && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold backdrop-blur-sm">
                  ✓ Zweryfikowano AI
                </div>
              )}
            </div>

            {/* Catch details */}
            <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
              <div className="p-3 text-center">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">Gatunek</div>
                <div className="font-bold text-slate-800 text-sm">{c.species}</div>
              </div>
              <div className="p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">
                  <Ruler size={10} /> Długość
                </div>
                <div className="font-bold text-slate-800 text-sm">{c.length}</div>
              </div>
              <div className="p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">
                  <Weight size={10} /> Waga
                </div>
                <div className="font-bold text-slate-800 text-sm">{c.weight}</div>
              </div>
            </div>

            {/* Bait info */}
            <div className="px-4 py-2.5 text-xs text-slate-500 border-b border-slate-50">
              🪱 Przynęta: <span className="font-medium text-slate-700">{c.bait}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-5 px-4 py-3">
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                <Heart size={18} />
                <span className="text-sm font-medium">{c.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-ocean-600 transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm font-medium">{c.comments}</span>
              </button>
              <button className="flex items-center gap-1.5 text-slate-500 hover:text-ocean-600 transition-colors ml-auto">
                <Share2 size={18} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center py-8 text-slate-400 text-sm">
        Ładowanie kolejnych połowów... 🎣
      </div>
    </div>
  )
}
