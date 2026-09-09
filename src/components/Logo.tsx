type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const word = variant === "light" ? "#ffffff" : "#15232e";
  const subtitle = variant === "light" ? "rgba(255,255,255,0.78)" : "#5b6573";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 80 72" className="h-12 w-[3.4rem] shrink-0" aria-hidden="true">
        <path d="M8 30 L40 6 L72 30 V68 H8 Z" fill="#f25c0a" />
        <path d="M36 6 V2 H44 V6" fill="#f25c0a" />
        <path
          d="M26 34 L54 48"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M28 50 L52 32"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="26" cy="34" r="3.4" fill="#fff" />
        <rect
          x="51"
          y="46.2"
          width="7"
          height="4"
          rx="0.8"
          fill="#fff"
          transform="rotate(26 54.5 48.2)"
        />
        <text
          x="40"
          y="64"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="700"
          letterSpacing="1.6"
        >
          CMI
        </text>
      </svg>
      <span className="leading-tight">
        <span
          className="font-display block text-[1.45rem] font-semibold tracking-[0.2em]"
          style={{ color: word }}
        >
          CMI
        </span>
        <span
          className="hidden max-w-[12rem] text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.14em] sm:block"
          style={{ color: subtitle }}
        >
          Construcciones y Mantenimiento Integral
        </span>
      </span>
      <span className="sr-only">CMI Construcciones y Mantenimiento Integral</span>
    </span>
  );
}
