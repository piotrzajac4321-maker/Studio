import { ArrowRight, Smartphone, Globe, Package } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative wave-bg fish-pattern rounded-3xl overflow-hidden p-12 md:p-16 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-ocean-400/10 blur-3xl" />

          <div className="relative">
            <div className="text-6xl mb-6">🏅</div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              Twój medal czeka<br />
              <span className="text-gold-400">na łowisku</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Dołącz do wyzwania od 39 zł. Złów, zrób zdjęcie, odbierz medal i koszulkę pod drzwi.
              Bez subskrypcji. Bez zobowiązań.
            </p>

            {/* Price anchoring */}
            <div className="flex items-center justify-center gap-6 flex-wrap mb-10">
              {[
                { price: 'od 39 zł', label: 'wpisowe jednorazowe', emoji: '🎣' },
                { price: 'bezpłatna', label: 'wysyłka Inpost', emoji: '📦' },
                { price: '14 dni', label: 'czas dostawy', emoji: '🏠' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="text-left">
                    <div className="text-white font-bold">{item.price}</div>
                    <div className="text-white/50 text-xs">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#wyzwania" className="btn-primary text-base w-full sm:w-auto justify-center">
                Wybierz wyzwanie i zapisz się
                <ArrowRight size={20} />
              </a>
            </div>

            {/* App store badges */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm">
                <Smartphone size={16} />
                iOS — wkrótce
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm">
                <Smartphone size={16} />
                Android — wkrótce
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm">
                <Globe size={16} />
                Web — dostępne teraz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
