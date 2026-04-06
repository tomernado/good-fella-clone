"use client"

import { OrangeButton } from "@/components/ui/OrangeButton"

// ---------------------------------------------------------------------------
// ASCII art grid — 44 cols × 82 rows
// Encodes a standing human silhouette.
// Each cell is either a space (empty) or a character (visible).
// We track row index to colour-grade: bright orange at core, dark at edges/bottom.
// ---------------------------------------------------------------------------

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&+=?"
const COLS = 44
const ROWS = 82

// Seeded pseudo-random so the grid is deterministic (no hydration mismatch)
function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

// Chars are taller than wide: 9px*1.05lineH / ~5.85px charW ≈ 1.62
// Convert row → visual y so shapes look correct proportionally
const CELL_ASPECT = 1.62

// Returns true if the given (col, row) falls inside the woman silhouette
function inFigure(col: number, row: number): boolean {
  const cx = 22
  const x = col - cx
  const y = row / CELL_ASPECT   // visual y: same scale as x

  // -- Hair crown (bun/volume above head): visual y 0–2.8, wide oval
  if (y >= 0 && y <= 2.8) {
    const rx = 7, ry = 2.0, cy = 1.2
    if ((y - cy) * (y - cy) / (ry * ry) + x * x / (rx * rx) <= 1) return true
  }

  // -- Head: visual y 1.5–9.5, circle r≈4.2
  const headCY = 5.5, headR = 4.1
  if (y >= 1.5 && y <= 9.6) {
    if (x * x + (y - headCY) * (y - headCY) <= headR * headR) return true
  }

  // -- Neck: visual y 9.4–11.4, narrow column
  if (y >= 9.4 && y <= 11.4 && Math.abs(x) <= 1.8) return true

  // -- Shoulders: visual y 11–15, widening 2 → 8.5
  if (y >= 11 && y <= 15) {
    const hw = 2 + ((y - 11) / 4) * 6.5
    if (Math.abs(x) <= hw) return true
  }

  // -- Upper torso: visual y 15–22.5, curves in 8.5 → 5.5
  if (y >= 15 && y <= 22.5) {
    const hw = 8.5 - ((y - 15) / 7.5) * 3
    if (Math.abs(x) <= hw) return true
  }

  // -- Waist: visual y 22.5–25.5, narrowest at 5.5
  if (y >= 22.5 && y <= 25.5 && Math.abs(x) <= 5.5) return true

  // -- Hips: visual y 25.5–33, widen 5.5 → 11.5
  if (y >= 25.5 && y <= 33) {
    const hw = 5.5 + ((y - 25.5) / 7.5) * 6
    if (Math.abs(x) <= hw) return true
  }

  // -- Skirt bell: visual y 33–43, flare 11.5 → 15.5
  if (y >= 33 && y <= 43) {
    const hw = 11.5 + ((y - 33) / 10) * 4
    if (Math.abs(x) <= hw) return true
  }

  // -- Legs below skirt hem: visual y 43–50.6, two separated columns
  if (y >= 43 && y <= 50.6 && x >= -10 && x <= -3) return true
  if (y >= 43 && y <= 50.6 && x >= 3 && x <= 10) return true

  return false
}

// Compute brightness 0–1 for a given (col, row) within the figure
function brightness(col: number, row: number): number {
  const cx = 22
  const x = col - cx
  const y = row / CELL_ASPECT   // visual y

  // Horizontal: darker toward edges
  const hFactor = Math.max(0, 1 - Math.abs(x) / 12)

  // Vertical: brightest around visual y=18 (upper torso), fades up and down
  const vFactor = y < 18
    ? Math.max(0.2, 1 - (18 - y) / 18)
    : Math.max(0.05, 1 - (y - 18) / 36)

  return hFactor * vFactor
}

// Interpolate between dark orange and bright orange
function orangeColor(b: number): string {
  // b: 0→1
  // 0: rgb(60, 20, 5)   (very dark)
  // 1: rgb(253, 85, 29) (brand orange)
  const r = Math.round(60 + b * (253 - 60))
  const g = Math.round(20 + b * (85 - 20))
  const bv = Math.round(5 + b * (29 - 5))
  return `rgb(${r},${g},${bv})`
}

// Build the rows as an array of React-renderable lines
interface AsciiCell {
  char: string
  color: string
}

function buildGrid(): AsciiCell[][] {
  const rand = seededRandom(0xdeadbeef)
  const grid: AsciiCell[][] = []

  for (let row = 0; row < ROWS; row++) {
    const line: AsciiCell[] = []
    for (let col = 0; col < COLS; col++) {
      if (inFigure(col, row)) {
        const charIdx = Math.floor(rand() * CHARS.length)
        const char = CHARS[charIdx] ?? "X"
        const b = brightness(col, row)
        const color = orangeColor(b)
        line.push({ char, color })
      } else {
        rand() // consume to keep sequence consistent
        line.push({ char: " ", color: "transparent" })
      }
    }
    grid.push(line)
  }

  return grid
}

const ASCII_GRID = buildGrid()

function AsciiArt() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: "96px", // account for nav
        paddingRight: "2rem",
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          lineHeight: "1.05",
          letterSpacing: "0.05em",
          margin: 0,
          padding: 0,
          background: "transparent",
          userSelect: "none",
          flexShrink: 0,
          // shift figure slightly downward so it feels grounded
          marginTop: "2rem",
        }}
      >
        {ASCII_GRID.map((line, rowIdx) => (
          <div key={rowIdx} style={{ display: "block" }}>
            {line.map((cell, colIdx) =>
              cell.char === " " ? (
                <span key={colIdx}>{"\u00A0"}</span>
              ) : (
                <span key={colIdx} style={{ color: cell.color }}>
                  {cell.char}
                </span>
              )
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

export function HeroSection() {
  return (
    <section
      data-theme="dark"
      className="relative min-h-svh overflow-hidden"
      style={{ backgroundColor: "rgb(20, 19, 20)", overflow: "hidden" }}
    >
      {/* Content grid */}
      <div className="grid-container relative min-h-svh pt-24">
        <div className="grid-layout items-end" style={{ minHeight: "calc(100svh - 96px)" }}>

          {/* Left: text content — 7 cols desktop, full mobile */}
          <div className="col-span-12 lg:col-span-7 relative z-10 flex flex-col justify-end pb-12">

            {/* Heading */}
            <div className="flex flex-col gap-0 mb-8">
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 2.5rem + (5.5rem - 2.5rem) * ((100vw - 23.4375rem) / (76.5625rem)), 5.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  color: "rgb(238, 238, 238)",
                  fontFamily: "aktiv-grotesk, ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Your Frontend team.
                <br />
                One monthly fee.
              </h1>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "16px",
                color: "rgb(129, 128, 129)",
                lineHeight: "24px",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              Good Fella is a frontend development studio that works as your dedicated team. One monthly fee, no contracts, and no hourly tracking.
            </p>

            {/* CTAs */}
            <div className="flex flex-row flex-wrap items-center gap-4">
              <OrangeButton href="#pricing" variant="brand">
                SEE OUR PRICING
              </OrangeButton>
              <a
                href="#work"
                className="font-mono text-sm uppercase tracking-widest underline underline-offset-4"
                style={{ color: "rgb(238, 238, 238)" }}
              >
                View our work
              </a>
            </div>
          </div>

          {/* ASCII art — right side, desktop only */}
          <div className="hidden lg:block lg:col-span-5 absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
            <AsciiArt />
          </div>
        </div>
      </div>

      {/* Brand logos bar */}
      <div className="grid-container pb-10 absolute bottom-0 left-0 right-0">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <p
            className="font-mono text-xs uppercase tracking-widest shrink-0"
            style={{ color: "rgb(129, 128, 129)", lineHeight: "1.5" }}
          >
            WE HAVE WORKED WITH BRANDS
            <br />
            THAT CARE ABOUT CRAFT
          </p>
          {/* Divider */}
          <span style={{ width: "1px", height: "28px", backgroundColor: "rgba(238,238,238,0.15)", flexShrink: 0 }} className="hidden lg:block" />
          <span
            className="font-sans text-base italic font-bold tracking-tight"
            style={{ color: "rgb(238, 238, 238)", letterSpacing: "-0.01em" }}
          >
            Coca-Cola
          </span>
          <span
            className="font-mono text-xs font-bold tracking-widest uppercase"
            style={{ color: "rgb(238, 238, 238)" }}
          >
            BODYARMOR
          </span>
          <span
            className="font-mono text-xs font-bold tracking-widest uppercase"
            style={{ color: "rgb(238, 238, 238)" }}
          >
            WKNDHRS®
          </span>
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "rgb(129, 128, 129)" }}
          >
            + MANY MORE
          </span>
        </div>
      </div>
    </section>
  )
}
