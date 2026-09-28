import { Flame, Camera, Users, AtSign, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Juegos', href: '#games' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center">
                <Flame size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-wide">
                La <span className="text-red-500">Brasa</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Desde 2005, ofrecemos la mejor experiencia a la parrilla. Tradición,
              fuego y sabor en cada plato.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Users, label: 'Facebook' },
                { icon: AtSign, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-700/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest text-xs">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-600 hover:text-red-400 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest text-xs">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li>Calle Las Palmas, La Quebrada</li>
              <li>(Ref. La Casa de Chaman)</li>
              <li>al Costado de Barberia Birk</li>
              <li>+1 (555) 234-5678</li>
              <li>info@labrasa.com</li>
              <li className="pt-1">
                <span className="text-white">Horario:</span>
                <br />
                Lun – Vie: 12:00 – 23:00
                <br />
                Sáb – Dom: 12:00 – 00:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; {new Date().getFullYear()} La Brasa Restaurant. Todos los derechos reservados.
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-gray-600 hover:text-white text-xs transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={14} />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  )
}
