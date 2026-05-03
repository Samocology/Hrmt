export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </div>
  );
}
