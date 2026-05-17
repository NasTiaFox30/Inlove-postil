import React from 'react'
import styles from './Hero.module.css'
import { herodetails } from '../data/products'

export default function Hero() {
  const [hero] = herodetails
  const globalActive = discountConfig.globalEnabled
  const hasAnyDiscount = globalActive && Object.values(discountConfig.categories).some(val => val > 0)

  return (
    <section className={styles.hero} id="hero">
      {/* background */}
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.grain} />
      </div>

      {/* Ліва частина: Контент */}
      <div className={styles.content}>
        <div className={styles.badge}>
          {hero.badge}
        </div>

        <h1 className={styles.title}>
          {hero.title.split(',')[0]},<br />
          {hero.title.split(',')[1] && <em>{hero.title.split(',')[1]}</em>}
        </h1>

        <p className={styles.sub}>
          {hero.sub}
        </p>

        <div className={styles.actions}>
          <a href="#biaz" className={styles.btnPrimary}>Обрати свою тканину</a>
          <a href="#poslugi" className={styles.btnGhost}>Наші додаткові послуги</a>
        </div>

        {/* Елегантні лінійні стрічки статистики */}
        <div className={styles.stats}>
          {hero.stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              {index < hero.stats.length - 1 && <div className={styles.statDivider} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Права частина:  колаж */}
      <div className={styles.visual}>
        <div className={styles.collageContainer}>
          
          {/* Головне велике фото */}
          <div className={styles.mainImageFrame}>
            <img src={hero.mainVisual} alt="Преміальна постільна білизна" className={styles.mainImage} />
            <div className={styles.imageOverlay} />
          </div>

          {/* Інтерактивна плаваюча картка-акцент */}
          <div className={styles.floatingShowcase}>
            <span className={styles.showcaseTag}>Хіт продажів:</span>
            <div className={styles.showcaseRow}>
              <div className={styles.miniSwatch} style={{ background: hero.mainColor }} />
              <p className={styles.showcaseTitle}>{hero.mainText}</p>
            </div>
          </div>

          {/* Додаткова міні-картка з наочною текстурою тканини */}
          <div className={styles.textureCard}>
            <img src={hero.secondaryVisual} alt="Текстура страйп-сатину" className={styles.textureImg} />
            <div className={styles.textureLabel}>~ Elite Texture ~</div>
          </div>

          {/* бейдж акції */}
          <div className={styles.discountCircle}>
            <span className={styles.circlePercentage}>−20%</span>
            <span className={styles.circleText}>на все</span>
          </div>

        </div>
      </div>
    </section>
  )
}