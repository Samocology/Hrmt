import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PageHero } from "@/components/PageHero";
import { Award, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react";
import ictImg from "@/assets/ict-training.jpg";
import nyscImg from "@/assets/nysc-program.jpg";
import certImg from "@/assets/certifications.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training & Certifications — HRMT Consult" },
      { name: "description", content: "Globally recognized certification tracks, advanced ICT bootcamps, and specialized NYSC member programs." },
      { property: "og:title", content: "Training & Certifications — HRMT Consult" },
      { property: "og:description", content: "Master skills that drive industry. Practitioner-led certifications and ICT training." },
    ],
  }),
  component: TrainingPage,
});

const why = [
  { icon: Award, title: "Industry Recognized", desc: "Globally accredited tracks accepted by leading employers." },
  { icon: BookOpen, title: "Practitioner-Led", desc: "Curriculum designed and taught by working senior practitioners." },
  { icon: Users, title: "Career-Focused", desc: "Real-world projects, capstones, and structured cohort learning." },
  { icon: Sparkles, title: "Lifetime Network", desc: "Join an alumni network of high-performing professionals." },
];

const tracks = [
  { title: "ICT Professionals", desc: "Cloud, cybersecurity, data engineering, and modern IT operations.", img: ictImg },
  { title: "Business Strategy", desc: "Strategic management, corporate finance, and growth playbooks.", img: certImg },
  { title: "HR & People Ops", desc: "Talent strategy, performance systems, and employment law.", img: nyscImg },
];

function TrainingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground border-b-2 border-gold">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>Training & Certifications</SectionEyebrow>
            <h1 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Master the Skills that <span className="italic text-gold">Drive Industry.</span>
            </h1>
            <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
              Practitioner-led certification programs and intensive ICT bootcamps engineered to build the next generation of high-performing professionals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
                <Link to="/enrollment">View Certification Tracks</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/enrollment">Request Brochure</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src={ictImg} alt="ICT training session" width={1400} height={900} className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Why HRMT Certifications?</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">Built for working professionals.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-card p-6">
                <div className="h-10 w-10 rounded-md bg-gold/15 text-gold flex items-center justify-center mb-4">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANCED ICT */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden ring-1 ring-border shadow-sm">
            <img src={ictImg} alt="Advanced ICT training" width={1400} height={900} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div>
            <SectionEyebrow>Flagship program</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">Advanced ICT Training</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              An intensive 12-week immersive program covering cloud architecture, modern data engineering, and applied cybersecurity. Built around real industry case studies and capstone projects.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm">
              {["Cloud-native architecture", "Applied data engineering", "Enterprise cybersecurity", "Career placement support"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 bg-navy text-navy-foreground hover:bg-navy-light">
              <Link to="/enrollment">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Tracks</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">Certification Tracks</h2>
            <p className="mt-3 text-muted-foreground">Choose the path aligned with your professional ambition.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <article key={t.title} className="rounded-xl border border-border bg-card overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NYSC */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>Empowerment</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">Specialized NYSC Member Program</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We offer heavily discounted, intensive training programs specifically for active NYSC Corp members. Bridge the gap between academia and the corporate world with skills that matter.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm">
              {["Up to 40% NYSC discount on certification fees", "Career mentorship & corporate placement support", "Flexible weekday and weekend cohorts"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <Link to="/enrollment">Apply for NYSC Track</Link>
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-border shadow-sm">
            <img src={nyscImg} alt="NYSC corp members training session" width={1400} height={900} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl">Take the next step in your professional journey.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Enrollment is open for the upcoming cohort. Limited seats per track.</p>
          <Button asChild size="lg" className="mt-7 bg-navy text-navy-foreground hover:bg-navy-light">
            <Link to="/enrollment">Begin Enrollment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
