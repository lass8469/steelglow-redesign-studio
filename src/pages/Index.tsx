import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useJsonLd } from "@/hooks/useJsonLd";

const Index = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.home.title"), t("meta.home.description"), { ogImage: "/og-home.jpg" });

  // WebSite + SearchAction JSON-LD (enables sitelinks search box)
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Desiccant.com",
    url: "https://desiccant.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://desiccant.com/en/products?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
