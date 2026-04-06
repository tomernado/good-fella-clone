import { OrangeButton } from "./ui/OrangeButton";

export default function CtaSection() {
  return (
    <section
      id="contact"
      data-theme="brand"
      style={{
        backgroundColor: "rgb(251,70,13)",
        paddingTop: "128px",
        paddingBottom: "0",
        overflow: "hidden",
      }}
    >
      <div className="grid-container">
        <div className="grid-layout" style={{ alignItems: "flex-end" }}>

          {/* Left: heading */}
          <div
            className="grid-span-12 lg:grid-span-6"
            style={{ paddingBottom: "128px" }}
          >
            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 7rem)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                color: "rgb(20,19,20)",
                lineHeight: 1.0,
                margin: "0 0 32px",
              }}
            >
              Start a project.
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "rgb(20,19,20)",
                lineHeight: "28px",
                maxWidth: "400px",
                opacity: 0.8,
                marginBottom: "32px",
              }}
            >
              Book a 15-minute call or send us a message. No preparation needed.
            </p>
            <a
              href="mailto:contact@good-fella.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "rgb(20,19,20)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              contact@good-fella.com
            </a>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(20,19,20,0.6)",
                marginBottom: "0",
              }}
            >
              Working with teams worldwide.
            </p>
          </div>

          {/* Middle: CTA buttons */}
          <div
            className="grid-span-12 lg:grid-span-3"
            style={{
              paddingBottom: "128px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <OrangeButton href="/contact" variant="dark">
              GET STARTED
            </OrangeButton>
            <OrangeButton href="/call" variant="dark">
              BOOK A 15-MIN CALL
            </OrangeButton>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(20,19,20,0.5)",
                marginTop: "8px",
              }}
            >
              Let the Fellas handle it.
            </p>
          </div>

          {/* Right: photo */}
          <div
            className="hidden lg:block lg:grid-span-3"
            style={{
              alignSelf: "flex-end",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=750&q=80&fit=crop"
              alt="Developer working"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
