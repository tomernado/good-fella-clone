"use client";

import { useEffect, useRef, useState } from "react";
import { OrangeButton } from "@/components/ui/OrangeButton";

const projects = [
  {
    name: "BODYARMOR",
    slug: "bodyarmor",
    tags: ["Marketing Site", "Sports"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=750&q=80&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400&h=225&q=80&fit=crop",
  },
  {
    name: "ANNNIMATE",
    slug: "annnimate",
    tags: ["Web App", "SaaS", "Animations"],
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=1200&h=750&q=80&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&h=225&q=80&fit=crop",
  },
  {
    name: "WKNDHRS",
    slug: "wkndhrs",
    tags: ["Agency Website", "Portfolio", "Animations"],
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&h=750&q=80&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=225&q=80&fit=crop",
  },
  {
    name: "FITGREENMIND",
    slug: "fitgreenmind",
    tags: ["Marketing Site", "Animations"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&q=80&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&q=80&fit=crop",
  },
];

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver: update active thumbnail as cards scroll into view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 }
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="work"
      data-theme="dark"
      style={{
        backgroundColor: "rgb(20,19,20)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="grid-container">
        <div className="grid-layout" style={{ alignItems: "start" }}>

          {/* ── Left: sticky column — heading + thumbnails ── */}
          <div
            className="work-col-left"
            style={{
              position: "sticky",
              top: "var(--site-header-height)",
              height: "calc(100vh - var(--site-header-height))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "32px",
              paddingBottom: "32px",
            }}
          >
            {/* Top: heading + description + CTA */}
            <div>
              <div style={{ marginBottom: "24px" }}>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    color: "rgb(238,238,238)",
                    margin: 0,
                  }}
                >
                  Featured
                  <br />
                  Work
                </h2>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "rgb(129,128,129)",
                  marginBottom: "24px",
                  maxWidth: "220px",
                }}
              >
                We build websites where every scroll, every transition, and
                every interaction feels intentional.
              </p>
              <OrangeButton href="/work" variant="brand">
                VIEW ALL
              </OrangeButton>
            </div>

            {/* Bottom: thumbnail previews */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.slug}
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 9",
                    width: "100%",
                    overflow: "hidden",
                    transition: "opacity 0.3s ease",
                    opacity: i === activeIndex ? 1 : 0.3,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumb}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {i === activeIndex && (
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "1px solid rgb(253,85,29)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: scrolling project cards ── */}
          <div
            className="work-col-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "64px",
              paddingTop: "32px",
              paddingBottom: "32px",
            }}
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {/* Image */}
                <a
                  href={`/work/${project.slug}`}
                  style={{
                    display: "block",
                    position: "relative",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1)";
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(253,85,29,0.05)",
                      pointerEvents: "none",
                    }}
                  />
                </a>

                {/* Metadata */}
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      color: "rgb(238,238,238)",
                      margin: 0,
                    }}
                  >
                    {project.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                    }}
                  >
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "rgb(129,128,129)",
                        }}
                      >
                        {ti > 0 && (
                          <span style={{ marginRight: "6px" }}>—</span>
                        )}
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
