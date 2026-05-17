import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { categories, headerdetails } from '../data/products'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // БЛОКУВАННЯ СКРОЛУ ПРИ ВІДКРИТТІ МЕНЮ
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // Запобіжник: якщо компонент демонтується, повертаємо скрол
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    ...categories.map(c => ({ label: c.label, href: `#${c.anchor}` })),
    ...(headerdetails?.navLinks || []),
  ]

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        
        <a href="#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          {headerdetails?.logoImg && <img src={headerdetails.logoImg} alt="Logo" className={styles.logoImg} />}
          <span className={styles.logoScript}>{headerdetails?.logo?.script || 'inlove'}</span>
          <span className={styles.logoDot}>{headerdetails?.logo?.dot || '.'}</span>
          <span className={styles.logoWord}>{headerdetails?.logo?.word || 'postil'}</span>
        </a>

        {/* Мобільна адаптація */}
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
          className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
