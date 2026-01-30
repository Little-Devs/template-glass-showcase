# App Layer Architecture

## 🏗️ Layer Structure

The Glass Showcase uses a **multi-layer app architecture with autohide** where UI elements overlay the main content and appear on edge hover:

```
┌─────────────────────────────────────┐
│  Header (z-index: 1000)             │ ← Hidden by default
├─────────────────────────────────────┤
│                                     │
│  Main Content (Horizontal Scroll)   │ ← Sections flow left-to-right
│                                     │
├─────────────────────────────────────┤
│  Footer (z-index: 900)              │ ← Always visible at bottom
└─────────────────────────────────────┘
     │
     └─ Sidebar (z-index: 1100)       ← Slides from left
```

## 📦 Components

### 1. Header (Overlay - Autohide)
**Location**: Top of viewport  
**Visibility**: Autohide with top edge hover (all sections)  
**Behavior**: Slides down on hover, autohides on mouse away  
**Z-Index**: 1000

```css
position: fixed;
top: 0;
transform: translateY(-100%); /* Hidden */
transform: translateY(0);     /* Visible on hover */
```

**Trigger**:
- Available on all sections including first
- Shows when mouse hovers top 50px
- Hides when mouse moves >100px from top

**Features**:
- Hamburger menu button (pins sidebar open)
- Logo with icon
- Navigation links (Overview, Tutorials, Resources)
- CTA button
- Glass effect with backdrop blur

### 2. Footer (Bottom Overlay - Autohide)
**Location**: Bottom of viewport  
**Visibility**: Autohide with bottom edge hover  
**Behavior**: Slides up on hover, autohides on mouse away  
**Z-Index**: 900

```css
position: fixed;
bottom: 0;
transform: translateY(100%); /* Hidden */
transform: translateY(0);     /* Visible on hover */
```

**Trigger**:
- Shows when mouse hovers bottom 50px
- Hides when mouse moves >250px from bottom

**Features**:
- Logo and tagline
- Three-column link grid (Navigation, Resources, Connect)
- Social links
- Copyright info
- Glass effect with dark background
- No toggle button needed (hover-activated)

### 3. Sidebar (Overlay - Autohide + Pin)
**Location**: Left side of viewport  
**Visibility**: Autohide with left edge hover OR pinned by menu button  
**Behavior**: Slides in on hover or click, can be pinned open  
**Z-Index**: 1100 (highest)

```css
position: fixed;
left: 0;
transform: translateX(-100%); /* Hidden */
transform: translateX(0);     /* Visible */
```

**Trigger**:
- Shows when mouse hovers left 50px (autohide)
- OR menu button clicked (pinned open)
- Hides when mouse moves >370px from left (autohide only)
- Pinned state ignores mouse movement

**Features**:
- Full-height navigation menu
- Organized sections with icons
- Close button (unpins)
- Download CTA button
- Dark overlay backdrop (when pinned)
- Glass effect with strong blur

## 🎯 Interaction Flow

### On Page Load
```
Header: Hidden (waiting for top hover)
Footer: Hidden (waiting for bottom hover)
Sidebar: Hidden (waiting for left hover)
Content: Section 1 visible
UI: Completely clean, no visible elements
```

### Any Section (Including First)
```
Header: Available via top edge hover
Footer: Available via bottom edge hover
Sidebar: Available via left edge hover
Content: Any section visible
UI: Clean by default, appears on demand
```

### User Hovers Top Edge (50px)
```
Header: Slides down from top
Content: Still visible behind header
Mouse Away: Header slides back up
```

### User Hovers Left Edge (50px)
```
Sidebar: Slides in from left
Overlay: Faint backdrop (autohide mode)
Content: Still visible behind sidebar
Mouse Away: Sidebar slides back left
```

### User Hovers Bottom Edge (50px)
```
Footer: Slides up from bottom
Content: Still visible behind footer
Mouse Away: Footer slides back down
```

### User Clicks Menu Button
```
Header: Visible (if hovering or pinned)
Sidebar: Slides in and PINS OPEN
Overlay: Dark backdrop (pinned mode)
Mouse Away: Sidebar stays open (pinned)
Content: Sections still scrollable behind overlay
```

## 🎨 Z-Index Hierarchy

```
1100 - Sidebar (highest)
1050 - Sidebar overlay backdrop
1000 - Header
 900 - Footer
   1 - Main content sections
```

## 📏 Spacing & Padding

### Sections
All sections:
- `padding: 2rem` - Content spacing
- No bottom padding needed (footer autohides)
- Content flows naturally without overlay interference

### Header
- `padding: 1rem 2rem` - Compact
- `height: ~60px` - Minimal footprint
- Autohides when not needed

### Footer
- `padding: 1.5rem 2rem` - Comfortable
- `height: ~200px` - Enough for links
- Autohides when not needed

## 🔄 Autohide with Smart Scroll

### Edge Hover Detection
```javascript
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  
  // Top hover (available on all sections)
  if (clientY < HOVER_ZONE) {
    header.classList.add('show');
  }
  
  // Left hover
  if (clientX < HOVER_ZONE) {
    sidebar.classList.add('show');
  }
  
  // Bottom hover
  if (clientY > windowHeight - HOVER_ZONE) {
    footer.classList.add('show');
  }
});
```

### Content Scroll Priority
1. **Vertical scroll** within tall sections (if overflow exists)
2. **Horizontal scroll** to next section (when at top/bottom)
3. **Autohide UI** appears on edge hover, independent of scroll

## 💡 Design Principles

### Always Accessible
- Footer always visible for quick navigation
- Header appears when needed (after hero)
- Sidebar available via menu button

### Non-Intrusive
- Overlays don't block main content reading
- Glass effects maintain content visibility
- Footer has adequate padding space
- Header slides in smoothly

### Consistent Layers
- All overlays use glass effect
- Consistent backdrop blur (20px)
- Dark, semi-transparent backgrounds
- Subtle white borders

## 🎭 Visual Behavior

### Header (Autohide)
```
Any Section: Hidden by default
         ↓ Hover top edge (50px)
Header shows: Slides down
         ↓ Move mouse away (>100px)
Header hides: Slides back up
```

### Footer (Autohide)
```
Default: Hidden below viewport
         ↓ Hover bottom edge
Footer shows: Slides up
         ↓ Move mouse away
Footer hides: Slides back down
```

### Sidebar (Autohide + Pin)
```
Default: Hidden left of viewport
         ↓ Hover left edge
Sidebar shows: Slides in (autohide)
         ↓ Move mouse away
Sidebar hides: Slides back left

Alternative:
         ↓ Click menu button
Sidebar pins: Slides in and stays open
         ↓ Click close/overlay
Sidebar closes: Slides back left
```

## 📱 Responsive Behavior

### Desktop (>768px)
- Header: Full width with nav links (autohide)
- Footer: Three-column layout (autohide)
- Sidebar: 320px wide (autohide + pin)
- Hover zones: 50px from edges

### Mobile (<768px)
- Header: Logo icon only (always visible after section 1)
- Footer: Two-column layout (swipe up gesture)
- Sidebar: 280px wide (menu button only, no hover)
- No autohide on touch devices
- Vertical scroll mode (no horizontal)

## 🎨 Glass Effects

### Header Glass
```css
backdrop-filter: blur(20px);
background: rgba(0, 0, 0, 0.5);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
```

### Footer Glass (Drawer)
```css
backdrop-filter: blur(20px);
background: rgba(0, 0, 0, 0.8);
border-top: 1px solid rgba(255, 255, 255, 0.15);
```


### Sidebar Glass
```css
backdrop-filter: blur(20px);
background: rgba(0, 0, 0, 0.7);
border-right: 1px solid rgba(255, 255, 255, 0.1);
```

## 🔧 Customization

### Show/Hide Components
In page files:
```astro
<HorizontalLayout 
  showHeader={true}   <!-- Control header -->
  showFooter={true}   <!-- Control footer -->
>
```

### Autohide Configuration
```javascript
// Adjust hover zones (in HorizontalLayout.astro)
const HOVER_ZONE = 50;      // pixels from edge
const HOVER_DELAY = 100;    // milliseconds before showing

// Programmatic control
const header = document.getElementById('app-header');
const sidebar = document.getElementById('app-sidebar');
const footer = document.getElementById('app-footer');

// Show/hide manually
header.classList.add('show');    // Show
header.classList.remove('show'); // Hide

// Pin sidebar (ignores autohide)
sidebar.classList.add('open');   // Pin open
sidebar.classList.remove('open'); // Unpin
```

### Adjust Hover Zones
```javascript
// In HorizontalLayout.astro
const HOVER_ZONE = 75; // Larger hover zone (default: 50px)

// Or per-edge
if (clientY < 75) { // Top edge - larger zone
  header?.classList.add('show');
}

if (clientX < 50) { // Left edge - default zone
  sidebar?.classList.add('show');
}
```

### Adjust Hide Distance
```javascript
// Header hides when mouse is 150px from top (default: 100px)
if (clientY > 150) {
  header?.classList.remove('show');
}

// Sidebar hides when mouse is 400px from left (default: 370px)
if (clientX > 400) {
  sidebar?.classList.remove('show');
}
```

### Modify Footer Height
```css
.app-footer {
  max-height: 80vh; /* Prevent covering entire screen */
  overflow-y: auto;
}
```

## ⚡ Performance

### GPU Acceleration
All overlays use:
- `transform` for animations (GPU)
- `backdrop-filter` for glass (GPU)
- No layout thrashing
- Smooth 60fps animations

### Optimized Events
- Passive scroll listeners where possible
- Debounced scroll handlers
- Efficient DOM queries
- Minimal reflows

## ♿ Accessibility

### Keyboard Navigation
- `Tab` → Focus menu button
- `Enter/Space` → Open sidebar
- `Esc` → Close sidebar
- `Arrow keys` → Navigate sections
- All interactive elements focusable

### Screen Readers
- ARIA labels on buttons
- Semantic HTML structure
- Proper heading hierarchy
- Link descriptions

## 🎯 Use Cases

### Landing Pages
- Hero without any UI distraction
- Autohide UI for clean presentation
- Edge hover for quick navigation access

### Showcases
- Full-screen immersive content
- UI appears exactly when needed
- Natural edge gestures

### Documentation
- Footer autohide for links (on-demand)
- Sidebar autohide for quick jumps
- Header autohide for context after hero

---

**Complete autohide overlay system for immersive, distraction-free UX**

See [AUTOHIDE.md](AUTOHIDE.md) for detailed edge hover behavior and configuration.
