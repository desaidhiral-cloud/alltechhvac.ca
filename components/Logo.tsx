import Link from "next/link";

type Props = {
  tone?: "dark" | "light";
  compact?: boolean;
};

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M10 38c1.2-13 12-22 24.5-20.2"
        stroke="#1AA3E8"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M36.2 16.2l7.2-1.2-1.6 6.4" fill="#1AA3E8" />
      <path d="M16 52V34.2L26 27v25H16z" fill="#0C2C5E" />
      <path d="M28 52V22.5l12-8.2V52H28z" fill="#1454A8" />
      <path d="M42.5 52V33.2L52 26.8V52h-9.5z" fill="#0C2C5E" />
      <g fill="#E8F6FE">
        <rect x="18.4" y="36.2" width="2.1" height="2.1" />
        <rect x="21.6" y="36.2" width="2.1" height="2.1" />
        <rect x="18.4" y="40" width="2.1" height="2.1" />
        <rect x="21.6" y="40" width="2.1" height="2.1" />
        <rect x="31" y="26" width="2.3" height="2.3" />
        <rect x="34.6" y="26" width="2.3" height="2.3" />
        <rect x="31" y="30.2" width="2.3" height="2.3" />
        <rect x="34.6" y="30.2" width="2.3" height="2.3" />
        <rect x="31" y="34.4" width="2.3" height="2.3" />
        <rect x="34.6" y="34.4" width="2.3" height="2.3" />
        <rect x="31" y="38.6" width="2.3" height="2.3" />
        <rect x="34.6" y="38.6" width="2.3" height="2.3" />
        <rect x="31" y="42.8" width="2.3" height="2.3" />
        <rect x="34.6" y="42.8" width="2.3" height="2.3" />
        <rect x="44.8" y="36" width="2" height="2" />
        <rect x="47.8" y="36" width="2" height="2" />
        <rect x="44.8" y="39.6" width="2" height="2" />
        <rect x="47.8" y="39.6" width="2" height="2" />
      </g>
      <circle cx="46.6" cy="14.2" r="2.3" fill="#49C4F3" />
    </svg>
  );
}

export function Logo({ tone = "dark", compact = false }: Props) {
  const text = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-cyan-2" : "text-blue";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Alltech Building Services, home">
      <span className={tone === "light" ? "rounded-xl bg-white p-1" : ""}>
        <LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[0.16em] ${text}`}>
          ALLTECH
        </span>
        <span className={`mt-1 block text-[9px] font-bold tracking-[0.16em] ${sub}`}>
          BUILDING SERVICES
        </span>
      </span>
    </Link>
  );
}
