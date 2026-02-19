import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.home.title"), t("meta.home.description"), { ogImage: "/og-home.jpg" });
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
