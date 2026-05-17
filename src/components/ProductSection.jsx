import { useState } from 'react'
import styles from './ProductSection.module.css'
import { sizes } from '../data/products'

export default function ProductSection({ category, data, onAddToCart, cartList }) {
  const [activeItem, setActiveItem] = useState(data.items[0])
  const [activeSize, setActiveSize] = useState('poltora')

  const price = data.prices[activeSize]
  const currentSizeObj = sizes.find(s => s.id === activeSize)

  // перевірка, чи саме цей колір ТА розмір уже є в кошику
  const isAlreadyInCart = cartList?.some(
    item => item.id === activeItem.id && item.sizeId === activeSize
  )

  const handleOrderClick = (e) => {
    e.preventDefault()
    
    onAddToCart({
      id: activeItem.id,
      name: activeItem.name,
      nameUa: activeItem.nameUa,
      category: category,
      sizeId: activeSize,
      sizeLabel: currentSizeObj?.label,
      basePriceOriginal: price.original,
      basePriceSale: price.sale,
      image: activeItem.image
    })

    document.getElementById('poslugi')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id={category}>
      {/* Banner */}
      <div className={styles.banner} style={{ '--accent': data.accent }}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerBadge}>{data.titleEn}</div>
          <h2 className={styles.bannerTitle}>{data.title}</h2>
          <p className={styles.bannerSub}>{data.tagline}</p>
          <p className={styles.desc}>{data.description}</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        
        {/* Color swatches */}
        <div className={styles.swatches}>
          <p className={styles.swatchLabel}>Оберіть колір:</p>
          <div className={styles.swatchRow}>
            {data.items.map(item => (
              <button
                key={item.id}
                className={`${styles.swatch} ${activeItem?.id === item.id ? styles.swatchActive : ''}`}
                style={{ '--c': item.color }}
                /* ЗАХИСТ: Просто встановлюємо поточний item без скидання в null */
                onClick={() => setActiveItem(item)}
                title={item.nameUa}
                aria-label={item.nameUa}
              />
            ))}
          </div>
        </div>

        {/* Item detail card */}
        {activeItem && (
          <div className={styles.itemCard}>
            {/* Ліва частина: Велике фото */}
            <div className={styles.itemImageWrapper}>
              <img src={activeItem.image} alt={activeItem.nameUa} className={styles.itemImageLarge} />
            </div>
            
            {/* Права частина: Інформація */}
            <div className={styles.itemInfo}>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemName}>{activeItem.name}</h3>
                  <p className={styles.itemNameUa}>{activeItem.nameUa}</p>
                </div>
              </div>
              
              <hr className={styles.itemDivider} />
              
              <p className={styles.itemDesc}>{activeItem.description}</p>
              
              <div className={styles.itemStatus}>
                <span className={styles.statusDot}></span> 100% натуральна бавовна преміум якості
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className={styles.grid}>
          {data.items.map(item => (
            <div
              key={item.id}
              className={`${styles.card} ${activeItem?.id === item.id ? styles.cardActive : ''}`}
              /* ЗАХИСТ: Замінили умову з null на прямий селект картки */
              onClick={() => setActiveItem(item)}
            >
              <div className={styles.cardColor} style={{ background: item.color }}>
                <img src={item.image} alt={item.nameUa} className={styles.cardImage} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardName}>{item.name}</p>
                <p className={styles.cardNameUa}>{item.nameUa}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Size selector + price */}
        <div className={styles.priceBlock}>
          <div className={styles.sizeSelector}>
            <p className={styles.sizeLabel}>Розмір:</p>
            <div className={styles.sizeBtns}>
              {sizes.map(s => (
                <button
                  key={s.id}
                  className={`${styles.sizeBtn} ${activeSize === s.id ? styles.sizeBtnActive : ''}`}
                  onClick={() => setActiveSize(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p className={styles.sizeSub}>
              {sizes.find(s => s.id === activeSize)?.sublabel}
            </p>
          </div>
          
          <div className={styles.priceBox}>
            <div className={styles.priceRow}>
              <span className={styles.priceOld}>{price.original.toLocaleString('uk-UA')} грн</span>
              <span className={styles.discountBadge}>−20%</span>
            </div>
            <div className={styles.priceSale}>
              {price.sale.toLocaleString('uk-UA')} грн
            </div>
            <p className={styles.priceNote}>зі знижкою</p>
            
            <button onClick={handleOrderClick} className={styles.orderBtn}>
              {isAlreadyInCart ? '✓ Додати ще один' : 'Замовити'}
            </button>
          </div>
        </div>

        <a href="#kontakty" className={styles.catalogLink}>Уточнити деталі →</a>
      </div>
    </section>
  )
}