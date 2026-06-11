import { Package, Truck, Award, ShieldCheck } from 'lucide-react'

const medals = [
  {
    emoji: '🥇',
    name: 'Złoty Medal Szczupaka',
    challenge: 'Szczupak Challenge',
    gradient: 'from-yellow-300 via-amber-400 to-yellow-500',
    ring: 'ring-yellow-300',
    owner: 'Marek K. — 89 cm',
    edition: 'Lato 2025',
    ribbon: 'bg-blue-600',
    limited: false,
  },
  {
    emoji: '🌙',
    name: 'Medal Nocnego Wędkarza',
    challenge: 'Nocny Wędkarz',
    gradient: 'from-indigo-400 via-purple-500 to-indigo-600',
    ring: 'ring-purple-400',
    owner: 'Edycja limitowana',
    edition: 'Lipiec 2025',
    ribbon: 'bg-purple-900',
    limited: true,
  },
  {
    emoji: '⚓',
    name: 'Medal Bałtyk Open',
    challenge: 'Bałtyk Open',
    gradient: 'from-cyan-400 via-blue-500 to-cyan-600',
    ring: 'ring-cyan-400',
    owner: 'Wybrzeże Bałtyku',
    edition: 'Sezon 2025',
    ribbon: 'bg-cyan-900',
    limited: false,
  },
  {
    emoji: '🏆',
    name: 'Grand Prix RyboLigi',
    challenge: 'Grand Prix — Finał Sezonu',
    gradient: 'from-yellow-200 via-amber-400 to-orange-400',
    ring: 'ring-amber-400',
    owner: 'Najwyższe wyróżnienie',
    edition: 'Finał 2025',
    ribbon: 'bg-amber-700',
    limited: true,
  },
]

const perks = [
  {
    icon: Award,
    title: 'Medal fizyczny',
    desc: 'Odlany medal z logo wyzwania, wstążką w kolorach edycji i grawerem Twojego wyniku.',
  },
  {
    icon: Package,
    title: 'Koszulka uczestnika',
    desc: 'Koszulka techniczna z motywem wyzwania. Rozmiar do wyboru przy rejestracji (S–3XL).',
  },
  {
    icon: ShieldCheck,
    title: 'Certyfikat PDF',
    desc: 'Personalny certyfikat z datą, wynikiem i kodem QR do weryfikacji na tablicy liderów.',
  },
  {
    icon: Truck,
    title: 'Wysyłka do domu',
    desc: 'Paczka trafia do Ciebie w ciągu 14 dni od zakończenia wyzwania. Dostawa Inpost — bezpłatna.',
  },
]

export default function MedalShowcase() {
  return (
    <section id="medale" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm font-semibold mb-6">
            🏅 Kolekcja medali 2025
          </div>
          <h2 className="section-title mb-4">
            Każdy medal to<br />
            <span className="gradient-text">dowód Twojego połowu</span>
          </h2>
          <p className="section-subtitle">
            Fizyczne medale wysyłane pocztą. Zbieraj kolekcję, chwal się znajomym,
            noś koszulkę na łowisku.
          </p>
        </div>

        {/* Medal cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {medals.map((medal, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {medal.limited && (
                <div className="mb-3 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-500 text-[10px] font-bold uppercase tracking-wider">
                  Limitowany
                </div>
              )}

              {/* Medal visual */}
              <div className="relative mb-4">
                {/* Ribbon */}
                <div className={`w-5 h-10 ${medal.ribbon} mx-auto rounded-b-sm mb-1 opacity-80`} />
                {/* Medal disc */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${medal.gradient} ring-4 ${medal.ring} ring-offset-2 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                  <span className="text-4xl drop-shadow-sm">{medal.emoji}</span>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                {medal.edition}
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 leading-tight">{medal.name}</h3>
              <p className="text-xs text-slate-400">{medal.challenge}</p>
              <div className="mt-3 text-xs text-ocean-600 font-medium">{medal.owner}</div>
            </div>
          ))}
        </div>

        {/* What's in the box */}
        <div className="bg-ocean-950 rounded-3xl p-10 md:p-14 fish-pattern">
          <div className="text-center mb-12">
            <h3 className="font-display font-black text-3xl text-white mb-3">
              Co dostajesz za wpisowe?
            </h3>
            <p className="text-white/50 max-w-xl mx-auto">
              Każdy uczestnik który ukończy wyzwanie — niezależnie od miejsca w rankingu — otrzymuje paczkę.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {perks.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Package mockup */}
          <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl">
              <span className="text-2xl">🏅</span>
              <div>
                <div className="text-white font-semibold text-sm">Medal fizyczny</div>
                <div className="text-white/40 text-xs">Ø 7 cm, cynk + lak</div>
              </div>
            </div>
            <div className="text-white/20 text-2xl font-light">+</div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl">
              <span className="text-2xl">👕</span>
              <div>
                <div className="text-white font-semibold text-sm">Koszulka techniczna</div>
                <div className="text-white/40 text-xs">100% poliester, S–3XL</div>
              </div>
            </div>
            <div className="text-white/20 text-2xl font-light">+</div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl">
              <span className="text-2xl">📜</span>
              <div>
                <div className="text-white font-semibold text-sm">Certyfikat + ranking</div>
                <div className="text-white/40 text-xs">PDF do pobrania i druku</div>
              </div>
            </div>
            <div className="text-white/20 text-2xl font-light">+</div>
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl">
              <span className="text-2xl">🎁</span>
              <div>
                <div className="text-white font-semibold text-sm">Niespodzianka</div>
                <div className="text-white/40 text-xs">Patch, naklejka lub bon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
