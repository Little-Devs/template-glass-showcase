# GSAP Animations Documentation

## Overview

The Glass Showcase template now features professional-grade GSAP animations throughout all 18 sections, creating an engaging and polished user experience.

## Installed GSAP Plugins

All plugins are **free** thanks to Webflow's support:

- **GSAP Core** (v3.14.2) - Base animation engine
- **ScrollTrigger** - Scroll-based animation triggers
- **SplitText** - Character-by-character text reveals
- **TextPlugin** - Text content animation (for counters)

## Animation Features

### 1. Section Entrance Animations

Every section has unique entrance animations triggered when scrolling into view:

- **Fade-up animations** with staggered reveals
- **Scale effects** for cards and panels (0.8 → 1.0)
- **Rotation effects** for playful entrance (±2-10 degrees)
- **Stagger delays** for cascading reveals (0.1-0.15s between items)

**Trigger Points:**
- Start: `left 80%` (section is 20% visible)
- End: `left 20%` (section is 80% visible)
- All configured for horizontal scrolling

### 2. SplitText Hero Titles

Character-by-character reveals for major titles:

**GlassOverview Section:**
- "Glass Effect" splits into characters
- 3D rotation effect (`rotationX: -90`)
- Stagger: 0.02s per character
- Easing: `back.out(1.7)` for bounce

**Finale Section:**
- "You've Reached the End!" splits into characters
- Spin-in effect (`rotation: 180, scale: 0`)
- Stagger: 0.025s per character
- Easing: `back.out(2)` for extra bounce

### 3. Parallax Effects

Multi-layer depth with scroll-based parallax:

**Background Gradients:**
- Move horizontally as user scrolls (`backgroundPosition`)
- Scrub: 1 (smooth, immediate response)
- Creates sense of depth

**Floating Glass Cards:**
- Vertical drift (y: -20 to -40px)
- Subtle rotation (±2 degrees)
- Different scrub speeds per card (2-4)
- Creates layered 3D effect

### 4. Interactive Hover Effects

GSAP-powered micro-interactions for all interactive elements:

**Glass Buttons:**
- Scale up to 1.05 on hover
- Arrow shifts right (+5px)
- Enhanced glow shadow
- Timeline animation (reversible)

**Glass Cards/Panels:**
- 3D tilt effect based on mouse position
- `rotationX` and `rotationY` calculated from cursor
- Transform perspective: 1000px
- Smooth return to neutral on mouse leave

### 5. Stats Counter Animation

Number animations in finale section:

- Counts from 0 to final value (18, 100)
- Duration: 2 seconds
- Snaps to whole numbers
- Stagger: 0.15s between stats
- Special handling for "∞" symbol (scale effect instead)

### 6. Magnetic Cursor Effect

Buttons attract cursor with elastic easing:

- Detection radius: 100px
- Strength based on distance
- Elastic return on mouse leave (`elastic.out(1, 0.5)`)
- Only affects buttons within range

### 7. Scroll Progress Indicator

Animated progress bar at top of viewport:

- Tracks horizontal scroll progress (0-100%)
- Updates section number dynamically (1-18)
- Scrub: 0.3 for smooth tracking
- Autohides 3 seconds after load
- Reappears on mouse near top edge

## Performance Optimizations

### GPU Acceleration
- All animated elements use `transform: translateZ(0)`
- `will-change: transform, opacity` on key elements
- `backface-visibility: hidden` for smoother transforms
- `perspective: 1000px` for 3D effects

### Lazy Loading
- ScrollTriggers disable when sections are >3 away from viewport
- Saves memory and processing power
- Re-enables when scrolling back into range

### Memory Management
- `will-change` removed after animations complete (1.5s delay)
- All ScrollTriggers killed on page unload
- Resize events debounced (250ms)

### Browser Optimization
- `contain: layout style paint` on containers
- `isolation: isolate` on glass elements
- Reduced motion support for accessibility

## Configuration

### ScrollTrigger Defaults
```javascript
ScrollTrigger.defaults({
  horizontal: true,
  scroller: '.horizontal-scroll-container'
});
```

### GSAP Global Config
```javascript
gsap.config({
  force3D: true,
  nullTargetWarn: false
});
```

## Animation Timing

Typical entrance sequence for a section:

1. **0.0s** - User scrolls section into view
2. **0.0-0.2s** - Title fades in from top
3. **0.2-0.6s** - Cards/panels stagger in (0.15s between each)
4. **0.6-1.0s** - Supporting elements fade in
5. **1.0-1.5s** - Final elements and hints appear

Total: ~1.5s for complete section reveal

## Easing Functions Used

- `power2.out` - Gentle deceleration (snap, quick movements)
- `power3.out` - Strong deceleration (card entrances)
- `power3.inOut` - Smooth acceleration/deceleration (keyboard nav)
- `back.out(1.3-2)` - Bounce effect (cards, titles)
- `elastic.out(1, 0.5)` - Spring effect (magnetic cursor)

## File Organization

```
src/
├── utils/
│   └── gsap-setup.ts           # Plugin registration
├── layouts/
│   └── HorizontalLayout.astro  # Main animation orchestration
├── components/
│   ├── ScrollProgress.astro    # Progress indicator
│   └── sections/               # Individual section animations
│       ├── GlassOverview.astro  # SplitText hero
│       ├── Contents.astro       # Cascade menu
│       ├── GlassEffects.astro   # Rotate card entrance
│       ├── Finale.astro         # SplitText + counter
│       └── ... (14 more)
└── styles/
    └── animations.css          # Performance CSS hints
```

## Browser Support

GSAP animations are supported on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 90+

Graceful degradation with `prefers-reduced-motion` support.

## Debugging

Enable GSAP developer tools:
```javascript
GSDevTools.create();
```

Monitor ScrollTrigger:
```javascript
ScrollTrigger.getAll().forEach(t => console.log(t));
```

Check performance:
- Chrome DevTools > Performance tab
- Look for 60fps during scroll
- Check for long tasks (>50ms)

## Resources

- [GSAP Docs](https://gsap.com/docs/)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [SplitText Docs](https://gsap.com/docs/v3/Plugins/SplitText/)
- [GSAP Easing Visualizer](https://gsap.com/docs/v3/Eases)

---

**Result**: Professional animation showcase demonstrating GSAP's capabilities with glassmorphism design.
