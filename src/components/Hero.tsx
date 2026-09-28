import { ChevronDown, MapPin, Clock, Star } from 'lucide-react'

const WA_URL = `https://wa.me/51986294819?text=${encodeURIComponent('¡Hola *Deivi Sanchez*! Me gustaría hacer una reserva de mesa.')}`

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-700/20 border border-red-700/40 rounded-full px-4 py-1.5 mb-8">
          <Star size={13} className="text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            Parrilla Auténtica desde 2005
          </span>
          <Star size={13} className="text-yellow-400 fill-yellow-400" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          El Sabor de la{' '}
          <span className="text-red-500">Brasa</span>{' '}
          <br className="hidden md:block" />
          en Cada Corte
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          Carnes seleccionadas a la parrilla, sabores que conquistan. Una
          experiencia gastronómica que une tradición y fuego en cada plato.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 md:mb-14 px-4 sm:px-0">
          <a
            href="#menu"
            className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold text-base rounded-full transition-colors duration-200 shadow-lg shadow-red-900/40"
          >
            Ver el Menú
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold text-base rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Info pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 px-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <MapPin size={16} className="text-red-400 flex-shrink-0" />
            <span>Calle Las Palmas, La Quebrada</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Clock size={16} className="text-red-400 flex-shrink-0" />
            <span>Lun – Dom: 12:00 – 23:00</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-1 text-gray-300 text-sm">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-1">4.9 / 5</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
