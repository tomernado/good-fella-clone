import { type SVGProps } from "react";

// Good Fella wordmark logo – 4 letterform paths (G, O, O, D)
export function GoodLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1616.59 529.18"
      fill="currentColor"
      aria-label="Good Fella"
      {...props}
    >
      <path d="M212.88,248.5c-1.92-1.89-3.17-4.57-3.17-8.06V90.87c0-15.24,23.65-15.22,23.65,0v137.74h176.04V13c0-9.05-4.51-13-12.95-13H123.9C77.16,0,46.22,31.1,46.22,78.02l-.03,373.14c0,46.93,30.97,78.02,77.71,78.02h274.81c6.19,0,10.7-4.52,10.7-10.74V252.27H221.51c-3.85,0-6.72-1.51-8.63-3.77ZM233.34,311.59v113.56c0,15.24-23.65,15.22-23.65,0V311.59c0-15.24,23.65-15.22,23.65,0Z" />
      <path d="M718.71,0H510.92c-46.74,0-77.71,31.1-77.71,78.02v373.14c0,46.93,30.97,78.02,77.71,78.02h207.79c46.74,0,77.71-31.1,77.71-78.02V78.02C796.42,31.1,765.45,0,718.71,0ZM619.12,424.77c0,15.24-23.65,15.22-23.65,0V106.7c0-15.24,23.65-15.22,23.65,0v318.07Z" />
      <path d="M1183.34,78.02c0-46.93-30.97-78.02-77.71-78.02H897.84c-46.74,0-77.71,31.1-77.71,78.02v373.14c0,46.93,30.97,78.02,77.71,78.02h275.57c7.58,0,9.94-4.53,9.94-10.74V78.02ZM1012.47,425.67c0,15.24-23.65,15.22-23.65,0V105.34c0-15.24,23.65-15.22,23.65,0v320.33Z" />
      <path d="M1217.67,529.18h274.81c46.74,0,77.71-31.1,77.71-78.02V78.02c0-46.93-30.97-78.02-77.71-78.02h-274.81c-6.19,0-10.7,4.52-10.7,10.74v507.7c0,6.22,4.51,10.74,10.7,10.74ZM1368.17,105.34c0-15.24,23.65-15.22,23.65,0v320.1c0,15.24-23.65,15.22-23.65,0V105.34Z" />
    </svg>
  );
}

// Plus icon used in CTA buttons
export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2Z" />
    </svg>
  );
}

// Hamburger / menu lines icon
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  );
}

// Arrow right
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Check mark for pricing features
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 8.5l3.5 3.5 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Chevron down for FAQ accordion
export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Coca-Cola wordmark SVG (simplified)
export function CocaColaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 40"
      fill="currentColor"
      aria-label="Coca-Cola"
      {...props}
    >
      <text
        x="60"
        y="30"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="bold"
      >
        Coca-Cola
      </text>
    </svg>
  );
}
