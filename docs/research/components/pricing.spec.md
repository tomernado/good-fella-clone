# Pricing Section Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Interaction model:** static, two plan cards
- **Theme:** data-theme="dark"

## DOM Structure
```
<section data-theme="dark"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    
    <!-- Header -->
    <div> (mb-64)
      <span class="text-accent text-foreground-muted"> "// PRICING"
      <h2 class="text-h2"> "Simple, transparent pricing."
    
    <!-- Plans grid -->
    <div> (grid grid-cols-1 lg:grid-cols-2 gap-16)
      [PricingCard — ACTIVE plan]
      [PricingCard — EMBEDDED plan]
    
    <!-- Footer note -->
    <p class="text-body text-foreground-muted mt-32">
      "Need a defined project? Good Fella also builds fixed-scope frontend projects starting from €25,000."
```

## PricingCard component
```
<div> (bg-background-muted p-32 flex flex-col gap-32)
  <!-- Plan header -->
  <div> (flex flex-col gap-16)
    <div> (flex flex-row justify-between items-start)
      <span class="text-accent"> "ACTIVE" | "EMBEDDED"
      <span class="badge"> (capacity badge)
    <div> (flex flex-row items-baseline gap-8)
      <span class="text-display font-weight-300"> "€10,000" | "€20,000"
      <span class="text-body text-foreground-muted"> "/ month"
    <span class="badge-tag"> "ONGOING WORK" | "FOR HEAVY BUILD PHASES"
  
  <!-- Features list -->
  <ul> (flex flex-col gap-8)
    [FeatureItem x5]
  
  <!-- CTA -->
  [OrangeButton text="GET STARTED" href="/contact"]
  
  <!-- Spots indicator -->
  <span class="text-accent text-foreground-muted"> "ONLY 3 SPOTS LEFT"
```

## FeatureItem
```
<li> (flex flex-row items-start gap-8)
  <CheckIcon /> (small, brand color)
  <span class="text-body"> feature text
```

## Computed Styles

### Section
- background-color: rgb(20, 19, 20)
- padding: 128px (desktop), 64px (mobile)

### Section eyebrow
- font-family: geistMono
- font-size: 14px
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(129, 128, 129)

### Heading "Simple, transparent pricing."
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- color: rgb(238, 238, 238)
- letter-spacing: -0.025em

### Plan card
- background-color: rgb(38, 38, 38) ≈ #1a1a1a (background-muted in dark theme)
- padding: 32px
- border: 1px solid rgba(238,238,238,0.1)
- display: flex
- flex-direction: column
- gap: 32px

### Plan name badge ("ACTIVE" | "EMBEDDED")
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.08em
- color: rgb(238, 238, 238)
- OR could have a pill background

### Price
- font-size: ~5-8rem fluid (display size)
- font-weight: 300 (light!)
- color: rgb(238, 238, 238)
- letter-spacing: -0.04em

### Feature text
- font-size: 16px
- color: rgb(238, 238, 238)
- line-height: 24px

### Check icon
- color: rgb(253, 85, 29) = brand
- width: 16px, height: 16px

### "ONLY 3 SPOTS LEFT" badge
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.05em
- color: rgb(253, 85, 29) = brand

### Capacity label ("ONGOING WORK" | "FULL CAPACITY")
- font-family: geistMono
- font-size: 11px
- text-transform: uppercase
- background: rgba(253,85,29,0.15)
- color: rgb(253, 85, 29)
- padding: 4px 8px
- border: 1px solid rgba(253,85,29,0.3)

## Plans Data (verbatim)

### ACTIVE — €10,000/month (ONGOING WORK)
Features:
- One request at a time
- 2-5 day turnaround
- Unlimited revisions
- Direct Slack access
- Pause or cancel to the next month

Capacity: ONLY 3 SPOTS LEFT

### EMBEDDED — €20,000/month (FULL CAPACITY)
Features:
- Priority turnaround, 1-3 days
- Two requests at a time
- Near full-time availability
- Everything in Active
- For heavy build phases

Capacity: ONLY 3 SPOTS LEFT

### Footer note
"Need a defined project? Good Fella also builds fixed-scope frontend projects starting from €25,000."

## Responsive Behavior
- **Desktop (1024px+):** 2-column grid, plans side by side
- **Mobile (390px):** Single column, plans stack
- **Breakpoint:** 1024px
