interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Websites, web apps, landing pages built with clean, maintainable code. Optimized for performance, SEO, and Core Web Vitals from day one.",
  },
  {
    title: "Animation + Interaction",
    description:
      "Scroll-triggered animations, page transitions, hover states, micro-interactions. All GPU-accelerated, all buttery smooth at 60fps.",
  },
  {
    title: "Design Implementation",
    description:
      "Pixel-perfect builds from Figma, or whatever you use. Responsive down to the last breakpoint, exactly as your designer intended.",
  },
  {
    title: "Tech Stack",
    description:
      "React, Next.js, Vue, Nuxt, Webflow, GSAP, Framer Motion, Tailwind. We match the tools to your project and integrate with your existing codebase.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "Iterate until it\u2019s right. No revision caps, no extra charges, no awkward scope conversations.",
  },
  {
    title: "Direct Access",
    description:
      "We work in your Slack, your Linear, your Notion. You talk to the developers, not an account manager.",
  },
];

function ServiceItem({ title, description }: Service) {
  return (
    <div
      style={{
        padding: "32px 0",
        borderBottom: "1px solid rgba(0,0,0,0.15)",
        paddingRight: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "rgb(20,19,20)",
        }}
      >
        {title}
      </span>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgb(105,104,105)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      data-theme="light"
      style={{
        backgroundColor: "rgb(238,238,238)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="grid-container">
        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgb(105,104,105)",
              display: "block",
              marginBottom: "12px",
            }}
          >
            {"// WHAT'S INCLUDED"}
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: "rgb(20,19,20)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Everything frontend.
            <br />
            One subscription.
          </h2>
        </div>

        {/* Sub-label */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgb(105,104,105)",
            marginBottom: "32px",
            margin: "0 0 32px 0",
          }}
        >
          WHAT EVERY SUBSCRIPTION INCLUDES
        </p>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "0", borderTop: "1px solid rgba(0,0,0,0.15)" }}
        >
          {services.map((svc, i) => (
            <ServiceItem key={i} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
