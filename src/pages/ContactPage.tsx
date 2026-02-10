import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import contactHeroBg from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productEnquiry, setProductEnquiry] = useState(false);

  const productOptions = [
    { value: "drybag-i", label: t("products.drybagI") },
    { value: "drybag-iii", label: t("products.drybagIII") },
    { value: "silica-gel", label: t("products.silica") },
    { value: "molecular-sieve", label: t("products.molecular") },
    { value: "calcium-chloride", label: t("products.calcium") },
    { value: "dunnage-bags", label: t("products.dunnage") },
    { value: "edge-protectors", label: t("products.edge") },
    { value: "anti-slip", label: t("products.antiSlip") },
    { value: "stabustrap", label: t("products.stabustrap") },
    { value: "retail", label: t("products.retail") },
    { value: "datalogger", label: t("products.datalogger") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t("contactPage.messageSent"),
      description: t("contactPage.messageConfirm"),
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contactPage.email"),
      value: "contact@dry-bag.com",
      href: "mailto:contact@dry-bag.com"
    },
    {
      icon: Phone,
      label: t("contactPage.phone"),
      value: "+45 86 19 05 00",
      href: "tel:+4586190500"
    },
    {
      icon: MapPin,
      label: t("contactPage.address"),
      value: "Odinsvej 21, 8722 Hedensted, Denmark",
      href: null
    },
    {
      icon: Clock,
      label: t("contactPage.hours"),
      value: t("contactPage.hoursValue"),
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center justify-center w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
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
              {t("contactPage.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("contactPage.title1")}
              <span className="block text-gradient">{t("contactPage.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("contactPage.description")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t("contactPage.formTitle")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t("contactPage.form.name")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("contactPage.form.namePlaceholder")}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t("contactPage.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("contactPage.form.emailPlaceholder")}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contactPage.form.messagePlaceholder")}
                    required
                    rows={5}
                    className="bg-card border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? t("contactPage.form.sending") : t("contact.form.submit")}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t("contactPage.alternativeTitle")}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">{t("contactPage.followUs")}</h3>
                <a 
                  href="https://www.linkedin.com/company/dry-bag-denmark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="mt-8 p-6 bg-card rounded-sm border border-border">
                <h3 className="font-semibold text-foreground mb-2">CVR</h3>
                <p className="text-muted-foreground">49159811</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("contactPage.distributorTitle")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("contactPage.distributorDesc")}
            </p>
            <a 
              href="mailto:contact@dry-bag.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              {t("aboutPage.ctaButton")}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
