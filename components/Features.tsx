import { Camera, Trophy, MapPin, BarChart3, Users, Gift } from 'lucide-react'

const features = [
  {
    icon: Camera,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    title: 'Dokumentuj Połowy',
    description: 'Zrób zdjęcie połowu, dodaj wagę i długość. AI automatycznie rozpoznaje gatunek ryby i zatwierdza wynik.',
  },
  {
    icon: Trophy,
    color: 'from-gold-500 to-gold-400',
    bg: 'bg-amber-50',
    title: 'Rywalizuj Online',
    description: 'Miesięczne wyzwania tematyczne — największa ryba, najdłuższa seria, wyzwania gatunkowe. Bez wychodzenia z domu.',
  },
  {
    icon: MapPin,
    color: 'from-emerald-600 to-emerald-500',
    bg: 'bg-emerald-50',
    title: 'Mapa Łowisk',
    description: 'Odkryj najlepsze łowiska w Polsce. Przeglądaj wpisy, warunki i komentarze innych wędkarzy w czasie rzeczywistym.',
  },
  {
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    title: 'Twoje Statystyki',
    description: 'Szczegółowe analizy Twoich połowów — postęp, rekordy, ulubione gatunki, historia sezonu i wiele więcej.',
  },
  {
    icon: Users,
    color: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
    title: 'Społeczność',
    description: 'Połącz się z 2000+ wędkarzami. Twórz drużyny, dziel się wiedzą i rywalizuj w ligach regionalnych.',
  },
  {
    icon: Gift,
    color: 'from-orange-500 to-orange-400',
    bg: 'bg-orange-50',
    title: 'Nagrody Rzeczowe',
    description: 'Zdobywaj punkty i wymieniaj je na sprzęt wędkarski. Partnerzy zapewniają comiesięczne nagrody o wartości 5000+ zł.',
  },
]

export default function Features() {
  return (
    <section id="funkcje" className="py-24 bg-ocean-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 border border-ocean-100 text-ocean-600 text-sm font-semibold mb-6">
            ✦ Wszystko czego potrzebujesz
          </div>
          <h2 className="section-title mb-4">
            Platforma zaprojektowana<br />
            <span className="gradient-text">przez wędkarzy, dla wędkarzy</span>
          </h2>
          <p className="section-subtitle">
            Łączymy pasję do wędkarstwa z gamifikacją, technologią i prawdziwą rywalizacją.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, bg, title, description }, i) => (
            <div
              key={i}
              className="card group hover:border-ocean-100"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
