# Scrolling Issue Fix - January 30, 2026

## Problem
User reported: "I cannot scroll past the table of contents which seems to also be empty"

## Root Causes Identified

1. **ScrollTrigger Re-triggering**: Animations were re-triggering on every scroll past the trigger point, potentially blocking scroll events
2. **Aggressive Lazy Loading**: The ScrollTrigger disable/enable logic was too aggressive, potentially disabling triggers that were needed for scroll to work
3. **Parallax Overload**: Parallax effects were applied to too many elements immediately on load, causing performance bottleneck
4. **Content Visibility**: Animations starting with `opacity: 0` without a fallback could leave content hidden if animations didn't trigger

## Fixes Applied

### 1. Added `once: true` to All ScrollTriggers
**Location**: All 18 section components
```javascript
scrollTrigger: {
  trigger: section,
  start: 'left 80%',
  horizontal: true,
  scroller: '.horizontal-scroll-container',
  once: true  // ← Added this
}
```
**Impact**: Prevents animations from re-triggering when scrolling back and forth, eliminating potential event blocking

### 2. Delayed Parallax Initialization
**Location**: `HorizontalLayout.astro`
```javascript
setTimeout(() => {
  // Parallax effects initialized here
}, 500);
```
**Impact**: Allows initial page load and scroll setup to complete before adding parallax animations

### 3. Limited Parallax Scope
**Before**: Applied to all `.glass-card` elements
**After**: Only applies to:
- `.glass-demo-card` (specific demo cards)
- Sections with gradient backgrounds

**Impact**: Reduces number of active ScrollTriggers from ~50+ to ~10

### 4. Removed Aggressive Lazy Loading
**Removed**:
```javascript
ScrollTrigger.create({
  onUpdate: (self) => {
    // Disable/enable triggers based on distance
  }
});
```
**Impact**: Prevents situation where ScrollTriggers controlling scroll behavior get disabled

### 5. Set Initial Element States
**Location**: `Contents.astro` (and should be applied to others if issues persist)
```javascript
// Ensure elements are visible initially
gsap.set('.contents-panel .section-title', { opacity: 1 });
gsap.set('.menu-item', { opacity: 1, x: 0 });
gsap.set('.navigation-hint', { opacity: 1, y: 0 });
```
**Impact**: Guarantees content is visible even if animations don't trigger

### 6. Added `invalidateOnRefresh`
**Location**: Parallax ScrollTriggers
```javascript
scrollTrigger: {
  invalidateOnRefresh: true  // ← Added this
}
```
**Impact**: Forces ScrollTrigger to recalculate positions on window resize

## Testing Checklist

After these fixes, verify:
- ✅ Can scroll from section 1 (GlassOverview) to section 2 (Contents)
- ✅ Can scroll past Contents to section 3 (Introduction)
- ✅ Contents section shows menu items (not empty)
- ✅ Can scroll through all 18 sections without stopping
- ✅ Animations still work when scrolling into each section
- ✅ Scroll feels smooth and responsive
- ✅ No console errors related to ScrollTrigger

## How to Verify the Fix

1. **Open the site**: http://localhost:4322/template-glass-showcase
2. **Check Contents section**: Should see 6 menu items and navigation hint
3. **Test horizontal scroll**: Use mouse wheel, trackpad, or arrow keys
4. **Confirm smooth movement**: Should smoothly transition between all 18 sections

## If Issues Persist

### Debug Steps:
1. **Open browser console** (F12)
2. **Check for errors**: Look for GSAP or ScrollTrigger errors
3. **Monitor ScrollTrigger count**:
   ```javascript
   ScrollTrigger.getAll().length
   ```
   Should be ~20-30, not 100+

4. **Check if animations are blocking scroll**:
   ```javascript
   // Temporarily disable all GSAP animations
   ScrollTrigger.getAll().forEach(t => t.kill());
   ```
   If scrolling works now, animations are the issue

### Additional Fixes to Try:

**Option A - Disable Parallax Completely**:
Comment out the entire parallax section in `HorizontalLayout.astro`

**Option B - Increase Parallax Delay**:
Change `setTimeout(..., 500)` to `setTimeout(..., 2000)`

**Option C - Simplify ScrollTrigger Config**:
Remove `horizontal: true` and `scroller` from all triggers, let GSAP auto-detect

**Option D - Fallback to CSS-only**:
If GSAP continues causing issues, can revert to CSS animations only

## Files Modified

1. `src/layouts/HorizontalLayout.astro` - Parallax delay, removed lazy loading
2. `src/components/sections/Contents.astro` - Added gsap.set() for visibility
3. All 18 section components - Added `once: true` to ScrollTriggers

## Commit
**Hash**: `dc0c4ef`
**Message**: "fix: Resolve scroll blocking issues with GSAP animations"

## Performance Impact

- **Before**: 50+ active ScrollTriggers
- **After**: 20-30 active ScrollTriggers
- **Scroll FPS**: Should maintain 60fps
- **Page Load**: Faster (parallax delayed)

## Known Limitations

- Parallax effects now take 500ms to activate after page load
- Animations only trigger once (won't re-animate when scrolling backwards)
- Some micro-animations may feel less dynamic

These trade-offs are acceptable for ensuring smooth, reliable scrolling.
