# Glass Showcase Template

A stunning horizontal-scrolling website showcasing 18 sections of glassmorphism effects, techniques, and best practices. Built with Astro and extracted from Figma's Glass playground design.

![Glass Showcase](https://img.shields.io/badge/Astro-5.0-BC52EE?logo=astro)
![License](https://img.shields.io/badge/license-MIT-blue)
![Sections](https://img.shields.io/badge/sections-18-purple)

## 🎨 Features

- **Ultra-Smooth Scrolling**: Enhanced momentum and natural feel with proximity snap
- **Horizontal Scroll Navigation**: Fluid scroll experience with keyboard and gesture support
- **18 Interactive Sections**: Complete glassmorphism showcase from basics to advanced techniques
- **App Layer Architecture**: Autohide UI with edge hover detection
  - **Header**: Autohide, appears on top edge hover (all sections)
  - **Footer**: Autohide, appears on bottom edge hover
  - **Sidebar**: Autohide, appears on left edge hover or menu button
- **Smart Scroll**: Vertical within tall sections, horizontal between sections with debouncing
- **Glass Effect Variations**: Multiple backdrop-filter styles and transparency levels
- **Tutorial Content**: Step-by-step guides for implementing glass effects
- **Responsive Design**: Automatically switches to vertical scroll on mobile
- **Performance Optimized**: CSS-only animations with GPU acceleration
- **Accessibility**: Focus states, keyboard navigation, and semantic HTML

## 🚀 Quick Start

### Installation

```bash
# Clone or download this template
git clone [your-repo-url] glass-showcase
cd glass-showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
glass-showcase/
├── src/
│   ├── components/
│   │   ├── sections/           # 18 section components
│   │   │   ├── GlassOverview.astro
│   │   │   ├── Contents.astro
│   │   │   ├── Introduction.astro
│   │   │   ├── Settings.astro
│   │   │   ├── GlassForUI.astro
│   │   │   ├── TutorialAdd.astro
│   │   │   ├── TutorialAdjust.astro
│   │   │   ├── InAppUI.astro
│   │   │   ├── VideoBlends.astro
│   │   │   ├── Prototyping.astro
│   │   │   ├── HaveFun.astro
│   │   │   ├── Inspiration.astro
│   │   │   ├── GlassEffects.astro
│   │   │   ├── Considerations.astro
│   │   │   ├── KnowBeforeYouGo.astro
│   │   │   ├── GlassResources.astro
│   │   │   ├── ResourceCards.astro
│   │   │   └── Finale.astro
│   │   ├── Header.astro       # Top overlay
│   │   ├── Footer.astro       # Bottom overlay
│   │   ├── Sidebar.astro      # Slide-in nav
│   │   └── HorizontalNav.astro
│   ├── layouts/
│   │   └── HorizontalLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── global.css          # Global styles & variables
│       └── glassmorphism.css   # Glass effect utilities
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
├── template.json               # Template metadata
├── README.md
├── APP_LAYER.md                # App layer architecture
├── AUTOHIDE.md                 # Autohide UI system
├── SMOOTH_SCROLL.md            # Smooth scrolling enhancements
├── SCROLL_BEHAVIOR.md          # Smart scroll documentation
└── TESTING.md                  # Testing guide
```

## 🎯 Sections Overview

### Row 1: Hero & Navigation
1. **Glass Effect Overview** - Hero section introducing glassmorphism
2. **Table of Contents** - Interactive navigation menu
3. **Introduction** - What is glassmorphism and its features
4. **Settings** - Adjustable parameters for glass effects

### Row 2: Tutorial Basics
5. **Glass for UI** - Using glass in user interfaces
6. **Tutorial: Add Glass** - Step-by-step implementation guide
7. **Tutorial: Adjust Glass** - Fine-tuning glass properties

### Row 3: Advanced Techniques
8. **In-App UI Examples** - Glass effects in application mockups
9. **Video Blend Modes** - Combining glass with video backgrounds
10. **Prototyping with Glass** - Smart animate and transitions

### Row 4: Creative & Inspiration
11. **Have Fun with Glass** - Interactive glass variations
12. **Inspiration Gallery** - Real-world use cases
13. **Glass Effects** - All effect variations in one place

### Row 5: Best Practices
14. **Considerations** - Performance, accessibility, and browser support
15. **Know Before You Go** - Essential tips for implementation

### Row 6: Resources & Finale
16. **Glass Resources Hero** - Featured resources with magnifying glass
17. **Resource Cards** - Links to tools, docs, and community
18. **Finale** - Thank you and site statistics

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #271255;
  --color-deep-purple: #201337;
  --color-dark: #19141a;
  --color-white: #ffffff;
  --color-glass-bg: rgba(255, 255, 255, 0.1);
  --color-glass-border: rgba(255, 255, 255, 0.18);
}
```

### Glass Effects

Modify glass variations in `src/styles/glassmorphism.css`:

```css
.glass {
  background: var(--color-glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-glass-border);
}
```

Available glass classes:
- `.glass` - Standard glass effect
- `.glass-light` - Lighter transparency
- `.glass-strong` - Stronger blur
- `.glass-dark` - Dark tinted glass
- `.frosted-glass` - Highly blurred frosted effect
- `.glass-inset` - Glass with inner shadow
- `.glass-highlight` - Glass with gradient highlight
- `.glass-shimmer` - Animated shimmer effect

### Typography

Change fonts in `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Instrument+Serif:wght@400&display=swap');

:root {
  --font-display: 'Inter', sans-serif;
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --font-serif: 'Instrument Serif', serif;
}
```

### Adding/Removing Sections

1. Create new section component in `src/components/sections/`
2. Import in `src/pages/index.astro`
3. Add to the main container
4. Update `totalSections` count
5. Update `template.json` sections array

## ⌨️ Navigation

The template features a **minimal, immersive experience** with all UI elements hidden:

- **Mouse Wheel/Trackpad**: Scroll naturally → moves horizontally left-to-right through sections
- **Touch Swipe**: Swipe left/right on mobile/tablet
- **Arrow Keys**: `←` and `→` to navigate between sections  
- **Auto Snap**: Sections automatically snap to viewport

### 🎯 Smart Scroll Behavior

**Tall sections** (with more content than viewport):
1. Scroll vertically **within** the section first
2. When you reach the **bottom** → next scroll moves to next section
3. When at **top** → scroll up goes to previous section

**Short sections** (fit in viewport):
- Scroll immediately moves to next/previous section

> 💡 **Clean Design**: All scrollbars, buttons, and indicators are hidden. Navigate naturally with mouse, touch, or keyboard.

See [SCROLL_BEHAVIOR.md](SCROLL_BEHAVIOR.md) for detailed scroll mechanics.

## 🏗️ Autohide UI System

The template features an **intelligent autohide system** where UI appears on edge hover:

- **Header**: Hover **top edge** (50px) → Header slides down (any section)
- **Footer**: Hover **bottom edge** (50px) → Footer slides up
- **Sidebar**: Hover **left edge** (50px) → Sidebar slides in

All overlays use glassmorphism with backdrop blur. UI automatically hides when mouse moves away, creating an immersive, distraction-free experience.

See [AUTOHIDE.md](AUTOHIDE.md) for detailed behavior documentation.  
See [APP_LAYER.md](APP_LAYER.md) for architecture details.

## 📱 Responsive Behavior

- **Desktop (>1024px)**: Full horizontal scroll experience
- **Tablet (768px-1024px)**: Horizontal scroll with touch gestures
- **Mobile (<768px)**: Automatic vertical scroll layout

## 🎭 Browser Support

- Chrome/Edge 76+ (full support)
- Firefox 103+ (full support)
- Safari 9+ (with prefixes)
- Opera 63+ (full support)

**Note**: `backdrop-filter` requires modern browsers. Fallback styles are provided for older browsers.

## 🔧 Tech Stack

- **Framework**: [Astro 5.0](https://astro.build)
- **Styling**: CSS with CSS Variables
- **Fonts**: Google Fonts (Inter, DM Mono, Instrument Serif)
- **Build Tool**: Vite (bundled with Astro)
- **Deployment**: Static site (works anywhere)

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: <1s
- Time to Interactive: <2s
- CSS-only animations (GPU accelerated)
- No JavaScript frameworks (vanilla JS for navigation)
- Optimized for Core Web Vitals

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on navigation
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Color contrast WCAG AA compliant

## 🤝 Contributing

This template is part of the [Little-Devs Web Templates](https://github.com/Little-Devs/web-templates) collection.

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Design Source**: Figma Glass Playground
- **Framework**: Astro Team
- **Template**: Little-Devs
- **Fonts**: Google Fonts

## 🔗 Links

- [Demo Site](#) (coming soon)
- [Little-Devs Templates](https://github.com/Little-Devs/web-templates)
- [Report Issues](../../issues)
- [Request Features](../../issues)

---

**Built with ⚡ by Little-Devs**

*Empowering developers and AI agents with production-ready templates*
