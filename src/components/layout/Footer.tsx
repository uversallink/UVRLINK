import { Link } from "react-router-dom";
import { Wifi, Phone, Award, Users, Zap, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Important Disclosure Banner */}
      <div className="bg-accent/20 border-b border-accent/30">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground leading-relaxed">
            <strong>Important Disclaimer:</strong> Uversal Link is an independent third-party advisory service. We are NOT an internet service provider (ISP). We are not affiliated, authorized, or endorsed by any telecom or cable company. We do not sell official ISP services. All mentions of providers are for informational purposes only.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Uversal Link" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="font-display font-bold text-xl sm:text-2xl">
                Uversal Link
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Independent third-party guidance for internet, cable TV, and broadband services. We help you understand service options and navigate provider processes. Not an ISP. No brand affiliation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Advisory Services
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
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Legal</h4>
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
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Why Choose Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">100% Independent</p>
                  <p className="text-primary-foreground/70 text-sm">No ISP affiliation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Advisory Service</p>
                  <p className="text-primary-foreground/70 text-sm">Third-party guidance</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Educational Focus</p>
                  <p className="text-primary-foreground/70 text-sm">Practical guidance</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    107 Shorewood Ln<br />
                    Huntsville, AL 35811
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a href="tel:1-800-274-7478" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    1-800-ASSIST3
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <a href="mailto:info@uversallink.com" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    info@uversallink.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 md:gap-4">
              <p>© 2026 Uversal Link. All rights reserved.</p>
              <span className="hidden sm:inline">|</span>
              <p className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">107 Shorewood Ln, Huntsville, AL 35811</span>
                <span className="md:hidden">Huntsville, AL</span>
              </p>
              <span className="hidden sm:inline">|</span>
              <p className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <a href="tel:1-800-274-7478" className="hover:text-accent transition-colors">
                  1-800-ASSIST3
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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
