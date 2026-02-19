import { motion } from "framer-motion";
import { Award, Leaf, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import aboutHeroBg from "@/assets/about-hero.webp";

const AboutPage = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.about.title"), t("meta.about.description"), { ogImage: "/og-about.jpg" });

  const stats = [
    { value: "45+", label: t("aboutPage.stat1") },
    { value: "20K+", label: t("aboutPage.stat2") },
    { value: "100+", label: t("aboutPage.stat3") },
  ];

  const values = [
    {
      icon: Leaf,
      title: t("aboutPage.value1.title"),
      description: t("aboutPage.value1.desc"),
    },
    {
      icon: Award,
      title: t("aboutPage.value2.title"),
      description: t("aboutPage.value2.desc"),
    },
    {
      icon: Shield,
      title: t("aboutPage.value3.title"),
      description: t("aboutPage.value3.desc"),
    },
  ];

  const offerings = [
    {
      title: t("aboutPage.offer1.title"),
      description: t("aboutPage.offer1.desc"),
    },
    {
      title: t("aboutPage.offer2.title"),
      description: t("aboutPage.offer2.desc"),
    },
    {
      title: t("aboutPage.offer3.title"),
      description: t("aboutPage.offer3.desc"),
    },
    {
      title: t("aboutPage.offer4.title"),
      description: t("aboutPage.offer4.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center justify-center w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="w-full h-full flex items-center justify-center px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t("aboutPage.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("aboutPage.title1")}
              <span className="block text-gradient">{t("aboutPage.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("aboutPage.description")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Four Decades Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("aboutPage.decadesTitle")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("aboutPage.decadesDesc1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              {t("aboutPage.decadesDesc2")}
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-card rounded-sm border border-border"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("aboutPage.offerTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm">{offering.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("aboutPage.statsTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-bold text-primary">{stat.value}</span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("aboutPage.ctaTitle")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("aboutPage.ctaDesc")}
            </p>
            <LocalizedLink 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              {t("aboutPage.ctaButton")}
            </LocalizedLink>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
