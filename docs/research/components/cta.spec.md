# CTA / Contact Section Specification

## Overview
- **Target file:** `src/components/CtaSection.tsx`
- **Interaction model:** static
- **Theme:** data-theme="brand" (orange background)

## DOM Structure
```
<section data-theme="brand"> (bg-background = orange #fb460d)
  <div class="grid-container"> (py-128)
    <div class="grid-layout">
      
      <!-- Left content (7 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-7, flex flex-col gap-32)
        <h2 class="text-display">
          "Start a project."
        <p class="text-body">
          "Book a 15-minute call or send us a message. No preparation needed."
        <a href="mailto:contact@good-fella.com" class="font-mono text-body">
          "contact@good-fella.com"
        <p class="font-mono text-sm">
          "Working with teams worldwide."
      
      <!-- Right CTAs (5 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-5, flex flex-col lg:flex-row gap-16 items-start lg:items-end justify-end)
        [DarkButton text="GET STARTED" href="/contact"]
        [DarkButton text="BOOK A 15-MIN CALL" href="/call"]
        <p class="font-mono text-sm text-foreground-muted">
          "Let the Fellas handle it."
```

## Dark Button (inverted — dark bg on orange section)
```
<a> (flex, height 40px, overflow hidden)
  <span> (40×40px, bg: #141314 dark, contains + SVG white)
  <span> (flex-1, px-12, bg: #141314 dark, font geistMono 14px uppercase, color: #eeeeee)
```

## Computed Styles

### Section
- background-color: rgb(251, 70, 13) ≈ #fb460d — brand orange (light brand theme)
- padding: 128px 0

### H2 "Start a project."
- font-size: clamp(48px → 128px) fluid (display size)
- font-weight: 400
- color: rgb(20, 19, 20) — dark text on orange bg
- letter-spacing: -0.04em
- line-height: 1.05

### Description text
- font-size: 16px
- color: rgb(20, 19, 20)
- line-height: 24px
- opacity: 0.8 or slightly muted

### Email link
- font-family: geistMono
- font-size: 14-16px
- color: rgb(20, 19, 20)
- text-decoration: underline
- cursor: pointer

### "Working with teams worldwide."
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(20, 19, 20) at 70% opacity

### Dark buttons (on brand bg)
- Same split button design as orange buttons
- Left square: 40×40px, bg rgb(20, 19, 20) dark
- Right span: flex-1 px-12, bg rgb(20, 19, 20) dark
- Text: rgb(238, 238, 238) white
- Font: geistMono, 14px, 500, uppercase

### "Let the Fellas handle it."
- font-family: geistMono
- font-size: 12px
- color: rgb(20, 19, 20) at 60% opacity
- text-transform: uppercase

## Text Content (verbatim)
- Heading: "Start a project."
- Description: "Book a 15-minute call or send us a message. No preparation needed."
- Email: "contact@good-fella.com"
- Subtext: "Working with teams worldwide."
- CTA 1: "GET STARTED"
- CTA 2: "BOOK A 15-MIN CALL"
- Footer line: "Let the Fellas handle it."

## Responsive Behavior
- **Desktop (1024px+):** Heading + text left (7 cols), CTAs bottom-right (5 cols)
- **Mobile (390px):** Single column, heading → description → email → CTAs
- **Breakpoint:** 1024px
