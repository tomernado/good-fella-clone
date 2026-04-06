import { GoodLogo } from "./icons";

const navLinks = ["Work", "Services", "Pricing", "FAQ"] as const;

export default function Footer() {
  return (
    <footer
      data-theme="dark"
      style={{
        backgroundColor: "rgb(20,19,20)",
        borderTop: "1px solid rgba(238,238,238,0.1)",
        padding: "48px 0",
      }}
    >
      <div className="grid-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Logo + tagline */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <a href="/">
              <GoodLogo
                style={{ height: "20px", width: "auto", color: "rgb(238,238,238)" }}
              />
            </a>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "rgb(129,128,129)",
              }}
            >
              Websites That Move.
            </span>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors"
                style={{ textDecoration: "none" }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "rgb(129,128,129)",
              }}
            >
              © 2025 Good Fella
            </span>
            <a
              href="mailto:contact@good-fella.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "rgb(129,128,129)",
                textDecoration: "none",
              }}
            >
              contact@good-fella.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
