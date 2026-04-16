# TaxSafar 2.0 — Complete UI/UX Redesign

> A premium, modern redesign of [TaxSafar](https://taxsafar.com) — India's all-in-one Tax & Compliance platform.

![TaxSafar 2.0 Preview](./docs/hero-preview.png)

---

## 🏗️ Architecture Overview

### HLD — High Level Design
```
User
  └──▶ Browser
         └──▶ React SPA (Vite)
                ├── Lenis (Smooth Scroll Engine)
                ├── Framer Motion (Animation Layer)
                └── Component Tree
                       ├── Navbar          (Glassmorphic, sticky, dropdown)
                       ├── Hero            (3D parallax, animated dashboard card)
                       ├── Services        (Mouse-tracking 3D tilt cards)
                       ├── Stats           (Animated counter section)
                       ├── About           (Mission/vision floating cards)
                       ├── Contact         (Animated form, focus states)
                       ├── Footer          (Dark brand footer)
                       └── WhatsAppFloat   (Sticky CTA button)
```

### LLD — Low Level Design
```
src/
├── main.jsx                    # React entry point
├── App.jsx                     # Root component — mounts Lenis scroll hook
├── index.css                   # Design system: tokens, utilities, typography
├── App.css                     # (empty — styles in component files)
│
├── hooks/
│   └── useLenis.js             # Lenis smooth scroll initializer hook
│
└── components/
    ├── Navbar/
    │   ├── Navbar.jsx          # Glassmorphic nav with AnimatePresence dropdown
    │   └── Navbar.css
    ├── Hero/
    │   ├── Hero.jsx            # useMotionValue mouse parallax + stagger entry
    │   └── Hero.css
    ├── Services/
    │   ├── Services.jsx        # 3D perspective tilt on mouse + spotlight glow
    │   └── Services.css
    ├── Stats/
    │   ├── Stats.jsx           # useInView animated number counters
    │   └── Stats.css
    ├── About/
    │   ├── About.jsx           # Mission/vision card layout
    │   └── About.css
    ├── Contact/
    │   ├── Contact.jsx         # Animated form with success state
    │   └── Contact.css
    ├── Footer/
    │   ├── Footer.jsx          # Dark 4-column brand footer
    │   └── Footer.css
    └── WhatsAppFloat/
        ├── WhatsAppFloat.jsx   # Sticky WhatsApp CTA with spring animation
        └── WhatsAppFloat.css
```

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#16a34a` | Primary green (brand color) |
| `--primary-light` | `#22c55e` | Hover states, gradients |
| `--primary-dark` | `#15803d` | Button pressed states |
| `--primary-glow` | `rgba(22,163,74,0.15)` | Focus rings |
| `--text-primary` | `#0f172a` | Body text |
| `--text-secondary` | `#475569` | Subtext |
| `--bg` | `#ffffff` | Page background |
| `--bg-subtle` | `#f8fafc` | Alternate section background |

### Typography
- **Display/Headings**: `Outfit` (800, 700 weight) — geometric, modern SaaS feel
- **Body/UI**: `Inter` (300–700) — highly legible, industry standard

### Spacing Scale
- Base unit: `4px`
- Scale: `4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96px`

### Key Animations
- **Lenis**: 1.2s duration, custom ease `1 - 2^(-10t)` (weighted scroll)
- **Entry**: `0.7s` ease `[0.22, 1, 0.36, 1]` (overshoot spring feel)
- **Stagger**: `0.1s` between children in lists/grids
- **3D Tilt**: `8deg` max rotation on service cards
- **Counter**: `1.8s` ease-out cubic for number animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- npm `>=9`

### Development
```bash
npm install
npm run dev         # → http://localhost:5173
```

### Production Build
```bash
npm run build       # Output: dist/
npm run preview     # Preview production build
```

### Lint
```bash
npm run lint
```

---

## ✅ SDLC Compliance

| Phase | Status | Details |
|---|---|---|
| **Requirements** | ✅ | Analyzed original taxsafar.com, extracted all content |
| **HLD** | ✅ | Component tree, data flow, animation strategy defined |
| **LLD** | ✅ | File-level structure, CSS tokens, hook architecture |
| **Design System** | ✅ | Tokens, typography, spacing, animation standards |
| **Implementation** | ✅ | All 8 components built with Framer Motion + Lenis |
| **Testing** | ✅ | ESLint pass (0 errors), Production build pass (0 errors) |
| **Data Accuracy** | ✅ | All content verified against original taxsafar.com |
| **Accessibility** | ✅ | ARIA labels on buttons, semantic HTML5 structure |
| **Performance** | ✅ | 22KB CSS gzip: 4.77KB, JS gzip: 116KB |
| **Deployment** | ✅ | Production build ready in `dist/` |

---

## 🔍 Data Accuracy Verification

All data sourced directly from [taxsafar.com](https://taxsafar.com):

| Datum | Original | 2.0 |
|---|---|---|
| Phone | +91 97848 18899 | ✅ Matched |
| Email | support@taxsafar.com | ✅ Matched |
| Rating | 4.78/5.0 (10K+) | ✅ Matched |
| CAs | 50+ | ✅ Matched |
| Rating Badge | A+ | ✅ Matched |
| Address | Jaipur Electric Market, Jaipur, Rajasthan 302018 | ✅ Matched |
| Company | Swilesure Private Limited | ✅ Matched |
| Services | 8 services | ✅ All 8 matched |

---

## 📦 Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| framer-motion | 12 | Animations & transitions |
| lenis | 1.3 | Smooth scroll |
| lucide-react | latest | Icons |
| react-router-dom | 7 | Routing (ready) |
| clsx | 2 | Conditional classnames |

---

## 🏆 Competitive Advantages Over Original

1. **Framer-quality smooth scroll** — Lenis with weighted easing
2. **3D mouse-tracking cards** — CSS perspective tilt on Services grid
3. **Live animated counters** — Triggered on scroll-into-view
4. **Interactive hero dashboard** — Mock CA portal card with progress bar
5. **Glassmorphic navbar** — Blurs background on scroll
6. **Success state form** — Animated spring success screen after submit
7. **WhatsApp float button** — Spring-animated, mobile-collapsible
8. **Premium typography** — Outfit + Inter vs. generic serif fonts on original

---

*Built as a competition redesign entry — TaxSafar 2.0 © 2026*
