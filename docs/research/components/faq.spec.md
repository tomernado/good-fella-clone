# FAQ Section Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Interaction model:** accordion (click to expand, one at a time)
- **Theme:** data-theme="light"

## DOM Structure
```
<section data-theme="light"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    <div class="grid-layout">
      
      <!-- Heading (4 cols) -->
      <div> (grid-span-12 lg:grid-span-4)
        <h2 class="text-h2"> "Common questions"
      
      <!-- Accordion (8 cols) -->
      <div> (grid-span-12 lg:grid-span-8)
        [FaqItem x6]
```

## FaqItem component
```
<div> (border-t border-border)
  <!-- Trigger -->
  <button> (w-full flex flex-row justify-between items-center py-24 text-left cursor-pointer)
    <span class="text-body font-weight-500"> "What can I send you?"
    <ChevronDownIcon /> (transition rotate-180 when open)
  
  <!-- Answer panel (expandable) -->
  <div> (overflow-hidden, height: 0 → auto on open)
    <p class="text-body text-foreground-muted pb-24">
      answer text
```

## Computed Styles

### Section
- background-color: rgb(238, 238, 238)
- padding: 128px (desktop), 64px (mobile)

### H2 "Common questions"
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- color: rgb(20, 19, 20)
- letter-spacing: -0.025em

### FAQ item separator
- border-top: 1px solid rgba(0,0,0,0.2)

### Question button
- width: 100%
- display: flex
- justify-content: space-between
- align-items: center
- padding: 24px 0
- background: transparent
- cursor: pointer
- text-align: left

### Question text
- font-size: 16-18px
- font-weight: 500
- color: rgb(20, 19, 20)
- line-height: 1.4

### Chevron icon
- color: rgb(20, 19, 20)
- width: 20px, height: 20px
- transition: transform 0.3s ease
- Closed state: rotate(0deg)
- Open state: rotate(180deg)

### Answer text
- font-size: 16px
- color: rgb(105, 104, 105)
- line-height: 24px
- padding-bottom: 24px

## FAQ Data (verbatim)

1. **What can I send you?** — "Anything frontend. Landing pages, website sections, full builds, animations, interactions, bug fixes, Webflow work, React components. If users see it and interact with it, we build it."

2. **How fast will I get my work?** — "Most requests ship in 2-5 business days. Bigger things like full websites take 2-4 weeks. We always give you a realistic timeline before we start so nothing comes as a surprise."

3. **Who will I work with?** — "Julian and Adrian. We're brothers and co-founders. The people you talk to are the people writing the code. As we grow, every team member meets the same standard: senior developers who care about the details."

4. **Can I pause or cancel?** — "Yes. Pause or cancel to the next month. Days don't carry over, so you're never paying for time you're not using. No penalties, no questions."

5. **What's not included?** — "We don't do visual design from scratch: no branding, UI design, or creative direction. We take designs from Figma or any other tool and turn them into production code. If you need design work, we know people we'd recommend."

6. **What if I'm not happy with the work?** — "Unlimited revisions on everything. We keep going until you say it's right. No extra charge, no attitude."

## States & Behaviors

### Accordion expand
- **Trigger:** click on question button
- **State A (closed):** height: 0, overflow: hidden
- **State B (open):** height: auto (content height)
- **Transition:** height 0.3s ease, with CSS grid trick or max-height approach
- Only one item open at a time

## Responsive Behavior
- **Desktop (1024px+):** 4-col heading + 8-col accordion
- **Mobile (390px):** Heading above accordion, full width
- **Breakpoint:** 1024px
