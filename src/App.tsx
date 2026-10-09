import { useState } from 'react'
import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import MenuModal from './components/MenuModal'
import Gallery from './components/Gallery'
import Games from './components/Games'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ClosedModal, { closedConfig } from './components/ClosedModal'
import type { MenuItem } from './data/menuData'

function AppContent() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [closedDismissed, setClosedDismissed] = useState(false)

  // Muestra el modal de cierre solo si está activo y no fue descartado
  const showClosed = closedConfig.isClosedToday && !closedDismissed

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu onOpenModal={setSelectedItem} />
        <Games />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Detail modal */}
      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Cart drawer */}
      <CartDrawer />

      {/* Closed today modal */}
      {showClosed && <ClosedModal onClose={() => setClosedDismissed(true)} />}
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
