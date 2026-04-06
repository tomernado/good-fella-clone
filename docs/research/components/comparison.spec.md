# Why Good Fella? Comparison Section Specification

## Overview
- **Target file:** `src/components/ComparisonSection.tsx`
- **Interaction model:** static table/grid
- **Theme:** data-theme="dark"

## DOM Structure
```
<section data-theme="dark"> (bg-background, pt-64 lg:pt-128, pb-64 lg:pb-128)
  <div class="grid-container">
    <div class="grid-layout">
      
      <!-- Left: heading (4 cols) -->
      <div> (grid-span-12 lg:grid-span-4)
        <div> (flex flex-col gap-24)
          <h2 class="text-h2">
            "Why Good"
            <br/>
            "Fella?"
          [OrangeButton text="SEE HOW IT WORKS" href="#process"]
      
      <!-- Right: comparison table (8 cols) -->
      <div> (grid-span-12 lg:grid-span-8)
        
        <!-- Column headers -->
        <div> (grid grid-cols-4 gap-16 mb-16 border-b border-border pb-16)
          <div> (empty — row label column)
          <span class="font-mono text-foreground-muted"> "TRADITIONAL AGENCY"
          <span class="font-mono text-foreground-muted"> "FREELANCER"  
          <span class="font-mono text-brand"> "GOOD FELLA"
        
        <!-- Rows -->
        [ComparisonRow x6]
```

## ComparisonRow component
```
<div> (grid grid-cols-4 gap-16 py-16 border-b border-border-muted)
  <span class="font-mono text-foreground-muted text-sm uppercase"> (criterion)
  <span class="text-body text-foreground-muted"> (agency answer)
  <span class="text-body text-foreground-muted"> (freelancer answer)
  <span class="text-body text-foreground"> (good fella answer — highlighted)
```

## Computed Styles

### Section
- background-color: rgb(20, 19, 20) — dark
- padding: 128px (desktop), 64px (mobile)

### Heading "Why Good Fella?"
- font-size: clamp(36px → 64px) fluid
- font-weight: 400
- color: rgb(238, 238, 238)
- letter-spacing: -0.025em

### Column header labels
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.08em
- "TRADITIONAL AGENCY" + "FREELANCER": color rgb(129, 128, 129)
- "GOOD FELLA": color rgb(253, 85, 29) — orange/brand

### Row criterion label
- font-family: geistMono
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.05em
- color: rgb(129, 128, 129)

### Agency + Freelancer answers
- font-size: 14-16px
- color: rgb(129, 128, 129) — muted

### Good Fella answers
- font-size: 14-16px
- color: rgb(238, 238, 238) — full white (highlighted)

## Comparison Data (verbatim)
| Criterion | Traditional Agency | Freelancer | Good Fella |
|-----------|-------------------|------------|------------|
| WHO DOES THE WORK | Varies by project | One person | Frontend veterans |
| PRICING MODEL | Hourly or project-based | Per project | One monthly fee |
| COMMUNICATION | Through account manager | Direct email | In your Slack |
| TURNAROUND | Varies by workload | Depends on availability | 2-5 business days |
| RELATIONSHIP | Project-based | Project-based | Ongoing partnership |
| COMMITMENT | Contract-based | Per project | Cancel to the next month |

## Responsive Behavior
- **Desktop (1024px+):** 4-col heading left + table right
- **Mobile (390px):** Stacked layout — heading, then simplified comparison cards (one per provider)
- **Breakpoint:** 768px
