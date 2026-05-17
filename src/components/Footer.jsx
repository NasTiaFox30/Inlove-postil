import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoScript}>inlove</span>
          <span className={styles.logoDot}>.</span>
          <span>postil</span>
        </div>
        <p className={styles.tagline}>Постільна білизна з любов'ю 🌿</p>
        <p className={styles.copy}>© {new Date().getFullYear()} inlove.postil · Усі права захищені</p>
        <a href="https://github.com/NasTiaFox30" target="_blank" rel="noopener noreferrer">
          Made by: Anastasiia Bzova &#0169;
        </a>
      </div>
    </footer>
  )
}
