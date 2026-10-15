# ============================================================
#  xywang Portfolio — Design System Specification
#  Version: 1.0.0
#  Author: xywang
#  Last Updated: 2026-10-15
# ============================================================

> **Purpose**: This document defines the complete visual specification for the xywang frontend portfolio page.
> **Usage**: All new pages and components must reference this document first and follow the tokens and rules below strictly to ensure visual consistency.

---

## 1. Design Tokens

### 1.1 Color System

All colors are managed via CSS custom properties (`:root`). Hard-coding color values inside components is prohibited.

| Token | Variable | Value | Usage |
|-------|----------|-------|-------|
| **Base** | `--surface-base` | `#071412` | Deepest page background |
| **Raised** | `--surface-raised` | `#0d1715` | Image containers, elevated surfaces |
| **Card** | `--surface-card` | `#121c1a` | Default card background |
| **Card Hover** | `--surface-card-hover` | `#182522` | Card background on hover |
| **Accent** | `--accent` | `#e05a72` | Brand accent: dot, step badge, tag, hover border |
| **Accent Hover** | `--accent-hover` | `#f07088` | Lightened accent for button/link hover |
| **Accent Subtle** | `--accent-subtle` | `rgba(224, 90, 114, 0.15)` | Tag background, pulse ring |
| **Accent Glow** | `--accent-glow` | `rgba(224, 90, 114, 0.35)` | Card hover border highlight |
| **Text Primary** | `--text-primary` | `#f4f7f6` | Headlines, primary body text |
| **Text Secondary** | `--text-secondary` | `#8b9793` | Subtitles, descriptions, placeholders |
| **Border** | `--border-default` | `rgba(255, 255, 255, 0.055)` | Card borders, dividers, image container borders |

#### State Colors

```css
/* Hover state */
border-color: var(--accent-glow);      /* rgba(224, 90, 114, 0.35) */
background: var(--surface-card-hover); /* #182522 */

/* Active state */
transform: translateY(-2px) scale(0.995);
```

---

### 1.2 Typography

**Font Stack**
```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

| Level | Token | Size | Weight | Line Height | Letter Spacing | Color |
|-------|-------|------|--------|-------------|----------------|-------|
| **Hero Title** | `--text-xl` | `clamp(1.7rem, 1.45rem + 1.25vw, 2.4rem)` | `700` | `1.15` | `-0.03em` | `--text-primary` |
| **Section Title** | `--text-2xl` | `clamp(1.1rem, 1rem + 0.5vw, 1.4rem)` | `600` | default | `-0.02em` | `--text-primary` |
| **Card Title** | `--text-lg` | `clamp(0.95rem, 0.92rem + 0.15vw, 1rem)` | `600` | `1.3` | `-0.01em` | `--text-primary` |
| **Body / Subtitle** | `--text-base` | `clamp(0.88rem, 0.85rem + 0.15vw, 0.95rem)` | `400` | `1.65` | default | `--text-secondary` |
| **Card Description** | `--text-sm` | `clamp(0.78rem, 0.76rem + 0.1vw, 0.82rem)` | `400` | `1.55` | default | `--text-secondary` |
| **Step Badge** | `--text-xs` | `clamp(0.65rem, 0.63rem + 0.1vw, 0.72rem)` | `700` | default | default | `#fff` |
| **Tag / Badge** | `--text-xs` | `clamp(0.65rem, 0.63rem + 0.1vw, 0.72rem)` | `500` | default | default | `--accent` |

> **Note**: Fluid typography via `clamp()` automatically adapts between 320px and 1440px without additional breakpoints.

---

### 1.3 Spacing

Spacing follows a 4px base grid (`--space-unit: 0.25rem`), with practical values used directly.

#### Container

| Property | Value | Note |
|----------|-------|------|
| **Max Width** | `820px` | `--container-max` |
| **Horizontal Padding** | `1rem` per side | `width: min(100% - 2rem, var(--container-max))` |
| **Top Padding** | `3rem` | `--padding-block-start` |
| **Bottom Padding** | `4rem` | `--padding-block-end` |

#### Module Spacing

| Context | Property | Value |
|---------|----------|-------|
| Masthead to Content | `margin-block-end` | `3rem` |
| Section Title to Grid | `margin-block-end` | `1.5rem` |
| Grid Gap | `gap` | `1rem` |
| Thumbnail Outer Margin | `margin` | `0.85rem 0.85rem 0` |
| Card Body Padding | `padding` | `0.85rem 1rem 1rem` |
| Title to Description | `gap` | `0.35rem` |
| Step Badge to Title Text | `gap` | `0.45rem` |

#### Quick Reference

| Element | Dimensions |
|---------|------------|
| Brand Dot | `12px x 12px` |
| Step Badge | `16px x 16px` |
| External Arrow Button | `26px x 26px` |
| Thumbnail Height (Desktop) | `120px` |
| Thumbnail Height (Mobile) | `160px` |

---

### 1.4 Shape & Motion

#### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-lg` | `20px` | Card outer frame |
| `--radius-md` | `14px` | Thumbnail container |
| `--radius-full` | `9999px` | Tags, badges, dots |

#### Shadow

```css
--shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.3);   /* Card hover state */
```

#### Easing

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);  /* All transform animations */
--duration-fast: 0.25s;                            /* Standard transitions */
```

---

## 2. Component Specifications

### 2.1 Project Card

The card is the core display component of this project, composed of a **thumbnail area** and a **content area**.

#### Base State

```css
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--surface-card);           /* #121c1a */
  border: 1px solid var(--border-default);   /* rgba(255,255,255,0.055) */
  border-radius: var(--radius-lg);           /* 20px */
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition:
    transform var(--duration-fast) var(--ease-out-expo),
    box-shadow var(--duration-fast) var(--ease-out-expo),
    border-color var(--duration-fast) ease;
}
```

#### Hover State

```css
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);              /* 0 16px 48px rgba(0,0,0,0.3) */
  border-color: var(--accent-glow);          /* rgba(224,90,114,0.35) */
}
```

#### Active State

```css
.project-card:active {
  transform: translateY(-2px) scale(0.995);
}
```

#### Focus Visible State

```css
.project-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

---

### 2.2 Thumbnail Wrapper

```css
.project-card__thumb {
  position: relative;
  margin: 0.85rem 0.85rem 0;                 /* top sides bottom */
  border-radius: var(--radius-md);           /* 14px */
  overflow: hidden;
  background: var(--surface-raised);         /* #0d1715 */
  border: 1px solid var(--border-default);
}

.project-card__thumb img {
  display: block;
  width: 100%;
  height: 120px;                             /* 160px on mobile */
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s var(--ease-out-expo);
}

.project-card:hover .project-card__thumb img {
  transform: scale(1.04);
}
```

---

### 2.3 Tag Badge

```css
.project-card__tag {
  align-self: flex-start;
  display: inline-block;
  background: var(--accent-subtle);          /* rgba(224,90,114,0.15) */
  color: var(--accent);                      /* #e05a72 */
  padding: 2px 8px;
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);         /* 9999px */
}
```

---

### 2.4 Step Indicator

```css
.project-card__num {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  background: var(--accent);                 /* #e05a72 */
  color: #fff;
  font-size: var(--text-xs);
  font-weight: 700;
  flex-shrink: 0;
}
```

---

### 2.5 Brand Dot

```css
.masthead__dot {
  display: block;
  width: 12px;
  height: 12px;
  margin-inline: auto;
  margin-block-end: 1rem;
  border-radius: var(--radius-full);
  background: var(--accent);                 /* #e05a72 */
  position: relative;
}

/* Pulse diffusion ring */
.masthead__dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: var(--accent-subtle);
  animation: pulse 2s ease-in-out infinite;
}
```

---

### 2.6 External Link Arrow

Slides in from the top-right corner on hover; hidden by default.

```css
.project-card__arrow {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 26px;
  height: 26px;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  display: inline-grid;
  place-items: center;
  opacity: 0;
  transform: translate(-3px, 3px);
  transition: all var(--duration-fast) var(--ease-out-expo);
  z-index: 2;
}

.project-card:hover .project-card__arrow {
  opacity: 1;
  transform: translate(0, 0);
}
```

---

### 2.7 Button (Extension Spec)

No primary buttons are used on the current page. If needed in the future:

```css
/* Primary Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--accent);
  color: #fff;
  padding: 0.6rem 1.4rem;
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--accent-glow);
}

/* Secondary Button */
.btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-hover);
}
```

---

### 2.8 Navbar (Extension Spec)

Currently a single-page site with no navbar. If added later:

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5rem;
  background: rgba(7, 20, 18, 0.85);
  backdrop-filter: blur(12px) saturate(1.2);
  border-bottom: 1px solid var(--border-default);
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast) ease;
}

.nav-link:hover,
.nav-link[aria-current="page"] {
  color: var(--text-primary);
}
```

---

## 3. Layout

### 3.1 Grid System

```css
/* Desktop: three columns */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

/* Mobile: single column */
@media (max-width: 720px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }
}
```

> **Rule**: Use `minmax(0, 1fr)` to prevent content overflow from breaking the grid.

---

### 3.2 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `<= 720px` | Grid collapses to single column; thumbnail height increases to `160px`; container vertical padding is reduced |

---

## 4. Accessibility & Performance

### 4.1 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4.2 Image Optimization

```html
<img src="images/week1.png"
     alt="Register Form Preview"
     loading="lazy"
     decoding="async"
     onerror="this.src='fallback.svg'">
```

- `loading="lazy"`: Defer loading for off-viewport images
- `decoding="async"`: Decode asynchronously without blocking the main thread
- `onerror`: Show a fallback placeholder when the image fails to load, preventing layout collapse

### 4.3 ARIA Markup

```html
<div id="project-grid" class="project-grid" role="list" aria-label="Project List">
  <a href="..." class="project-card" role="listitem" aria-label="Quiz Time">
    ...
  </a>
</div>
```

---

## 5. Design Principles

1. **Dark First**: All pages use `#071412` as the base; pure white backgrounds are prohibited.
2. **Accent Discipline**: `#e05a72` is reserved for the brand dot, step badges, tags, and hover borders only. Do not use it for large-area fills.
3. **Whitespace is Breath**: Keep card gaps at `1rem` and content padding at `0.85rem ~ 1rem`. Avoid crowding.
4. **Radius Consistency**: Large modules use `20px`, inner elements use `14px`, tags/buttons/badges use `9999px`.
5. **Motion Consistency**: All state changes use `0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
6. **Progressive Enhancement**: Core content (headings, text) must not depend on JavaScript. JS is used only for interactive enhancement.
