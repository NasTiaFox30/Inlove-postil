# Inlove.postil — Landing

Bed linen website on React + Vite.

## Quick Start

```bash
# 1. Go to the project folder
cd inlove-postil

# 2. Install dependencies
npm install

# 3. Run in development mode
npm run dev
# → open http://localhost:5173

# 4. Build for production
npm run build
```

## Project structure

```
Inlove.postil/
├─ dist/
│  ├─ assets/
│  │  ├─ index-B_OLPNcM.js
│  │  └─ index-BaAZo24h.css
│  ├─ media/
│  │  ├─ IMG_2331.JPG
│  │  ├─ IMG_2332.JPG
│  │  ├─ IMG_2333.JPG
│  │  ├─ IMG_2334.JPG
│  │  ├─ IMG_2335.JPG
│  │  ├─ IMG_2336.PNG
│  │  ├─ IMG_2337.PNG
│  │  ├─ IMG_2338.PNG
│  │  ├─ IMG_2339.PNG
│  │  ├─ IMG_2340.PNG
│  │  ├─ IMG_2341.PNG
│  │  ├─ IMG_2342.PNG
│  │  ├─ IMG_2343.PNG
│  │  ├─ IMG_2344.PNG
│  │  └─ IMG_2345.PNG
│  ├─ favicon.svg
│  ├─ index.html
│  └─ texture.jpg
├─ public/
│  ├─ media/
│  │  ├─ IMG_2331.JPG
│  │  ├─ IMG_2332.JPG
│  │  ├─ IMG_2333.JPG
│  │  ├─ IMG_2334.JPG
│  │  ├─ IMG_2335.JPG
│  │  ├─ IMG_2336.PNG
│  │  ├─ IMG_2337.PNG
│  │  ├─ IMG_2338.PNG
│  │  ├─ IMG_2339.PNG
│  │  ├─ IMG_2340.PNG
│  │  ├─ IMG_2341.PNG
│  │  ├─ IMG_2342.PNG
│  │  ├─ IMG_2343.PNG
│  │  ├─ IMG_2344.PNG
│  │  └─ IMG_2345.PNG
│  ├─ favicon.svg
│  └─ texture.jpg
├─ src/
│  ├─ assets/
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ components/
│  │  ├─ CartFloating.jsx
│  │  ├─ CartFloating.module.css
│  │  ├─ ContactSection.jsx
│  │  ├─ ContactSection.module.css
│  │  ├─ DeliverySection.jsx
│  │  ├─ DeliverySection.module.css
│  │  ├─ ExtrasSection.jsx
│  │  ├─ ExtrasSection.module.css
│  │  ├─ Footer.jsx
│  │  ├─ Footer.module.css
│  │  ├─ Header.jsx
│  │  ├─ Header.module.css
│  │  ├─ Hero.jsx
│  │  ├─ Hero.module.css
│  │  ├─ ProductSection.jsx
│  │  └─ ProductSection.module.css
│  ├─ data/
│  │  └─ products.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ README.md.local
└─ vite.config.js
```

## How to change content

- **Products, prices, descriptions** → `src/data/products.js`
- **Color palette** → `src/index.css` (CSS variables)
