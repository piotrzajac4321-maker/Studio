import { Check, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Start',
    price: 'Bezpłatny',
    priceNote: 'na zawsze',
    description: 'Idealne do pierwszych kroków i wypróbowania platformy.',
    color: 'border-slate-200',
    btnClass: 'btn-outline',
    btnText: 'Zacznij za darmo',
    features: [
      'Do 5 połowów miesięcznie',
      '3 aktywne wyzwania',
      'Podstawowy ranking',
      'Mapa łowisk (widok publiczny)',
      'Profil wędkarza',
    ],
    missing: ['AI weryfikacja', 'Nieograniczone połowy', 'Liga Premium', 'Nagrody pieniężne'],
  },
  {
    name: 'Pro',
    price: '29 zł',
    priceNote: '/ miesiąc',
    description: 'Dla aktywnych wędkarzy, którzy traktują to serio.',
    color: 'border-ocean-600 shadow-xl shadow-ocean-100',
    btnClass: 'btn-primary',
    btnText: 'Wybierz Pro',
    badge: 'Najpopularniejszy',
    features: [
      'Nieograniczone połowy',
      'Wszystkie aktywne wyzwania',
      'AI weryfikacja połowów',
      'Ranking regionalny i krajowy',
      'Mapa łowisk pełna',
      'Statystyki zaawansowane',
      'Powiadomienia w czasie rzeczywistym',
    ],
    missing: [],
  },
  {
    name: 'Klub',
    price: '79 zł',
    priceNote: '/ miesiąc',
    description: 'Dla klubów, kół wędkarskich i organizatorów turniejów.',
    color: 'border-gold-300',
    btnClass: 'btn-outline',
    btnText: 'Skontaktuj się',
    features: [
      'Wszystko z planu Pro',
      'Do 20 kont członków',
      'Własne wyzwania drużynowe',
      'Panel zarządzania klubem',
      'Branding i logo klubu',
      'Dedykowane wsparcie',
      'Raport miesięczny PDF',
    ],
    missing: [],
  },
]

export default function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-50 border border-ocean-100 text-ocean-600 text-sm font-semibold mb-6">
            ✦ Proste ceny, bez ukrytych opłat
          </div>
          <h2 className="section-title mb-4">Wybierz swój plan</h2>
          <p className="section-subtitle">
            Zacznij za darmo. Ulepsz kiedy chcesz. Anuluj w każdej chwili.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-ocean-600 text-white text-xs font-bold shadow-lg">
                    <Zap size={12} fill="white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-display font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.priceNote}</span>
                </div>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5 opacity-40">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    </div>
                    <span className="text-sm text-slate-400 line-through">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#register" className={`${plan.btnClass} justify-center`}>
                {plan.btnText}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-slate-400 text-sm mt-8">
          🔒 Płatności zabezpieczone SSL · Brak automatycznego odnowienia bez zgody · Pomoc 7 dni w tygodniu
        </p>
      </div>
    </section>
  )
}
