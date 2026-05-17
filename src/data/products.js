export const headerdetails = {
  logoImg: '/Inlove-postil/favicon.svg',
  logo: {
    script: 'inlove',
    dot: '.',
    word: 'postil',
  },
  navLinks: [
    { label: 'Послуги', href: '#poslugi' },
    { label: 'Доставка', href: '#dostavka' },
    { label: 'Контакти', href: '#kontakty' },
  ],
}


export const herodetails = [
  {
    title: 'Постільна білизна, яку хочеться відчувати',
    sub: 'Створюємо простір для твоїх найтепліших снів. Натуральна 100% бавовна у преміальних текстурах: шовковистий сатин, затишна бязь та готельний страйп-сатин.',
    badge: 'Особлива пропозиція: знижка −20%',
    stats: [
      { num: '100%', label: 'Бавовна' },
      { num: '3', label: 'Текстури' },
      { num: '15', label: 'Відтінків' },
      { num: '4', label: 'Розміри' },
    ],
    mainText: "Grey Balance",
    mainColor: '#9E9E9E',
    mainVisual: '/Inlove-postil/media/IMG_2339.PNG',
    secondaryVisual: '/Inlove-postil/texture.jpg',     // Переконайся, що цей файл теж лежить у папці public/
  },
]

export const categories = [
  { id: 'biaz', label: 'Бязь', labelEn: 'Cotton Basic', anchor: 'biaz' },
  { id: 'satin', label: 'Сатин', labelEn: 'Signature Luxe', anchor: 'satin' },
  { id: 'stripe', label: 'Страйп-сатин', labelEn: 'Hotel Luxe', anchor: 'stripe' },
]

export const sizes = [
  {
    id: 'poltora',
    label: 'Полуторний',
    sublabel: 'Підковдра 150×220 · Простирадло 155×220 · Наволочки 50×70',
  },
  {
    id: 'dvospalnyi',
    label: 'Двоспальний',
    sublabel: 'Підковдра 180×220 · Простирадло 200×220 · Наволочки 50×70',
  },
  {
    id: 'evro',
    label: 'Євро',
    sublabel: 'Підковдра 200×220 · Простирадло 220×240 · Наволочки 50×70',
  },
  {
    id: 'simeinyi',
    label: 'Сімейний',
    sublabel: 'Підковдра 150×220 (×2) · Простирадло 220×240 · Наволочки 50×70',
  },
]

// Знижки
export const discountConfig = {
  globalEnabled: true, // true — акції працюють, false — повністю вимкнути знижки на всьому сайті
  categories: {
    biaz: 20,
    satin: 20,
    stripe: 20,
    // щоб вимкнути знижку на якусь категорію — поставити значення на 0
  }
}

export const products = {
  biaz: {
    title: 'Бязь',
    titleEn: 'Cotton Basic',
    tagline: 'Натуральна та практична',
    description: '~ дихаюча, міцна, зносостійка. Ідеальна для щоденного використання. ~',
    accent: '#C4A882',
    items: [
      {
        id: 'b1',
        name: 'Pure Cotton White',
        nameUa: 'Білий бязь',
        image: '/Inlove-postil/media/IMG_2336.PNG',
        color: '#F0EDE8',
        description: 'Чистота, яка відчувається з першого дотику. Бязь зі 100% бавовни — натуральна, міцна і приємна до тіла тканина без зайвого блиску. Білий колір залишається свіжим навіть після багаторазового прання.',
      },
      {
        id: 'b2',
        name: 'Soft Sand',
        nameUa: 'Бежевий бязь',
        image: '/Inlove-postil/media/IMG_2337.PNG',
        color: '#D4B896',
        description: 'Теплий бежевий відтінок створює атмосферу спокою і затишку. Натуральна бязь добре дихає і не викликає подразнень. Зберігає форму і вигляд навіть після частого прання.',
      },
      {
        id: 'b3',
        name: 'Cocoa Dream',
        nameUa: 'Шоколадний бязь',
        image: '/Inlove-postil/media/IMG_2338.PNG',
        color: '#6B4226',
        description: 'Глибокий шоколадний колір додає інтер\'єру тепла і характеру. Зносостійка тканина, яка чудово підходить для щоденного використання. Добре тримає колір з часом.',
      },
      {
        id: 'b4',
        name: 'Grey Balance',
        nameUa: 'Сірий бязь',
        image: '/Inlove-postil/media/IMG_2339.PNG',
        color: '#9E9E9E',
        description: 'Стриманий сірий — вибір тих, хто цінує мінімалізм і універсальність. Не електризується, легко доглядається і довго зберігає охайний вигляд.',
      },
      {
        id: 'b5',
        name: 'Graphite Night',
        nameUa: 'Темно-сірий бязь',
        image: '/Inlove-postil/media/IMG_2340.PNG',
        color: '#4A4A4A',
        description: 'Глибокий графітовий відтінок для сучасних інтер\'єрів. Надійна, практична тканина, яка витримує багаторазові прання без втрати якості. Лаконічно. Сучасно.',
      },
    ],
    prices: {
      poltora:    { original: 3432, sale: 2860 },
      dvospalnyi: { original: 4668, sale: 3890 },
      evro:       { original: 5100, sale: 4250 },
      simeinyi:   { original: 5832, sale: 4860 },
    },
  },

  satin: {
    title: 'Сатин',
    titleEn: 'Signature Luxe',
    tagline: 'Шовковиста розкіш кожної ночі',
    description: '~ гладенька поверхня з делікатним блиском. Відчуття преміальності щодня ~',
    accent: '#7BBFAA',
    items: [
      {
        id: 's1',
        name: 'Desert Veil',
        nameUa: 'Бежевий сатин',
        image: '/Inlove-postil/media/IMG_2341.PNG',
        color: '#C9A87C',
        description: 'Теплий бежевий відтінок із м\'яким, обволікаючим характером. Сатинова поверхня з делікатним блиском — ефект дорогої стриманої розкоші. Натуральна бавовна забезпечує комфортний мікроклімат.',
      },
      {
        id: 's2',
        name: 'Truffle Noir',
        nameUa: 'Шоколадний сатин',
        image: '/Inlove-postil/media/IMG_2342.PNG',
        color: '#5C3317',
        description: 'Глибокий, насичений відтінок темного трюфеля. Гладенька текстура м\'яко відбиває світло, додаючи тепла і глибини. Зносостійка, зберігає інтенсивність кольору з часом.',
      },
      {
        id: 's3',
        name: 'Graphite Silk',
        nameUa: 'Gradhite Сатин',
        image: '/Inlove-postil/media/IMG_2343.PNG',
        color: '#3D3D3D',
        description: 'Холодний графіт із благородним підтоном. Шовкова поверхня з витонченим блиском, що створює ефект глибини. Не електризується і забезпечує максимальний комфорт.',
      },
      {
        id: 's4',
        name: 'Ivory Whisper',
        nameUa: 'Молочний сатин',
        image: '/Inlove-postil/media/IMG_2344.PNG',
        color: '#F5EFE0',
        description: 'Ніжний молочний відтінок із м\'яким теплим сяйвом. Огортає легкістю і дарує відчуття спокою. Делікатний до шкіри, повітропроникний — ідеальний для щоденного відпочинку.',
      },
      {
        id: 's5',
        name: 'Blush Serenity',
        nameUa: 'Пудровий сатин',
        image: '/Inlove-postil/media/IMG_2345.PNG',
        color: '#E8B4B0',
        description: 'Тонкий пудровий відтінок, що додає ніжності та витонченості. Шовкова поверхня з легким блиском — дорого і сучасно. Атмосфера спокою, до якої хочеться повертатися.',
      },
    ],
    prices: {
      poltora:    { original: 4428, sale: 3690 },
      dvospalnyi: { original: 5328, sale: 4440 },
      evro:       { original: 5520, sale: 4600 },
      simeinyi:   { original: 6780, sale: 5650 },
    },
  },

  stripe: {
    title: 'Страйп-сатин',
    titleEn: 'Hotel Luxe',
    tagline: 'Естетика 5-зіркового готелю',
    description: '~ класична смужка з преміальним блиском. Як у найкращих готелях світу.',
    accent: '#A89FC0',
    items: [
      {
        id: 'st1',
        name: 'Royal Stripe',
        nameUa: 'Білий страйп-сатин',
        image: '/Inlove-postil/media/IMG_2335.JPG',
        color: '#E8E8E0',
        description: 'Естетика п\'ятизіркових готелів у кожній делікатна смужка з благородним блиском — ефект об\'ємної текстури. Щільна, але повітряна тканина дарує свіжість протягом всієї ночі.',
      },
      {
        id: 'st2',
        name: 'Sand Elegance',
        nameUa: 'Бежевий страйп-сатин',
        image: '/Inlove-postil/media/IMG_2334.JPG',
        color: '#C4A070',
        description: 'Теплий бежевий з витонченою смужкою — стримано та дорого. Щільна, гладенька поверхня, відмінно тримає форму. Ідеальний баланс між комфортом і вишуканим стилем.',
      },
      {
        id: 'st3',
        name: 'Graphite Stripe',
        nameUa: 'Сірий страйп-сатин',
        image: '/Inlove-postil/media/IMG_2333.JPG',
        color: '#6E6E6E',
        description: 'Глибокий графітовий із делікатною текстурою смужки — сучасний архітектурний вигляд. Добре дихає і довго зберігає преміальний вигляд. Стримана розкіш для тих, хто обирає мінімалізм.',
      },
      {
        id: 'st4',
        name: 'Ruby Stripe',
        nameUa: 'Червоний страйп-сатин',
        image: '/Inlove-postil/media/IMG_2332.JPG',
        color: '#9B2335',
        description: 'Насичений рубіновий у поєднанні зі смужкою — глибоко і виразно. М\'якість сатину та щільність забезпечують довговічність. Акцентна білизна, яка трансформує простір.',
      },
      {
        id: 'st5',
        name: 'Mocha Stripe',
        nameUa: 'Шоколадний страйп-сатин',
        image: '/Inlove-postil/media/IMG_2331.JPG',
        color: '#4E2A0E',
        description: 'Теплий шоколад із витонченою смужкою — атмосфера затишної елегантності. Щільна, м\'яка, зносостійка тканина з делікатним блиском. Розкіш, яку хочеться відчувати щодня.',
      },
    ],
    prices: {
      poltora:    { original: 4788, sale: 3990 },
      dvospalnyi: { original: 5388, sale: 4490 },
      evro:       { original: 5868, sale: 4890 },
      simeinyi:   { original: 6984, sale: 5820 },
    },
  },
}

export const extras = [
  { label: 'Додаткові наволочки', price: 650 },
  { label: 'Простирадло на резинці', price: 1320 },
  { label: 'Блискавка на підковдрі', price: 200 },
  { label: 'Подарункова коробка', price: 1000 },
  { label: 'Індивідуальні розміри', price: null },
]

export const features = [
  {
    icon: '🚀',
    title: 'Швидка доставка',
    text: 'Відправляємо Новою поштою або кур\'єром. Отримайте замовлення вже наступного дня після відправки.',
  },
  {
    icon: '💳',
    title: 'Зручна оплата',
    text: 'Наявними, банківською карткою або накладений платіж. При кур\'єрській доставці — передоплата 50%.',
  },
  {
    icon: '📦',
    title: 'Акуратна упаковка',
    text: 'Кожен комплект упаковується охайно. За бажанням — подарункова коробка (+1 000 грн).',
  },
  {
    icon: '💬',
    title: 'Особистий підхід',
    text: 'Важко обрати? Напишіть нам — підберемо ідеальний варіант під ваш інтер\'єр та бюджет.',
  },
]