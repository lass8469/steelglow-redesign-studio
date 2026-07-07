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
import productImageAsset from "@/assets/mpcd-eco-1kg-folded.webp.asset.json";
const productImage = productImageAsset.url;

const content = {
  en: {
    title: "MPCD",
    highlight: " Eco",
    tagline: "MICRO-PAK® · Sustainable container desiccant",
    badge: "Sustainable",
    description:
      "MPCD Eco is the sustainable container desiccant from MICRO-PAK®. Formulated with calcium chloride and a plant-based gel, it delivers high-capacity moisture control for ocean containers with recyclable packaging and reduced environmental footprint.",
    metaTitle: "MPCD Eco Container Desiccant | MICRO-PAK® | Desiccant.com",
    metaDesc:
      "MICRO-PAK® MPCD Eco — sustainable calcium chloride container desiccant for ocean freight with recyclable packaging.",
    specs: [
      { label: "Active material", value: "Calcium chloride + plant-based gel" },
      { label: "Absorption capacity", value: "Up to 300% of weight" },
      { label: "Protection duration", value: "Up to 90 days" },
      { label: "Operating temperature", value: "5°C to 90°C" },
      { label: "Packaging", value: "Recyclable outer film" },
      { label: "Format", value: "Hanging strip / pole" },
    ],
    sizes: [
      { weight: "500g", desc: "20ft container support units" },
      { weight: "1kg", desc: "Standard 20ft / 40ft loads", popular: true },
      { weight: "2kg", desc: "High-humidity long-haul routes" },
    ],
    apps: [
      "Ocean freight containers",
      "Long-haul shipping",
      "Sensitive electronics",
      "Food & agriculture cargo",
      "Automotive parts",
      "Sustainability-focused supply chains",
    ],
    features: [
      { icon: Leaf, title: "Plant-based gel" },
      { icon: Shield, title: "300% absorption" },
      { icon: Package, title: "Recyclable packaging" },
    ],
    ctaTitle: "Sustainable protection for",
    ctaHighlight: " ocean containers",
    ctaDesc: "Request a sample or quote for MICRO-PAK® MPCD Eco.",
  },
  da: {
    title: "MPCD",
    highlight: " Eco",
    tagline: "MICRO-PAK® · Bæredygtigt container-tørremiddel",
    badge: "Bæredygtig",
    description:
      "MPCD Eco er det bæredygtige container-tørremiddel fra MICRO-PAK®. Formuleret med calciumchlorid og en plantebaseret gel, leverer det højkapacitets fugtkontrol til søcontainere med genanvendelig emballage og reduceret miljøaftryk.",
    metaTitle: "MPCD Eco Container-tørremiddel | MICRO-PAK® | Desiccant.com",
    metaDesc:
      "MICRO-PAK® MPCD Eco — bæredygtigt calciumchlorid-tørremiddel til søfragt med genanvendelig emballage.",
    specs: [
      { label: "Aktivt materiale", value: "Calciumchlorid + plantebaseret gel" },
      { label: "Absorptionskapacitet", value: "Op til 300% af vægten" },
      { label: "Beskyttelsesvarighed", value: "Op til 90 dage" },
      { label: "Driftstemperatur", value: "5°C til 90°C" },
      { label: "Emballage", value: "Genanvendelig yderfilm" },
      { label: "Format", value: "Hængestrip / stang" },
    ],
    sizes: [
      { weight: "500g", desc: "20ft container støtte-enheder" },
      { weight: "1kg", desc: "Standard 20ft / 40ft laster", popular: true },
      { weight: "2kg", desc: "Højfugts langdistanceruter" },
    ],
    apps: [
      "Søfragt-containere",
      "Langdistanceforsendelse",
      "Følsom elektronik",
      "Fødevarer & landbrugslast",
      "Bilreservedele",
      "Bæredygtige forsyningskæder",
    ],
    features: [
      { icon: Leaf, title: "Plantebaseret gel" },
      { icon: Shield, title: "300% absorption" },
      { icon: Package, title: "Genanvendelig emballage" },
    ],
    ctaTitle: "Bæredygtig beskyttelse til",
    ctaHighlight: " søcontainere",
    ctaDesc: "Anmod om en prøve eller tilbud på MICRO-PAK® MPCD Eco.",
  },
} as const;

const MpcdEcoProduct = () => {
  const { language, t } = useLanguage();
  const c = content[language === "da" ? "da" : "en"];
  usePageMeta(c.metaTitle, c.metaDesc, { ogImage: productImage });
  useBreadcrumbJsonLd([
    { name: t("productPage.home"), path: `/${language}` },
    { name: t("productPage.products"), path: `/${language}/products` },
    { name: "MPCD Eco", path: `/${language}/mpcd-eco` },
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
          <span className="text-foreground">MPCD Eco</span>
        </nav>
      </div>

      <MoistureBackground variant="large" className="bg-background">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative group">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted/80 via-muted/40 to-accent/30">
                  <img src={productImage} alt="MICRO-PAK MPCD Eco container desiccant" loading="lazy" width={600} height={600} className="w-full h-full object-contain p-8" />
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {c.sizes.map((s) => (
                  <Card key={s.weight} className={`bg-card/50 border-border ${("popular" in s && s.popular) ? "ring-2 ring-primary/50" : ""}`}>
                    <CardContent className="p-6 text-center relative">
                      {"popular" in s && s.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">{t("productPage.mostPopular")}</span>
                      )}
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

export default MpcdEcoProduct;
