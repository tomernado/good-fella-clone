# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static
- **Theme:** data-theme="dark"

## DOM Structure
```
<footer data-theme="dark"> (bg-background, border-t border-border)
  <div class="grid-container"> (py-32)
    <div> (flex flex-row justify-between items-center gap-16 flex-wrap)
      
      <!-- Left: Logo + tagline -->
      <div> (flex flex-col gap-8)
        <GoodLogo /> (small, ~60px wide, white)
        <span class="font-mono text-foreground-muted text-sm"> "Websites That Move."
      
      <!-- Center: Nav links -->
      <nav> (flex flex-row gap-24 flex-wrap)
        <a class="font-mono text-sm text-foreground-muted hover:text-foreground"> "Work"
        <a class="font-mono text-sm text-foreground-muted hover:text-foreground"> "Services"
        <a class="font-mono text-sm text-foreground-muted hover:text-foreground"> "Pricing"
        <a class="font-mono text-sm text-foreground-muted hover:text-foreground"> "FAQ"
      
      <!-- Right: Copyright + social -->
      <div> (flex flex-col gap-4 text-right)
        <span class="font-mono text-sm text-foreground-muted"> "© 2025 Good Fella"
        <a class="font-mono text-sm text-foreground-muted"> "contact@good-fella.com"
```

## Computed Styles

### Footer container
- background-color: rgb(20, 19, 20)
- border-top: 1px solid rgba(238,238,238,0.1)
- padding: 32px 0

### Logo in footer
- color: rgb(238, 238, 238)
- width: ~60px

### Tagline "Websites That Move."
- font-family: geistMono
- font-size: 12px
- text-transform: none
- color: rgb(129, 128, 129)

### Nav links
- font-family: geistMono
- font-size: 12-14px
- text-transform: uppercase
- letter-spacing: 0.05em
- color: rgb(129, 128, 129) default
- color: rgb(238, 238, 238) on hover
- Transition: color 0.2s ease

### Copyright / email
- font-family: geistMono
- font-size: 12px
- color: rgb(129, 128, 129)

## Text Content (verbatim)
- Tagline: "Websites That Move."
- Nav: Work, Services, Pricing, FAQ
- Copyright: "© 2025 Good Fella"
- Email: "contact@good-fella.com"

## Responsive Behavior
- **Desktop:** Three-column flex row
- **Mobile:** Stacked flex column
