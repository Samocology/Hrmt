import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PageHero } from "@/components/PageHero";
import bcImg from "@/assets/business-consulting.jpg";
import hrImg from "@/assets/hr-management.jpg";
import ictImg from "@/assets/ict-training.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HRMT Consult" },
      { name: "description", content: "Comprehensive solutions for strategic growth: business consulting, HR management, ICT training, and specialized programs." },
      { property: "og:title", content: "Services — HRMT Consult" },
      { property: "og:description", content: "Strategic consulting, HR, and ICT training for ambitious enterprises." },
    ],
  }),
  component: ServicesPage,
});

const main = [
  {
    eyebrow: "Strategy & Operations",
    title: "Business Consulting",
    desc: "Navigate market complexities and scale efficiently with our rigorous business consulting services. We provide data-driven insights and actionable frameworks tailored to your industry.",
    bullets: [
      "Organizational Restructuring & Change Management",
      "Market Entry & Expansion Strategy",
      "Operational Efficiency & Process Optimization",
    ],
    img: bcImg,
    reverse: false,
  },
  {
    eyebrow: "Talent & Culture",
    title: "Human Resource Management",
    desc: "Your workforce is your greatest asset. We deliver end-to-end human capital solutions, from executive talent acquisition to implementing robust performance systems.",
    bullets: [
      "Executive Search & Specialized Recruitment",
      "Performance Management & Appraisal Systems",
      "Compensation, Benefits & Policy Design",
    ],
    img: hrImg,
    reverse: true,
  },
  {
    eyebrow: "Capacity & Skills",
    title: "ICT & Professional Training",
    desc: "Bridge the digital skills gap with our industry-recognized certification programs and corporate training catalog. We equip teams and young professionals with practical capabilities to thrive in technology-driven environments.",
    bullets: [
      "Enterprise IT & Systems Administration",
      "Data Analytics & Corporate Cybersecurity",
      "Custom Corporate Upskilling Workshops",
    ],
    img: ictImg,
    reverse: false,
  },
];

const specialized = [
  { title: "Pre-Retirement Planning", desc: "Comprehensive transition training, financial literacy, and lifestyle planning to ensure your senior employees are thoroughly prepared for their next phase of life after dedicated service." },
  { title: "NYSC Bootcamps", desc: "Heavily discounted intensive career-readiness programs exclusively for active NYSC Corp members. Bridging the gap between academia and corporate readiness." },
  { title: "Executive Coaching", desc: "One-on-one advisory and leadership coaching for senior leaders, focusing on communication, strategic decision-making, and team management." },
];

const methodology = [
  { n: "1", title: "Discovery", desc: "Diagnostic engagement and stakeholder analysis to identify core challenges." },
  { n: "2", title: "Strategy", desc: "Designing bespoke, data-driven frameworks aligned to your corporate objectives." },
  { n: "3", title: "Implementation", desc: "Hands-on execution of the strategy, integrating systems, deploying training, and rolling out new processes." },
  { n: "4", title: "Review", desc: "Continuous monitoring, performance evaluation, and recalibration to ensure sustainable, long-term ROI." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our expertise"
        title="Comprehensive Solutions for"
        accent="Strategic Growth"
        description="From high-level business consulting to tactical ICT training, we provide the frameworks, insights, and capacity-building required to elevate your enterprise."
        align="center"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-8 text-center max-w-3xl">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            We do not just advise. We partner with you to execute and deliver measurable business value.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our service portfolio is designed to address the multifaceted challenges of the modern corporate landscape.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 space-y-20">
          {main.map((s) => (
            <article key={s.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${s.reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="rounded-xl overflow-hidden ring-1 ring-border shadow-sm">
                <img src={s.img} alt={s.title} width={1200} height={800} loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
              <div>
                <SectionEyebrow>{s.eyebrow}</SectionEyebrow>
                <h3 className="mt-3 font-display font-bold text-3xl text-foreground">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-7">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SPECIALIZED */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Specialized programs</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">Targeted Initiatives</h2>
            <p className="mt-3 text-muted-foreground">Beyond our core corporate services, we offer specialized programs tailored to specific career stages and organizational needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialized.map((s) => (
              <div key={s.title} className="rounded-xl bg-card border border-border p-7 hover:shadow-lg transition-shadow">
                <div className="h-10 w-10 rounded-md bg-navy mb-4" />
                <h3 className="font-display font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:underline">
                  Program details <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Our approach</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">The HRMT Methodology</h2>
            <p className="mt-3 text-white/70">A systematic, four-step framework designed to guarantee precision, accountability, and measurable results in every engagement.</p>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div aria-hidden className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-white/15" />
            {methodology.map((m) => (
              <div key={m.n} className="relative text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center font-display font-bold text-gold relative z-10">
                  {m.n}
                </div>
                <h4 className="font-display font-bold">{m.title}</h4>
                <p className="mt-2 text-xs text-white/65 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl">Discuss your next strategic initiative.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Engage with our senior consultants to explore how HRMT Consult Ltd. can architect real solutions for your unique business challenges.</p>
          <Button asChild size="lg" className="mt-7 bg-navy text-navy-foreground hover:bg-navy-light">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
