# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** scroll-driven (transparent → dark bg on scroll)
- **Position:** fixed, top-0, z-index 9999, full width

## DOM Structure
```
<header> (fixed, full-width, z-9999)
  <div> (inner wrapper, grid-container padding, flex row)
    <div> (left: logo)
      <a href="/">
        <GoodLogo /> (SVG wordmark, white, ~73px wide, ~24px tall)
    <div> (center: MENU button)
      <button>
        <span>"MENU"</span>
        <MenuIcon /> (two horizontal lines)
    <div> (right: CTA button)
      <a href="/pricing" class="btn-primary">
        [OrangeButton text="LET'S WORK TOGETHER"]
```

## Computed Styles

### Header (default — transparent)
- position: fixed
- top: 0
- left: 0
- right: 0
- height: 96px
- background: transparent
- z-index: 9999
- display: flex
- flex-direction: column
- padding: 16px 0 0

### Header (scrolled state)
- background-color: rgb(20, 19, 20) — adds dark bg
- Transition: background-color 0.3s ease

### Inner layout
- display: flex
- flex-direction: row
- align-items: center
- justify-content: space-between
- padding: 0 24px (grid-container)
- height: 64px

### Logo link
- width: ~73px
- height: ~24px
- color: rgb(238, 238, 238)

### MENU button
- display: flex
- align-items: center
- gap: 8px
- font-family: geistMono
- font-size: 14px
- font-weight: 500
- letter-spacing: 0.05em
- text-transform: uppercase
- color: rgb(238, 238, 238)
- background: transparent
- cursor: pointer

### CTA Button (OrangeButton)
The button has a split design:
- Outer `<a>`: display flex, height 40px, no border-radius, overflow hidden
- Left span (icon): 40×40px, background rgb(253, 85, 29), contains `+` SVG (white, 16px)
- Right span (text): flex-1, padding 0 12px, background rgb(253, 85, 29), font geistMono 14px weight 500 uppercase, color rgb(20, 19, 20)
- Hover: translateY slide animation on both spans

## States & Behaviors

### Scroll-triggered background
- **Trigger:** window.scrollY > 10
- **State A:** background: transparent
- **State B:** background: rgb(20, 19, 20)
- **Transition:** transition: background-color 0.3s ease

## Text Content
- Logo: SVG wordmark (no text)
- Center: "MENU" with hamburger icon (two lines)
- CTA: "LET'S WORK TOGETHER" + "+"

## Responsive Behavior
- **Desktop (1024px+):** All three items visible
- **Mobile (< 768px):** Logo left, CTA right (no MENU text, just icon)
- **Breakpoint:** ~768px

## Assets
- Logo: `<GoodLogo />` from `src/components/icons.tsx`
- Plus icon: `<PlusIcon />` from icons.tsx
- Menu icon: `<MenuIcon />` from icons.tsx
