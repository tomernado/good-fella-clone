# Good Fella – Behaviors & Interactions

## Scroll Behaviors

### Header / Navbar
- **Default (scrollY = 0):** `position: fixed`, `background: transparent`, full width, z-index 9999
- **Scrolled state (scrollY > 10px):** Background becomes `rgb(20, 19, 20)` (dark), slight shadow
- **Trigger:** scroll listener
- **Transition:** `transition: background 0.3s ease`

### Page smooth scroll
- **Library:** Lenis (confirmed — `html.lenis` class present)
- **Behavior:** All scroll events go through Lenis smooth scroll

### Entrance animations
- Most sections animate in with `opacity: 0 → 1` + `translateY(24px → 0)` when entering viewport
- Uses IntersectionObserver
- Transition: ~0.6s ease-out with staggered delays on children

## Section-specific Interaction Models

### Section 0 – Hero
- **Interaction:** Static (no scroll-driven changes within the hero)
- **ASCII art:** Canvas element rendering a figure with orange-on-dark text characters
- **CTA buttons:** Hover effect — the `+` icon square shifts/slides

### Section 1 – Stats (data-theme="light")
- **Interaction:** Number slots animate up when section enters viewport (slot-machine counter)
- Numbers 0-9 scroll upward in a column, landing on the final value
- First card (transparent bg) appears to be a canvas/animation element

### Section 2 – How it Works (data-theme="light")
- **Interaction model: SCROLL-DRIVEN (sticky)**
- Section is `min-h-[320vh]` making it very tall
- Left panel: sticky, shows "How it works" heading + current step details
- Right panel: content scrolls past, each step appears as you scroll
- Step number (01, 02, 03, 04) updates as you scroll through

### Section 3 – Featured Work (data-theme="dark")
- **Interaction model: SCROLL-DRIVEN (sticky)**
- Left panel: sticky with "Featured Work" heading + description
- Right panel: project list scrolls past
- Each project shows title + tags, no images visible in initial state
- "VIEW ALL" CTA button at bottom

### Section 4 – Services / What's Included (data-theme="light")
- **Interaction:** Items animate in on scroll (IntersectionObserver)
- Grid of service items with title + description

### Section 5 – Why Good Fella? (data-theme="dark")
- **Interaction:** Comparison table, static
- Three-column comparison: Traditional Agency | Freelancer | Good Fella

### Section 6 – Pricing (data-theme="dark")
- **Interaction:** Two pricing cards, hover effects
- "Only 3 spots left" badge on each plan

### Section 7 – FAQ (data-theme="light")
- **Interaction:** Accordion — click to expand/collapse each question
- Default: all collapsed
- Only one open at a time

### Section 8 – CTA / Contact (data-theme="brand")
- **Interaction:** Static, links to booking and email
- Orange background section

### Footer (data-theme="dark")
- **Interaction:** Static, navigation links + legal

## Responsive Breakpoints
- Mobile: 390px — single column layout, most sections stack
- Tablet: 768px — 2 columns for some grids
- Desktop: 1024px+ — full 12-column grid active
- Wide: 1440px+ — increased padding

## Header at Mobile
- Logo + CTA button on right
- MENU button opens overlay navigation
