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
  // ── ZONA PARRILLAS ──────────────────────────────────────────
  {
    id: 1,
    name: 'Chuleta de Cerdo',
    description: 'Jugosa chuleta de cerdo a la parrilla. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    // Pork chop on grill
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Más Pedido',
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },
  {
    id: 2,
    name: 'Churrasco de Carne',
    description: 'Churrasco de res a la brasa, tierno y sabroso. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    // Grilled beef steak
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Chef',
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },
  {
    id: 3,
    name: 'Pollo a la Plancha',
    description: 'Pechuga de pollo a la plancha, dorada y jugosa. Incluye choclo, papas, ensalada y arroz.',
    price: 15,
    category: 'parrillas',
    // Grilled chicken
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: ['Choclo', 'Papas', 'Ensalada', 'Arroz'] },
  },

  // ── ANTICUCHOS ───────────────────────────────────────────────
  {
    id: 4,
    name: 'Anticuchos',
    description: '3 palitos de anticucho a la brasa. Incluye choclo, papas y ensalada.',
    price: 12,
    category: 'anticuchos',
    // Meat skewers on grill
    image: 'https://images.pexels.com/photos/1105325/pexels-photo-1105325.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Más Pedido',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 5,
    name: 'Mollejitas',
    description: 'Mollejas a la parrilla, crujientes y sazonadas. Incluye choclo, papas y ensalada.',
    price: 10,
    category: 'anticuchos',
    // Grilled offal/giblets - crispy on grill
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 6,
    name: 'Rachi',
    description: 'Rachi a la parrilla, bien sazonado. Incluye choclo, papas y ensalada.',
    price: 10,
    category: 'anticuchos',
    // Grilled meat pieces
    image: 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 7,
    name: 'Mollejita + Rachi',
    description: 'Combinación de mollejitas y rachi a la parrilla. Incluye choclo, papas y ensalada.',
    price: 15,
    category: 'anticuchos',
    // Mixed grill platter
    image: 'https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 8,
    name: 'Anticucho + Molleja o Rachi',
    description: 'Combo de anticucho con molleja o rachi a elección. Incluye choclo, papas y ensalada.',
    price: 15,
    category: 'anticuchos',
    // Skewers combo plate
    image: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Nuevo',
    details: { extras: ['Choclo', 'Papas', 'Ensalada'] },
  },
  {
    id: 9,
    name: 'Mollejita + Rachi + Anticucho',
    description: 'El combo completo: mollejita, rachi y anticucho. Incluye choclo, papas y ensalada.',
    price: 18,
    category: 'anticuchos',
    // Full mixed grill spread
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    // Chicken soup bowl
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
    // Crispy fried chicken
    image: 'https://images.pexels.com/photos/60616/fried-chicken-food-meal-chicken-60616.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 12,
    name: 'Salchipapa',
    description: 'Salchipapa clásica, crujiente y abundante.',
    price: 10,
    category: 'alitas',
    // Fries with sausage
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 13,
    name: 'Alitas BBQ / Acebichada',
    description: '5 piezas de alitas a la parrilla en salsa BBQ o acebichada, a tu elección.',
    price: 15,
    category: 'alitas',
    // BBQ chicken wings
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Más Pedido',
    details: { extras: ['Salsa BBQ', 'Salsa Acebichada'] },
  },

  // ── ACOMPAÑANTES ─────────────────────────────────────────────
  {
    id: 14,
    name: 'Arroz',
    description: 'Porción de arroz blanco.',
    price: 3,
    category: 'acompanantes',
    // White rice bowl
    image: 'https://images.pexels.com/photos/7421224/pexels-photo-7421224.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 15,
    name: 'Ensalada',
    description: 'Porción de ensalada mixta fresca.',
    price: 5,
    category: 'acompanantes',
    // Fresh salad bowl
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },

  // ── INFUSIONES Y TRAGOS ──────────────────────────────────────
  {
    id: 16,
    name: 'Muña',
    description: 'Infusión de muña, hierba andina de propiedades digestivas.',
    price: 3,
    category: 'infusiones',
    // Herbal tea with herbs
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 17,
    name: 'Menta',
    description: 'Infusión de menta fresca, refrescante y digestiva.',
    price: 3,
    category: 'infusiones',
    // Mint tea
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 18,
    name: 'Boldo',
    description: 'Infusión de boldo, ideal para la digestión.',
    price: 3,
    category: 'infusiones',
    // Green herbal tea
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 19,
    name: 'Hierba Luisa',
    description: 'Infusión de hierba luisa, aromática y relajante.',
    price: 3,
    category: 'infusiones',
    // Lemon verbena tea
    image: 'https://images.pexels.com/photos/3593432/pexels-photo-3593432.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 20,
    name: 'Manzanilla',
    description: 'Infusión de manzanilla, suave y tranquilizante.',
    price: 3,
    category: 'infusiones',
    // Chamomile tea
    image: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 21,
    name: 'Jamaica',
    description: 'Infusión de flor de jamaica, refrescante y con antioxidantes.',
    price: 3,
    category: 'infusiones',
    // Hibiscus red flower tea
    image: 'https://images.pexels.com/photos/1587830/pexels-photo-1587830.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 22,
    name: 'Café Pasado',
    description: 'Café pasado de la casa, intenso y aromático.',
    price: 5,
    category: 'infusiones',
    // Black coffee cup
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    details: { extras: [] },
  },
  {
    id: 23,
    name: 'Calentito',
    description: 'Trago caliente de la casa, perfecto para las noches frías.',
    price: 7,
    category: 'infusiones',
    // Hot drink warm mug
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Chef',
    details: { extras: [] },
  },
]
