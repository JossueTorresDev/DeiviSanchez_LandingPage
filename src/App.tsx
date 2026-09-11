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
import type { MenuItem } from './data/menuData'

function AppContent() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

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
