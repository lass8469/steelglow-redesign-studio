import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/#products" },
  { label: "Applications", href: "/applications" },
  { label: "Cargo", href: "/cargo" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary py-2 text-center">
        <p className="text-xs font-medium text-primary-foreground tracking-wide uppercase">
          Danish Engineering Since 1979 | Global Shipping Available
        </p>
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-black tracking-tighter text-foreground">
                DRY
                <span className="text-primary">BAG</span>
              </span>
              <span className="absolute -bottom-1 left-0 text-[8px] tracking-widest text-muted-foreground uppercase">
                Desiccant Systems
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/downloads">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                Resources
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in">
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/faq" className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-colors" onClick={() => setIsMobileOpen(false)}>
                FAQ
              </Link>
              <div className="pt-4 px-4">
                <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Get Quote
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