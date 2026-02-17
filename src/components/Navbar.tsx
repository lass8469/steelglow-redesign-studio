import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import LocalizedLink from "./LocalizedLink";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const productItems = [
  { label: "products.drybagI", href: "/drybag-i", category: "desiccants" },
  { label: "products.drybagIII", href: "/drybag-iii", category: "desiccants" },
  { label: "products.silica", href: "/silica", category: "desiccants" },
  { label: "products.molecular", href: "/molecular-sieve", category: "desiccants" },
  { label: "products.calcium", href: "/calcium-chloride", category: "desiccants" },
  { label: "products.dunnage", href: "/dunnage-bag", category: "cargo" },
  { label: "products.edge", href: "/edge-protectors", category: "cargo" },
  { label: "products.antiSlip", href: "/anti-slip", category: "cargo" },
  { label: "products.stabustrap", href: "/stabustrap", category: "cargo" },
  { label: "products.retail", href: "/retail", category: "other" },
  { label: "products.datalogger", href: "/datalogger", category: "other" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname.match(/^\/(en|da)\/?$/)) {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const desiccantProducts = productItems.filter(p => p.category === "desiccants");
  const cargoProducts = productItems.filter(p => p.category === "cargo");
  const otherProducts = productItems.filter(p => p.category === "other");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary py-1.5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-segment text-[11px] font-semibold text-primary-foreground tracking-[0.25em] uppercase whitespace-nowrap">
              {t("navbar.marquee")} &nbsp;|&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <LocalizedLink
              to="/about"
              onClick={() => handleNavClick("/about")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.about")}
            </LocalizedLink>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline inline-flex items-center gap-1">
                  {t("nav.products")}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover border-border">
                <DropdownMenuItem asChild>
                  <LocalizedLink to="/products" className="cursor-pointer font-semibold text-primary">
                    {t("nav.viewAllProducts")}
                  </LocalizedLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  {t("nav.desiccants")}
                </DropdownMenuLabel>
                {desiccantProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <LocalizedLink to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </LocalizedLink>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  {t("nav.cargoProtection")}
                </DropdownMenuLabel>
                {cargoProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <LocalizedLink to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </LocalizedLink>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  {t("nav.otherProducts")}
                </DropdownMenuLabel>
                {otherProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <LocalizedLink to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </LocalizedLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <LocalizedLink
              to="/applications"
              onClick={() => handleNavClick("/applications")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.applications")}
            </LocalizedLink>
            <LocalizedLink
              to="/testimonials"
              onClick={() => handleNavClick("/testimonials")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.testimonials")}
            </LocalizedLink>
            <LocalizedLink
              to="/contact"
              onClick={() => handleNavClick("/contact")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.contact")}
            </LocalizedLink>
          </div>

          {/* CTA & Language */}
          <div className="hidden lg:flex items-center gap-3">
            <LocalizedLink
              to="/blog"
              onClick={() => handleNavClick("/blog")}
              className="px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 border border-primary/30 rounded-md hover:bg-primary/5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t("nav.blog")}
            </LocalizedLink>
            <div className="w-px h-6 bg-border" />
            <LanguageToggle />
            <LocalizedLink to="/downloads">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                {t("nav.resources")}
              </Button>
            </LocalizedLink>
            <LocalizedLink to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {t("nav.getQuote")}
              </Button>
            </LocalizedLink>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-foreground"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in">
            <div className="container py-4 space-y-2">
              <LocalizedLink
                to="/about"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.about")}
              </LocalizedLink>
              
              {/* Mobile Products Collapsible */}
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors">
                  {t("nav.products")}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1 mt-1">
                  {productItems.map((item) => (
                    <LocalizedLink
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t(item.label)}
                    </LocalizedLink>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <LocalizedLink
                to="/applications"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.applications")}
              </LocalizedLink>
              <LocalizedLink
                to="/testimonials"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.testimonials")}
              </LocalizedLink>
              <LocalizedLink
                to="/contact"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.contact")}
              </LocalizedLink>
              <div className="my-2 border-t border-border" />
              <LocalizedLink
                to="/blog"
                className="flex items-center gap-2 px-4 py-3 text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {t("nav.blog")}
              </LocalizedLink>
              <LocalizedLink
                to="/faq"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.faq")}
              </LocalizedLink>
              <div className="pt-4 px-4">
                <LocalizedLink to="/contact" onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {t("nav.getQuote")}
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
