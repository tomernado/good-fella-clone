import { OrangeButton } from "@/components/ui/OrangeButton";
import { CheckIcon } from "@/components/icons";

interface PricingCardProps {
  name: string;
  price: string;
  capacity: string;
  spotsLeft: string;
  features: string[];
}

function PricingCard({
  name,
  price,
  capacity,
  spotsLeft,
  features,
}: PricingCardProps) {
  return (
    <div
      style={{
        backgroundColor: "rgb(26,26,26)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        border: "1px solid rgba(238,238,238,0.1)",
      }}
    >
      {/* Plan name + capacity badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgb(238,238,238)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "rgb(253,85,29)",
            border: "1px solid rgba(253,85,29,0.4)",
            padding: "3px 8px",
          }}
        >
          {capacity}
        </span>
      </div>

      {/* Price */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "clamp(3rem, 5vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            color: "rgb(238,238,238)",
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        <span style={{ fontSize: "16px", color: "rgb(129,128,129)" }}>
          / month
        </span>
      </div>

      {/* Features */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {features.map((f, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <CheckIcon
              style={{
                width: "16px",
                height: "16px",
                color: "rgb(253,85,29)",
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "rgb(238,238,238)",
                lineHeight: "24px",
              }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <OrangeButton href="/contact" variant="brand">
        GET STARTED
      </OrangeButton>

      {/* Spots left */}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "rgb(253,85,29)",
        }}
      >
        {spotsLeft}
      </span>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      data-theme="dark"
      style={{
        backgroundColor: "rgb(20,19,20)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="grid-container">
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgb(129,128,129)",
              display: "block",
              marginBottom: "12px",
            }}
          >
            {'// PRICING'}
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: "rgb(238,238,238)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Simple, transparent pricing.
          </h2>
        </div>

        {/* Plans grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "16px", marginBottom: "48px" }}
        >
          <PricingCard
            name="ACTIVE"
            price="€10,000"
            capacity="ONGOING WORK"
            spotsLeft="ONLY 3 SPOTS LEFT"
            features={[
              "One request at a time",
              "2-5 day turnaround",
              "Unlimited revisions",
              "Direct Slack access",
              "Pause or cancel to the next month",
            ]}
          />
          <PricingCard
            name="EMBEDDED"
            price="€20,000"
            capacity="FULL CAPACITY"
            spotsLeft="ONLY 3 SPOTS LEFT"
            features={[
              "Priority turnaround, 1-3 days",
              "Two requests at a time",
              "Near full-time availability",
              "Everything in Active",
              "For heavy build phases",
            ]}
          />
        </div>

        {/* Footer note */}
        <p
          style={{
            fontSize: "16px",
            color: "rgb(129,128,129)",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          Need a defined project? Good Fella also builds fixed-scope frontend
          projects starting from €25,000.
        </p>
      </div>
    </section>
  );
}
