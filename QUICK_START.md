# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies
```bash
cd template-glass-showcase
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: **http://localhost:4321**

---

## 🎮 How to Navigate

### 🖱️ Mouse Wheel
- Scroll up/down → Moves left/right through sections
- In tall sections → Scrolls content first, then moves to next section

### 📱 Touch
- Swipe left/right → Navigate sections
- Natural touch scrolling

### ⌨️ Keyboard
- `→` Right Arrow → Next section
- `←` Left Arrow → Previous section

### 🖱️ Autohide UI
- **Top Edge Hover** → Header appears (any section)
- **Left Edge Hover** → Sidebar appears
- **Bottom Edge Hover** → Footer appears
- **Menu Button** → Pin sidebar open
- Move mouse away → UI autohides

---

## 🏗️ App Layer Components

### Header (Top Overlay - Autohide)
- **Hover top edge** (50px) → Header slides down
- **Available** on all sections including first
- **Contains**: Menu button, logo, nav links, CTA
- **Autohides** when mouse moves away

### Footer (Bottom Overlay - Autohide)
- **Hover bottom edge** (50px) → Footer slides up
- **Always available**
- **Contains**: Logo, nav links, social links, copyright
- **Autohides** when mouse moves away

### Sidebar (Left Overlay - Autohide)
- **Hover left edge** (50px) → Sidebar slides in
- **OR click menu button** → Pin sidebar open
- **Contains**: Full section navigation with icons
- **Autohides** when mouse moves away (unless pinned)

---

## 📏 Content Behavior

### Short Sections (fit viewport)
- Scroll moves horizontally immediately

### Tall Sections (overflow)
1. Scroll vertically within section first
2. Reach bottom → next scroll moves to next section
3. At top → scroll up goes to previous section

**Tall sections**:
- Contents (menu + hints)
- Introduction (features grid)
- Considerations (long list)
- Know Before You Go (tips)
- Resource Cards (grid)

---

## 🎨 Testing Tips

1. **Scroll through all 18 sections**
2. **Hover top edge** → See header appear
3. **Hover left edge** → See sidebar slide in
4. **Hover bottom edge** → See footer slide up
5. **Click menu button** → Pin sidebar open
6. **Move mouse away** → Watch UI autohide
7. **Scroll within tall sections** → Vertical then horizontal

---

## 🛠️ Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

Output directory: `dist/`

---

## 🎯 What to Expect

### First Load
- Section 1 (Glass Overview) visible
- No UI visible (completely clean)
- All UI hidden, waiting for edge hover
- Immersive, distraction-free experience

### Interacting with UI
- **Hover top** → Header slides down (any section)
- **Hover bottom** → Footer slides up
- **Hover left** → Sidebar slides in
- **Click menu** → Pin sidebar open
- **Move away** → All UI autohides smoothly

### On Mobile
- Vertical scroll (no horizontal)
- Same overlay system
- Simplified header (icon only)
- Compact footer layout

---

## ✨ Key Features

- ✅ **18 sections** of glassmorphism content
- ✅ **Horizontal scroll** (desktop)
- ✅ **Smart scroll** (vertical then horizontal)
- ✅ **Autohide UI** (edge hover detection)
- ✅ **App layer** overlays (header, footer, sidebar)
- ✅ **Hidden UI** (no scrollbars, completely clean)
- ✅ **Multiple nav** methods (wheel, touch, keyboard, hover)
- ✅ **Responsive** (mobile optimized)
- ✅ **Performant** (90+ Lighthouse)

---

**Ready to explore glassmorphism! 🎉**
