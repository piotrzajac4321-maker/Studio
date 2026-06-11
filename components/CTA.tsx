import { ArrowRight, Smartphone, Globe } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative wave-bg fish-pattern rounded-3xl overflow-hidden p-12 md:p-16 text-center">
          {/* Blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-ocean-400/10 blur-3xl" />

          <div className="relative">
            <div className="text-5xl mb-6">🎣</div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              Zacznij swoje wyzwanie<br />
              <span className="text-gold-400">już dziś</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Rejestracja zajmuje 30 sekund. Plan bezpłatny na zawsze.
              Pierwsze wyzwanie czeka na Ciebie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#register" className="btn-primary text-base w-full sm:w-auto justify-center">
                Dołącz za darmo
                <ArrowRight size={20} />
              </a>
              <a href="#app" className="btn-secondary text-base w-full sm:w-auto justify-center">
                <Smartphone size={18} />
                Pobierz aplikację
              </a>
            </div>

            {/* App store badges placeholder */}
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
