import { useState } from 'react'
import styles from './ContactSection.module.css'

export default function ContactSection({ cartList, onClearCart }) {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // Перевіряємо, чи є товари в кошику
  const hasItems = cartList.length > 0

  // Рахуємо загальну фінальну касу
  const totalOrderPrice = cartList.reduce((grandTotal, item) => {
    const extrasSum = item.selectedExtras.reduce((sum, ext) => sum + (ext.price || 0), 0)
    return grandTotal + item.basePriceSale + extrasSum
  }, 0)

  const handleSubmit = e => {
    e.preventDefault()

    let payload = {}

    if (hasItems) {
      // Сценарій 1: Оформлення покупки
      const itemsSummary = cartList.map((item, idx) => {
        const extrasList = item.selectedExtras.map(e => e.label).join(', ')
        return `${idx + 1}. ${item.nameUa} (${item.sizeLabel}) ${extrasList ? `[Послуги: ${extrasList}]` : ''}`
      }).join('\n')

      payload = {
        type: "ЗАМОВЛЕННЯ",
        name: form.name,
        phone: form.phone,
        userComment: form.comment,
        orderedItems: itemsSummary,
        totalPrice: totalOrderPrice
      }
    } else {
      // Сценарій 2: Просто запитання / консультація
      payload = {
        type: "ЗАПИТАННЯ / КОНСУЛЬТАЦІЯ",
        name: form.name,
        phone: form.phone,
        userQuestion: form.comment
      }
    }

    console.log("Фінальний пакет даних для Telegram/API:", payload)
    
    setSent(true)
    onClearCart() // Очищуємо кошик, якщо він був заповнений
  }

  return (
    <section className={styles.section} id="kontakty">
      <div className={styles.inner}>
        
        {/* Ліва частина: Динамічний текст або Чек-аут кошика */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            {hasItems ? 'Оформлення' : 'Консультація'}
          </p>
          <h2 className={styles.title}>
            {hasItems ? 'Ваше замовлення' : 'Залишіть заявку'}
          </h2>
          
          {hasItems ? (
            /* Віджети кошика, якщо товар обрано */
            <div className={styles.checkoutCartBlock}>
              <div className={styles.checkoutItemsList}>
                {cartList.map((item) => {
                  const itemExtrasPrice = item.selectedExtras.reduce((sum, e) => sum + (e.price || 0), 0)
                  const itemTotalPrice = item.basePriceSale + itemExtrasPrice

                  return (
                    <div key={item.cartId} className={styles.checkoutItemRow}>
                      <div className={styles.checkoutItemMain}>
                        <span className={styles.checkoutItemName}>{item.nameUa}</span>
                        <span className={styles.checkoutItemMeta}>({item.sizeLabel})</span>
                        {item.selectedExtras.length > 0 && (
                          <div className={styles.checkoutItemExtras}>
                            {item.selectedExtras.map((ext, i) => (
                              <span key={i} className={styles.checkoutExtraBadge}>+{ext.label}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className={styles.checkoutItemPrice}>{itemTotalPrice.toLocaleString('uk-UA')} грн</span>
                    </div>
                  )
                })}
              </div>
              
              <div className={styles.checkoutTotalRow}>
                <span>Разом до оплати:</span>
                <strong>{totalOrderPrice.toLocaleString('uk-UA')} грн</strong>
              </div>
            </div>
          ) : (
            /* Текст для консультації, якщо кошик порожній */
            <p className={styles.sub}>
              Якщо у вас є питання або сумніви — звертайтесь, заповнивши заявку! Ми постараємося відповісти на всі питання та допомогти з вибором.
            </p>
          )}
        </div>

        {/* Права частина: Інтерактивна розумна форма */}
        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>🎉</div>
              <h3>{hasItems ? 'Дякуємо за замовлення!' : 'Заявку прийнято!'}</h3>
              <p>
                {hasItems 
                  ? "Ми вже отримали делікатну специфікацію вашого кошика й скоро зателефонуємо."
                  : "Ми отримали ваше запитання. Менеджер зв'яжеться з вами найближчим часом, щоб допомогти."}
              </p>
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
                  required
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
                {/* Динамічний Лейбл та зірочка обов'язковості */}
                <label className={styles.label}>
                  {hasItems ? "Додаткові побажання (необов'язково)" : "Ваше запитання чи побажання *"}
                </label>
                <textarea
                  className={styles.textarea}
                  name="comment"
                  rows={4}
                  /* Динамічний placeholder */
                  placeholder={hasItems 
                    ? "Наприклад: колір коробки, час для дзвінка чи уточнення розмірів..." 
                    : "Напишіть, що саме вас цікавить або який колір/тканину допомогти підібрати..."
                  }
                  /* Поле обов'язкове ТІЛЬКИ якщо кошик порожній */
                  required={!hasItems}
                  value={form.comment}
                  onChange={handleChange}
                />
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                {hasItems ? 'Підтвердити замовлення' : 'Надіслати запитання'}
              </button>
              
              <p className={styles.formNote}>
                {hasItems 
                  ? "* Задайте свої побажання в полі \"Додаткові побажання\" за потреби, і ми зв'яжемося з вами для уточнення деталей."
                  : "* Менеджер відповість на всі ваші запитання в Telegram або по телефону."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}