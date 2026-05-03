import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { GraduationCap, HelpCircle, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/enrollment")({
  head: () => ({
    meta: [
      { title: "Program Enrollment — HRMT Consult" },
      { name: "description", content: "Apply for HRMT Consult certification tracks, ICT bootcamps, and NYSC member programs." },
      { property: "og:title", content: "Program Enrollment — HRMT Consult" },
      { property: "og:description", content: "Take the next step in your professional journey. Apply for upcoming certification tracks." },
    ],
  }),
  component: EnrollmentPage,
});

const steps = [
  { n: "1", title: "Submit Application", desc: "Complete the form with your accurate details." },
  { n: "2", title: "Review & Acceptance", desc: "Our admissions team will review your profile within 48 hours." },
  { n: "3", title: "Payment Processing", desc: "Receive your invoice and complete secure payment." },
  { n: "4", title: "Onboarding", desc: "Gain access to the student portal and course materials." },
];

function EnrollmentPage() {
  const [schedule, setSchedule] = useState("weekday");
  const [nysc, setNysc] = useState("no");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const get = (k: string) => (fd.get(k) || "").toString().trim();

    const lines = [
      `Name: ${get("firstName")} ${get("lastName")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `State / Region: ${get("state")}`,
      `Certification Track: ${get("track")}`,
      `Preferred Schedule: ${schedule}`,
      `NYSC Member: ${nysc}${nysc === "yes" ? ` (State Code: ${get("stateCode")})` : ""}`,
    ];
    const body = lines.join("\n");
    const subject = `New Enrollment Application — ${get("firstName")} ${get("lastName")}`.trim();

    window.location.href = `mailto:hrmt75@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      const waText = `*New HRMT Enrollment Application*\n\n${body}`;
      window.open(`https://wa.me/2348037131507?text=${encodeURIComponent(waText)}`, "_blank");
    }, 600);

    toast.success("Application prepared", {
      description: "Your email draft and WhatsApp chat have opened — please send both to complete.",
    });
    form.reset();
  };

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Join our programs"
        title="Program"
        accent="Enrollment"
        description="Take the next definitive step in your professional journey. Complete the application below to secure your placement in our upcoming certification tracks."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-xl bg-card border border-border p-6 md:p-8 space-y-10">
            {/* Section 01 */}
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <h2 className="font-display font-bold text-xl">01. Applicant Profile</h2>
                <span className="text-xs uppercase tracking-wider text-gold font-semibold">Required</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="firstName" className="text-xs uppercase tracking-wider">First name</Label>
                  <Input id="firstName" name="firstName" placeholder="Enter your first name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-xs uppercase tracking-wider">Last name</Label>
                  <Input id="lastName" name="lastName" placeholder="Enter your last name" required className="mt-1.5" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider">Email address</Label>
                  <Input id="email" name="email" type="email" placeholder="professional@example.com" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider">Phone number</Label>
                  <Input id="phone" name="phone" placeholder="+234 (0) 000 000 0000" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="state" className="text-xs uppercase tracking-wider">State / Region</Label>
                  <select
                    id="state"
                    name="state"
                    defaultValue=""
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Select location</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja (FCT)">Abuja (FCT)</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Akwa-Ibom">Akwa-Ibom</option>
                    <option value="Delta">Delta</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 02 */}
            <div>
              <h2 className="font-display font-bold text-xl border-b border-border pb-4 mb-6">02. Program Details</h2>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="track" className="text-xs uppercase tracking-wider">Certification track</Label>
                  <select
                    id="track"
                    name="track"
                    defaultValue=""
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Select a certification track</option>
                    <option value="Advanced ICT & Cybersecurity">Advanced ICT & Cybersecurity</option>
                    <option value="HR & People Operations">HR & People Operations</option>
                    <option value="Business Strategy">Business Strategy</option>
                    <option value="Data Analytics">Data Analytics</option>
                  </select>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider mb-2 block">Preferred schedule</Label>
                  <RadioGroup value={schedule} onValueChange={setSchedule} className="grid sm:grid-cols-2 gap-3">
                    <Label className={`flex items-center gap-3 rounded-md border px-4 py-3 cursor-pointer transition-all ${schedule === "weekday" ? "border-navy bg-secondary/60" : "border-border"}`}>
                      <RadioGroupItem value="weekday" />
                      <span className="text-sm font-medium">Weekday (Morning)</span>
                    </Label>
                    <Label className={`flex items-center gap-3 rounded-md border px-4 py-3 cursor-pointer transition-all ${schedule === "weekend" ? "border-navy bg-secondary/60" : "border-border"}`}>
                      <RadioGroupItem value="weekend" />
                      <span className="text-sm font-medium">Weekend (Intensive)</span>
                    </Label>
                  </RadioGroup>
                </div>

                <div className="rounded-md border border-border p-5 bg-secondary/40">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="font-semibold">NYSC Status</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Active Corp members are eligible for up to a 40% discount on standard certification fees.</p>
                    </div>
                  </div>
                  <Label className="text-xs uppercase tracking-wider">Are you an active NYSC member?</Label>
                  <RadioGroup value={nysc} onValueChange={setNysc} className="mt-2 flex gap-5">
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <RadioGroupItem value="yes" /> Yes
                    </Label>
                    <Label className="flex items-center gap-2 cursor-pointer text-sm">
                      <RadioGroupItem value="no" /> No
                    </Label>
                  </RadioGroup>
                  {nysc === "yes" && (
                    <div className="mt-4">
                      <Label htmlFor="stateCode" className="text-xs uppercase tracking-wider">State code (if applicable)</Label>
                      <Input id="stateCode" name="stateCode" placeholder="e.g., LA/23B/1234" className="mt-1.5" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-2">
              <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
                <span className="text-gold">⚐</span> By submitting this application, you consent to our Data Privacy Policy. Your information is securely encrypted.
              </p>
              <Button type="submit" size="lg" className="bg-navy text-navy-foreground hover:bg-navy-light tracking-wide">
                SUBMIT APPLICATION
              </Button>
            </div>
          </form>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-xl bg-navy text-navy-foreground p-7 border-t-4 border-gold">
              <h3 className="font-display font-bold text-lg">The Enrollment Process</h3>
              <ul className="mt-5 space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <div className="h-7 w-7 shrink-0 rounded-full border-2 border-gold flex items-center justify-center text-gold font-bold text-xs">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.title}</p>
                      <p className="text-xs text-white/65 mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-card border border-border p-7">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <h3 className="mt-2 font-display font-bold text-lg">Need Assistance?</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our admissions counselors are on hand to guide you through the program selection and enrollment process.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-gold" /> +234 (0) 800 123 4567</li>
                <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-gold" /> admissions@hrmtconsult.com</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
