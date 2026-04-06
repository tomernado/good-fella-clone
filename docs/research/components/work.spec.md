# Featured Work Section Specification

## Overview
- **Target file:** `src/components/WorkSection.tsx`
- **Interaction model:** SCROLL-DRIVEN (sticky left heading + scrolling project list)
- **Theme:** data-theme="dark"

## DOM Structure
```
<section data-theme="dark"> (bg-background)
  <div class="grid-container">
    <div class="grid-layout" style="align-items: start">
      
      <!-- Left: sticky heading (4 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-4, sticky top-[~120px], align-self: start)
        <div> (flex flex-col gap-24)
          <div> (flex flex-col gap-8)
            <span class="text-accent text-foreground-muted"> (empty / decorative)
            <h2> (split across two lines)
              <span> "Featured"
              <br/>
              <span> "Work"
          <p class="text-body text-foreground-muted">
            "We build websites where every scroll, every transition, and every interaction feels intentional. The details most teams skip are the details we care about most."
          [OrangeButton href="/work" text="VIEW ALL"]
      
      <!-- Right: scrolling project list (8 cols desktop) -->
      <div> (grid-span-12 lg:grid-span-8, flex flex-col, py-32)
        [WorkItem x4]
```

## WorkItem component
```
<div> (flex flex-col gap-8, py-48, border-t border-border)
  <div> (flex flex-row justify-between items-start)
    <h3 class="text-h3"> Project name (all caps or title case)
    <span class="text-foreground-muted"> (optional year)
  <div class="flex flex-row flex-wrap gap-8">
    [Tag] x N (categories in brackets)
```

## Computed Styles

### Section
- background-color: rgb(20, 19, 20) — dark
- padding: 128px 0

### "Featured Work" heading
- "Featured" + line break + "Work"
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- letter-spacing: -0.025em
- color: rgb(238, 238, 238)

### Description paragraph
- font-size: 16px
- color: rgb(129, 128, 129) = foreground-muted
- line-height: 24px

### Project name (h3)
- font-size: clamp(28px → 48px) fluid
- font-weight: 400
- letter-spacing: -0.02em
- color: rgb(238, 238, 238)

### Tags
- font-family: geistMono
- font-size: 12-14px
- text-transform: uppercase
- color: rgb(129, 128, 129)
- No background (text only, with separator "—" between groups)

### Project separator
- border-top: 1px solid rgba(238,238,238,0.1)
- padding: 48px 0

## Projects Data (verbatim)
1. **BODYARMOR** — [MARKETING SITE] — [SPORTS]
2. **Annnimate** — [WEB APP] — [SAAS] — [ANIMATIONS]
3. **WKNDHRS** — [AGENCY WEBSITE] — [PORTFOLIO] — [ANIMATIONS]
4. **Fitgreenmind** — [MARKETING SITE] — [ANIMATIONS]

## Responsive Behavior
- **Desktop (1024px+):** 4-col sticky heading left + 8-col project list right
- **Mobile (390px):** Heading above project list, no sticky
- **Breakpoint:** 1024px
