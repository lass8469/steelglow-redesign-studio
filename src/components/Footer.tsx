import { Link } from "react-router-dom";
import MoistureBackground from "./MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";

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
      { label: t("nav.cargo"), href: "/cargo" },
      { label: t("nav.contact"), href: "/contact" },
    ],
    resources: [
      { label: t("footer.downloads"), href: "/downloads" },
      { label: t("nav.faq"), href: "/faq" },
      { label: t("footer.technicalSpecs"), href: "/downloads" },
      { label: t("footer.caseStudies"), href: "/applications" },
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
                <span className="text-2xl font-black tracking-tighter text-foreground">
                  DRY<span className="text-primary">BAG</span>
                </span>
                <span className="block text-xs tracking-widest text-muted-foreground uppercase mt-1">
                  Desiccant Systems
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                {t("footer.tagline")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("nav.products")}</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="section-divider mt-12 mb-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DRY-BAG. {t("footer.rights")}
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </MoistureBackground>
  );
};

export default Footer;
