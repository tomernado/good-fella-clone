"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    q: "What can I send you?",
    a: "Anything frontend. Landing pages, website sections, full builds, animations, interactions, bug fixes, Webflow work, React components. If users see it and interact with it, we build it.",
  },
  {
    q: "How fast will I get my work?",
    a: "Most requests ship in 2-5 business days. Bigger things like full websites take 2-4 weeks. We always give you a realistic timeline before we start so nothing comes as a surprise.",
  },
  {
    q: "Who will I work with?",
    a: "Julian and Adrian. We're brothers and co-founders. The people you talk to are the people writing the code. As we grow, every team member meets the same standard: senior developers who care about the details.",
  },
  {
    q: "Can I pause or cancel?",
    a: "Yes. Pause or cancel to the next month. Days don't carry over, so you're never paying for time you're not using. No penalties, no questions.",
  },
  {
    q: "What's not included?",
    a: "We don't do visual design from scratch: no branding, UI design, or creative direction. We take designs from Figma or any other tool and turn them into production code. If you need design work, we know people we'd recommend.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "Unlimited revisions on everything. We keep going until you say it's right. No extra charge, no attitude.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      data-theme="light"
      style={{
        backgroundColor: "rgb(238,238,238)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="grid-container">
        <div
          className="flex flex-col lg:grid lg:grid-cols-12 gap-8"
          style={{ alignItems: "start" }}
        >
          {/* Left heading (4 cols) */}
          <div className="lg:col-span-4">
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "rgb(20,19,20)",
                lineHeight: 1.15,
                position: "sticky",
                top: "120px",
              }}
            >
              Common questions
            </h2>
          </div>

          {/* Right accordion (8 cols) */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "rgb(20,19,20)",
                      lineHeight: 1.4,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDownIcon
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "rgb(20,19,20)",
                      flexShrink: 0,
                      marginLeft: "16px",
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: open === i ? "400px" : "0",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgb(105,104,105)",
                      paddingBottom: "24px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
            {/* Last border */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.15)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
