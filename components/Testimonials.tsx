import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mariusz K.',
    role: 'Wędkarz spinningowy, Gdańsk',
    rating: 5,
    text: 'RyboLiga zmieniła moje podejście do wędkarstwa. Wyzwania motywują mnie do wychodzenia nawet w złą pogodę. W tym sezonie złowiłem więcej niż przez ostatnie 3 lata.',
    fish: '🎣',
    highlight: 'Więcej połowów niż przez 3 lata',
  },
  {
    name: 'Anna W.',
    role: 'Wędkarstwo karpiowe, Mazury',
    rating: 5,
    text: 'Jako jedna z niewielu kobiet w rankingu TOP 10, cieszę się że ta platforma jest otwarta dla wszystkich. Społeczność jest super — bez toksyczności, z prawdziwą pasją.',
    fish: '🏆',
    highlight: 'TOP 10 w Polsce',
  },
  {
    name: 'Klub Wędkarski "Leszcz"',
    role: 'Koło nr 47, Wrocław (32 członków)',
    rating: 5,
    text: 'Używamy RyboLigi do organizacji wewnętrznych zawodów klubowych. Oszczędza nam masę papierkowej roboty i zwiększyła zaangażowanie członków o 60% w pierwszym kwartale.',
    fish: '👥',
    highlight: '+60% zaangażowanie w 3 miesiące',
  },
  {
    name: 'Tomek B.',
    role: 'Wędkarstwo muchowe, Bieszczady',
    rating: 5,
    text: 'Mapa łowisk to game-changer. Odkryłem 3 nowe łowiska w okolicy których istnienia nie wiedziałem. Polecam każdemu kto chce wycisnąć maximum ze swojego regionu.',
    fish: '🗺️',
    highlight: '3 nowe łowiska odkryte',
  },
]

export default function Testimonials() {
  return (
    <section id="spolecznosc" className="py-24 bg-ocean-950 fish-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold mb-6">
            ✦ Co mówią wędkarze
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
            Dołącz do pasjonatów
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Ponad 2400 wędkarzy już buduje swoje legendy na RyboLidze.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ocean-600 to-ocean-800 flex items-center justify-center text-2xl border-2 border-white/10">
                    {t.fish}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
                <Quote size={20} className="text-gold-400/50 flex-shrink-0" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                ✓ {t.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          {[
            { val: '4.9/5', label: 'Ocena App Store', sub: 'Ponad 800 recenzji' },
            { val: '2,400+', label: 'Aktywnych użytkowników', sub: 'Czerwiec 2025' },
            { val: '94%', label: 'Poleca znajomym', sub: 'Ankieta wewnętrzna' },
            { val: '<30s', label: 'Weryfikacja połowu', sub: 'Przez AI' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-display font-black text-gold-400 mb-1">{s.val}</div>
              <div className="text-white/80 text-sm font-medium">{s.label}</div>
              <div className="text-white/30 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
