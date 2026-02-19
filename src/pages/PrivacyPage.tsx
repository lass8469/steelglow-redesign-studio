import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const PrivacyPage = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.privacy.title"), t("meta.privacy.description"), { ogImage: "/og-home.jpg" });

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("privacyPage.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("privacyPage.title1")}
              <span className="block text-gradient">{t("privacyPage.title2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("privacyPage.lastUpdated")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Content */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto prose prose-invert"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s1.title")}</h2>
                <p>{t("privacyPage.s1.text")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s2.title")}</h2>
                <p>{t("privacyPage.s2.text")}</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>{t("privacyPage.s2.item1").split(":")[0]}:</strong>{t("privacyPage.s2.item1").substring(t("privacyPage.s2.item1").indexOf(":") + 1)}</li>
                  <li><strong>{t("privacyPage.s2.item2").split(":")[0]}:</strong>{t("privacyPage.s2.item2").substring(t("privacyPage.s2.item2").indexOf(":") + 1)}</li>
                  <li><strong>{t("privacyPage.s2.item3").split(":")[0]}:</strong>{t("privacyPage.s2.item3").substring(t("privacyPage.s2.item3").indexOf(":") + 1)}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s3.title")}</h2>
                <p>{t("privacyPage.s3.text")}</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>{t("privacyPage.s3.item1")}</li>
                  <li>{t("privacyPage.s3.item2")}</li>
                  <li>{t("privacyPage.s3.item3")}</li>
                  <li>{t("privacyPage.s3.item4")}</li>
                  <li>{t("privacyPage.s3.item5")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s4.title")}</h2>
                <p>{t("privacyPage.s4.text")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s5.title")}</h2>
                <p>{t("privacyPage.s5.text")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s6.title")}</h2>
                <p>{t("privacyPage.s6.text")}</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>{t("privacyPage.s6.item1")}</li>
                  <li>{t("privacyPage.s6.item2")}</li>
                  <li>{t("privacyPage.s6.item3")}</li>
                  <li>{t("privacyPage.s6.item4")}</li>
                  <li>{t("privacyPage.s6.item5")}</li>
                  <li>{t("privacyPage.s6.item6")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s7.title")}</h2>
                <p>{t("privacyPage.s7.text")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("privacyPage.s8.title")}</h2>
                <p>{t("privacyPage.s8.text")}</p>
                <div className="mt-4 p-4 bg-card rounded-sm border border-border">
                  <p><strong>Dry-Bag A/S</strong></p>
                  <p>Odinsvej 21, 8722 Hedensted, Denmark</p>
                  <p>Email: contact@dry-bag.com</p>
                  <p>Phone: +45 86 19 05 00</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
