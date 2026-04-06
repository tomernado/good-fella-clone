# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** (hero shown at top of page — dark bg with ASCII art figure on right)
- **Interaction model:** static, with canvas ASCII art
- **Theme:** data-theme="dark"

## DOM Structure
```
<section data-theme="dark"> (min-h-100svh, bg-background, overflow-hidden)
  <div class="grid-container"> (relative, min-h-100svh, pt-52 [208px] for nav)
    <div class="grid-layout"> (12-col grid, min-h-[calc(100svh-208px)])
      
      <!-- Left content (7 cols desktop, 12 mobile) -->
      <div> (grid-span-12 lg:grid-span-7, relative z-10 flex flex-col)
        <div> (heading area, flex flex-col gap-24)
          <h1> (fluid text, two lines)
            "Your Frontend team."
            "One monthly fee."
        <div> (subtitle + CTAs, pointer-events-auto mt-32 flex flex-col items-start gap-32)
          <p> (subtitle text)
          <div> (CTA buttons row, flex flex-row flex-wrap items-center gap-16)
            [OrangeButton href="/pricing" text="SEE OUR PRICING"]
            <a> "View our work" (text-only, underline)
      
      <!-- Brands bar at bottom left -->
      <div> (absolute bottom-0 left-0, flex flex-col gap-8)
        <p class="font-mono text-foreground-muted"> "WE HAVE WORKED WITH BRANDS THAT CARE ABOUT CRAFT"
        <div> (flex flex-row gap-24 items-center)
          [CocaColaLogo]
          <span> "BODYARMOR"
          <span> "WKNDHRS®"
          <span> "+ MANY MORE"

      <!-- Right: ASCII art canvas (5 cols desktop) -->
      <div> (lg:grid-span-5, absolute right-0 top-[35%] bottom-0 w-9/10)
        <canvas> (557×701px, renders ASCII art figure in orange chars on dark bg)
```

## Computed Styles

### Section
- background-color: rgb(20, 19, 20)
- min-height: 100svh
- overflow: hidden
- padding-top: 0
- padding-bottom: 0

### H1
- font-size: 86.8px (fluid, clamp 2rem → 6rem at wider viewports)
- font-weight: 400
- font-family: aktiv-grotesk
- line-height: 95.5px (~1.1)
- letter-spacing: -3.04px (-0.035em)
- color: rgb(238, 238, 238)
- The heading spans two lines naturally at desktop

### Subtitle (p)
- font-size: 16px
- font-weight: 400
- font-family: aktiv-grotesk
- line-height: 24px
- color: rgb(129, 128, 129) = foreground-muted
- max-width: ~560px

### CTA Button (OrangeButton) — "SEE OUR PRICING"
Two-part split button design:
- Container `<a>`: display flex, height 40px, cursor pointer, overflow hidden
- Icon part (left): 40×40px square, bg rgb(253, 85, 29), flex center, contains `+` SVG 14px white
- Text part (right): flex-1, padding 0 12px, bg rgb(253, 85, 29), font geistMono 14px weight 500 UPPERCASE, color rgb(20, 19, 20)
- No border-radius (sharp corners)
- Hover: subtle translateY(-2px) on both spans, transition 0.3s ease

### "View our work" text link
- font-size: 14px
- font-family: geistMono
- font-weight: 500
- text-transform: uppercase
- color: rgb(238, 238, 238)
- text-decoration: underline
- letter-spacing: 0.05em

### Brand bar labels
- font-family: geistMono
- font-size: ~12px
- font-weight: 500
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(129, 128, 129) = foreground-muted

### Brand logos (Coca-Cola, etc.)
- color: rgb(238, 238, 238) (white)
- height: ~20px
- display: inline-flex align-items-center

### ASCII art canvas
- width: ~557px, height: ~701px
- Positioned in the right half of the hero, extending below the fold
- The canvas renders a human figure silhouette made of orange-to-dark-orange characters
- Colors fade from bright orange (rgb(253, 85, 29)) at center to near-dark at edges
- Since we cannot reproduce the exact JS canvas animation, we'll use a styled CSS approximation or placeholder

## States & Behaviors

### CTA button hover
- Both orange spans shift translateY(-2px)
- Transition: 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)

## Text Content (verbatim)
- H1 line 1: "Your Frontend team."
- H1 line 2: "One monthly fee."
- Subtitle: "Good Fella is a frontend development studio that works as your dedicated team. One monthly fee, no contracts, and no hourly tracking."
- CTA 1: "SEE OUR PRICING"
- CTA 2: "View our work"
- Brand label: "WE HAVE WORKED WITH BRANDS THAT CARE ABOUT CRAFT"
- Brands: "Coca-Cola", "BODYARMOR", "WKNDHRS®", "+ MANY MORE"

## Responsive Behavior
- **Desktop (1024px+):** 7-col text left, ASCII art fills right 5 cols
- **Mobile (390px):** Single column, ASCII art hidden or shown below text
- **Breakpoint:** ~1024px

## Assets
- Logo: imported from icons.tsx (not used in hero, that's the navbar)
- CTA icons: PlusIcon from icons.tsx
- ASCII art: Implement as a decorative background with orange text characters using CSS/inline rendering
