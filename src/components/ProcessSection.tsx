"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Subscribe",
    description:
      "Pick a plan that fits your workload and pay monthly, with no contracts and no minimum commitment. Pause or cancel to the next month whenever you need to.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=1125&q=80&fit=crop",
    imageAlt: "Pick a plan. Pay monthly. Cancel anytime.",
  },
  {
    num: "02",
    title: "Request",
    description:
      "Send your work through Slack, email, or wherever your team already communicates. We tackle one request at a time in the order you set.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=1125&q=80&fit=crop",
    imageAlt:
      "Submit work via Slack. Or email. Or wherever you work. We tackle one request at a time.",
  },
  {
    num: "03",
    title: "Ship",
    description:
      "You'll receive deliverables every 2-5 business days with unlimited revisions until you're happy.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&h=1125&q=80&fit=crop",
    imageAlt: "Ship",
  },
  {
    num: "04",
    title: "Repeat",
    description:
      "Submit your next request and we keep going the same way. Your backlog shrinks and your product gets better, month after month.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=1125&q=80&fit=crop",
    imageAlt: "Repeat",
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven step activation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress =
        totalScrollable > 0 ? Math.min(1, scrolled / totalScrollable) : 0;
      const newIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Move indicator dot to active step
  useEffect(() => {
    const step = stepRefs.current[activeIndex];
    if (step && stepsContainerRef.current) {
      setIndicatorTop(step.offsetTop + 4);
    }
  }, [activeIndex]);

  return (
    <section data-theme="light" className="bg-background">

      {/* ── Desktop: scroll-driven sticky layout ── */}
      <div
        ref={containerRef}
        className="relative hidden min-h-[320vh] py-64 lg:block lg:py-128"
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="grid-container w-full">
            {/* Single flex-col container — no subgrid complexity */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

              {/* Heading row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 4rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                    color: "rgb(20,19,20)",
                    margin: 0,
                  }}
                >
                  How it works
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgb(129,128,129)",
                  }}
                >
                  {'// PROCESS'}
                </span>
              </div>

              {/* Steps + Image — explicit heights so image is always visible */}
              <div
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  gap: "6%",
                  height: "60vh",
                }}
              >
                  {/* Left: clickable steps list */}
                  <div
                    style={{
                      flex: "1.1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      ref={stepsContainerRef}
                      style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: "48px",
                        paddingLeft: "28px",
                      }}
                    >
                      {/* Orange indicator dot */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: indicatorTop + "px",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "rgb(253,85,29)",
                          transform: "translateX(-50%)",
                          transition:
                            "top 0.45s cubic-bezier(0.215, 0.61, 0.355, 1)",
                          zIndex: 10,
                        }}
                      />

                      {steps.map((step, i) => (
                        <div
                          key={i}
                          ref={(el) => {
                            stepRefs.current[i] = el;
                          }}
                          onClick={() => setActiveIndex(i)}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "14px",
                              color:
                                i === activeIndex
                                  ? "rgb(20,19,20)"
                                  : "rgb(129,128,129)",
                              marginTop: "4px",
                              flexShrink: 0,
                              transition: "color 0.3s",
                            }}
                          >
                            {step.num}
                          </span>
                          <div style={{ flex: 1 }}>
                            <h4
                              style={{
                                fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                                fontWeight: 400,
                                letterSpacing: "-0.02em",
                                color:
                                  i === activeIndex
                                    ? "rgb(20,19,20)"
                                    : "rgb(105,104,105)",
                                margin: "0 0 8px",
                                transition: "color 0.3s",
                              }}
                            >
                              {step.title}
                            </h4>
                            <p
                              style={{
                                fontSize: "15px",
                                lineHeight: "22px",
                                color: "rgb(105,104,105)",
                                margin: 0,
                                maxWidth: "380px",
                                opacity: i === activeIndex ? 1 : 0.45,
                                transition: "opacity 0.3s",
                              }}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: image switcher — fills remaining height of the 60vh row */}
                  <div
                    style={{
                      flex: "0 0 42%",
                      position: "relative",
                      overflow: "hidden",
                      alignSelf: "stretch",
                    }}
                  >
                    {steps.map((step, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: i === activeIndex ? 1 : 0,
                          transition: "opacity 0.6s ease",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        {/* Orange brand tint */}
                        <span
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "rgba(253,85,29,0.04)",
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: simple stacked list ── */}
      <div
        className="lg:hidden"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div className="grid-container">
          <div style={{ marginBottom: "40px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgb(129,128,129)",
              }}
            >
              {'// PROCESS'}
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 8vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "rgb(20,19,20)",
                margin: "8px 0 0",
              }}
            >
              How it works
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 0",
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "rgb(105,104,105)",
                  }}
                >
                  {step.num}
                </span>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 6vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "rgb(20,19,20)",
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgb(105,104,105)",
                    maxWidth: "480px",
                    margin: "0 0 16px",
                  }}
                >
                  {step.description}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
