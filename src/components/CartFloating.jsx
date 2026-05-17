import styles from './CartFloating.module.css'

export default function CartFloating({ cartList, activeCartIndex, onRemove, onSelectActive, onClear }) {
  if (cartList.length === 0) return null

  // Сума кошика
  const totalCartPrice = cartList.reduce((grandTotal, item) => {
    const extrasSum = item.selectedExtras.reduce((sum, ext) => sum + (ext.price || 0), 0)
    return grandTotal + item.basePriceSale + extrasSum
  }, 0)

  const handleEditExtras = (index) => {
    onSelectActive(index)
    document.getElementById('rozmiry')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.cartFloating}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.bagIcon}>🛒</span>
          <h4>Ваш кошик ({cartList.length})</h4>
        </div>
        <button onClick={onClear} className={styles.clearCartLink}>Очистити все</button>
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