import { X, Clock, Calendar } from 'lucide-react'
import { schedule } from '../config/schedule'

type Props = {
  onClose: () => void
}

export default function ClosedModal({ onClose }: Props) {
  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-label="Aviso de cierre"
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-fade-in" />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-[#161616] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 animate-fade-in-up">
        <div className="h-1.5 w-full bg-gradient-to-r from-red-700 to-red-500" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-colors"
          aria-label="Cerrar aviso"
        >
          <X size={16} />
        </button>

        <div className="px-8 py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-700/15 border border-red-700/30 flex items-center justify-center mx-auto mb-5">
            <Calendar size={28} className="text-red-400" />
          </div>

          <h2 className="text-white text-xl font-black mb-3">
            No estamos disponibles
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {schedule.closedMessage}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <Clock size={14} className="text-red-400" />
            <span className="text-gray-300 text-sm">
              Próxima atención:{' '}
              <strong className="text-white">{schedule.nextDay}</strong>
            </span>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-xl px-5 py-4 mb-6 text-left">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">
              Horario regular
            </p>
            <p className="text-gray-500 text-sm">Mié – Sáb: 6:00 pm – 11:30 pm</p>
            <p className="text-gray-500 text-sm">Dom: 6:00 pm – 11:00 pm</p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-sm rounded-full transition-colors"
          >
            Entendido, solo ver el menú
          </button>
        </div>
      </div>
    </div>
  )
}
