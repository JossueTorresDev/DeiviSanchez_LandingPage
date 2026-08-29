import { useEffect } from 'react'
import { X, Clock, Weight, AlertTriangle, Plus, Check } from 'lucide-react'
import type { MenuItem } from '../data/menuData'
import { useCart } from '../context/CartContext'

type Props = {
  item: MenuItem | null
  onClose: () => void
}

export default function MenuModal({ item, onClose }: Props) {
  const { addToCart, isInCart } = useCart()

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [item])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!item) return null

  const inCart = isInCart(item.id)

  const handleAdd = () => {
    addToCart(item)
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${item.name}`}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-2xl bg-[#161616] border border-white/10 rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/60 animate-fade-in-up">
        {/* Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          {item.badge && (
            <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-red-700/80 text-white backdrop-blur-sm">
              {item.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-white text-2xl font-black leading-tight">{item.name}</h2>
            <span className="text-red-400 text-2xl font-black flex-shrink-0">
              ${item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>

          {/* Detail chips */}
          <div className="flex flex-wrap gap-3 mb-6">
            {item.details.weight && (
              <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 text-sm">
                <Weight size={13} className="text-red-400" />
                <span className="text-gray-300">{item.details.weight}</span>
              </div>
            )}
            {item.details.cookTime && (
              <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1.5 text-sm">
                <Clock size={13} className="text-red-400" />
                <span className="text-gray-300">{item.details.cookTime} aprox.</span>
              </div>
            )}
          </div>

          {/* Extras */}
          {item.details.extras && item.details.extras.length > 0 && (
            <div className="mb-6">
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                <Plus size={13} className="text-red-400" />
                Incluye / Opciones
              </p>
              <div className="flex flex-wrap gap-2">
                {item.details.extras.map((e) => (
                  <span key={e} className="text-xs text-gray-400 bg-white/5 border border-white/8 rounded-full px-3 py-1">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergens */}
          {item.details.allergens && item.details.allergens.length > 0 && (
            <div className="flex items-start gap-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-4 py-3 mb-6">
              <AlertTriangle size={15} className="text-yellow-500 mt-0.5 flex-shrink-0" />
              <p className="text-yellow-400/80 text-xs">
                <span className="font-semibold">Alérgenos:</span>{' '}
                {item.details.allergens.join(', ')}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm rounded-full text-white transition-colors ${
                inCart
                  ? 'bg-green-600 hover:bg-green-500'
                  : 'bg-red-700 hover:bg-red-600'
              }`}
            >
              {inCart ? <Check size={16} /> : <Plus size={16} />}
              {inCart ? 'Agregar uno más al pedido' : 'Agregar al pedido'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3.5 border border-white/15 hover:border-white/30 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
