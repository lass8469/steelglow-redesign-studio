import { motion } from "framer-motion";
import { Download, FileText, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadsPage = () => {
  const { t } = useLanguage();

  const dataSheets = [
    {
      title: "DRY-BAG I Technical Data Sheet",
      href: "/downloads/dry-bag-i-technical-data-sheet.pdf"
    },
    {
      title: "DRY-BAG I Safety Data Sheet",
      href: "/downloads/dry-bag-i-safety-data-sheet.pdf"
    },
    {
      title: "DRY-BAG III Technical Data Sheet",
      href: "/downloads/dry-bag-iii-technical-data-sheet.pdf"
    },
    {
      title: "DRY-BAG III Safety Data Sheet",
      href: "/downloads/dry-bag-iii-safety-data-sheet.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/placeholder.svg')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("downloadsPage.title1")}
              <span className="block text-gradient">{t("downloadsPage.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("downloadsPage.description")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Downloads Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Data Sheets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{t("downloadsPage.dataSheetsTitle")}</h2>
              </div>
              <div className="space-y-4">
                {dataSheets.map((sheet, index) => (
                  <a
                    key={index}
                    href={sheet.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {sheet.title}
                    </span>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CSR Report */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{t("downloadsPage.csrTitle")}</h2>
              </div>
              <div className="p-6 bg-card rounded-sm border border-border">
                <p className="text-muted-foreground mb-6">
                  {t("downloadsPage.csrDesc")}
                </p>
                <a
                  href="/downloads/dry-bag-csr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("downloadsPage.csrButton")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Access */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("downloadsPage.needMore")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("downloadsPage.needMoreDesc")}
            </p>
            <a 
              href="mailto:contact@dry-bag.com?subject=Request%20Access%20to%20Downloads"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-sm hover:bg-secondary/80 transition-colors"
            >
              {t("downloadsPage.requestAccess")}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadsPage;
