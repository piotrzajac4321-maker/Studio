import { UserPlus, Camera, Trophy, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Zarejestruj się',
    description: 'Utwórz konto w 30 sekund. Wybierz region, ulubione gatunki i typ wędkarstwa. Profil gotowy.',
    color: 'bg-ocean-600',
    detail: 'Bezpłatne konto na start, premium od 29 zł/miesiąc',
  },
  {
    step: '02',
    icon: Camera,
    title: 'Dołącz do wyzwania',
    description: 'Wybierz aktywne wyzwanie — miesięczne, sezonowe lub drużynowe. Złap rybę, zrób zdjęcie i prześlij wynik.',
    color: 'bg-gold-500',
    detail: 'Weryfikacja AI w < 30 sekund',
  },
  {
    step: '03',
    icon: Trophy,
    title: 'Zbieraj punkty i nagrody',
    description: 'Każdy połów to punkty. Pnij się w rankingu, zdobywaj odznaki i wymieniaj punkty na nagrody od partnerów.',
    color: 'bg-emerald-600',
    detail: 'Nagrody o wartości 5000+ zł miesięcznie',
  },
]

export default function HowItWorks() {
  return (
    <section id="jak-dziala" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 border border-ocean-100 text-ocean-600 text-sm font-semibold mb-6">
            ✦ Prosty jak casting
          </div>
          <h2 className="section-title mb-4">
            Jak to działa?
          </h2>
          <p className="section-subtitle">
            Trzy kroki dzielą Cię od pierwszego wyzwania.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-ocean-200 via-gold-300 to-emerald-300" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map(({ step, icon: Icon, title, description, color, detail }, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg mb-0 z-10 relative`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center">
                    <span className="text-xs font-black text-slate-400">{step}</span>
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {i < 2 && (
                  <div className="lg:hidden flex justify-center my-2 text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 w-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-medium">
                    ℹ️ {detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#register" className="btn-primary">
            Zacznij teraz — to proste!
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
