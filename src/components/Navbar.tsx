import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
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
      if (location.pathname === "/") {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.applications"), href: "/applications" },
    { label: t("nav.contact"), href: "/contact" },
  ];

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
      <div className="bg-primary py-2 text-center">
        <p className="text-xs font-medium text-primary-foreground tracking-wide uppercase">
          {t("topbar.message")}
        </p>
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Desiccant" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/about"
              onClick={() => handleNavClick("/about")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.about")}
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline inline-flex items-center gap-1">
                  {t("nav.products")}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-popover border-border">
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  Desiccants
                </DropdownMenuLabel>
                {desiccantProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  Cargo Protection
                </DropdownMenuLabel>
                {cargoProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
                  Other Products
                </DropdownMenuLabel>
                {otherProducts.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {t(item.label)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/applications"
              onClick={() => handleNavClick("/applications")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.applications")}
            </Link>
            <Link
              to="/contact"
              onClick={() => handleNavClick("/contact")}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* CTA & Language */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle />
            <Link to="/downloads">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                {t("nav.resources")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                {t("nav.getQuote")}
              </Button>
            </Link>
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
              <Link
                to="/about"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.about")}
              </Link>
              
              {/* Mobile Products Collapsible */}
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors">
                  {t("nav.products")}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1 mt-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Link
                to="/applications"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.applications")}
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Link
                to="/faq"
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(false)}
              >
                {t("nav.faq")}
              </Link>
              <div className="pt-4 px-4">
                <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    {t("nav.getQuote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
