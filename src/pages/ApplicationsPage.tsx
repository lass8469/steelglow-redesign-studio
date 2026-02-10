import { motion } from "framer-motion";
import { 
  Pill, Cpu, Apple, Truck, Car, Shield, 
  Beaker, Shirt, Cog, ArrowRight 
} from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import applicationsHeroBg from "@/assets/applications-hero.jpg";

const ApplicationsPage = () => {
  const { t } = useLanguage();

  const industries = [
    {
      icon: Pill,
      title: t("applicationsPage.pharmaceutical.title"),
      description: t("applicationsPage.pharmaceutical.desc"),
    },
    {
      icon: Cpu,
      title: t("applicationsPage.electronics.title"),
      description: t("applicationsPage.electronics.desc"),
    },
    {
      icon: Apple,
      title: t("applicationsPage.food.title"),
      description: t("applicationsPage.food.desc"),
    },
    {
      icon: Truck,
      title: t("applicationsPage.logistics.title"),
      description: t("applicationsPage.logistics.desc"),
    },
    {
      icon: Car,
      title: t("applicationsPage.automotive.title"),
      description: t("applicationsPage.automotive.desc"),
    },
    {
      icon: Shield,
      title: t("applicationsPage.defense.title"),
      description: t("applicationsPage.defense.desc"),
    },
    {
      icon: Beaker,
      title: t("applicationsPage.chemical.title"),
      description: t("applicationsPage.chemical.desc"),
    },
    {
      icon: Shirt,
      title: t("applicationsPage.textile.title"),
      description: t("applicationsPage.textile.desc"),
    },
    {
      icon: Cog,
      title: t("applicationsPage.metal.title"),
      description: t("applicationsPage.metal.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center justify-center w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${applicationsHeroBg})` }}
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
              {t("applicationsPage.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("applicationsPage.title1")}
              <span className="block text-gradient">{t("applicationsPage.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("applicationsPage.description")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Industries Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("applicationsPage.gridTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("applicationsPage.gridDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors group"
              >
                <industry.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
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
              {t("applicationsPage.ctaTitle")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("applicationsPage.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink 
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-sm hover:bg-secondary/80 transition-colors"
              >
                {t("applicationsPage.viewProducts")}
                <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
              <LocalizedLink 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                {t("applicationsPage.contactExperts")}
              </LocalizedLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationsPage;
