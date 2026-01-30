# Autohide UI System

## 🎯 Overview

The Glass Showcase features an **intelligent autohide system** where all UI elements (header, sidebar, footer) automatically hide and appear based on mouse position.

## 🖱️ How It Works

### Edge Hover Detection

Move your mouse near screen edges to reveal UI:

```
         ← 50px hover zone →
    ┌─────────────────────────┐
    │ [Header appears here]   │ ← Hover top edge
    ├─────────────────────────┤
    │                         │
  ← │   Main Content         │
Hover│   (18 Sections)       │
left │                        │
edge │                        │
    ├─────────────────────────┤
    │ [Footer appears here]   │ ← Hover bottom edge
    └─────────────────────────┘
```

### Hover Zones

**Top Edge (50px)**
- Reveals: Header
- Condition: Available on all sections
- Delay: 100ms

**Left Edge (50px)**
- Reveals: Sidebar
- Always available
- Delay: 100ms

**Bottom Edge (50px)**
- Reveals: Footer
- Always available
- Delay: 100ms

## ⚙️ Behavior Details

### Header
```javascript
// Shows when:
- Mouse hovers top 50px (any section)

// Hides when:
- Mouse moves away from top (>100px)
```

**Features**:
- Menu button (opens sidebar permanently)
- Logo & navigation links
- CTA button
- Glass effect

### Sidebar
```javascript
// Shows when:
1. Mouse hovers left 50px
2. OR menu button clicked (manual open)

// Hides when:
- Mouse moves away (>370px from left)
- Close button clicked
- Overlay clicked
- Link clicked
```

**Features**:
- Full navigation menu
- Organized sections with icons
- Close button
- Can be "pinned" open via menu button

### Footer
```javascript
// Shows when:
- Mouse hovers bottom 50px

// Hides when:
- Mouse moves away (>250px from bottom)
```

**Features**:
- Three-column link grid
- Social links
- Copyright info
- No toggle button needed

## 🎨 Visual Feedback

### Smooth Transitions
All elements use:
```css
transition: transform 0.3s ease;
```

### Transform Animations
- **Header**: `translateY(-100%)` → `translateY(0)`
- **Sidebar**: `translateX(-100%)` → `translateX(0)`
- **Footer**: `translateY(100%)` → `translateY(0)`

### Pointer Events
```css
/* Hidden state */
pointer-events: none; /* Can't interact */

/* Visible state */
pointer-events: auto; /* Can interact */
```

## 🎯 User Experience Benefits

### 1. Immersive
- Full-screen content without UI distraction
- Clean, minimal interface
- UI appears exactly when needed

### 2. Intuitive
- Natural edge gestures
- Immediate visual feedback
- No learning curve

### 3. Accessible
- Menu button for permanent sidebar access
- Keyboard navigation still works
- Touch-friendly on mobile

## 🔧 Configuration

### Adjust Hover Zone Size
```javascript
const HOVER_ZONE = 50; // Change pixels from edge
```

### Adjust Hover Delay
```javascript
const HOVER_DELAY = 100; // Change milliseconds before showing
```

### Adjust Hide Distance
```javascript
// Header hides when mouse is >100px from top
if (clientY > 100) {
  header?.classList.remove('show');
}

// Sidebar hides when mouse is >370px from left
if (clientX > 370) {
  sidebar?.classList.remove('show');
}

// Footer hides when mouse is >250px from bottom
if (clientY < windowHeight - 250) {
  footer?.classList.remove('show');
}
```

## 🎮 Manual Controls

### Sidebar
While autohide works on hover, you can **pin** the sidebar open:
1. Click hamburger menu button
2. Sidebar stays open (even when mouse moves away)
3. Click close button or overlay to dismiss

### Header Always Available
Header autohides on hover **on all sections** including section 1:
- Section 1: Header available via top edge hover
- Section 2+: Header available via top edge hover
- Clean by default, appears when needed

## 📱 Mobile Behavior

On mobile devices:
- **Touch**: No hover detection
- **Alternative**: Use menu button for sidebar
- **Footer**: Swipe up from bottom (native touch)
- **Header**: Always shows after section 1 (no autohide)

## 🎯 States

### Header States
1. **Hidden**: Default state, waiting for hover
2. **Visible**: Mouse at top edge (any section)

### Sidebar States
1. **Hidden**: Default, waiting for hover
2. **Hover Show**: Mouse at left edge
3. **Pinned Open**: Menu button clicked

### Footer States
1. **Hidden**: Default, waiting for hover
2. **Visible**: Mouse at bottom edge

## 🔄 Code Location

**Edge Detection Logic**: `src/layouts/HorizontalLayout.astro`

```javascript
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Top edge - Header (available on all sections)
  if (clientY < HOVER_ZONE) {
    header?.classList.add('show');
  }
  
  // Left edge - Sidebar
  if (clientX < HOVER_ZONE) {
    sidebar?.classList.add('show');
  }
  
  // Bottom edge - Footer
  if (clientY > windowHeight - HOVER_ZONE) {
    footer?.classList.add('show');
  }
});
```

## ✨ Tips

1. **Discover UI**: Move mouse to screen edges
2. **Pin Sidebar**: Click menu button to keep it open
3. **Quick Access**: Hover zones are generous (50px)
4. **Smooth Exit**: UI waits for clear mouse movement before hiding
5. **Keyboard Nav**: Arrow keys work regardless of UI state

---

**Experience truly immersive, distraction-free content with smart autohide UI.**
