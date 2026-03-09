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

  // Organization + WebSite JSON-LD (moved from index.html for per-page control)
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DESICCANT A/S",
        url: "https://desiccant.com/",
        logo: "https://desiccant.com/logo-desiccant.svg",
        description: t("meta.home.description"),
        inLanguage: language,
        sameAs: [
          "https://www.facebook.com/profile.php?id=61554673160641",
          "https://www.linkedin.com/company/dry-bag-denmark/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+4586190500",
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: ["en", "da"],
        },
      },
      {
        "@type": "WebSite",
        name: "Desiccant.com",
        url: `https://desiccant.com/${language}`,
        inLanguage: language,
        potentialAction: {
          "@type": "SearchAction",
          target: `https://desiccant.com/${language}/products?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
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
