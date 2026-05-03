import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight, AtSign } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HRMT Consult" },
      { name: "description", content: "Connect with HRMT Consult experts. Offices in Yenagoa, Calabar, Port Harcourt and Atlanta, USA. 24-hour response." },
      { property: "og:title", content: "Contact HRMT Consult" },
      { property: "og:description", content: "Reach out to our dedicated offices across Nigeria and the United States." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  {
    name: "General HQ — Yenagoa",
    addr: "Jerry Century Place, Yenagoa, Bayelsa State, Nigeria.",
    phones: ["+234 803 713 1507", "+234 904 979 1578"],
  },
  {
    name: "Calabar Office",
    addr: "20 Mekenge Layout, Cross River State, Nigeria.",
    phones: ["+234 802 147 0884"],
  },
  {
    name: "Port Harcourt Office",
    addr: "No. 30 Nbonu Street, D/Line, Port Harcourt, Rivers State, Nigeria.",
    phones: ["+234 803 713 1507"],
  },
  {
    name: "Atlanta, USA",
    addr: "157 Burke Street, Stock Breach, Atlanta, Georgia, United States of America.",
    phones: ["+1 (678) 462-3376"],
  },
];

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const fn = (fd.get("fn") || "").toString().trim();
    const ln = (fd.get("ln") || "").toString().trim();
    const ce = (fd.get("ce") || "").toString().trim();
    const cp = (fd.get("cp") || "").toString().trim();
    const org = (fd.get("org") || "").toString().trim();
    const inquiry = (fd.get("inquiry") || "").toString().trim();
    const msg = (fd.get("msg") || "").toString().trim();

    const subject = `New Inquiry from ${fn} ${ln}`.trim();
    const lines = [
      `Name: ${fn} ${ln}`,
      `Email: ${ce}`,
      `Phone: ${cp}`,
      `Company: ${org}`,
      `Inquiry Type: ${inquiry}`,
      "",
      "Message:",
      msg,
    ];
    const body = lines.join("\n");

    // Open email draft to hrmt75@gmail.com
    window.location.href = `mailto:hrmt75@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Also open WhatsApp to +234 803 713 1507
    setTimeout(() => {
      const waText = `*New HRMT Inquiry*\n\n${body}`;
      window.open(`https://wa.me/2348037131507?text=${encodeURIComponent(waText)}`, "_blank");
    }, 600);

    toast.success("Inquiry prepared", { description: "Your email draft and WhatsApp chat have opened — please send both to complete." });
    form.reset();
  };

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Get in touch"
        title="Connect with our"
        accent="Experts"
        description="Whether you are looking to transform your business strategy, upskill your workforce, or enroll in a certification program, our team is ready to assist."
        align="center"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="space-y-7">
            <div>
              <h2 className="font-display font-bold text-2xl">How can we help you today?</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Reach out to our dedicated departments for specialized assistance. We aim to respond to all inquiries within 24 business hours.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-gold" />
                <h3 className="font-semibold">Our Offices</h3>
              </div>
              <ul className="space-y-4 text-sm">
                {offices.map((o) => (
                  <li key={o.name} className="border-l-2 border-gold/60 pl-3">
                    <p className="font-semibold text-foreground">{o.name}</p>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{o.addr}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                      {o.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/[^+0-9]/g, "")}`} className="text-xs text-foreground hover:text-gold">
                          {p}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-4 w-4 text-gold" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a className="text-sm text-foreground hover:text-gold" href="mailto:hrmtconsult@gmail.com">hrmtconsult@gmail.com</a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <AtSign className="h-4 w-4 text-gold" />
                <h3 className="font-semibold">Social</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Follow us <span className="text-foreground font-medium">@hrmtconsult</span>
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-gold" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="text-sm text-muted-foreground">Monday – Sunday: 24 Hours <br />Always Open to serve you.</p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-xl bg-card border border-border p-6 md:p-8 space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl">Send us a Message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">Fill out the form below and a representative will get back to you shortly.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="fn">First Name</Label>
                <Input id="fn" name="fn" placeholder="e.g., John" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="ln">Last Name</Label>
                <Input id="ln" name="ln" placeholder="e.g., Doe" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="ce">Email Address</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="ce" name="ce" type="email" placeholder="john.doe@example.com" required className="pl-9" />
                </div>
              </div>
              <div>
                <Label htmlFor="cp">Phone Number</Label>
                <div className="relative mt-1.5">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="cp" name="cp" placeholder="+234 (0) 000 000 0000" className="pl-9" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="org">Company / Organization</Label>
                <div className="relative mt-1.5">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="org" name="org" placeholder="Your company name (Optional)" className="pl-9" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="inquiry">Inquiry Type</Label>
                <select
                  id="inquiry"
                  name="inquiry"
                  defaultValue=""
                  className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Select the nature of your inquiry</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="HR Management">HR Management</option>
                  <option value="Training & Certifications">Training & Certifications</option>
                  <option value="Program Enrollment">Program Enrollment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" name="msg" placeholder="How can we assist you?" rows={5} required className="mt-1.5" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground max-w-sm">
                By submitting this form, you agree to our Privacy Policy. Your information will be kept strictly confidential.
              </p>
              <Button type="submit" size="lg" className="bg-navy text-navy-foreground hover:bg-navy-light">
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* VISIT — Map */}
      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <div className="rounded-xl bg-card border border-border p-7 flex flex-col">
              <div className="h-12 w-12 rounded-full bg-navy text-navy-foreground flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-xl">Visit Our HQ</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Schedule an in-person consultation with our senior advisors at our General Headquarters.
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <p className="font-semibold">Jerry Century Place</p>
                <p className="text-muted-foreground">Yenagoa, Bayelsa State, Nigeria</p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Jerry+Century+Place+Yenagoa+Bayelsa+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
              >
                Get Directions <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="lg:col-span-2 rounded-xl overflow-hidden border border-border min-h-[360px] bg-card">
              <iframe
                title="HRMT Consult — General HQ, Yenagoa"
                src="https://www.google.com/maps?q=Jerry+Century+Place,+Yenagoa,+Bayelsa+State,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
