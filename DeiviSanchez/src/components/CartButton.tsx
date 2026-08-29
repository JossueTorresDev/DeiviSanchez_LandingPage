import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartButton() {
  const { itemCount, openDrawer } = useCart()

  return (
    <button
      onClick={openDrawer}
      aria-label={`Ver pedido — ${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`}
      className="relative flex items-center gap-2 px-4 py-2.5 bg-white/8 hover:bg-white/12 border border-white/12 hover:border-white/20 text-white text-sm font-semibold rounded-full transition-all duration-200"
    >
      <ShoppingBag size={16} />
      <span className="hidden sm:inline">Mi Pedido</span>

      {/* Badge */}
      {itemCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-600 text-white text-[11px] font-black flex items-center justify-center leading-none">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  )
}
