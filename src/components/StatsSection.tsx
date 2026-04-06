"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

function StatCard({ prefix, value, suffix, label }: StatCardProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayCount(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      style={{
        background: "rgb(247, 247, 247)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "250px",
      }}
      className="lg:min-h-[450px]"
    >
      <div
        style={{
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontWeight: 300,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "rgb(20, 19, 20)",
          display: "flex",
          alignItems: "baseline",
          gap: "4px",
        }}
      >
        {prefix && <span>{prefix}</span>}
        <span>{displayCount}</span>
        <span>{suffix}</span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "rgb(20, 19, 20)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section data-theme="light" className="bg-background py-16 lg:py-32">
      <div className="grid-container">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Card 1: Team / workspace photo */}
          <div
            style={{
              minHeight: "300px",
              overflow: "hidden",
              position: "relative",
            }}
            className="lg:min-h-[450px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=900&q=80&fit=crop"
              alt="Team working together"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Cards 2–4: Animated stats */}
          <StatCard
            prefix="$"
            value={12}
            suffix="B+"
            label="Combined client market cap"
          />
          <StatCard value={200} suffix="M+" label="People reached by our work" />
          <StatCard value={150} suffix="+" label="Projects shipped" />
        </div>
      </div>
    </section>
  );
}
