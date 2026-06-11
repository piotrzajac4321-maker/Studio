import { Fish, Mail, MapPin, Phone } from 'lucide-react'

const links = {
  Platforma: ['Wyzwania', 'Ranking', 'Mapa łowisk', 'Statystyki', 'Drużyny'],
  Wsparcie: ['Centrum pomocy', 'Jak to działa', 'Regulamin', 'Polityka prywatności', 'RODO'],
  Firma: ['O nas', 'Blog', 'Partnerzy', 'Prasa', 'Kariera'],
}

export default function Footer() {
  return (
    <footer className="bg-ocean-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                <Fish className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Rybo<span className="text-gold-400">Liga</span>
                </span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Największa platforma wyzwań wędkarskich w Polsce.
              Łączymy pasję, rywalizację i społeczność.
            </p>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <MapPin size={13} />
                <span>Warszawa, Polska</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} />
                <span>kontakt@ryboliga.pl</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 text-sm hover:text-white/80 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 RyboLiga. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>🇵🇱 Made in Poland with</span>
            <span className="text-red-400">❤️</span>
            <span>for anglers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
