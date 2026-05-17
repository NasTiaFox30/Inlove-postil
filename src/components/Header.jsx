import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { categories } from '../data/products'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    ...categories.map(c => ({ label: c.label, href: `#${c.anchor}` })),
    { label: 'Послуги', href: '#poslugi' },
    { label: 'Доставка', href: '#dostavka' },
    { label: 'Контакти', href: '#kontakty' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoScript}>inlove</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoWord}>postil</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakty" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Замовити
          </a>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Меню"
        >
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>
    </header>
  )
}
