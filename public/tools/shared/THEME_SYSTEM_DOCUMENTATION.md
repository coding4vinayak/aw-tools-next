# Abetworks Multi-Theme System Documentation

## Overview

The Abetworks tools frontend now supports **6 premium themes** with smooth transitions, localStorage persistence, and full accessibility support.

---

## Available Themes

| Theme ID | Name | Icon | Description | Primary Color |
|----------|------|------|-------------|---------------|
| `dark` | Dark (Default) | ☀️ | Classic dark mode with blue accents | `#2563EB` |
| `light` | Light | 🌙 | Clean light mode for bright environments | `#2563EB` |
| `ocean` | Ocean Blue | 🌊 | Deep ocean blue-teal gradient | `#0ea5e9` |
| `forest` | Forest Green | 🌲 | Natural green tones | `#10b981` |
| `sunset` | Sunset Orange | 🌅 | Warm orange-pink gradient | `#f97316` |
| `midnight` | Midnight Purple | 🌙 | Premium dark purple | `#8b5cf6` |

---

## Theme Cycle Order

Clicking the theme toggle button cycles through themes in this order:

```
Dark → Light → Ocean → Forest → Sunset → Midnight → (back to) Dark
```

---

## Files Modified

### 1. `ui-system.css`

**Location:** `tools/shared/ui-system.css`

**Changes:**
- Added 4 new theme definitions using `[data-theme="..."]` selectors
- Added smooth CSS transitions (0.35s) for all themed elements
- Added theme switcher dropdown styles
- Added mobile responsive styles for the theme switcher
- Added `.sr-only` utility class for screen reader announcements

**New Theme Variables:**
Each theme defines these CSS custom properties:
- `--bg-dark` - Main background color
- `--bg-card` - Card/container background
- `--border-color` - Border color with transparency
- `--text-primary` - Primary text color
- `--text-secondary` - Secondary/muted text color
- `--accent-blue` - Primary accent color
- `--accent-purple` - Secondary accent color
- `--accent-gradient` - Gradient for special elements
- `--card-hover-shadow` - Shadow on card hover
- `--bg-pattern` - Background decorative pattern
- `--icon-bg` - Icon/button background

### 2. `components.js`

**Location:** `tools/shared/components.js`

**Changes:**
- Replaced `toggleTheme()` with `cycleTheme()` function
- Added `THEMES` configuration array with all 6 themes
- Added theme management functions:
  - `getCurrentThemeIndex()` - Get current theme position
  - `getThemeById(themeId)` - Get theme object by ID
  - `applyTheme(themeId)` - Apply a specific theme
  - `cycleTheme()` - Cycle to next theme
  - `updateThemeButtonIcon(themeId)` - Update toggle button icon
  - `updateThemeSwitcherDropdown(themeId)` - Sync dropdown with current theme
  - `announceThemeChange(theme)` - Screen reader announcement
  - `initializeTheme()` - Load saved theme on page load
- Updated navbar HTML to include theme switcher dropdown
- Added localStorage persistence with key `abet_theme_preference`
- Kept deprecated `toggleTheme()` for backward compatibility

---

## Usage

### For End Users

1. **Quick Cycle:** Click the theme toggle button (☀️/🌙/🌊/🌲/🌅) in the navbar to cycle through themes
2. **Direct Selection:** Use the dropdown next to the toggle button to select any theme directly
3. **Persistence:** Your theme preference is automatically saved and restored on every visit

### For Developers

#### Apply a Theme Programmatically

```javascript
// Apply a specific theme
applyTheme('ocean');

// Cycle to next theme
cycleTheme();

// Get current theme
const currentTheme = document.documentElement.getAttribute('data-theme');
```

#### Add a New Theme

1. Add theme definition to `THEMES` array in `components.js`:
```javascript
const THEMES = [
  // ... existing themes
  { id: 'custom', name: 'Custom', icon: '✨', label: 'Custom Theme' }
];
```

2. Add CSS variables in `ui-system.css`:
```css
[data-theme="custom"] {
  --bg-dark: #your-color;
  --bg-card: rgba(your-rgb, 0.7);
  --border-color: rgba(your-rgb, 0.2);
  --text-primary: #your-color;
  --text-secondary: #your-color;
  --accent-blue: #your-color;
  --accent-purple: #your-color;
  --card-hover-shadow: 0 10px 30px rgba(your-rgb, 0.25);
  --bg-pattern: radial-gradient(...);
  --icon-bg: rgba(your-rgb, 0.1);
}
```

---

## Accessibility

### Screen Reader Support

- Theme changes are announced via `aria-live` region
- Button has descriptive `aria-label` with current theme name
- Dropdown has `aria-label="Select theme"`

### Keyboard Navigation

- Theme toggle button is focusable and clickable via Enter/Space
- Dropdown is fully keyboard accessible
- Focus states are clearly visible

### Contrast Ratios

All themes maintain WCAG AA contrast ratios:
- Text on background: ≥ 4.5:1 (normal text), ≥ 3:1 (large text)
- Interactive elements: ≥ 3:1 against adjacent colors

---

## Performance

### Optimizations Applied

1. **CSS Transitions:** 0.35s ease for smooth but responsive changes
2. **Selective Transitions:** Only themed elements transition (not entire DOM)
3. **No JavaScript Animations:** All animations handled by CSS
4. **Minimal Repaints:** CSS custom properties prevent layout thrashing

### Browser Support

- CSS Custom Properties: All modern browsers (Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+)
- Backdrop Filter: Safari 9+, Chrome 76+, Firefox 103+
- CSS Grid: All modern browsers

---

## Mobile Responsive

### Breakpoint: 768px

On mobile devices:
- Theme switcher dropdown is compact (max-width: 120px)
- Reduced font sizes for better fit
- Toggle button is slightly smaller
- Nav links wrap appropriately

---

## Troubleshooting

### Theme Not Persisting

1. Check browser localStorage is enabled
2. Verify no console errors in `components.js`
3. Ensure `components.js` is loaded before page interaction

### Theme Not Applying

1. Check `data-theme` attribute on `<html>` element
2. Verify `ui-system.css` is loaded correctly
3. Check for CSS specificity conflicts

### Dropdown Not Showing

1. Verify `components.js` is loaded (dropdown is dynamically generated)
2. Check browser console for JavaScript errors
3. Ensure `THEMES` array is properly defined

---

## Future Enhancements

Potential improvements for future versions:

1. **Theme Preview:** Show color swatches in dropdown
2. **Custom Themes:** Allow users to create custom color schemes
3. **System Preference:** Auto-detect `prefers-color-scheme`
4. **Theme Export/Import:** Share theme configurations
5. **Animation Preferences:** Respect `prefers-reduced-motion`

---

## Credits

- Designed and implemented for Abetworks Tools
- Color palette inspired by Tailwind CSS
- Accessibility following WCAG 2.1 guidelines

---

**Last Updated:** February 28, 2026  
**Version:** 1.0.0
