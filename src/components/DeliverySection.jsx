import styles from './DeliverySection.module.css'
import { features } from '../data/products'

export default function DeliverySection() {
  return (
    <section className={styles.section} id="dostavka">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>Доставка та оплата</p>
          <h2 className={styles.title}>Доставимо з любов'ю 💚</h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#kontakty" className={styles.ctaBtn}>Замовити зворотній дзвінок</a>
        </div>
      </div>
    </section>
  )
}
