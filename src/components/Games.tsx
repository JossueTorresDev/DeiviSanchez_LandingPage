import { Dices, Trophy } from 'lucide-react'

const games = [
  {
    name: 'Ludo',
    description: 'El clásico juego de dados y estrategia. Saca tus fichas y llega primero a la meta.',
    icon: '🎲',
    players: '2 – 4 jugadores',
  },
  {
    name: 'Dama',
    description: 'Juego de tablero clásico. Captura las piezas del rival y corona tus damas.',
    icon: '♟',
    players: '2 jugadores',
  },
  {
    name: 'Ajedrez',
    description: 'El juego de estrategia por excelencia. Pon a prueba tu mente con cada movimiento.',
    icon: '♜',
    players: '2 jugadores',
  },
  {
    name: 'Jenga',
    description: 'Extrae bloques sin derrumbar la torre. Tensión y diversión en cada turno.',
    icon: '🧱',
    players: '2 – 8 jugadores',
  },
  {
    name: 'Poker',
    description: 'La mejor mano gana. Combina suerte y estrategia en la mesa de La Brasa.',
    icon: '🃏',
    players: '2 – 8 jugadores',
  },
]

export default function Games() {
  return (
    <section id="games" className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Entretenimiento
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Juegos <span className="text-red-500">Divertidos</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Más que una comida — una experiencia completa. Disfruta tus platos
            favoritos mientras te diviertes con familia y amigos.
          </p>
        </div>

        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10 md:mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="relative z-10 px-8 py-10 md:py-14 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-700/30 border border-red-700/50 flex items-center justify-center">
                <Trophy size={20} className="text-red-400" />
              </div>
              <span className="text-red-400 text-xs font-bold tracking-widest uppercase">
                Sandoval — Juegos Divertidos
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-3">
              Come rico, juega mejor
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tenemos una selección de juegos de mesa disponibles para toda la familia.
              Solo pídelos al mesero y a disfrutar.
            </p>
          </div>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-[#161616] border border-white/8 rounded-2xl p-5 flex flex-col gap-3 hover:border-red-700/40 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-700/15 border border-red-700/25 flex items-center justify-center text-2xl group-hover:bg-red-700/25 transition-colors">
                <Dices size={24} className="text-red-400" />
              </div>

              {/* Name */}
              <h3 className="text-white font-black text-lg leading-tight">
                {game.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed flex-1">
                {game.description}
              </p>

              {/* Players badge */}
              <div className="flex items-center gap-1.5 pt-3 border-t border-white/8">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-gray-600 text-xs">{game.players}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-700 text-xs mt-8">
          Juegos disponibles sin costo adicional — solo consúmelos junto a tu pedido
        </p>
      </div>
    </section>
  )
}
