"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoodLogo, MenuIcon } from "@/components/icons";
import { OrangeButton } from "@/components/ui/OrangeButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Set initial state in case page loads already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "96px",
        zIndex: 9999,
        backgroundColor: scrolled ? "rgb(20, 19, 20)" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        className="grid-container flex h-full flex-row items-center justify-between"
        style={{ maxWidth: "100%", paddingLeft: "var(--container-padding, 24px)", paddingRight: "var(--container-padding, 24px)" }}
      >
        {/* Logo */}
        <Link href="/" className="block">
          <GoodLogo
            className="h-6 w-auto"
            style={{ color: "var(--gf-foreground, #eeeeee)" }}
          />
        </Link>

        {/* Center: MENU button */}
        <button
          type="button"
          className="flex cursor-pointer flex-row items-center gap-2 bg-transparent"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--gf-foreground, #eeeeee)",
            border: "none",
            padding: 0,
          }}
        >
          <span>MENU</span>
          <MenuIcon className="h-4 w-6" />
        </button>

        {/* CTA */}
        <OrangeButton href="/pricing" variant="brand">
          LET&apos;S WORK TOGETHER
        </OrangeButton>
      </div>
    </header>
  );
}
