import LocalizedLink from "./LocalizedLink";
import MoistureBackground from "./MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";
import { Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    products: [
      { label: t("products.drybagI"), href: "/drybag-i" },
      { label: t("products.drybagIII"), href: "/drybag-iii" },
      { label: t("products.silica"), href: "/silica" },
      { label: t("products.dunnage"), href: "/dunnage-bag" },
      { label: t("products.molecular"), href: "/molecular-sieve" },
    ],
    company: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.industries"), href: "/applications" },
      { label: t("nav.contact"), href: "/contact" },
    ],
    resources: [
      { label: t("footer.downloads"), href: "/downloads" },
      { label: t("nav.faq"), href: "/faq" },
      { label: t("footer.testimonials"), href: "/testimonials" },
    ],
  };

  return (
    <MoistureBackground variant="default" className="bg-card border-t border-border">
      <footer className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Logo size="lg" />
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                {t("footer.tagline")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/company/dry-bag-denmark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61554673160641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@DRY-BAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">YouTube</span>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("nav.products")}</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <LocalizedLink
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.company")}</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <LocalizedLink
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("footer.resources")}</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <LocalizedLink
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="section-divider mt-12 mb-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DESICCANT. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <LocalizedLink to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </LocalizedLink>
              <LocalizedLink to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.terms")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </footer>
    </MoistureBackground>
  );
};

export default Footer;
