import imgParrilla from '../assets/img/Parrilla.avif'

const images = [
  {
    src: imgParrilla,
    alt: 'Parrilla encendida',
    // desktop: big card | mobile: full width
    className: 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Corte de res',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    alt: 'Parrillada completa',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Plato gourmet',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    alt: 'Lomo a la brasa',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    alt: 'Ambiente del restaurante',
    className: 'col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0f0f0f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Galería
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Momentos en <span className="text-red-500">llamas</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Cada imagen cuenta la historia de un plato preparado con dedicación y fuego real.
          </p>
        </div>

        {/* Mobile: simple 2-col grid | Tablet+: masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl group ${
                // On mobile, reset spans to avoid broken layout
                i === 0
                  ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2'
                  : i === 5
                  ? 'col-span-2 md:col-span-2'
                  : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 text-white text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
