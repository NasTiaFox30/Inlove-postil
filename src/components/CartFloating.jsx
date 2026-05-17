import { useState, useEffect, useRef } from 'react'
import styles from './CartFloating.module.css'

export default function CartFloating({ cartList, activeCartIndex, onRemove, onSelectActive, onClear }) {
  if (cartList.length === 0) return null

  const [isMinimized, setIsMinimized] = useState(false)
  // Прапорець, який фіксує, що користувач власноруч приховував кошик
  const [wasManuallyMinimized, setWasManuallyMinimized] = useState(false)
  
  const lastScrollY = useRef(0)
  const touchStartX = useRef(0)

  // --- Автоматичне згортання при скролі вниз (працює завжди), розгортання вгору (ТІЛЬКИ якщо не ховали вручну)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsMinimized(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Розгортаємо при скролі вгору, тільки якщо користувач не ховав кошик сам
        if (!wasManuallyMinimized) {
          setIsMinimized(false)
        }
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [wasManuallyMinimized])

  // --- Автоматично розгортаємо кошик при додаванні нового товару (ЯКЩО не було ручного приховування)
  useEffect(() => {
    if (cartList.length > 0 && !wasManuallyMinimized) {
      setIsMinimized(false)
    }
  }, [cartList.length, wasManuallyMinimized])

  // Ручне приховування кошика
  const handleMinimizeHandly = () => {
    setIsMinimized(true)
    setWasManuallyMinimized(true) // Блокуємо авто-появу
  }

  // Ручне відкриття кошика
  const handleMaximizeHandly = () => {
    setIsMinimized(false)
    setWasManuallyMinimized(false) // Знімаємо блок
  }

  // Обробка свайпу праворуч для приховування
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    if (isMinimized) return
    const touchCurrentX = e.touches[0].clientX
    const diffX = touchCurrentX - touchStartX.current

    if (diffX > 60) {
      handleMinimizeHandly()
    }
  }

  const totalCartPrice = cartList.reduce((grandTotal, item) => {
    const extrasSum = item.selectedExtras.reduce((sum, ext) => sum + (ext.price || 0), 0)
    return grandTotal + item.basePriceSale + extrasSum
  }, 0)

  const handleEditExtras = (index) => {
    onSelectActive(index)
    document.getElementById('rozmiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Маленька кругла кнопка
  if (isMinimized) {
    return (
      <button 
        className={styles.cartBadgeMinimized} 
        onClick={handleMaximizeHandly}
        title="Відкрити кошик"
        aria-label="Відкрити кошик"
      >
        <span className={styles.badgeIconLarge}>🛒</span>
        <span className={styles.badgeCount}>{cartList.length}</span>
      </button>
    )
  }

  return (
    <div 
      className={styles.cartFloating}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.bagIcon}>🛒</span>
          <h4>Ваш кошик ({cartList.length})</h4>
        </div>
        
        <button onClick={onClear} className={styles.clearCartLink}>Очистити все</button>
        <button 
            className={styles.minimizeBtn} 
            onClick={handleMinimizeHandly}
            title="Згорнути кошик"
          >
            ➔
          </button>
      </div>

      {/* Список товарів */}
      <div className={styles.itemList}>
        {cartList.map((item, idx) => {
          const itemExtrasPrice = item.selectedExtras.reduce((sum, e) => sum + (e.price || 0), 0)
          const itemTotalPrice = item.basePriceSale + itemExtrasPrice
          const isActiveForEdit = idx === activeCartIndex

          return (
            <div 
              key={item.cartId} 
              className={`${styles.cartItem} ${isActiveForEdit ? styles.cartItemEditing : ''}`}
            >
              <img src={item.image} alt={item.nameUa} className={styles.itemThumb} />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item.nameUa}</p>
                <p className={styles.itemMeta}>Розмір: {item.sizeLabel}</p>
                {item.selectedExtras.length > 0 && (
                  <p className={styles.itemExtrasSummary}>Послуг: +{item.selectedExtras.length}</p>
                )}
                <p className={styles.itemPrice}>{itemTotalPrice.toLocaleString('uk-UA')} грн</p>
              </div>
              
              <div className={styles.itemActions}>
                <button 
                  onClick={() => handleEditExtras(idx)} 
                  className={`${styles.actionBtn} ${isActiveForEdit ? styles.actionBtnActive : ''}`}
                  title="Налаштувати додаткові послуги"
                >
                  ✨
                </button>
                <button 
                  onClick={() => onRemove(idx)} 
                  className={styles.actionBtn} 
                  title="Видалити з кошика"
                >
                  🗑️
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.footer}>
        <div className={styles.priceBlock}>
          <span className={styles.totalLabel}>Загальна сума:</span>
          <span className={styles.totalPrice}>{totalCartPrice.toLocaleString('uk-UA')} грн</span>
        </div>
        <a href="#kontakty" className={styles.checkoutBtn}>Оформити замовлення</a>
      </div>
    </div>
  )
}