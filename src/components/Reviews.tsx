import { useState, useEffect, useCallback } from 'react'
import { Star, CheckCircle, Loader2 } from 'lucide-react'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxnzzPyxEbTugmaLTcsl9350iXbYDac5SZ_3nemCpDX8escxOkfdVZDX8PvSrXZGUxl/exec'

type Review = { fecha: string; estrellas: number }

const labels: Record<number, string> = {
  1: 'Muy malo',
  2: 'Malo',
  3: 'Regular',
  4: 'Bueno',
  5: 'Excelente',
}

function StarDisplay({ value, size = 24 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={s <= Math.round(value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
        />
      ))}
    </div>
  )
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          className="cursor-pointer transition-transform hover:scale-125"
          aria-label={`${s} estrella${s > 1 ? 's' : ''}`}
        >
          <Star
            size={44}
            className={s <= (hovered || value) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
          />
        </button>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews]   = useState<Review[]>([])
  const [loading, setLoading]   = useState(true)
  const [stars, setStars]       = useState(0)
  const [sending, setSending]   = useState(false)
  const [sent, setSent]         = useState(false)

  const fetchReviews = useCallback(() => {
    setLoading(true)
    fetch(SCRIPT_URL)
      .then((r) => r.json())
      .then((data: Review[]) => setReviews(data))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => { fetchReviews() }, [fetchReviews])

  const avg = reviews.length > 0
    ? reviews.reduce((s, r) => s + Number(r.estrellas), 0) / reviews.length
    : 0

  // Distribución por estrella
  const dist = [5, 4, 3, 2, 1].map((n) => ({
    n,
    count: reviews.filter((r) => Number(r.estrellas) === n).length,
    pct: reviews.length > 0
      ? Math.round((reviews.filter((r) => Number(r.estrellas) === n).length / reviews.length) * 100)
      : 0,
  }))

  const handleSend = async () => {
    if (stars === 0) return
    setSending(true)
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estrellas: stars }),
      })
      setSent(true)
      // Recarga las reseñas después de 1.5s para mostrar el nuevo promedio
      setTimeout(() => fetchReviews(), 1500)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="reviews" className="bg-[#0f0f0f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-400 text-xs font-bold tracking-widest uppercase mb-3">
            Calificación
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            ¿Cómo fue tu <span className="text-red-500">experiencia</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* ── Promedio actual ── */}
          <div className="bg-[#161616] border border-white/8 rounded-2xl p-8 flex flex-col items-center justify-center gap-4">
            {loading ? (
              <Loader2 size={28} className="text-red-400 animate-spin" />
            ) : reviews.length === 0 ? (
              <>
                <StarDisplay value={0} size={28} />
                <p className="text-gray-500 text-sm">Aún no hay calificaciones</p>
              </>
            ) : (
              <>
                <p className="text-white text-7xl font-black leading-none">
                  {avg.toFixed(1)}
                </p>
                <StarDisplay value={avg} size={28} />
                <p className="text-gray-500 text-sm">
                  Basado en {reviews.length} {reviews.length === 1 ? 'calificación' : 'calificaciones'}
                </p>

                {/* Barras de distribución */}
                <div className="w-full flex flex-col gap-2 mt-2">
                  {dist.map(({ n, count, pct }) => (
                    <div key={n} className="flex items-center gap-2 text-xs">
                      <span className="text-gray-500 w-4 text-right">{n}</span>
                      <Star size={11} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      <div className="flex-1 bg-white/8 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-gray-600 w-6 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Formulario ── */}
          <div className="bg-[#161616] border border-white/8 rounded-2xl p-8 flex flex-col items-center gap-6">
            {sent ? (
              <>
                <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center">
                  <CheckCircle size={28} className="text-green-400" />
                </div>
                <p className="text-white font-black text-lg text-center">
                  ¡Gracias por calificarnos!
                </p>
                <StarDisplay value={stars} size={28} />
                <p className="text-gray-500 text-sm">{labels[stars]}</p>
                <button
                  onClick={() => { setSent(false); setStars(0) }}
                  className="px-6 py-2.5 border border-white/15 hover:border-white/30 text-white text-sm rounded-full transition-colors"
                >
                  Calificar de nuevo
                </button>
              </>
            ) : (
              <>
                <p className="text-white font-semibold text-base text-center">
                  Toca las estrellas para calificar
                </p>
                <StarPicker value={stars} onChange={setStars} />
                {stars > 0 && (
                  <p className="text-yellow-400 font-semibold">{labels[stars]}</p>
                )}
                <button
                  onClick={handleSend}
                  disabled={stars === 0 || sending}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 font-bold text-sm rounded-full transition-all ${
                    stars === 0
                      ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                      : 'bg-red-700 hover:bg-red-600 text-white'
                  }`}
                >
                  {sending
                    ? <><Loader2 size={16} className="animate-spin" /> Enviando...</>
                    : 'Enviar calificación'
                  }
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
