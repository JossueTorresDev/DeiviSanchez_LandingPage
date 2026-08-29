import { Eye, Plus, Check } from 'lucide-react'
import type { MenuItem } from '../data/menuData'
import { useCart } from '../context/CartContext'

type Props = {
  item: MenuItem
  onViewDetails: (item: MenuItem) => void
}

const badgeColors: Record<string, string> = {
  'Más Pedido': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Nuevo':      'bg-green-500/20 text-green-400 border-green-500/30',
  'Chef':       'bg-red-700/30 text-red-400 border-red-600/30',
}

export default function MenuCard({ item, onViewDetails }: Props) {
  const { addToCart, isInCart } = useCart()
  const inCart = isInCart(item.id)

  return (
    <article className="bg-[#161616] border border-white/8 rounded-2xl overflow-hidden flex flex-col group hover:border-red-700/40 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/10">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/60 to-transparent" />

        {/* Badge */}
        {item.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${badgeColors[item.badge]}`}>
            {item.badge}
          </span>
        )}

        {/* Quick view */}
        <button
          onClick={() => onViewDetails(item)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700"
          aria-label={`Ver detalles de ${item.name}`}
        >
          <Eye size={15} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-white font-bold text-lg leading-tight mb-2">{item.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Chips */}
        {(item.details.weight || item.details.cookTime) && (
          <div className="flex items-center gap-3 mb-4">
            {item.details.weight && (
              <span className="text-xs text-gray-600 bg-white/5 px-2.5 py-1 rounded-full">
                {item.details.weight}
              </span>
            )}
            {item.details.cookTime && (
              <span className="text-xs text-gray-600 bg-white/5 px-2.5 py-1 rounded-full">
                {item.details.cookTime}
              </span>
            )}
          </div>
        )}

        {/* Price + actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/8">
          <span className="text-2xl font-black text-red-400">${item.price.toFixed(2)}</span>

          <button
            onClick={() => addToCart(item)}
            className={`flex items-center gap-1.5 px-4 py-2 text-white text-sm font-semibold rounded-full transition-all duration-200 ${
              inCart
                ? 'bg-green-600 hover:bg-green-500'
                : 'bg-red-700 hover:bg-red-600'
            }`}
            aria-label={inCart ? `${item.name} ya está en tu pedido` : `Agregar ${item.name} al pedido`}
          >
            {inCart ? <Check size={14} /> : <Plus size={14} />}
            {inCart ? 'Agregado' : 'Agregar'}
          </button>
        </div>
      </div>
    </article>
  )
}
