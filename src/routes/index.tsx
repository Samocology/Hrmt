import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, GraduationCap, ShieldCheck, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import heroBoardroom from "@/assets/hero-boardroom.jpg";
import certImg from "@/assets/certifications.jpg";
import bcImg from "@/assets/business-consulting.jpg";
import hrImg from "@/assets/hr-management.jpg";
import prImg from "@/assets/pre-retirement.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HRMT Consult — Driving Excellence in Modern Business" },
      {
        name: "description",
        content:
          "Strategic business consulting, HR management, and globally recognized ICT certifications. Partner with HRMT to elevate your organization.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Strategic advisory across operations, growth, and transformation for ambitious enterprises.",
    img: bcImg,
  },
  {
    icon: Users,
    title: "HR Management",
    desc: "End-to-end human capital solutions: recruitment, performance, compensation, and culture.",
    img: hrImg,
  },
  {
    icon: TrendingUp,
    title: "Pre-Retirement",
    desc: "Personalized planning programs that prepare your workforce for a confident next chapter.",
    img: prImg,
  },
];

const stats = [
  { value: "98%", label: "Client retention" },
  { value: "40+", label: "Industry certifications" },
  { value: "20yrs", label: "Combined leadership" },
  { value: "1.2k+", label: "Professionals trained" },
];

const testimonials = [
  {
    quote:
      "HRMT restructured our HR operations end-to-end. The clarity, speed and rigor were unmatched — a true partner in transformation.",
    name: "Adaeze Okafor",
    role: "Chief People Officer, Meridian Group",
  },
  {
    quote:
      "The certification track gave my team measurable, real-world skills. Our ICT delivery has never been more reliable.",
    name: "James Bello",
    role: "VP Technology, Northcrest Bank",
  },
  {
    quote:
      "An exceptional consulting experience — strategic, transparent, and grounded in execution. We saw ROI within a quarter.",
    name: "Linda Eze",
    role: "Managing Director, Solera Energy",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground overflow-hidden border-b-2 border-gold">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <SectionEyebrow>Excellence in consulting</SectionEyebrow>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Driving <span className="italic text-gold">Excellence</span> in Modern Business
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Strategic consulting, human capital expertise, and globally recognized
              certifications — delivered by senior advisors who measure success in outcomes.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                src={heroBoardroom}
                alt="Executives reviewing strategy in a modern boardroom"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white text-foreground rounded-lg shadow-xl p-5 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <Award className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trusted by</p>
                  <p className="text-2xl font-display font-bold leading-none">98%</p>
                  <p className="text-xs text-muted-foreground mt-0.5">repeat client rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display font-bold text-3xl md:text-4xl text-navy">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <SectionEyebrow>What we do</SectionEyebrow>
              <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-foreground">
                Comprehensive Solutions for Strategic Growth
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Three integrated practices, one shared standard: rigorous thinking and clean execution.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start md:self-auto">
              <Link to="/services">
                All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="group rounded-xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative">
                  <span className="absolute top-0 left-6 -translate-y-1/2 h-1 w-10 bg-gold" />
                  <s.icon className="h-5 w-5 text-gold mb-3" />
                  <h3 className="font-display font-bold text-xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS BANNER */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden bg-navy text-navy-foreground shadow-xl">
            <div className="aspect-[4/3] lg:aspect-auto">
              <img
                src={certImg}
                alt="Professional certification training session"
                width={1400}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center gap-5">
              <SectionEyebrow>Industry recognized</SectionEyebrow>
              <h2 className="font-display font-bold text-3xl md:text-4xl">
                Certifications & <span className="italic text-gold">Training</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                Globally accredited certification tracks across HR, business analysis, project
                management, and ICT. Designed for working professionals — delivered by industry
                practitioners.
              </p>
              <ul className="space-y-2.5 text-sm text-white/85">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Globally recognized accreditations</li>
                <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-gold" /> Practitioner-led delivery</li>
                <li className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> NYSC discount programs available</li>
              </ul>
              <div>
                <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
                  <Link to="/training">View Certifications</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Endorsements</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
              Trusted by Industry <span className="italic text-gold">Leaders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl bg-card border border-border p-7 flex flex-col">
                <span className="text-gold font-display text-4xl leading-none">"</span>
                <blockquote className="mt-2 text-sm text-foreground leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy text-navy-foreground flex items-center justify-center font-display font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 text-center">
          <SectionEyebrow>Take the next step</SectionEyebrow>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            Ready to <span className="italic text-gold">Elevate</span> Your Organization?
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto leading-relaxed">
            Speak with a senior advisor and explore tailored solutions built for measurable impact.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link to="/enrollment">Enroll in a Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
