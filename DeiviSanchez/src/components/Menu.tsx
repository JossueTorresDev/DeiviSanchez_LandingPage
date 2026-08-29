import { useState } from 'react'
import { menuItems, categories } from '../data/menuData'
import type { MenuItem } from '../data/menuData'
import MenuCard from './MenuCard'

type Props = {
  onOpenModal: (item: MenuItem) => void
}

export default function Menu({ onOpenModal }: Props) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory)

  return (
    <section id="menu" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Nuestro Menú
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Cortes que <span className="text-red-500">enamoran</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Cada plato es preparado al momento con ingredientes frescos y técnicas
            de parrilla que garantizan el punto perfecto.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-red-700 text-white shadow-lg shadow-red-900/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} onViewDetails={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  )
}
