# Section Navigation Index

This document maps section names to their scroll positions (indices) for anchor navigation.

## Section Order and Indices

| Index | Section ID | Component File | Data Attribute | Description |
|-------|-----------|----------------|----------------|-------------|
| 0 | `glass-overview` | `GlassOverview.astro` | `data-section="glass-overview"` | Hero / Landing |
| 1 | `contents` | `Contents.astro` | `data-section="contents"` | Table of Contents |
| 2 | `introduction` | `Introduction.astro` | `data-section="introduction"` | Introduction & Overview |
| 3 | `settings` | `Settings.astro` | `data-section="settings"` | Settings & Configuration |
| 4 | `glass-ui` | `GlassForUI.astro` | `data-section="glass-ui"` | Glass for UI |
| 5 | `tutorial-add` | `TutorialAdd.astro` | `data-section="tutorial-add"` | How to Add Glass |
| 6 | `tutorial-adjust` | `TutorialAdjust.astro` | `data-section="tutorial-adjust"` | How to Adjust Glass |
| 7 | `in-app-ui` | `InAppUI.astro` | `data-section="in-app-ui"` | In-App UI Examples |
| 8 | `video-blends` | `VideoBlends.astro` | `data-section="video-blends"` | Video Blend Modes |
| 9 | `prototyping` | `Prototyping.astro` | `data-section="prototyping"` | Glass in Prototyping |
| 10 | `have-fun` | `HaveFun.astro` | `data-section="have-fun"` | Creative Glass Examples |
| 11 | `inspiration` | `Inspiration.astro` | `data-section="inspiration"` | Design Inspiration |
| 12 | `glass-effects` | `GlassEffects.astro` | `data-section="glass-effects"` | Glass Effect Variations |
| 13 | `considerations` | `Considerations.astro` | `data-section="considerations"` | Design Considerations |
| 14 | `know-before` | `KnowBeforeYouGo.astro` | `data-section="know-before"` | Know Before You Go |
| 15 | `glass-resources` | `GlassResources.astro` | `data-section="glass-resources"` | Glass Resources |
| 16 | `resource-cards` | `ResourceCards.astro` | `data-section="resource-cards"` | Resource Cards |
| 17 | `finale` | `Finale.astro` | `data-section="finale"` | Thank You / Finale |

**Total Sections**: 18

## How Anchor Navigation Works

### HTML Structure
All navigation links use the `data-scroll-to` attribute with the section index:

```html
<a href="#glass-overview" data-scroll-to="0">Overview</a>
<a href="#contents" data-scroll-to="1">Contents</a>
<a href="#introduction" data-scroll-to="2">Introduction</a>
```

### JavaScript Implementation
Located in `HorizontalLayout.astro`, the navigation handler:

```javascript
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-scroll-to]');
  if (link) {
    e.preventDefault();
    const sectionIndex = parseInt(link.getAttribute('data-scroll-to'));
    const targetScroll = sectionIndex * window.innerWidth;
    
    // Smooth GSAP scroll
    gsap.to(container, {
      scrollLeft: targetScroll,
      duration: 1.2,
      ease: 'power3.inOut'
    });
  }
});
```

### Calculation
- Each section is exactly `100vw` (full viewport width)
- Target scroll position = `sectionIndex × window.innerWidth`
- GSAP handles smooth scrolling with `power3.inOut` easing
- Duration: 1.2 seconds for smooth transitions

## Updated Components

### Navigation Components
1. **Header** (`src/components/Header.astro`)
   - Overview (→ 0)
   - Tutorials (→ 5)
   - Resources (→ 15)

2. **Sidebar** (`src/components/Sidebar.astro`)
   - Getting Started: Overview (0), Contents (1), Introduction (2)
   - Tutorials: Glass UI (4), How to Add (5), How to Adjust (6)
   - Examples: In-App UI (7), Inspiration (11)
   - Resources: Considerations (13), Resources (15)

3. **Footer** (`src/components/Footer.astro`)
   - Navigate: Overview (0), Tutorials (5), Inspiration (11)
   - Learn: Documentation (2), Examples (12), Community (10)
   - Connect: External links (GitHub, Twitter, Discord)

4. **Contents Menu** (`src/components/sections/Contents.astro`)
   - Introduction & Settings (→ 2)
   - Glass for UI (→ 4)
   - Glass in Prototyping (→ 9)
   - Glass for Fun (→ 10)
   - Considerations (→ 13)
   - Glass Resources (→ 15)

### External Resource Links
**ResourceCards** (`src/components/sections/ResourceCards.astro`):
- Documentation → MDN backdrop-filter docs
- Design System → ui.glass generator
- Code Snippets → CodePen glassmorphism search
- Tutorial Series → YouTube glassmorphism tutorials
- Tools & Plugins → ui.glass
- Community → Discord Figma community

## Features

✅ **Click Navigation**: Click any link to smooth scroll to target section  
✅ **Automatic Sidebar Close**: Sidebar closes automatically after navigation  
✅ **Smooth GSAP Animation**: 1.2s smooth scroll with power3.inOut easing  
✅ **Prevent Default**: All internal links prevent page reload  
✅ **External Links**: Resource cards open in new tabs  
✅ **Keyboard Navigation**: Arrow keys still work (existing functionality)  
✅ **Touch/Swipe**: Mobile gestures still work (existing functionality)

## Testing Anchor Links

### Test Plan
1. **Header Navigation**
   - Click "Overview" → Should scroll to section 0
   - Click "Tutorials" → Should scroll to section 5
   - Click "Resources" → Should scroll to section 15

2. **Sidebar Navigation**
   - Open sidebar (hover left edge)
   - Click any nav link
   - Verify: Sidebar closes and scrolls to target section

3. **Contents Menu** (Section 1)
   - Click each menu item
   - Verify smooth scroll to correct section

4. **Footer Links**
   - Click internal links → Verify scroll
   - Click external links → Verify opens in new tab

5. **Resource Cards** (Section 16)
   - Click each card
   - Verify external URL opens in new tab

## Updating Section Order

If you reorder sections in `index.astro`:

1. Update this document's index table
2. Update `data-scroll-to` values in all navigation components
3. Test all links to verify correct targets

## Performance

- **Event Delegation**: Single event listener for all links
- **GSAP Optimization**: Hardware-accelerated scrolling
- **No Page Reload**: Prevents full page navigation
- **Instant Feedback**: Immediate scroll on click

---

**Last Updated**: January 30, 2026  
**Total Navigation Links**: 30+ across 5 components
