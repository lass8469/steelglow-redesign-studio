import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "da";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.products": "Products",
    "nav.applications": "Applications",
    "nav.cargo": "Cargo",
    "nav.blog": "Cargo Intelligence",
    "nav.contact": "Contact",
    "nav.resources": "Resources",
    "nav.getQuote": "Get Quote",
    "nav.faq": "FAQ",
    
    // Products
    "products.drybagI": "DRY-BAG I",
    "products.drybagIII": "DRY-BAG III",
    "products.silica": "Silica Gel",
    "products.dunnage": "Dunnage Bags",
    "products.molecular": "Molecular Sieve",
    "products.calcium": "Calcium Chloride",
    "products.retail": "Retail Products",
    "products.edge": "Edge Protectors",
    "products.antiSlip": "Anti-Slip Sheets",
    "products.stabustrap": "Stabustrap",
    "products.datalogger": "Datalogger",
    
    // Footer
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.downloads": "Downloads",
    "footer.technicalSpecs": "Technical Specs",
    "footer.caseStudies": "Case Studies",
    "footer.aboutUs": "About Us",
    "footer.industries": "Industries",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Leading Danish manufacturer of high-quality desiccants, protecting cargo worldwide since 1979.",
    
    // Top bar
    "topbar.message": "Danish Engineering Since 1979 | Global Shipping Available",
  },
  da: {
    // Navigation
    "nav.about": "Om Os",
    "nav.products": "Produkter",
    "nav.applications": "Anvendelser",
    "nav.cargo": "Fragt",
    "nav.blog": "Cargo Intelligence",
    "nav.contact": "Kontakt",
    "nav.resources": "Ressourcer",
    "nav.getQuote": "Få Tilbud",
    "nav.faq": "FAQ",
    
    // Products
    "products.drybagI": "DRY-BAG I",
    "products.drybagIII": "DRY-BAG III",
    "products.silica": "Silica Gel",
    "products.dunnage": "Dunnage Bags",
    "products.molecular": "Molecular Sieve",
    "products.calcium": "Calciumchlorid",
    "products.retail": "Detailprodukter",
    "products.edge": "Kantbeskyttere",
    "products.antiSlip": "Skridsikre Ark",
    "products.stabustrap": "Stabustrap",
    "products.datalogger": "Datalogger",
    
    // Footer
    "footer.company": "Virksomhed",
    "footer.resources": "Ressourcer",
    "footer.downloads": "Downloads",
    "footer.technicalSpecs": "Tekniske Specifikationer",
    "footer.caseStudies": "Casestudier",
    "footer.aboutUs": "Om Os",
    "footer.industries": "Brancher",
    "footer.privacy": "Privatlivspolitik",
    "footer.terms": "Servicevilkår",
    "footer.rights": "Alle rettigheder forbeholdes.",
    "footer.tagline": "Førende dansk producent af højkvalitets tørremidler, der beskytter fragt verden over siden 1979.",
    
    // Top bar
    "topbar.message": "Dansk Ingeniørkunst Siden 1979 | Global Forsendelse Tilgængelig",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "da") {
      setLanguageState(saved);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
