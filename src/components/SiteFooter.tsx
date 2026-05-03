import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-xs">
              Leading consulting firm specializing in HR management, business consulting,
              and professional ICT training.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li><Link to="/services" className="hover:text-gold transition-colors">Business Consulting</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Human Resources</Link></li>
              <li><Link to="/training" className="hover:text-gold transition-colors">ICT Training</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Pre-Retirement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/training" className="hover:text-gold transition-colors">Certifications</Link></li>
              <li><Link to="/enrollment" className="hover:text-gold transition-colors">Enrollment</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-5">
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-md bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-md bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="mailto:info@hrmtconsult.com" aria-label="Email" className="h-9 w-9 rounded-md bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <ul className="space-y-2.5 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>Jerry Century Place, Yenagoa, Bayelsa</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:hrmtconsult@gmail.com" className="hover:text-gold transition-colors">hrmtconsult@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+2348037131507" className="hover:text-gold transition-colors">+234 803 713 1507</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} HRMT Consult Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-center text-white/45">
            Designed & built by{" "}
            <a
              href="https://danmarks-tech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:underline"
            >
              Danmarks Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}