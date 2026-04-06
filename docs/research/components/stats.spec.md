# Stats Section Specification

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** number counter animation on viewport enter (IntersectionObserver)
- **Theme:** data-theme="light" (light background)

## DOM Structure
```
<section data-theme="light"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    <div class="grid-layout">
      <div class="grid-span-12">
        <div> (grid 1 col mobile, 2 cols tablet, 4 cols desktop, gap-16)
          
          <!-- Card 1: Canvas/visual (transparent bg) -->
          <div> (min-h-[300px] lg:min-h-[450px], contains animated canvas)
            <!-- ASCII art or decorative element -->
          
          <!-- Card 2: Market cap stat -->
          <div class="stat-card"> (flex flex-col justify-between, bg-background-muted, p-16 min-h-[250px] lg:min-h-[450px])
            <div> (number + suffix display)
              <span> "$" prefix (font-mono, large, thin)
              <div> (slot counter showing "12" animated)
              <span> "B+" suffix
            <span> "COMBINED CLIENT MARKET CAP" (label, font-mono uppercase)
          
          <!-- Card 3: People reached -->
          <div class="stat-card">
            <div>
              <div> (slot counter "200")
              <span> "M+" suffix
            <span> "PEOPLE REACHED BY OUR WORK"
          
          <!-- Card 4: Projects shipped -->
          <div class="stat-card">
            <div>
              <div> (slot counter "150")
              <span> "+" suffix
            <span> "PROJECTS SHIPPED"
```

## Computed Styles

### Section
- background-color: rgb(238, 238, 238) — light/cream
- padding: 128px 0 (desktop), 64px 0 (mobile)
- data-theme: "light" (affects all color vars inside)

### Stat Card
- background-color: rgb(247, 247, 247)
- padding: 16px
- display: flex
- flex-direction: column
- justify-content: space-between
- min-height: 250px (mobile), 450px (desktop)
- cursor: default (hover effect: slight scale or bg change)

### Number display
- font-size: 86.8px (same fluid scale as h1)
- font-weight: 300 (LIGHT weight — not 400!)
- font-family: aktiv-grotesk
- line-height: 1.0
- letter-spacing: -3px
- color: rgb(20, 19, 20) — dark text on light bg

### Suffix/prefix (B+, M+, +, $)
- Same size as number — displayed inline
- font-weight: 300

### Card label
- font-family: geistMono
- font-size: ~14px
- font-weight: 400
- text-transform: uppercase
- letter-spacing: 0.05em
- color: rgb(20, 19, 20)

## Stats Data
| Prefix | Value | Suffix | Label |
|--------|-------|--------|-------|
| $ | 12 | B+ | COMBINED CLIENT MARKET CAP |
| (none) | 200 | M+ | PEOPLE REACHED BY OUR WORK |
| (none) | 150 | + | PROJECTS SHIPPED |

## States & Behaviors

### Counter animation
- **Trigger:** IntersectionObserver — when card enters viewport
- **Effect:** Slot-machine style: digits scroll upward and land on final value
- **Implementation:** Use a simple counter animation with CSS/JS that increments from 0 to final value over ~1.5s
- Simple approach: use `useEffect` with `requestAnimationFrame` to count up
- The "slot" visual shows digits 0-9 in a column that scrolls to the target digit

### First card (transparent)
- Contains canvas ASCII art (same style as hero)
- Implement as decorative element — orange/brown character art

## Responsive Behavior
- **Mobile:** Single column grid, cards stack
- **Tablet (768px):** 2-column grid
- **Desktop (1024px):** 4-column grid
- **Breakpoint:** 768px and 1024px

## Text Content (verbatim)
- "$12B+" + "COMBINED CLIENT MARKET CAP"
- "200M+" + "PEOPLE REACHED BY OUR WORK"  
- "150+" + "PROJECTS SHIPPED"
