import { ArrowLeft, Package, Shield, Leaf, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useBreadcrumbJsonLd } from "@/hooks/useBreadcrumbJsonLd";
import productImage from "@/assets/dri-clay-kraft.webp.asset.json";

const content = {
  en: {
    title: "Dri Clay",
    highlight: " Desiccant",
    tagline: "MICRO-PAK® · Natural clay desiccant",
    badge: "Natural clay",
    description:
      "Dri Clay Desiccant is a natural, mineral-based moisture absorber from the MICRO-PAK® range. Made from purified montmorillonite clay, it protects consumer goods, electronics, textiles and packaged products from humidity damage during storage and shipping.",
    metaTitle: "Dri Clay Desiccant | MICRO-PAK® | Desiccant.com",
    metaDesc:
      "MICRO-PAK® Dri Clay Desiccant — natural montmorillonite clay moisture absorber for retail, electronics and packaged goods.",
    specs: [
      { label: "Active material", value: "Montmorillonite clay" },
      { label: "Absorption capacity", value: "Up to 30% of weight" },
      { label: "Operating temperature", value: "-10°C to +55°C" },
      { label: "Shelf life", value: "24 months (sealed)" },
      { label: "Compliance", value: "DMF, FDA, REACH" },
      { label: "Packaging", value: "100% FSC-certified Kraft paper, plastic-free" },
    ],
    sizes: [
      { weight: "1g", desc: "Small pharma & electronics packs" },
      { weight: "2g", desc: "Compact retail packaging" },
      { weight: "6g", desc: "Consumer goods & apparel" },
      { weight: "17g", desc: "Boxed retail products" },
      { weight: "33g", desc: "Medium cartons & cases" },
      { weight: "66g", desc: "Large shipping containers" },
    ],
    apps: [
      "Retail packaging",
      "Consumer electronics",
      "Apparel & footwear",
      "Leather goods",
      "Pharmaceuticals",
      "Boxed shipments",
    ],
    features: [
      { icon: Leaf, title: "Natural mineral" },
      { icon: Shield, title: "Non-toxic & safe" },
      { icon: Package, title: "Retail-ready sachets" },
    ],
    ctaTitle: "Protect your",
    ctaHighlight: " packaged goods",
    ctaDesc: "Request a sample or quote for MICRO-PAK® Dri Clay Desiccant.",
  },
  da: {
    title: "Dri Clay",
    highlight: " Desiccant",
    tagline: "MICRO-PAK® · Naturligt ler-tørremiddel",
    badge: "Naturligt ler",
    description:
      "Dri Clay Desiccant er et naturligt, mineralbaseret fugtabsorberende middel fra MICRO-PAK®-serien. Fremstillet af renset montmorillonit-ler, beskytter det forbrugsvarer, elektronik, tekstiler og emballerede produkter mod fugtskader under opbevaring og forsendelse.",
    metaTitle: "Dri Clay Desiccant | MICRO-PAK® | Desiccant.com",
    metaDesc:
      "MICRO-PAK® Dri Clay Desiccant — naturligt montmorillonit-ler fugtabsorbering til detail, elektronik og emballerede varer.",
    specs: [
      { label: "Aktivt materiale", value: "Montmorillonit-ler" },
      { label: "Absorptionskapacitet", value: "Op til 30% af vægten" },
      { label: "Driftstemperatur", value: "-10°C til +55°C" },
      { label: "Holdbarhed", value: "24 måneder (forseglet)" },
      { label: "Overholdelse", value: "DMF, FDA, REACH" },
      { label: "Emballage", value: "100% FSC-certificeret Kraft paper, plastik-frit" },
    ],
    sizes: [
      { weight: "1g", desc: "Små pharma- & elektronikpakker" },
      { weight: "2g", desc: "Kompakt detailemballage" },
      { weight: "6g", desc: "Forbrugsvarer & beklædning" },
      { weight: "17g", desc: "Detailprodukter i æsker" },
      { weight: "33g", desc: "Medium kartoner & kasser" },
      { weight: "66g", desc: "Store forsendelsescontainere" },
    ],
    apps: [
      "Detailemballage",
      "Forbrugerelektronik",
      "Beklædning & fodtøj",
      "Lædervarer",
      "Farmaceutika",
      "Forsendelser i æsker",
    ],
    features: [
      { icon: Leaf, title: "Naturligt mineral" },
      { icon: Shield, title: "Ikke-toksisk & sikker" },
      { icon: Package, title: "Detail-klare poser" },
    ],
    ctaTitle: "Beskyt dine",
    ctaHighlight: " emballerede varer",
    ctaDesc: "Anmod om en prøve eller tilbud på MICRO-PAK® Dri Clay Desiccant.",
  },
} as const;

const DriClayProduct = () => {
  const { language, t } = useLanguage();
  const c = content[language === "da" ? "da" : "en"];
  usePageMeta(c.metaTitle, c.metaDesc, { ogImage: productImage.url });
  useBreadcrumbJsonLd([
    { name: t("productPage.home"), path: `/${language}` },
    { name: t("productPage.products"), path: `/${language}/products` },
    { name: "Dri Clay Desiccant", path: `/${language}/dri-clay` },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <LocalizedLink to="/" className="hover:text-primary transition-colors">{t("productPage.home")}</LocalizedLink>
          <ChevronRight className="h-4 w-4" />
          <LocalizedLink to="/products" className="hover:text-primary transition-colors">{t("productPage.products")}</LocalizedLink>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Dri Clay Desiccant</span>
        </nav>
      </div>

      <MoistureBackground variant="large" className="bg-background">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative group">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted/80 via-muted/40 to-accent/30">
                  <img src={productImage.url} alt="MICRO-PAK Dri Clay Desiccant" loading="lazy" width={600} height={600} className="w-full h-full object-contain p-8" />
                  <div className="absolute bottom-6 left-6 z-30">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full">{c.badge}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">{c.tagline}</span>
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">{c.title}<span className="text-gradient">{c.highlight}</span></h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {c.features.map((f) => (
                    <div key={f.title} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <f.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-sm text-foreground">{f.title}</h3>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-orange" asChild>
                    <a href="mailto:contact@dry-bag.com">{t("productPage.requestQuote")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MoistureBackground>

      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-card border border-border h-12">
              <TabsTrigger value="specifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.specifications")}</TabsTrigger>
              <TabsTrigger value="sizes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.sizes")}</TabsTrigger>
              <TabsTrigger value="applications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.applications")}</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="mt-8">
              <Card className="bg-card/50 border-border"><CardContent className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {c.specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center py-3 px-4 rounded-lg bg-background/50 border border-border/50">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-semibold text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent></Card>
            </TabsContent>
            <TabsContent value="sizes" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {c.sizes.map((s) => (
                  <Card key={s.weight} className="bg-card/50 border-border">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-3xl font-black text-foreground mb-2">{s.weight}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="applications" className="mt-8">
              <Card className="bg-card/50 border-border"><CardContent className="p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {c.apps.map((a) => (
                    <div key={a} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-background/50 border border-border/50">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{c.ctaTitle}<span className="text-gradient">{c.ctaHighlight}</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{c.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8" asChild>
                <a href="mailto:contact@dry-bag.com">{t("productPage.contactSales")}</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" asChild>
                <LocalizedLink to="/products"><ArrowLeft className="mr-2 h-5 w-5" />{t("productPage.viewAllProducts")}</LocalizedLink>
              </Button>
            </div>
          </div>
        </section>
      </MoistureBackground>
      <Footer />
    </div>
  );
};

export default DriClayProduct;
