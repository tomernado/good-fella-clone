# Services / What's Included Section Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Interaction model:** Items fade-in on scroll (IntersectionObserver)
- **Theme:** data-theme="light"

## DOM Structure
```
<section data-theme="light"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    
    <!-- Section header -->
    <div> (grid-layout mb-64)
      <div> (grid-span-12 lg:grid-span-6)
        <span class="text-accent text-foreground-muted"> "// WHAT'S INCLUDED"
        <h2 class="text-h2">
          "Everything frontend."
          <br/>
          "One subscription."
      <div> (grid-span-12 lg:grid-span-6 flex items-end)
        <p class="text-body text-foreground-muted"> "WHAT EVERY SUBSCRIPTION INCLUDES"
    
    <!-- Services grid -->
    <div> (grid-layout gap-px bg-border)
      [ServiceItem x6]
```

## ServiceItem component
```
<div> (bg-background py-32 px-0 flex flex-col gap-16, border-t border-border)
  <span class="font-mono text-foreground-muted uppercase"> "FRONTEND DEVELOPMENT"
  <p class="text-body text-foreground-muted">
    (description)
```

## Computed Styles

### Section
- background-color: rgb(238, 238, 238) — light
- padding: 128px top/bottom (desktop), 64px (mobile)

### Section eyebrow ("// WHAT'S INCLUDED")
- font-family: geistMono
- font-size: 14px
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(105, 104, 105)

### H2 heading
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- color: rgb(20, 19, 20)
- letter-spacing: -0.025em
- (two lines: "Everything frontend." / "One subscription.")

### Sub-label ("WHAT EVERY SUBSCRIPTION INCLUDES")
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(105, 104, 105)

### Service item title
- font-family: geistMono
- font-size: 14px
- font-weight: 500
- text-transform: uppercase
- letter-spacing: 0.05em
- color: rgb(20, 19, 20)

### Service item description
- font-size: 16px
- color: rgb(105, 104, 105)
- line-height: 24px

## Services Data (verbatim)
1. **FRONTEND DEVELOPMENT** — "Websites, web apps, landing pages built with clean, maintainable code. Optimized for performance, SEO, and Core Web Vitals from day one."
2. **ANIMATION + INTERACTION** — "Scroll-triggered animations, page transitions, hover states, micro-interactions. All GPU-accelerated, all buttery smooth at 60fps."
3. **DESIGN IMPLEMENTATION** — "Pixel-perfect builds from Figma, or whatever you use. Responsive down to the last breakpoint, exactly as your designer intended."
4. **TECH STACK** — "React, Next.js, Vue, Nuxt, Webflow, GSAP, Framer Motion, Tailwind. We match the tools to your project and integrate with your existing codebase."
5. **UNLIMITED REVISIONS** — "Iterate until it's right. No revision caps, no extra charges, no awkward scope conversations."
6. **DIRECT ACCESS** — "We work in your Slack, your Linear, your Notion. You talk to the developers, not an account manager."

## Responsive Behavior
- **Desktop (1024px+):** 2-column service grid (6+6 or 4+4+4)
- **Mobile (390px):** Single column, items stack
- **Breakpoint:** 768px
