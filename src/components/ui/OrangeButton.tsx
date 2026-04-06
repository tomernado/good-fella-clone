"use client";

import { PlusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface OrangeButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "brand" | "dark";
  className?: string;
}

const styles = {
  brand: {
    bg: "rgb(253, 85, 29)",
    iconColor: "rgb(20, 19, 20)",
    textColor: "rgb(20, 19, 20)",
  },
  dark: {
    bg: "rgb(20, 19, 20)",
    iconColor: "#ffffff",
    textColor: "#ffffff",
  },
} as const;

function OrangeButtonInner({
  variant = "brand",
  children,
}: {
  variant?: "brand" | "dark";
  children: React.ReactNode;
}) {
  const s = styles[variant];

  return (
    <>
      {/* Left square: icon area */}
      <span
        className="orange-btn-span flex h-10 w-10 shrink-0 items-center justify-center"
        style={{
          backgroundColor: s.bg,
          transition: "transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        <PlusIcon
          width={14}
          height={14}
          style={{ color: s.iconColor }}
        />
      </span>
      {/* Right text area */}
      <span
        className="orange-btn-span flex flex-1 items-center justify-center px-12"
        style={{
          backgroundColor: s.bg,
          transition: "transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: s.textColor,
          }}
        >
          {children}
        </span>
      </span>
    </>
  );
}

export function OrangeButton({
  href,
  onClick,
  children,
  variant = "brand",
  className,
}: OrangeButtonProps) {
  const baseClass = cn(
    "group flex h-10 cursor-pointer overflow-hidden",
    "[&_.orange-btn-span]:group-hover:[transform:translateY(-2px)]",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClass}>
        <OrangeButtonInner variant={variant}>{children}</OrangeButtonInner>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      <OrangeButtonInner variant={variant}>{children}</OrangeButtonInner>
    </button>
  );
}
