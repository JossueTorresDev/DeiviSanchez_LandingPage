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
  { id: 'all', label: 'Todo el Menú' },
  { id: 'cortes', label: 'Cortes Premium' },
  { id: 'parrilladas', label: 'Parrilladas' },
  { id: 'entradas', label: 'Entradas' },
  { id: 'acompanantes', label: 'Acompañantes' },
  { id: 'bebidas', label: 'Bebidas' },
]

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Chuletón de Res',
    description: 'Corte premium de 400g con hueso, sellado en brasa directa. Servido con chimichurri artesanal y papas rústicas.',
    price: 38,
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1607116483302-dfcb21e37f0f?w=600&q=80',
    badge: 'Más Pedido',
    details: {
      weight: '400g',
      cookTime: '18 min',
      allergens: ['Lácteos'],
      extras: ['Chimichurri', 'Salsa BBQ', 'Papas rústicas'],
    },
  },
  {
    id: 2,
    name: 'Entrecot Angus',
    description: 'Corte tierno de 350g de ganado Angus, madurado 21 días. Jugoso, con sabor intenso y textura perfecta.',
    price: 42,
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    badge: 'Chef',
    details: {
      weight: '350g',
      cookTime: '15 min',
      allergens: [],
      extras: ['Sal gruesa', 'Pimienta negra', 'Mantequilla de hierbas'],
    },
  },
  {
    id: 3,
    name: 'Lomo Fino',
    description: 'El corte más suave de la res, 300g cocinado al punto exacto. Acompañado de reducción de vino tinto.',
    price: 45,
    category: 'cortes',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80',
    details: {
      weight: '300g',
      cookTime: '12 min',
      allergens: ['Sulfitos'],
      extras: ['Reducción vino tinto', 'Espárragos', 'Puré rústico'],
    },
  },
  {
    id: 4,
    name: 'Parrillada Familiar',
    description: 'Selección para 4 personas: costillas, chorizos, morcilla, lomo de res y pollo. El festín definitivo.',
    price: 95,
    category: 'parrilladas',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    badge: 'Más Pedido',
    details: {
      weight: '2.5kg',
      cookTime: '35 min',
      allergens: [],
      extras: ['Chimichurri', 'Salsa criolla', 'Pan artesanal', 'Ensalada mixta'],
    },
  },
  {
    id: 5,
    name: 'Parrillada Dúo',
    description: 'Perfecta para dos: costilla de res, chorizos, pechuga a la brasa y entraña. Con guarniciones.',
    price: 58,
    category: 'parrilladas',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    badge: 'Nuevo',
    details: {
      weight: '1.2kg',
      cookTime: '28 min',
      allergens: [],
      extras: ['Salsas a elección', 'Pan de ajo', 'Papas fritas'],
    },
  },
  {
    id: 6,
    name: 'Costillas BBQ',
    description: 'Costillas de cerdo marinadas 24h en salsa BBQ casera. Ahumadas lentamente para una textura perfecta.',
    price: 28,
    category: 'parrilladas',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    details: {
      weight: '600g',
      cookTime: '40 min',
      allergens: ['Gluten'],
      extras: ['Salsa BBQ extra', 'Coleslaw', 'Mazorca asada'],
    },
  },
  {
    id: 7,
    name: 'Provoleta a la Brasa',
    description: 'Queso provolone 250g grillado, con orégano, ají molido y un toque de aceite de oliva.',
    price: 12,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
    details: {
      allergens: ['Lácteos'],
      extras: ['Pan artesanal', 'Tomate cherry'],
    },
  },
  {
    id: 8,
    name: 'Chorizo Artesanal',
    description: 'Dos chorizos de elaboración propia, con especias secretas. Crujientes por fuera, jugosos por dentro.',
    price: 10,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    details: {
      allergens: ['Gluten'],
      extras: ['Chimichurri', 'Pan'],
    },
  },
  {
    id: 9,
    name: 'Papas Rústicas',
    description: 'Papas en gajos con piel, sazonadas con romero, ajo y aceite de oliva. Asadas al horno de leña.',
    price: 7,
    category: 'acompanantes',
    image: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=600&q=80',
    details: {
      allergens: [],
      extras: ['Salsa ranch', 'Aioli'],
    },
  },
  {
    id: 10,
    name: 'Ensalada Mixta',
    description: 'Lechuga, tomate, pepino, zanahoria rallada y aderezo de mostaza y miel.',
    price: 8,
    category: 'acompanantes',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    details: {
      allergens: ['Mostaza'],
      extras: [],
    },
  },
  {
    id: 11,
    name: 'Limonada Natural',
    description: 'Limonada fresca preparada al momento, con o sin gas. Endulzada con azúcar de caña.',
    price: 5,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
    details: {
      allergens: [],
      extras: ['Con gas', 'Sin gas', 'Con jengibre'],
    },
  },
  {
    id: 12,
    name: 'Sangría de la Casa',
    description: 'Vino tinto con frutas de temporada, naranja, canela y un toque de brandy. Jarra para dos.',
    price: 18,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&q=80',
    badge: 'Chef',
    details: {
      allergens: ['Sulfitos', 'Alcohol'],
      extras: ['Jarra completa', 'Copa individual'],
    },
  },
]
