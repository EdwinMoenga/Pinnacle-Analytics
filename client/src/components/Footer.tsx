import { Link } from "wouter";
import { BarChart3, ArrowRight, MapPin, Phone, Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-heading font-bold tracking-tight text-white">
                Pinnacle<span className="text-primary">Analytics</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming complex data into actionable strategic insights. We help industry leaders make data-driven decisions with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Expertise</h3>
            <ul className="space-y-4">
              {[
                "Advisory & Strategic",
                "Analytics & Visualization",
                "Data Collection",
                "Data Engineering",
                "Quality Management"
              ].map((item) => (
                <li key={item}>
                  <Link href="/#expertise" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 text-primary/50 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>
                  100 Innovation Drive,<br />
                  Tech Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+15550123456">+1 (555) 012-3456</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@pinnacle.com">hello@pinnacle.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Pinnacle Analytics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
