import { Award, Flame, Users, UtensilsCrossed } from 'lucide-react'

const stats = [
  { icon: Flame, value: '20+', label: 'Años de tradición' },
  { icon: UtensilsCrossed, value: '60+', label: 'Platos en el menú' },
  { icon: Users, value: '500+', label: 'Clientes semanales' },
  { icon: Award, value: '12', label: 'Premios gastronómicos' },
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
            <div className="absolute bottom-0 right-0 sm:-bottom-6 sm:-right-6 bg-red-700 text-white rounded-2xl px-5 py-3 sm:px-6 sm:py-4 shadow-2xl shadow-red-900/50">
              <p className="text-2xl sm:text-3xl font-black leading-none">20+</p>
              <p className="text-xs sm:text-sm text-red-200 mt-1">Años de sabor</p>
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
              En <strong className="text-white">La Brasa</strong> creemos que
              una buena parrilla es un arte. Desde 2005, seleccionamos los
              mejores cortes de res, cerdo y cordero, marinados con recetas
              familiares que han pasado de generación en generación.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Nuestros parrilleros dominan el fuego con décadas de experiencia,
              logrando ese punto perfecto que convierte una comida en un
              recuerdo memorable.
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
                    <p className="text-2xl font-black text-white leading-none">{value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
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
