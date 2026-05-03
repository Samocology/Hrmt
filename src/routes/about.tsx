import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Compass, ShieldCheck, Sparkles, Handshake, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PageHero } from "@/components/PageHero";
import boardroom from "@/assets/hero-boardroom.jpg";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — HRMT Consult Ltd." },
      { name: "description", content: "HRMT Consult Ltd (RC: 1967847) — empowering organizations through strategic consulting, human capital expertise, and globally recognized certifications." },
      { property: "og:title", content: "About HRMT Consult Ltd." },
      { property: "og:description", content: "Meet the people, mission, and values behind HRMT Consult — a trusted IT/HR solutions partner." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "25+", label: "Years of expertise" },
  { value: "500+", label: "Clients served" },
  { value: "10k+", label: "Professionals trained" },
  { value: "98%", label: "Client retention" },
];

const bridgePoints = [
  "Deep domain expertise across HR & ICT",
  "End-to-end strategy and implementation",
  "Globally accredited certification programs",
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty, transparency, and ethical practice anchor every engagement we lead." },
  { icon: Sparkles, title: "Excellence", desc: "We obsess over the quality of our thinking, our delivery, and the outcomes we leave behind." },
  { icon: Compass, title: "Innovation", desc: "We blend proven frameworks with modern tools to design solutions that stay relevant." },
  { icon: Handshake, title: "Partnership", desc: "We build long-term relationships rooted in trust, accountability, and shared success." },
];

const leaders = [
  {
    name: "Dr. Tony Williams Ekpiken",
    role: "MD / CEO",
    bio: "Visionary at the helm pairing decades of strategy expertise with a relentless drive for measurable client impact.",
    img: leader1,
  },
  {
    name: "Sophia James",
    role: "Executive Director",
    bio: "Operations powerhouse turning bold strategy into seamless execution across every engagement we deliver.",
    img: leader2,
  },
  {
    name: "Ethan Edwards",
    role: "Director, Accounts & Finance",
    bio: "Financial steward safeguarding the numbers disciplined, transparent, and built for sustainable growth.",
    img: leader3,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HRMT Consult Ltd."
        title="Empowering Organizations Through Strategic"
        accent="Excellence."
        description="We are a Nigerian consulting firm helping enterprises and professionals unlock measurable performance through human capital, technology, and strategic advisory."
        align="center"
      />

      {/* STATS STRIP */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-3xl md:text-4xl text-navy">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE / WHO WE ARE */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-md">
            <img
              src={boardroom}
              alt="HRMT advisory team in working session"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div>
            <SectionEyebrow>Who we are</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl leading-tight">
              Bridging the gap between potential and{" "}
              <span className="italic text-gold">peak performance.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              HRMT Consult Ltd. (RC: 1967847) is a duly registered Nigerian firm specialising in
              integrated IT and HR solutions. We partner with private enterprises, public
              institutions, and ambitious professionals to deliver consulting, capacity building,
              and certification programs that translate directly into business outcomes.
            </p>
            <ul className="mt-7 space-y-3">
              {bridgePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-card border border-border p-8 relative">
            <span aria-hidden className="absolute top-0 left-8 -translate-y-1/2 h-1 w-12 bg-gold" />
            <Target className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-display font-bold text-2xl">Our Mission</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              To empower organisations and individuals with world-class consulting, human
              capital strategy, and technology training that drive measurable, sustainable
              performance locally and globally.
            </p>
          </div>

          <div className="rounded-xl bg-navy text-navy-foreground p-8 relative">
            <span aria-hidden className="absolute top-0 left-8 -translate-y-1/2 h-1 w-12 bg-gold" />
            <Eye className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-display font-bold text-2xl">Our Vision</h3>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              To be Africa's most trusted IT/HR solutions partner - recognised for the
              calibre of our people, the quality of our thinking, and the lasting impact
              of our work.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow>Our values</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
              The foundation of <span className="italic text-gold">our practice.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 rounded-lg bg-gold/10 flex items-center justify-center">
                  <v.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <SectionEyebrow>Leadership</SectionEyebrow>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
                Meet the <span className="italic text-gold">leadership.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              Our practice is led by senior advisors with decades of cross-industry experience,
              anchored by a relentless focus on rigour, clarity, and measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leaders.map((l) => (
              <article key={l.name} className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={l.img}
                    alt={l.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative">
                  <span className="absolute top-0 left-6 -translate-y-1/2 h-1 w-10 bg-gold" />
                  <h3 className="font-display font-bold text-lg text-foreground">{l.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-gold mt-0.5">{l.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/dr-tony-ekpiken-3107961a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label={`${l.name} on LinkedIn`} className="h-8 w-8 rounded-md bg-muted hover:bg-gold hover:text-navy flex items-center justify-center transition-colors">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href="mailto:tonyekpiken76@gmail.com" aria-label={`Email ${l.name}`} className="h-8 w-8 rounded-md bg-muted hover:bg-gold hover:text-navy flex items-center justify-center transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            Ready to elevate your <span className="italic text-gold">organization?</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Partner with HRMT Consult to unlock your organisation's potential and your team's growth.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <Link to="/get-started">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
