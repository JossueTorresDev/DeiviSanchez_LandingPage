import { useState, useEffect } from 'react'
import { Flame, Menu, X } from 'lucide-react'
import CartButton from './CartButton'

const WA_URL = `https://wa.me/51986113021?text=${encodeURIComponent('¡Hola *Deivi Sanchez*! Me gustaría hacer una reserva de mesa.')}`

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Juegos', href: '#games' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg shadow-black/40 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center group-hover:bg-red-600 transition-colors">
            <Flame size={20} className="text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-wide">
            La <span className="text-red-500">Brasa</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-red-400 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Cart */}
        <div className="hidden md:flex items-center gap-3">
          <CartButton />
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold rounded-full transition-colors duration-200"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <CartButton />
          <button
            className="text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/97 border-t border-gray-800 px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-red-400 text-base font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold rounded-full text-center transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      )}
    </header>
  )
}
