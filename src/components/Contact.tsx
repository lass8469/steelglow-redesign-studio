import { useState } from "react";
import { Send, MapPin, Mail, MessageCircle, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MoistureBackground from "./MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { productSizes } from "@/lib/product-sizes";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    product: "",
    size: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const benefits = [
    t("contact.benefit1"),
    t("contact.benefit2"),
    t("contact.benefit3"),
    t("contact.benefit4"),
  ];

  return (
    <MoistureBackground variant="large" className="bg-background">
      <section id="contact" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left column */}
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                {t("contact.badge")}
              </span>
              
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
                {t("contact.title1")}
                <span className="text-gradient"> {t("contact.title2")}</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                {t("contact.description")}
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-10">
                <h3 className="text-lg font-semibold text-foreground">{t("contact.whyPartner")}</h3>
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>{t("contact.headquarters")}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>dry-bag@desiccant.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span>{t("contact.whatsapp")}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.fullName")}
                    </label>
                    <Input
                      type="text"
                      placeholder={t("contact.form.placeholder.name")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("contact.form.placeholder.email")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.company")}
                  </label>
                  <Input
                    type="text"
                    placeholder={t("contact.form.placeholder.company")}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="product-enquiry-home"
                    checked={productEnquiry}
                    onCheckedChange={(checked) => {
                      setProductEnquiry(!!checked);
                      if (!checked) setFormData({ ...formData, product: "", size: "" });
                    }}
                  />
                  <label htmlFor="product-enquiry-home" className="text-sm font-medium text-foreground cursor-pointer">
                    {t("contact.form.productEnquiry")}
                  </label>
                </div>

                {productEnquiry && (
                  <div>
                    <Select
                      value={formData.product}
                      onValueChange={(value) => setFormData({ ...formData, product: value, size: "" })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder={t("contact.form.selectProduct")} />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((p) => (
                          <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {productEnquiry && formData.product && productSizes[formData.product] && productSizes[formData.product].length > 1 && (
                  <div>
                    <Select
                      value={formData.size}
                      onValueChange={(value) => setFormData({ ...formData, size: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder={t("contact.form.selectSize")} />
                      </SelectTrigger>
                      <SelectContent>
                        {productSizes[formData.product].map((size) => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    placeholder={t("contact.form.placeholder.message")}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14"
                >
                  {t("contact.form.submit")}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MoistureBackground>
  );
};

export default Contact;
