import { motion } from "framer-motion";
import { Download, FileText, Shield, Send, Award } from "lucide-react";
import { useState } from "react";
import downloadsHero from "@/assets/downloads-hero.webp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import { useFieldValidation } from "@/hooks/useFieldValidation";

const DownloadsPage = () => {
  const { t, language } = useLanguage();
  usePageMeta(t("meta.downloads.title"), t("meta.downloads.description"), { ogImage: "/og-downloads.jpg" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    document: "",
  });
  const { onBlur, cls, reset } = useFieldValidation();

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const documentOptions = [
    { value: "dry-bag-i-tds", label: "DRY-BAG I Technical Data Sheet" },
    { value: "dry-bag-i-sds", label: "DRY-BAG I Safety Data Sheet" },
    { value: "dry-bag-iii-tds", label: "DRY-BAG III Technical Data Sheet" },
    { value: "dry-bag-iii-sds", label: "DRY-BAG III Safety Data Sheet" },
    { value: "silica-gel-tds", label: "Silica Gel Technical Data Sheet" },
    { value: "silica-gel-sds", label: "Silica Gel Safety Data Sheet" },
    { value: "calcium-chloride-tds", label: "Calcium Chloride Technical Data Sheet" },
    { value: "calcium-chloride-sds", label: "Calcium Chloride Safety Data Sheet" },
    { value: "molecular-sieve-tds", label: "Molecular Sieve Technical Data Sheet" },
    { value: "molecular-sieve-sds", label: "Molecular Sieve Safety Data Sheet" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.document) return;
    setIsSubmitting(true);
    const selectedDoc = documentOptions.find(d => d.value === formData.document);
    try {
      await submitWeb3Form({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `Document request: ${selectedDoc?.label || formData.document}`,
        subject: `Document Request: ${selectedDoc?.label || formData.document}`,
      });
      toast({
        title: t("downloadsPage.form.success"),
        description: t("downloadsPage.form.successDesc"),
      });
      setFormData({ name: "", email: "", company: "", document: "" });
      reset();
    } catch {
      toast({
        title: t("contact.toast.error"),
        description: t("contact.toast.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${downloadsHero})` }}
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

      {/* Request Form + Public Downloads */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Document Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Send className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{t("downloadsPage.requestTitle")}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{t("downloadsPage.requestDesc")}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="doc-select" className="block text-sm font-medium text-foreground mb-2">
                    {t("downloadsPage.selectDocument")}
                  </label>
                  <Select
                    value={formData.document}
                    onValueChange={(value) => setFormData({ ...formData, document: value })}
                  >
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue placeholder={t("downloadsPage.selectDocument")} />
                    </SelectTrigger>
                    <SelectContent>
                      {documentOptions.map((doc) => (
                        <SelectItem key={doc.value} value={doc.value}>{doc.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="dl-name" className="block text-sm font-medium text-foreground mb-2">
                    {t("downloadsPage.form.name")}
                  </label>
                  <Input
                    id="dl-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={() => onBlur("name")}
                    placeholder={t("downloadsPage.form.namePlaceholder")}
                    required
                    className={`bg-card border-border ${cls("name", formData.name.trim().length > 0)}`}
                  />
                </div>
                <div>
                  <label htmlFor="dl-email" className="block text-sm font-medium text-foreground mb-2">
                    {t("downloadsPage.form.email")}
                  </label>
                  <Input
                    id="dl-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onBlur={() => onBlur("email")}
                    placeholder={t("downloadsPage.form.emailPlaceholder")}
                    required
                    className={`bg-card border-border ${cls("email", isValidEmail(formData.email))}`}
                  />
                </div>
                <div>
                  <label htmlFor="dl-company" className="block text-sm font-medium text-foreground mb-2">
                    {t("downloadsPage.form.company")}
                  </label>
                  <Input
                    id="dl-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.document}
                  className="w-full"
                >
                  {isSubmitting ? t("downloadsPage.form.sending") : t("downloadsPage.form.submit")}
                </Button>
              </form>
            </motion.div>

            {/* Public Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{t("downloadsPage.publicTitle")}</h2>
              </div>

              {/* CSR Report */}
              <div className="p-6 bg-card rounded-sm border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t("downloadsPage.csrTitle")}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t("downloadsPage.csrDesc")}
                </p>
                <a
                  href={`/downloads/${language}/dry-bag-csr.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  {t("downloadsPage.csrButton")}
                </a>
              </div>

              {/* Veterinary Certificate */}
              <div className="p-6 bg-card rounded-sm border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t("downloadsPage.vetTitle")}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {t("downloadsPage.vetDesc")}
                </p>
                <a
                  href={`/downloads/${language}/danish-veterinary-certificate.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  {t("downloadsPage.vetButton")}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadsPage;
