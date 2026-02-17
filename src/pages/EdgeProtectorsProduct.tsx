import { ArrowLeft, Package, Shield, Leaf, Check, ChevronRight } from "lucide-react";
import SpecSheetDialog from "@/components/SpecSheetDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import productEdgeProtectors from "@/assets/product-edge-protectors.webp";

const EdgeProtectorsProduct = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.edge.title"), t("meta.edge.description"));
  const specifications = [
    { label: t("edge.spec.material"), value: t("edge.spec.materialValue") },
    { label: t("edge.spec.thickness"), value: t("edge.spec.thicknessValue") },
    { label: t("edge.spec.lengths"), value: t("edge.spec.lengthsValue") },
    { label: t("edge.spec.leg"), value: t("edge.spec.legValue") },
    { label: t("edge.spec.load"), value: t("edge.spec.loadValue") },
    { label: t("edge.spec.cert"), value: t("edge.spec.certValue") },
  ];
  const sizes = [
    { weight: t("productPage.custom"), description: t("edge.size1.desc"), popular: false },
  ];
  const features = [
    { icon: Shield, title: t("edge.feature1.title") },
    { icon: Leaf, title: t("edge.feature2.title") },
    { icon: Package, title: t("edge.feature3.title") },
  ];
  const applications = [t("edge.app1"),t("edge.app2"),t("edge.app3"),t("edge.app4"),t("edge.app5"),t("edge.app6")];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4"><nav className="flex items-center space-x-2 text-sm text-muted-foreground"><LocalizedLink to="/" className="hover:text-primary transition-colors">{t("productPage.home")}</LocalizedLink><ChevronRight className="h-4 w-4"/><LocalizedLink to="/products" className="hover:text-primary transition-colors">{t("productPage.products")}</LocalizedLink><ChevronRight className="h-4 w-4"/><span className="text-foreground">{t("edge.title")}</span></nav></div>
      <MoistureBackground variant="large" className="bg-background"><section className="py-12 lg:py-20"><div className="container mx-auto px-4 lg:px-8"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative group"><div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/><div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted/80 via-muted/40 to-accent/30"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.08),transparent_50%)]"/><img src={productEdgeProtectors} alt="Edge Protectors for Cargo" loading="lazy" className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105 relative z-10"/><div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent z-20"/><div className="absolute bottom-6 left-6 z-30"><span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full">{t("edge.badge")}</span></div></div></div>
        <div className="space-y-6"><div><span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">{t("edge.tagline")}</span><h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">{t("edge.title")}<span className="text-gradient">{t("edge.titleHighlight")}</span></h1><p className="text-lg text-muted-foreground leading-relaxed">{t("edge.description")}</p></div>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">{features.map((f)=>(<div key={f.title} className="text-center p-4 rounded-lg bg-card/50 border border-border/50"><f.icon className="h-8 w-8 text-primary mx-auto mb-2"/><h3 className="font-semibold text-sm text-foreground">{f.title}</h3></div>))}</div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6"><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-orange">{t("productPage.requestQuote")}</Button><SpecSheetDialog productKey="edge-protectors" productName="Edge Protectors" /></div>
        </div>
      </div></div></section></MoistureBackground>
      <section className="py-16 lg:py-24 bg-card/30"><div className="container mx-auto px-4 lg:px-8"><Tabs defaultValue="specifications" className="w-full">
        <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-card border border-border h-12"><TabsTrigger value="specifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.specifications")}</TabsTrigger><TabsTrigger value="sizes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.sizes")}</TabsTrigger><TabsTrigger value="applications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">{t("productPage.applications")}</TabsTrigger></TabsList>
        <TabsContent value="specifications" className="mt-8"><Card className="bg-card/50 border-border"><CardContent className="p-6 lg:p-8"><div className="grid md:grid-cols-2 gap-4">{specifications.map((s)=>(<div key={s.label} className="flex justify-between items-center py-3 px-4 rounded-lg bg-background/50 border border-border/50"><span className="text-muted-foreground">{s.label}</span><span className="font-semibold text-foreground">{s.value}</span></div>))}</div></CardContent></Card></TabsContent>
        <TabsContent value="sizes" className="mt-8"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{sizes.map((s)=>(<Card key={s.weight} className={`bg-card/50 border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${s.popular?"ring-2 ring-primary/50":""}`}><CardContent className="p-6 text-center relative">{s.popular&&(<span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">{t("productPage.mostPopular")}</span>)}<h3 className="text-3xl font-black text-foreground mb-2">{s.weight}</h3><p className="text-sm text-muted-foreground">{s.description}</p></CardContent></Card>))}</div></TabsContent>
        <TabsContent value="applications" className="mt-8"><Card className="bg-card/50 border-border"><CardContent className="p-6 lg:p-8"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{applications.map((a)=>(<div key={a} className="flex items-center gap-3 py-3 px-4 rounded-lg bg-background/50 border border-border/50"><Check className="h-5 w-5 text-primary flex-shrink-0"/><span className="text-foreground">{a}</span></div>))}</div></CardContent></Card></TabsContent>
      </Tabs></div></section>
      <MoistureBackground className="bg-background"><section className="py-16 lg:py-24"><div className="container mx-auto px-4 lg:px-8 text-center"><h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">{t("edge.ctaTitle1")}<span className="text-gradient">{t("edge.ctaTitle2")}</span></h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("edge.ctaDesc")}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">{t("productPage.contactSales")}</Button><Button size="lg" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" asChild><LocalizedLink to="/products"><ArrowLeft className="mr-2 h-5 w-5"/>{t("productPage.viewAllProducts")}</LocalizedLink></Button></div></div></section></MoistureBackground>
      <Footer />
    </div>
  );
};

export default EdgeProtectorsProduct;
