# Process / How It Works Section Specification

## Overview
- **Target file:** `src/components/ProcessSection.tsx`
- **Interaction model:** SCROLL-DRIVEN (sticky left panel + scrolling right content)
- **Theme:** data-theme="light"
- NOTE: The original uses a complex scroll-driven sticky layout with min-h-[320vh]. We implement a simplified but faithful version.

## DOM Structure
```
<section data-theme="light"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    <div class="grid-layout">
      
      <!-- Left: sticky heading panel (4 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-4, sticky top-[var(--site-header-height)+24px])
        <div> (flex flex-col gap-8)
          <span class="text-accent text-foreground-muted"> "// PROCESS"
          <h2 class="text-h2"> "How it works"
      
      <!-- Right: scrollable steps (8 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-8, flex flex-col gap-64 py-32)
        [ProcessStep x4]
```

## ProcessStep component
```
<div> (flex flex-col gap-8, py-32, border-t border-border)
  <span class="font-mono text-foreground-muted"> "01" | "02" | "03" | "04"
  <div> (flex flex-col gap-16)
    <h3 class="text-h3 font-weight-400"> "Subscribe" | etc.
    <p class="text-body text-foreground-muted"> (description text)
```

## Computed Styles

### Section
- background-color: rgb(238, 238, 238)
- padding: 256px top (desktop), 128px (mobile)
- padding-bottom: same

### Sticky heading panel
- position: sticky
- top: calc(var(--site-header-height) + 24px) = ~120px
- align-self: start

### Section label ("// PROCESS")
- font-family: geistMono
- font-size: 14px
- font-weight: 500
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(129, 128, 129)

### H2 "How it works"
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- color: rgb(20, 19, 20)
- letter-spacing: -0.025em

### Step number (01, 02...)
- font-family: geistMono
- font-size: 14px (body)
- color: rgb(105, 104, 105) = foreground-muted (light theme)
- text-transform: none (it's already numeric)

### Step heading (h3)
- font-size: clamp(28px → 48px) fluid
- font-weight: 400
- letter-spacing: -0.02em
- color: rgb(20, 19, 20)

### Step description
- font-size: 16px
- color: rgb(105, 104, 105)
- line-height: 24px
- max-width: 480px

### Step separator
- border-top: 1px solid rgba(0,0,0,0.2)
- padding-top: 32px

## Steps Data (verbatim)
1. **Subscribe** — "Pick a plan that fits your workload and pay monthly, with no contracts and no minimum commitment. Pause or cancel to the next month whenever you need to."
2. **Request** — "Send your work through Slack, email, or wherever your team already communicates. We tackle one request at a time in the order you set."
3. **Ship** — "You'll receive deliverables every 2-5 business days with unlimited revisions until you're happy."
4. **Repeat** — "Submit your next request and we keep going the same way. Your backlog shrinks and your product gets better, month after month."

## Responsive Behavior
- **Desktop (1024px+):** 4-col sticky left + 8-col scrolling right
- **Mobile (390px):** Single column, heading above steps (no sticky)
- **Breakpoint:** 1024px
