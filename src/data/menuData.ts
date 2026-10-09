// Importación de imágenes reales del negocio
import imgChuleta        from '../assets/img/chuleta.jpg'
import imgChurrasco      from '../assets/img/Churrasco de Carne.jpg'
import imgPollo          from '../assets/img/pollo a la plancha.jpg'
import imgAnticuchos     from '../assets/img/anticuchos.jpg'
import imgMollejita      from '../assets/img/mollejita.jpg'
import imgRachi          from '../assets/img/rachi.jpg'
import imgChicharron     from '../assets/img/Chicharron de Pollo.jpg'
import imgAlitasBBQ      from '../assets/img/alitas bbq.jpg'
import imgMollejaRachi   from '../assets/img/anticuchos con molleja.jpg'
import imgAntiMolleRachi from '../assets/img/anticucho con rachi.jpg'
import imgComboTotal     from '../assets/img/anticucho, rachi, molleja.jpg'
import imgAcevichadas    from '../assets/img/acevichadas.jpg'
import imgSalchipapa     from '../assets/img/salchipapa.jpg'
import imgArroz          from '../assets/img/arroz blanco.jpg'
import imgCaldoGallina   from '../assets/img/Caldo de Gallina.jpg'
import imgTallarines     from '../assets/img/Tallarines al Pesto.webp'
import imgEnsalada       from '../assets/img/Ensalada mixta.jpg'
import imgMuña           from '../assets/img/Muña.webp'
import imgMenta          from '../assets/img/Menta.jpg'
import imgHierbaLuisa    from '../assets/img/Hierba Luisa.jpg'
import imgManzanilla     from '../assets/img/Manzanilla.webp'
import imgJamaica        from '../assets/img/Jamaica.jpg'
import imgCalentito      from '../assets/img/Calentito.webp'
import imgAnis           from '../assets/img/Anís.webp'
import imgIncaKola       from '../assets/img/Inca Cola.jpg'
import imgCocaCola       from '../assets/img/Coca Cola.jpg'
import imgPepsi          from '../assets/img/Pepsi.jpg'
import imgFanta          from '../assets/img/Fanta.webp'
import imgAgua           from '../assets/img/Agua Cielo.jpg'

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
  { id: 'pastas',       label: 'Pastas' },
  { id: 'acompanantes', label: 'Acompañantes' },
  { id: 'bebidas',      label: 'Gaseosas y Agua' },
  { id: 'infusiones',   label: 'Infusiones y Tragos' },
]

export const menuItems: MenuItem[] = [
  // ── ZONA PARRILLAS ──────────────────────────────────────────
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
    name: 'Molleja + Anticucho',
    description: 'Combinación de molleja y anticucho a la parrilla. Incluye choclo, papas y ensalada.',
    price: 15,
    category: 'anticuchos',
    image: imgMollejaRachi,
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 8,
    name: 'Anticucho + Rachi',
    description: 'Combo de anticucho con rachi a la parrilla. Incluye choclo, papas y ensalada.',
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
    price: 20,
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
    image: imgCaldoGallina,
    badge: 'Más Pedido',
    details: { extras: [] },
  },
  {
    id: 11,
    name: 'Chicharrón de Pollo',
    description: 'Chicharrón de pollo crocante y bien sazonado, frito en su punto exacto.',
    price: 15,
    category: 'alitas',
    image: imgChicharron,
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

  // ── PASTAS ───────────────────────────────────────────────────
  {
    id: 25,
    name: 'Tallarines al Pesto',
    description: 'Tallarines al pesto preparados al momento. Elige tu complemento favorito.',
    price: 15,
    category: 'pastas',
    image: imgTallarines,
    badge: 'Nuevo',
    details: { extras: ['Con Anticucho', 'Con Chuleta', 'Con Pollo Frito', 'Con Pollo', 'Con Churrasco'] },
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
    name: 'Ensalada Mixta',
    description: 'Porción de ensalada mixta fresca.',
    price: 5,
    category: 'acompanantes',
    image: imgEnsalada,
    details: { extras: [] },
  },

  // ── GASEOSAS Y AGUA ──────────────────────────────────────────
  {
    id: 26,
    name: 'Inca Kola',
    description: 'La bebida dorada del Perú. Disponible en varios tamaños.',
    price: 4,
    category: 'bebidas',
    image: imgIncaKola,
    details: { extras: ['½ Litro — S/ 4', '2 Litros — S/ 8', '3 Litros — S/ 15'] },
  },
  {
    id: 27,
    name: 'Coca Cola',
    description: 'El sabor clásico de siempre. Disponible en varios tamaños.',
    price: 4,
    category: 'bebidas',
    image: imgCocaCola,
    details: { extras: ['½ Litro — S/ 4', '2 Litros — S/ 8', '3 Litros — S/ 15'] },
  },
  {
    id: 28,
    name: 'Pepsi',
    description: 'Pepsi refrescante. Disponible en varios tamaños.',
    price: 4,
    category: 'bebidas',
    image: imgPepsi,
    details: { extras: ['½ Litro — S/ 4', '3 Litros — S/ 15'] },
  },
  {
    id: 29,
    name: 'Fanta Naranja',
    description: 'Fanta sabor naranja, dulce y refrescante.',
    price: 4,
    category: 'bebidas',
    image: imgFanta,
    details: { extras: ['Tamaño normal — S/ 4'] },
  },
  {
    id: 30,
    name: 'Agua Cielo',
    description: 'Agua mineral Cielo, pura y refrescante.',
    price: 2,
    category: 'bebidas',
    image: imgAgua,
    details: { extras: ['½ Litro — S/ 2', '1 Litro — S/ 3'] },
  },

  // ── INFUSIONES Y TRAGOS ──────────────────────────────────────
  {
    id: 17,
    name: 'Muña',
    description: 'Infusión de muña, hierba andina de propiedades digestivas.',
    price: 3,
    category: 'infusiones',
    image: imgMuña,
    details: { extras: [] },
  },
  {
    id: 18,
    name: 'Menta',
    description: 'Infusión de menta fresca, refrescante y digestiva.',
    price: 3,
    category: 'infusiones',
    image: imgMenta,
    details: { extras: [] },
  },
  {
    id: 20,
    name: 'Hierba Luisa',
    description: 'Infusión de hierba luisa, aromática y relajante.',
    price: 3,
    category: 'infusiones',
    image: imgHierbaLuisa,
    details: { extras: [] },
  },
  {
    id: 21,
    name: 'Manzanilla',
    description: 'Infusión de manzanilla, suave y tranquilizante.',
    price: 3,
    category: 'infusiones',
    image: imgManzanilla,
    details: { extras: [] },
  },
  {
    id: 22,
    name: 'Jamaica',
    description: 'Infusión de flor de jamaica, refrescante y con antioxidantes.',
    price: 3,
    category: 'infusiones',
    image: imgJamaica,
    details: { extras: [] },
  },
  {
    id: 23,
    name: 'Calentito',
    description: 'Trago caliente de la casa, perfecto para las noches frías.',
    price: 7,
    category: 'infusiones',
    image: imgCalentito,
    badge: 'Chef',
    details: { extras: [] },
  },
  {
    id: 24,
    name: 'Anís Estrella',
    description: 'Infusión de anís estrella, aromática y reconfortante. Ideal para la digestión.',
    price: 3,
    category: 'infusiones',
    image: imgAnis,
    details: { extras: [] },
  },
]
