import { Flame, Users, UtensilsCrossed } from 'lucide-react'

const stats = [
  { icon: Flame, value: 'Desde', label: '2026' },
  { icon: UtensilsCrossed, value: '15+', label: 'Platos en el menú' },
  { icon: Users, value: '50+', label: 'Clientes semanales' },
]

export default function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image block */}
          <div className="relative pb-6 pr-6 sm:pb-0 sm:pr-0">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80"
                alt="Parrilla encendida"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge — adjusted so it doesn't clip on mobile */}
            <div className="absolute bottom-0 right-0 sm:-bottom-6 sm:-right-6 bg-red-700 text-white rounded-2xl px-6 py-4 sm:px-7 sm:py-5 shadow-2xl shadow-red-900/50 text-center">
              <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-red-200 leading-none mb-1">Desde</p>
              <div className="w-full h-px bg-red-500/50 mb-1" />
              <p className="text-3xl sm:text-4xl font-black leading-none tracking-tight">2026</p>
            </div>
          </div>

          {/* Text block */}
          <div>
            <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-4">
              Nuestra Historia
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Pasión por el{' '}
              <span className="text-red-500">fuego</span> y la carne
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-5">
              En <strong className="text-white">Sandoval</strong> creemos que
              una buena parrilla callejera es un arte. Desde 2026, preparamos
              los mejores anticuchos, parrillas y alitas con recetas que conquistan
              el paladar de cada cliente.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Nuestro fuego y sazón logran ese punto perfecto que convierte
              una comida en la calle en un recuerdo memorable.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-700/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-red-400" />
                  </div>
                  <div>
                    {value === 'Desde' ? (
                      <>
                        <p className="text-2xl font-black text-white leading-none">2026</p>
                        <p className="text-gray-500 text-xs mt-0.5">Desde este año</p>
                      </>
                    ) : (
                      <>
                        <p className="text-2xl font-black text-white leading-none">{value}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
