import { SectionEyebrow } from "./SectionEyebrow";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <section className="relative bg-navy text-navy-foreground border-b-2 border-gold">
      <div className={`mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24 flex flex-col gap-5 ${alignClass}`}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
          {title}{" "}
          {accent && <span className="italic text-gold">{accent}</span>}
        </h1>
        {description && (
          <p className={`text-base md:text-lg text-white/70 max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
