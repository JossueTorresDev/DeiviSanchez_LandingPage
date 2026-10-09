import { createContext, useContext, useState, useCallback } from 'react'
import type { MenuItem } from '../data/menuData'

export type CartItem = {
  item: MenuItem
  qty: number
  selectedOption?: string  // opción elegida (ej: "Con Anticucho")
  cartKey: string          // id único: itemId + opción
}

type CartContextType = {
  cart: CartItem[]
  total: number
  itemCount: number
  addToCart: (item: MenuItem, selectedOption?: string) => void
  removeFromCart: (cartKey: string) => void
  updateQty: (cartKey: string, qty: number) => void
  clearCart: () => void
  isInCart: (id: number) => boolean
  drawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const addToCart = useCallback((item: MenuItem, selectedOption?: string) => {
    const cartKey = selectedOption ? `${item.id}-${selectedOption}` : `${item.id}`
    setCart((prev) => {
      const existing = prev.find((c) => c.cartKey === cartKey)
      if (existing) {
        return prev.map((c) =>
          c.cartKey === cartKey ? { ...c, qty: c.qty + 1 } : c
        )
      }
      return [...prev, { item, qty: 1, selectedOption, cartKey }]
    })
    setDrawerOpen(true)
  }, [])

  const removeFromCart = useCallback((cartKey: string) => {
    setCart((prev) => prev.filter((c) => c.cartKey !== cartKey))
  }, [])

  const updateQty = useCallback((cartKey: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((c) => c.cartKey !== cartKey))
    } else {
      setCart((prev) =>
        prev.map((c) => (c.cartKey === cartKey ? { ...c, qty } : c))
      )
    }
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const isInCart = useCallback(
    (id: number) => cart.some((c) => c.item.id === id),
    [cart]
  )

  const total = cart.reduce((sum, c) => sum + c.item.price * c.qty, 0)
  const itemCount = cart.reduce((sum, c) => sum + c.qty, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        itemCount,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        isInCart,
        drawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
