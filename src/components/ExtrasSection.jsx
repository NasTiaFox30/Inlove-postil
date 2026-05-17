import styles from './ExtrasSection.module.css'
import { extras } from '../data/products'

export default function ExtrasSection({ activeCartItem, onToggleExtra }) {
  return (
    <section className={styles.section} id="poslugi">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>Крок 2: Персоналізація замовлення</p>
          <h2 className={styles.title}>Додаткові послуги</h2>
          <div className={styles.subBox}>
            {activeCartItem ? (
              <p className={styles.sub}>
                Налаштування послуг для: <strong className={styles.highlight}>{activeCartItem.nameUa} ({activeCartItem.sizeLabel})</strong>
              </p>
            ) : (
              <p className={styles.sub}>
                Будь ласка, оберіть спершу комплект постілі вище або натисніть "✨" в кошику, щоб підібрати послуги.
              </p>
            )}
          </div>
        </div>

        {/* Extras Grid */}
        <div className={styles.extras}>
          <div className={styles.extraGrid}>
            {extras.map((e, i) => {
              // Перевіряємо статус послуги саме для обраного активного елемента
              const isSelected = activeCartItem?.selectedExtras.some(item => item.label === e.label)
              
              return (
                <button
                  key={i}
                  disabled={!activeCartItem}
                  className={`${styles.extraCard} ${isSelected ? styles.extraCardActive : ''} ${!activeCartItem ? styles.disabledCard : ''}`}
                  onClick={() => onToggleExtra(e)}
                >
                  <div className={styles.checkbox}>
                    {isSelected ? '✓' : ''}
                  </div>
                  <div className={styles.extraTextContainer}>
                    <p className={styles.extraLabel}>{e.label}</p>
                    <p className={styles.extraPrice}>{e.price ? `+ ${e.price} грн` : 'Уточнюється у продавця'}</p>
                  </div>
                </button>
              )
            })}
          </div>
          <p className={styles.extrasNote}>
            * Додані послуги розраховуються індивідуально для вибраного комплекту білизни.
          </p>
        </div>
      </div>
    </section>
  )
}