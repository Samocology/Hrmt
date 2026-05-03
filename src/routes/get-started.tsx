import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { PageHero } from "@/components/PageHero";
import corporateImg from "@/assets/corporate-solutions.jpg";
import profDevImg from "@/assets/professional-development.jpg";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started — HRMT Consult" },
      { name: "description", content: "Choose your engagement path with HRMT Consult — corporate solutions for organizations or professional development for individuals." },
      { property: "og:title", content: "Get Started with HRMT Consult" },
      { property: "og:description", content: "Two paths, one standard of excellence — for enterprises and individual professionals." },
    ],
  }),
  component: GetStartedPage,
});

const steps = [
  { n: "1", title: "Initiate Contact", desc: "Submit your inquiry via our secure portal. Our client team responds within 24 business hours." },
  { n: "2", title: "Assessment & Strategy", desc: "We conduct a discovery session, verify credentials, and confirm the right path forward." },
  { n: "3", title: "Execution & Onboarding", desc: "Projects launch with a dedicated manager. Trainees gain full access to schedules and materials." },
];

function GetStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin your journey"
        title="How would you like to"
        accent="partner with us?"
        description="Whether you are an enterprise seeking transformation or a professional advancing your career, we have a tailored engagement path for you."
        align="center"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-7">
          <article className="rounded-xl border border-border bg-card overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={corporateImg} alt="Corporate consultation" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-xs font-semibold text-navy">
                <Building2 className="h-3.5 w-3.5" /> FOR ORGANIZATIONS
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h2 className="font-display font-bold text-2xl">Corporate & Enterprise Solutions</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Engage our senior advisory team for comprehensive business strategy, HR restructuring, executive search, and custom enterprise training programs.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">Strategic Business & Operations Consulting</li>
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">End-to-End Human Resource Management</li>
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">Custom Corporate Training & Capacity Building</li>
              </ul>
              <Button asChild className="mt-7 bg-navy text-navy-foreground hover:bg-navy-light">
                <Link to="/contact">Schedule Corporate Consultation</Link>
              </Button>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={profDevImg} alt="Professional development" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-xs font-semibold text-navy">
                <User className="h-3.5 w-3.5" /> FOR INDIVIDUALS & NYSC
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h2 className="font-display font-bold text-2xl">Professional Development</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Accelerate your career trajectory with globally recognized certification tracks, advanced ICT bootcamps, and targeted NYSC empowerment initiatives.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">Industry-Recognized HR & Business Certifications</li>
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">Advanced ICT & Technology Training Bootcamps</li>
                <li className="rounded-md bg-secondary/70 px-3.5 py-2.5 border-l-2 border-gold">Discounted NYSC Capability Building Programs</li>
              </ul>
              <Button asChild variant="outline" className="mt-7 border-navy text-navy hover:bg-navy hover:text-navy-foreground">
                <Link to="/enrollment">Apply for Enrollment</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionEyebrow>Engagement process</SectionEyebrow>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
              A streamlined path to <span className="italic text-gold">execution.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We ensure a transparent, efficient, and structured onboarding for every client and student.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div aria-hidden className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-border" />
            {steps.map((step) => (
              <div key={step.n} className="relative text-center md:text-left">
                <div className="mx-auto md:mx-0 mb-4 h-14 w-14 rounded-lg bg-background border-2 border-gold flex items-center justify-center font-display font-bold text-navy text-lg shadow-sm relative z-10">
                  {step.n}
                </div>
                <h3 className="font-display font-bold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
          <div className="rounded-2xl bg-navy text-navy-foreground p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl">Need immediate assistance?</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Unsure which program is right for you, or need to discuss a customized corporate engagement? Our senior advisory team is on standby.
              </p>
            </div>
            <div className="grid gap-3">
              <a href="tel:+2348037131507" className="flex items-center gap-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors px-4 py-3.5 border border-white/10">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">☎</div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">24/7 Advisory Line</p>
                  <p className="font-semibold">+234 803 713 1507</p>
                </div>
              </a>
              <a href="mailto:hello@hrmtconsult.com" className="flex items-center gap-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors px-4 py-3.5 border border-white/10">
                <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">✉</div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Email Support</p>
                  <p className="font-semibold">hello@hrmtconsult.com</p>
                </div>
              </a>
              <Button asChild variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Contact our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
