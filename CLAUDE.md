# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Vite HMR)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint — zero warnings allowed (--max-warnings 0)
```

No test runner is configured.

## Stack

React 18 + Vite, Three.js via React Three Fiber/Drei, Framer Motion for DOM animations, Tailwind CSS, EmailJS for contact form.

## Architecture

### Navigation
Single-page app using BrowserRouter. Navigation is hash-anchor based (`#about`, `#contact`) — sections have matching `id` spans — not route-based navigation.

### Content data
`src/constants/index.js` is the single source of truth for all displayed content: `navLinks`, `services`, `technologies`, `projects`, and (currently commented-out) `experiences`/`testimonials`. Update content here, not in components.

### 3D models
GLTF models live in the `public/` folder (not `src/assets/`), referenced via relative paths (`./cinnamoroll/scene.gltf`, `./earth/scene.gltf`). Canvas components use `frameloop="demand"` to reduce GPU usage. Mobile scaling is handled by a `matchMedia('(max-width: 500px)')` check inside canvas components.

### Section animation pattern
Every main section (About, Tech, Works, Contact) is wrapped by the `SectionWrapper` HOC (`src/hoc/SectionWrapper.jsx`), which applies a `staggerContainer` Framer Motion variant to create cascading entrance effects on scroll. Animation variant factories (textVariant, fadeIn, zoomIn, slideIn, staggerContainer) live in `src/utils/motion.js`. Reusable Tailwind class strings (heroHeadText, sectionHeadText, padding) live in `src/styles.js`.

### Environment variables
EmailJS credentials are required in `.env`:
```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

### What's currently disabled
`Experience` and `Feedbacks` sections are imported in `App.jsx` but commented out — the `experiences` and `testimonials` arrays in `constants/index.js` are also commented out.
