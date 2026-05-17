import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import ExtrasSection from './components/ExtrasSection'
import DeliverySection from './components/DeliverySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CartFloating from './components/CartFloating'
import { products } from './data/products'

export default function App() {
  const [cartList, setCartList] = useState([])
  const [activeCartIndex, setActiveCartIndex] = useState(null)

  // Додавання нової постілі до списку кошика
  const addToCart = (productInfo) => {
    const newItem = {
      cartId: Date.now(), // Унікальний ID 
      id: productInfo.id,
      name: productInfo.name,
      nameUa: productInfo.nameUa,
      category: productInfo.category,
      sizeId: productInfo.sizeId,
      sizeLabel: productInfo.sizeLabel,
      basePriceOriginal: productInfo.basePriceOriginal,
      basePriceSale: productInfo.basePriceSale,
      image: productInfo.image,
      selectedExtras: [] // пусто
    }

    setCartList(prev => {
      const updated = [...prev, newItem]
      // Автоматично робимо щойно доданий товар активним для редагування послуг
      setActiveCartIndex(updated.length - 1)
      return updated
    })
  }

  // Перемикання додаткових послуг для АКТИВНОГО елемента кошика
  const toggleExtra = (extra) => {
    if (activeCartIndex === null || !cartList[activeCartIndex]) return

    setCartList(prev => {
      return prev.map((item, index) => {
        if (index !== activeCartIndex) return item

        const exists = item.selectedExtras.some(e => e.label === extra.label)
        const updatedExtras = exists
          ? item.selectedExtras.filter(e => e.label !== extra.label)
          : [...item.selectedExtras, extra]

        return { ...item, selectedExtras: updatedExtras }
      })
    })
  }

  // Видалення конкретного товару за його індексом
  const removeFromCart = (indexToRemove) => {
    setCartList(prev => {
      const updated = prev.filter((_, idx) => idx !== indexToRemove)
      
      // Коригуємо активний індекс для послуг після видалення
      if (updated.length === 0) {
        setActiveCartIndex(null)
      } else if (activeCartIndex === indexToRemove) {
        setActiveCartIndex(updated.length - 1)
      } else if (activeCartIndex > indexToRemove) {
        setActiveCartIndex(prev => prev - 1)
      }
      return updated
    })
  }

  // Очищення всього кошика
  const clearCart = () => {
    setCartList([])
    setActiveCartIndex(null)
  }

  // Об'єкт активного товару, який ми передаємо в ExtrasSection
  const activeCartItem = activeCartIndex !== null ? cartList[activeCartIndex] : null

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductSection category="biaz" data={products.biaz} onAddToCart={addToCart} />
        <ProductSection category="satin" data={products.satin} onAddToCart={addToCart} />
        <ProductSection category="stripe" data={products.stripe} onAddToCart={addToCart} />
        
        <ExtrasSection 
          activeCartItem={activeCartItem} 
          onToggleExtra={toggleExtra} 
        />
        <DeliverySection />
        <ContactSection cartList={cartList} onClearCart={clearCart} />
      </main>
      <Footer />

      {/* Передаємо весь список, можливість видаляти та змінювати активну позицію */}
      <CartFloating 
        cartList={cartList} 
        activeCartIndex={activeCartIndex}
        onRemove={removeFromCart} 
        onSelectActive={setActiveCartIndex}
        onClear={clearCart} 
      />
    </>
  )
}