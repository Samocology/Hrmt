import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/hrmt-logo.png";

export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  const isLight = variant === "light";
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="HRMT Consult Ltd. — home"
    >
      <span
        className={`relative inline-flex items-center justify-center rounded-md px-2 py-1 transition-all ${
          isLight
            ? "bg-white/95 ring-1 ring-white/20 shadow-sm"
            : "bg-white ring-1 ring-border/60 shadow-sm group-hover:shadow-md"
        }`}
      >
        <img
          src={logoMark}
          alt="HRMT Consult Ltd. logo"
          width={520}
          height={325}
          className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />
      </span>
    </Link>
  );
}
