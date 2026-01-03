import { Link } from "react-router-dom";
import { Wifi, Phone, Award, Users, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Important Disclosure Banner */}
      <div className="bg-accent/20 border-b border-accent/30">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground leading-relaxed">
            <strong>Important:</strong> Uversal Link is an independent third-party service assistance startup. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Uversal Link" className="w-10 h-10" />
              <span className="font-display font-bold text-2xl">
                Uversal Link
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Your independent guide to finding the right connectivity solutions. We provide assistance and guidance to help you navigate internet, cable, and streaming options.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Service Guidance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Assistance Options
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Why Choose Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Independent</p>
                  <p className="text-primary-foreground/70 text-sm">Unbiased guidance</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Expert Team</p>
                  <p className="text-primary-foreground/70 text-sm">Industry experts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Fast Service</p>
                  <p className="text-primary-foreground/70 text-sm">Quick assistance</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Uversal Link. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/refund" className="hover:text-accent transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
