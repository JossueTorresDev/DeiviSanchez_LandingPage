import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Carlos Mendoza',
    role: 'Cliente frecuente',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: 'El chuletón es simplemente perfecto. La carne llega en el punto exacto, jugosa y con ese sabor ahumado que te transporta. Sin duda el mejor restaurante de parrilla de la ciudad.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Laura Jiménez',
    role: 'Food Blogger',
    avatar: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'Vine a celebrar mi aniversario y la experiencia superó todas las expectativas. El ambiente es íntimo, el personal muy atento y la parrillada familiar es para 6 personas sin problema.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Roberto Castillo',
    role: 'Empresario',
    avatar: 'https://i.pravatar.cc/80?img=3',
    rating: 5,
    text: 'Traigo aquí a todos mis clientes cuando quiero impresionar. El entrecot Angus es digno de cualquier restaurante de 5 estrellas. El servicio es impecable siempre.',
    date: 'Hace 3 semanas',
  },
  {
    name: 'María Torres',
    role: 'Chef amateur',
    avatar: 'https://i.pravatar.cc/80?img=9',
    rating: 5,
    text: 'La provoleta de entrada y las costillas BBQ son un ritual obligado. La sangría de la casa es un complemento perfecto. Volvemos cada mes sin falta.',
    date: 'Hace 5 días',
  },
  {
    name: 'Andrés Rojas',
    role: 'Turista',
    avatar: 'https://i.pravatar.cc/80?img=15',
    rating: 5,
    text: 'Vine de visita y un local me recomendó este lugar. No me arrepiento para nada. El lomo fino con reducción de vino es una obra de arte. ¡Volveré en mi próximo viaje!',
    date: 'Hace 2 meses',
  },
  {
    name: 'Sofía Herrera',
    role: 'Periodista gastronómica',
    avatar: 'https://i.pravatar.cc/80?img=20',
    rating: 5,
    text: 'He probado parrillas en todo el país y La Brasa está en el top 3 sin duda. La calidad del corte, la técnica del fuego y la sazón son impecables. Muy recomendado.',
    date: 'Hace 1 semana',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Lo que dicen nuestros <span className="text-red-500">clientes</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            La satisfacción de nuestros comensales es el mejor reconocimiento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#161616] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-red-700/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-red-700/50" />

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{r.name}</p>
                  <p className="text-gray-600 text-xs truncate">{r.role}</p>
                </div>
                <span className="text-gray-700 text-xs flex-shrink-0">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
