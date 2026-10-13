// ─────────────────────────────────────────────────────────────
// Horario del negocio — automático según día y hora
// Lunes y Martes: cerrado todo el día
// Mié – Sáb: 6:00 pm – 11:30 pm
// Dom:        6:00 pm – 11:00 pm
// ─────────────────────────────────────────────────────────────

function checkIsOpen(): { isOpen: boolean; message: string; nextDay: string } {
  // Hora de Perú (UTC-5)
  const now = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Lima' })
  )
  const day  = now.getDay()  // 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb
  const hour = now.getHours()
  const min  = now.getMinutes()
  const timeInMinutes = hour * 60 + min  // minutos desde medianoche

  const open  = 18 * 60       // 6:00 pm = 1080 min
  const closeSatToFri = 23 * 60 + 30  // 11:30 pm = 1410 min
  const closeSun      = 23 * 60       // 11:00 pm = 1380 min

  // Lunes (1) y Martes (2) — siempre cerrado
  if (day === 1 || day === 2) {
    return {
      isOpen: false,
      message: 'Hoy no tenemos atención. Abrimos el miércoles a las 6:00 pm.',
      nextDay: 'Miércoles',
    }
  }

  // Miércoles a Sábado (3-6) — abre 6pm, cierra 11:30pm
  if (day >= 3 && day <= 6) {
    if (timeInMinutes < open) {
      return {
        isOpen: false,
        message: `Aún no abrimos. Hoy atendemos desde las 6:00 pm hasta las 11:30 pm.`,
        nextDay: 'hoy a las 6:00 pm',
      }
    }
    if (timeInMinutes > closeSatToFri) {
      return {
        isOpen: false,
        message: 'Ya cerramos por hoy. Mañana atendemos desde las 6:00 pm.',
        nextDay: 'mañana a las 6:00 pm',
      }
    }
    return { isOpen: true, message: '', nextDay: '' }
  }

  // Domingo (0) — abre 6pm, cierra 11:00pm
  if (day === 0) {
    if (timeInMinutes < open) {
      return {
        isOpen: false,
        message: 'Aún no abrimos. Hoy domingo atendemos desde las 6:00 pm hasta las 11:00 pm.',
        nextDay: 'hoy a las 6:00 pm',
      }
    }
    if (timeInMinutes > closeSun) {
      return {
        isOpen: false,
        message: 'Ya cerramos por hoy. Volvemos el miércoles a las 6:00 pm.',
        nextDay: 'Miércoles',
      }
    }
    return { isOpen: true, message: '', nextDay: '' }
  }

  return { isOpen: true, message: '', nextDay: '' }
}

const status = checkIsOpen()

export const schedule = {
  isClosedToday: !status.isOpen,
  closedMessage: status.message,
  nextDay: status.nextDay,
}
