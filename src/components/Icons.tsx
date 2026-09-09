type IconProps = {
  className?: string;
};

export function HelmetIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 13a8 8 0 0 1 16 0v2H4v-2Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 5v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 19c.6-3.2 2.6-5 5-5s4.4 1.8 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 16.2c.7-1.3 1.9-2.2 3.4-2.2 1.7 0 3.1 1 3.6 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GearIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChartIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 15v-4M12 15V8M16 15v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PumpIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8V4h6v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 13H3M21 13h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PipeIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h10a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 14h8a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 3 6 14h6l-1 7 8-12h-6l0-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function SnowflakeIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v18M5 7.5l14 9M5 16.5l14-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PaintIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 19h6a4 4 0 0 0 4-4V5H7v10a4 4 0 0 1-2 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M15 8h4v3a2 2 0 0 1-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function StructureIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20V8l8-4 8 4v12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function CleanIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 20h8M10 20V9l2-5 2 5v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function WrenchIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 6.5a4 4 0 0 0-5.6 5.6L4 17l3 3 4.9-4.9a4 4 0 0 0 5.6-5.6L15 12l-3-3 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropletIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3s6 7.2 6 11.2A6 6 0 1 1 6 14.2C6 10.2 12 3 12 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 4.5h4.2l1.2 3.6-2.4 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-2.4 3.6 1.2v4.2c0 1-.8 1.9-1.8 1.9C8.8 20 4 15.2 4 6.3c0-1 .9-1.8 2.5-1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export const serviceIcons = [
  PumpIcon,
  PipeIcon,
  BoltIcon,
  SnowflakeIcon,
  PaintIcon,
  StructureIcon,
  CleanIcon,
  WrenchIcon,
];
