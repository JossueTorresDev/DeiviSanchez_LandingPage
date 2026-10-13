import { useEffect } from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, UtensilsCrossed, Ban } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { schedule } from '../config/schedule'

const WA_NUMBER = '51986294819'

function buildWhatsAppMsg(
  cart: { item: { name: string; price: number }; qty: number; selectedOption?: string }[],
  total: number
) {
  const lines = [
    '¡Hola *Deivi Sanchez*! Me gustaría pedir lo siguiente:',
    '',
    ...cart.map(
      (c) =>
        `• *${c.item.name}*${c.selectedOption ? ` (${c.selectedOption})` : ''} x${c.qty} — S/ ${(c.item.price * c.qty).toFixed(2)}`
    ),
    '',
    `*Total estimado: S/ ${total.toFixed(2)}*`,
    '',
    '¿Podría reservar una mesa para disfrutarlo? Gracias.',
  ]
  return lines.join('\n')
}

export default function CartDrawer() {
  const { cart, total, itemCount, removeFromCart, updateQty, clearCart, drawerOpen, closeDrawer } =
    useCart()

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDrawer() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDrawer])

  const handleReserve = () => {
    const msg = buildWhatsAppMsg(cart, total)
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <>
      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[95] bg-[#111111] border-l border-white/10 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Tu pedido"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-700/20 flex items-center justify-center">
              <ShoppingBag size={18} className="text-red-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-base leading-none">Tu Pedido</h2>
              {itemCount > 0 && (
                <p className="text-gray-500 text-xs mt-0.5">{itemCount} {itemCount === 1 ? 'producto' : 'productos'}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-gray-600 hover:text-red-400 text-xs flex items-center gap-1 transition-colors"
                aria-label="Vaciar pedido"
              >
                <Trash2 size={13} />
                Vaciar
              </button>
            )}
            <button
              onClick={closeDrawer}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            /* Empty state */
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <UtensilsCrossed size={28} className="text-gray-600" />
              </div>
              <div>
                <p className="text-white font-semibold text-base">Tu pedido está vacío</p>
                <p className="text-gray-600 text-sm mt-1">
                  Agrega productos del menú para comenzar
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="mt-2 px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold rounded-full transition-colors"
              >
                Ver el Menú
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {cart.map(({ item, qty, selectedOption, cartKey }) => (
                <li
                  key={cartKey}
                  className="flex items-center gap-4 bg-white/4 border border-white/8 rounded-xl p-3"
                >
                  {/* Thumb */}
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-tight truncate">
                      {item.name}
                    </p>
                    {selectedOption && (
                      <p className="text-red-400/80 text-xs mt-0.5 truncate">{selectedOption}</p>
                    )}
                    <p className="text-red-400 text-sm font-bold mt-0.5">
                      S/ {(item.price * qty).toFixed(2)}
                    </p>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => updateQty(cartKey, qty - 1)}
                      className="w-7 h-7 rounded-full bg-white/8 hover:bg-red-700/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="Reducir cantidad"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-white text-sm font-bold w-5 text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => updateQty(cartKey, qty + 1)}
                      className="w-7 h-7 rounded-full bg-white/8 hover:bg-red-700/30 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(cartKey)}
                      className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-700/20 flex items-center justify-center text-gray-600 hover:text-red-400 transition-colors ml-1"
                      aria-label={`Eliminar ${item.name}`}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — only when there are items */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-white/8 flex flex-col gap-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total estimado</span>
              <span className="text-white text-xl font-black">S/ {total.toFixed(2)}</span>
            </div>

            {/* WhatsApp CTA */}
            {schedule.isClosedToday ? (
              <div className="w-full flex items-center justify-center gap-2.5 py-4 bg-white/8 text-gray-500 text-sm font-bold rounded-full cursor-not-allowed">
                <Ban size={16} />
                Sin atención hoy
              </div>
            ) : (
              <button
                onClick={handleReserve}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-sm rounded-full transition-colors shadow-lg shadow-green-900/30"
              >
                <MessageCircle size={18} />
                Reservar y pedir por WhatsApp
              </button>
            )}

            <p className="text-gray-700 text-xs text-center">
              Se abrirá WhatsApp con tu pedido listo para enviar
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
