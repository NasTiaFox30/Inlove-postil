import { useState, useEffect } from 'react'
import styles from './ContactSection.module.css'

export default function ContactSection({ cartList, onClearCart }) {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (cartList.length > 0) {
      let totalSum = 0
      
      // Генеруємо текстові рядки для кожного товару окремо
      const itemsLines = cartList.map((item, idx) => {
        const itemExtrasSum = item.selectedExtras.reduce((sum, e) => sum + (e.price || 0), 0)
        const itemTotal = item.basePriceSale + itemExtrasSum
        totalSum += itemTotal

        const extrasText = item.selectedExtras.map(e => e.label).join(', ')
        return `${idx + 1}. Постіль "${item.nameUa}" (${item.sizeLabel}) ${extrasText ? `[Послуги: ${extrasText}]` : '[Без доп. послуг]'} — ${itemTotal} грн`
      })

      const finalComment = `НОВЕ ЗАМОВЛЕННЯ:\n${itemsLines.join('\n')}\n\nЗАГАЛЬНА СУМА ДО ОПЛАТИ: ${totalSum} грн.`

      setForm(f => ({ ...f, comment: finalComment }))
    } else {
      setForm(f => ({ ...f, comment: '' }))
    }
  }, [cartList])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Дані замовлення для відправки:", form)
    setSent(true)
    onClearCart()
  }

  return (
    <section className={styles.section} id="kontakty">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Контакти</p>
          <h2 className={styles.title}>Залишіть заявку</h2>
          <p className={styles.sub}>
            Коли ваш кошик повністю сформований відправте заявку. Перевірте згенерований список у полі нижче, вкажіть ваше ім'я та телефон.
          </p>
          <div className={styles.contacts}>
            <a href="https://t.me/inlove_postil" className={styles.contactItem} target="_blank" rel="noreferrer">
              <span className={styles.contactIcon}>✈️</span>
              <span>Telegram: @inlove_postil</span>
            </a>
            <a href="https://instagram.com/inlove.postil" className={styles.contactItem} target="_blank" rel="noreferrer">
              <span className={styles.contactIcon}>📸</span>
              <span>Instagram: @inlove.postil</span>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>🎉</div>
              <h3>Дякуємо за замовлення!</h3>
              <p>Настя вже отримала делікатну специфікацію вашого кошика й скоро зателефонує.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>Ваше ім'я</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Олена"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Телефон або Telegram *</label>
                <input
                  className={styles.input}
                  type="text"
                  name="phone"
                  placeholder="+380 або @username"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Специфікація замовлення</label>
                <textarea
                  className={styles.textarea}
                  name="comment"
                  rows={6} // Збільшимо висоту поля, бо замовлень тепер може бути багато
                  style={{ fontFamily: 'monospace', fontSize: '0.85rem' }} // Зробимо моноширинний красивий вигляд списку
                  placeholder="Кошик порожній..."
                  value={form.comment}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={cartList.length === 0} className={styles.submitBtn}>
                Відправити заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}