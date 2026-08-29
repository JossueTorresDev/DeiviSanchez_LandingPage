const images = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Parrilla encendida',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Corte de res',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    alt: 'Parrillada completa',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    alt: 'Plato gourmet',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    alt: 'Lomo a la brasa',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    alt: 'Ambiente del restaurante',
    span: 'col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Galería
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Momentos en <span className="text-red-500">llamas</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Cada imagen cuenta la historia de un plato preparado con dedicación y fuego real.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
