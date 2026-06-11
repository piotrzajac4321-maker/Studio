export default function StatsBar() {
  const stats = [
    { value: '2M+', label: 'Wędkarzy w Polsce', sub: 'szacowany potencjał' },
    { value: '57.9M', label: 'Wędkarzy w USA', sub: 'rekord 2024' },
    { value: '10%', label: 'Populacji świata', sub: 'uprawia wędkarstwo' },
    { value: '$1.2B', label: 'Rynek aplikacji', sub: 'wartość w 2024' },
    { value: '9.2%', label: 'Wzrost roczny CAGR', sub: 'prognoza do 2033' },
  ]

  return (
    <section className="bg-ocean-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl md:text-3xl font-display font-black text-gold-400 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium mt-0.5">{stat.label}</div>
              <div className="text-white/30 text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
