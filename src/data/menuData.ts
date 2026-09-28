// Importación de imágenes reales del negocio
import imgChuleta        from '../assets/img/chuleta.jpg'
import imgChurrasco      from '../assets/img/churrasco.jpg'
import imgPollo          from '../assets/img/pollo a la plancha.jpg'
import imgAnticuchos     from '../assets/img/anticuchos.jpg'
import imgMollejita      from '../assets/img/mollejita.jpg'
import imgRachi          from '../assets/img/rachi.jpg'
import imgMollejaRachi   from '../assets/img/anticuchos con molleja.jpg'
import imgAntiMolleRachi from '../assets/img/anticucho con rachi.jpg'
import imgComboTotal     from '../assets/img/anticucho, rachi, molleja.jpg'
import imgAlitasBBQ      from '../assets/img/alitas bbq.jpg'
import imgAcevichadas    from '../assets/img/acevichadas.jpg'
import imgSalchipapa     from '../assets/img/salchipapa.jpg'
import imgArroz          from '../assets/img/arroz blanco.jpg'

export type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  badge?: 'Más Pedido' | 'Nuevo' | 'Chef'
  details: {
    weight?: string
    cookTime?: string
    allergens?: string[]
    extras?: string[]
  }
}

export type Category = {
  id: string
  label: string
}

export const categories: Category[] = [
  { id: 'all',          label: 'Todo el Menú' },
  { id: 'parrillas',    label: 'Zona Parrillas' },
  { id: 'anticuchos',   label: 'Anticuchos' },
  { id: 'alitas',       label: 'Alitas y Sopas' },
  { id: 'acompanantes', label: 'Acompañantes' },
  { id: 'infusiones',   label: 'Infusiones y Tragos' },
]

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Chuleta de Cerdo',
    description: 'Jugosa chuleta de cerdo a la parrilla. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    image: imgChuleta,
    badge: 'Más Pedido',
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },
  {
    id: 2,
    name: 'Churrasco de Carne',
    description: 'Churrasco de res a la brasa, tierno y sabroso. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    image: imgChurrasco,
    badge: 'Chef',
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },
  {
    id: 3,
    name: 'Pollo a la Plancha',
    description: 'Pechuga de pollo a la plancha, dorada y jugosa. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    image: imgPollo,
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },

  // ── ANTICUCHOS ───────────────────────────────────────────────
  {
    id: 4,
    name: 'Anticuchos',
    description: '3 palitos de anticucho a la brasa. Incluye choclo, papas y ensalada.',
    price: 12,
    category: 'anticuchos',
    image: imgAnticuchos,
    badge: 'Más Pedido',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 5,
    name: 'Mollejitas',
    description: 'Mollejas a la parrilla, crujientes y sazonadas. Incluye choclo, papas y ensalada.',
    price: 10,
    category: 'anticuchos',
    image: imgMollejita,
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 6,
    name: 'Rachi',
    description: 'Rachi a la parrilla, bien sazonado. Incluye choclo, papas y ensalada.',
    price: 10,
    category: 'anticuchos',
    image: imgRachi,
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 7,
    name: 'Mollejita + Rachi',
    description: 'Combinación de mollejitas y rachi a la parrilla. Incluye choclo, papas y ensalada.',
    price: 15,
    category: 'anticuchos',
    image: imgMollejaRachi,
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 8,
    name: 'Anticucho + Molleja o Rachi',
    description: 'Combo de anticucho con molleja o rachi a elección. Incluye choclo, papas y ensalada.',
    price: 15,
    category: 'anticuchos',
    image: imgAntiMolleRachi,
    badge: 'Nuevo',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 9,
    name: 'Mollejita + Rachi + Anticucho',
    description: 'El combo completo: mollejita, rachi y anticucho. Incluye choclo, papas y ensalada.',
    price: 18,
    category: 'anticuchos',
    image: imgComboTotal,
    badge: 'Chef',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },

  // ── ALITAS Y SOPAS ───────────────────────────────────────────
  {
    id: 10,
    name: 'Caldo de Gallina',
    description: 'Caldo de gallina sustancioso y espeso, reconfortante y bien sazonado.',
    price: 10,
    category: 'alitas',
    image: 'https://images.pexels.com/photos/6605203/pexels-photo-6605203.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Más Pedido',
    details: { extras: [] },
  },
  {
    id: 11,
    name: 'Chicharrón de Pollo',
    description: 'Chicharrón de pollo crocante y bien sazonado, frito en su punto exacto.',
    price: 12,
    category: 'alitas',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 12,
    name: 'Salchipapa',
    description: 'Salchipapa clásica, crujiente y abundante.',
    price: 10,
    category: 'alitas',
    image: imgSalchipapa,
    details: { extras: [] },
  },
  {
    id: 13,
    name: 'Alitas BBQ',
    description: '5 piezas de alitas a la parrilla en salsa BBQ, doradas y jugosas.',
    price: 15,
    category: 'alitas',
    image: imgAlitasBBQ,
    badge: 'Más Pedido',
    details: { extras: ['Salsa BBQ'] },
  },
  {
    id: 14,
    name: 'Alitas Acebichadas',
    description: '5 piezas de alitas a la parrilla bañadas en salsa acebichada de la casa.',
    price: 15,
    category: 'alitas',
    image: imgAcevichadas,
    details: { extras: ['Salsa Acebichada'] },
  },

  // ── ACOMPAÑANTES ─────────────────────────────────────────────
  {
    id: 15,
    name: 'Arroz',
    description: 'Porción de arroz blanco.',
    price: 3,
    category: 'acompanantes',
    image: imgArroz,
    details: { extras: [] },
  },
  {
    id: 16,
    name: 'Ensalada',
    description: 'Porción de ensalada mixta fresca.',
    price: 5,
    category: 'acompanantes',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },

  // ── INFUSIONES Y TRAGOS ──────────────────────────────────────
  {
    id: 17,
    name: 'Muña',
    description: 'Infusión de muña, hierba andina de propiedades digestivas.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 18,
    name: 'Menta',
    description: 'Infusión de menta fresca, refrescante y digestiva.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 19,
    name: 'Boldo',
    description: 'Infusión de boldo, ideal para la digestión.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 20,
    name: 'Hierba Luisa',
    description: 'Infusión de hierba luisa, aromática y relajante.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/3593432/pexels-photo-3593432.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 21,
    name: 'Manzanilla',
    description: 'Infusión de manzanilla, suave y tranquilizante.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 22,
    name: 'Jamaica',
    description: 'Infusión de flor de jamaica, refrescante y con antioxidantes.',
    price: 3,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/1587830/pexels-photo-1587830.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 23,
    name: 'Calentito',
    description: 'Trago caliente de la casa, perfecto para las noches frías.',
    price: 7,
    category: 'infusiones',
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Chef',
    details: { extras: [] },
  },
]
