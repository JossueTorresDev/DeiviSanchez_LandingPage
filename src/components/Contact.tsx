import { MapPin, Phone, Clock, Camera, Users, AtSign, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

const WA_NUMBER = '51986294819'
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('¡Hola *Deivi Sanchez*! Me gustaría hacer una reserva de mesa.')}`

const info = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Calle Las Palmas, La Quebrada', '(Ref. La Casa de Chaman)', 'al Costado de Barberia Birk'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['+51 986 294 819'],
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Lun – Vie: 12:00 – 23:00', 'Sáb – Dom: 12:00 – 00:00'],
  },
]

export default function Contact() {
  const { cart, total, openDrawer } = useCart()
  const hasOrder = cart.length > 0

  const handleWhatsApp = () => {
    if (hasOrder) {
      const lines = [
        '¡Hola *Deivi Sanchez*! Me gustaría pedir lo siguiente:',
        '',
        ...cart.map(
          (c) => `• *${c.item.name}* x${c.qty} — S/ ${(c.item.price * c.qty).toFixed(2)}`
        ),
        '',
        `*Total estimado: S/ ${total.toFixed(2)}*`,
        '',
        '¿Podría reservar una mesa para disfrutarlo? Gracias.',
      ]
      window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
        '_blank',
        'noopener,noreferrer'
      )
    } else {
      window.open(WA_BASE, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Contacto y Reservas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Ven a <span className="text-red-500">visitarnos</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Selecciona tus platos del menú y resérvanos directo por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="flex flex-col gap-8">
            {info.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-red-700/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-gray-500 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Redes */}
            <div>
              <p className="text-white font-semibold text-sm mb-4">Síguenos</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Camera, label: 'Instagram' },
                  { icon: Users, label: 'Facebook' },
                  { icon: AtSign, label: 'Twitter' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 hover:bg-red-700/20 transition-all"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden h-52 border border-white/8">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=60"
                alt="Mapa de ubicación"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Reserva card */}
          <div className="bg-[#161616] border border-white/8 rounded-2xl p-5 sm:p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-white text-xl font-black mb-2">¿Listo para reservar?</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                El proceso es simple: elige tus platos del menú, agrégalos a tu pedido y
                envíanos todo por WhatsApp. Te confirmamos tu mesa al instante.
              </p>
            </div>

            {/* Steps */}
            <ol className="flex flex-col gap-4">
              {[
                { num: '1', text: 'Explora el menú y agrega tus platos favoritos' },
                { num: '2', text: 'Revisa tu pedido en el carrito' },
                { num: '3', text: 'Envíanos el pedido por WhatsApp y confirmamos tu mesa' },
              ].map(({ num, text }) => (
                <li key={num} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {num}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>

            {/* Order summary if items exist */}
            {hasOrder && (
              <div className="bg-white/4 border border-white/8 rounded-xl p-4">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-3">
                  Tu pedido actual
                </p>
                <ul className="flex flex-col gap-2 mb-3">
                  {cart.map((c) => (
                    <li key={c.item.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">{c.item.name} x{c.qty}</span>
                      <span className="text-white font-semibold">
                        S/ {(c.item.price * c.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between pt-2 border-t border-white/8">
                  <span className="text-gray-500 text-sm">Total</span>
                  <span className="text-red-400 font-black">S/ {total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              {hasOrder ? (
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-sm rounded-full transition-colors shadow-lg shadow-green-900/30"
                >
                  <MessageCircle size={18} />
                  Reservar y pedir por WhatsApp
                </button>
              ) : (
                <button
                  onClick={openDrawer}
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-red-700 hover:bg-red-600 text-white font-bold text-sm rounded-full transition-colors shadow-lg shadow-red-900/30"
                >
                  Seleccionar platos del menú
                </button>
              )}
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 border border-white/15 hover:border-[#25D366]/50 text-gray-400 hover:text-white text-sm font-medium rounded-full transition-colors"
              >
                <MessageCircle size={15} />
                Solo quiero consultar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
