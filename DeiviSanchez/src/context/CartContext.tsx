import { createContext, useContext, useState, useCallback } from 'react'
import type { MenuItem } from '../data/menuData'

export type CartItem = {
  item: MenuItem
  qty: number
}

type CartContextType = {
  cart: CartItem[]
  total: number
  itemCount: number
  addToCart: (item: MenuItem) => void
  removeFromCart: (id: number) => void
  updateQty: (id: number, qty: number) => void
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

  const addToCart = useCallback((item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id)
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      }
      return [...prev, { item, qty: 1 }]
    })
    setDrawerOpen(true)
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id))
  }, [])

  const updateQty = useCallback((id: number, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((c) => c.item.id !== id))
    } else {
      setCart((prev) =>
        prev.map((c) => (c.item.id === id ? { ...c, qty } : c))
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
