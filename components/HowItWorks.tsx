import { CreditCard, Camera, Package, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: CreditCard,
    title: 'Wybierz i opłać wyzwanie',
    description: 'Przeglądaj aktywne wyzwania. Wybierz interesujące Cię — sezonowe, gatunkowe, rodzinne. Opłać wpisowe online (karta, BLIK, przelew).',
    color: 'bg-ocean-600',
    detail: 'Od 39 zł wpisowego — bez subskrypcji',
    emoji: '💳',
    bg: 'bg-ocean-50',
    border: 'border-ocean-100',
  },
  {
    step: '02',
    icon: Camera,
    title: 'Złów i udokumentuj',
    description: 'W czasie trwania wyzwania łów ryby i przesyłaj wyniki przez aplikację. Zdjęcie + wymiary + GPS. AI weryfikuje wynik w ciągu 30 sekund.',
    color: 'bg-emerald-600',
    detail: 'Weryfikacja AI + moderacja społeczności',
    emoji: '📸',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    step: '03',
    icon: Package,
    title: 'Odbierz medal pocztą',
    description: 'Ukończyłeś wyzwanie? Brawo! Twój medal, koszulka i certyfikat jadą do Ciebie Inpostem. Dostajesz paczkę w ciągu 14 dni od zakończenia.',
    color: 'bg-gold-500',
    detail: 'Dostawa Inpost — bezpłatna, na terenie Polski',
    emoji: '📦',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-dziala" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 border border-ocean-100 text-ocean-600 text-sm font-semibold mb-6">
            ✦ Trzy kroki do medalu
          </div>
          <h2 className="section-title mb-4">Jak to działa?</h2>
          <p className="section-subtitle">
            Dokładnie jak wyzwania biegowe — ale dla wędkarzy.
            Opłać, złów, odbierz medal pocztą.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting arrows desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-[calc(33.33%-16px)] right-[calc(33.33%-16px)] items-center justify-between -translate-y-1/2 pointer-events-none px-4 z-10">
            <div className="flex items-center gap-1 text-slate-300">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-0.5 w-4 rounded ${i % 2 === 0 ? 'bg-slate-200' : 'bg-transparent'}`} />
              ))}
              <ArrowRight size={18} className="text-slate-300 -ml-1" />
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-0.5 w-4 rounded ${i % 2 === 0 ? 'bg-slate-200' : 'bg-transparent'}`} />
              ))}
              <ArrowRight size={18} className="text-slate-300 -ml-1" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map(({ step, icon: Icon, title, description, color, detail, emoji, bg, border }, i) => (
              <div key={i} className={`relative rounded-2xl border-2 ${border} ${bg} p-8`}>
                {/* Step badge */}
                <div className="absolute -top-4 left-6 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-black">{step}</span>
                  </div>
                </div>

                <div className="pt-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>

                  <div className={`flex items-center gap-2 p-3 rounded-xl bg-white/60 border ${border}`}>
                    <span className="text-xl">{emoji}</span>
                    <span className="text-slate-600 text-xs font-medium">{detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analogy callout */}
        <div className="mt-12 p-6 bg-ocean-950 rounded-2xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🏃</div>
            <div className="h-12 w-0.5 bg-white/10 hidden md:block" />
            <div className="text-4xl">🎣</div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-1">To samo co wyzwania biegowe — tylko na wodzie</h4>
            <p className="text-white/50 text-sm">
              Tak jak płacisz za bieg 5K i dostajesz medal+koszulkę — tutaj płacisz za wyzwanie wędkarskie
              i dostajesz medal+koszulkę. Możesz łowić z domu, z łódki, z brzegu — jak chcesz.
            </p>
          </div>
          <a href="#wyzwania" className="flex-shrink-0 px-6 py-3 rounded-full bg-gold-500 text-white font-semibold text-sm hover:bg-gold-600 transition-colors whitespace-nowrap">
            Wybierz wyzwanie →
          </a>
        </div>
      </div>
    </section>
  )
}
