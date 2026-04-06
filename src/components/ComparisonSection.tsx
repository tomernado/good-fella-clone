import { OrangeButton } from "@/components/ui/OrangeButton";

interface ComparisonRow {
  criterion: string;
  agency: string;
  freelancer: string;
  goodFella: string;
}

const rows: ComparisonRow[] = [
  {
    criterion: "WHO DOES THE WORK",
    agency: "Varies by project",
    freelancer: "One person",
    goodFella: "Frontend veterans",
  },
  {
    criterion: "PRICING MODEL",
    agency: "Hourly or project-based",
    freelancer: "Per project",
    goodFella: "One monthly fee",
  },
  {
    criterion: "COMMUNICATION",
    agency: "Through account manager",
    freelancer: "Direct email",
    goodFella: "In your Slack",
  },
  {
    criterion: "TURNAROUND",
    agency: "Varies by workload",
    freelancer: "Depends on availability",
    goodFella: "2-5 business days",
  },
  {
    criterion: "RELATIONSHIP",
    agency: "Project-based",
    freelancer: "Project-based",
    goodFella: "Ongoing partnership",
  },
  {
    criterion: "COMMITMENT",
    agency: "Contract-based",
    freelancer: "Per project",
    goodFella: "Cancel to the next month",
  },
];

export function ComparisonSection() {
  return (
    <section
      id="why"
      data-theme="dark"
      style={{
        backgroundColor: "rgb(20,19,20)",
        paddingTop: "128px",
        paddingBottom: "128px",
      }}
    >
      <div className="grid-container">
        <div
          className="flex flex-col lg:grid lg:grid-cols-12 gap-8"
          style={{ alignItems: "start" }}
        >
          {/* Left: heading (4 cols) */}
          <div
            className="lg:col-span-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "sticky",
              top: "120px",
              alignSelf: "start",
            }}
          >
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
              Why Good
              <br />
              Fella?
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgb(129,128,129)",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              Good Fella combines the quality of a senior development team with
              the flexibility of a subscription you can pause or cancel to the
              next month.
            </p>
            <OrangeButton href="#process" variant="brand">
              SEE HOW IT WORKS
            </OrangeButton>
          </div>

          {/* Right: comparison table (8 cols) */}
          <div className="lg:col-span-8">
            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(238,238,238,0.1)",
                marginBottom: "0",
              }}
            >
              <div />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgb(129,128,129)",
                }}
              >
                TRADITIONAL AGENCY
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgb(129,128,129)",
                }}
              >
                FREELANCER
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "rgb(253,85,29)",
                }}
              >
                GOOD FELLA
              </span>
            </div>

            {/* Comparison rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(238,238,238,0.06)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "rgb(129,128,129)",
                  }}
                >
                  {row.criterion}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgb(129,128,129)",
                    lineHeight: "20px",
                  }}
                >
                  {row.agency}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgb(129,128,129)",
                    lineHeight: "20px",
                  }}
                >
                  {row.freelancer}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgb(238,238,238)",
                    lineHeight: "20px",
                    fontWeight: 500,
                  }}
                >
                  {row.goodFella}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
