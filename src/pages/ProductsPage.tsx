import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import productDrybagI from "@/assets/product-drybag-i.webp";
import productDrybagIII from "@/assets/product-drybag-iii.webp";
import productSilicaGel from "@/assets/product-silica-gel.webp";
import productMolecularSieve from "@/assets/product-molecular-sieve.webp";
import productCalciumChloride from "@/assets/product-calcium-chloride.webp";
import productDunnageBag from "@/assets/product-dunnage-bag.webp";
import productEdgeProtectors from "@/assets/product-edge-protectors.webp";
import productAntislip from "@/assets/product-antislip.webp";
import productStabustrap from "@/assets/product-stabustrap.webp";
import productRetail from "@/assets/product-retail.webp";
import productDatalogger from "@/assets/product-datalogger.webp";

const ProductsPage = () => {
  const { t } = useLanguage();

  const desiccantProducts = [
    {
      image: productDrybagI,
      title: "DRY-BAG I",
      subtitle: t("productsPage.drybagI.subtitle"),
      description: t("productsPage.drybagI.desc"),
      link: "/drybag-i",
    },
    {
      image: productDrybagIII,
      title: "DRY-BAG III",
      subtitle: t("productsPage.drybagIII.subtitle"),
      description: t("productsPage.drybagIII.desc"),
      link: "/drybag-iii",
    },
    {
      image: productSilicaGel,
      title: "Silica Gel",
      subtitle: t("productsPage.silica.subtitle"),
      description: t("productsPage.silica.desc"),
      link: "/silica",
    },
    {
      image: productMolecularSieve,
      title: t("products.molecular"),
      subtitle: t("productsPage.molecular.subtitle"),
      description: t("productsPage.molecular.desc"),
      link: "/molecular-sieve",
    },
    {
      image: productCalciumChloride,
      title: t("products.calcium"),
      subtitle: t("productsPage.calcium.subtitle"),
      description: t("productsPage.calcium.desc"),
      link: "/calcium-chloride",
    },
  ];

  const cargoProducts = [
    {
      image: productDunnageBag,
      title: "Dunnage Bag",
      subtitle: t("productsPage.dunnage.subtitle"),
      description: t("productsPage.dunnage.desc"),
      link: "/dunnage-bag",
    },
    {
      image: productEdgeProtectors,
      title: t("products.edge"),
      subtitle: t("productsPage.edge.subtitle"),
      description: t("productsPage.edge.desc"),
      link: "/edge-protectors",
    },
    {
      image: productAntislip,
      title: t("products.antiSlip"),
      subtitle: t("productsPage.antiSlip.subtitle"),
      description: t("productsPage.antiSlip.desc"),
      link: "/anti-slip",
    },
    {
      image: productStabustrap,
      title: "Stabustrap",
      subtitle: t("productsPage.stabustrap.subtitle"),
      description: t("productsPage.stabustrap.desc"),
      link: "/stabustrap",
    },
  ];

  const otherProducts = [
    {
      image: productRetail,
      title: t("products.retail"),
      subtitle: t("productsPage.retail.subtitle"),
      description: t("productsPage.retail.desc"),
      link: "/retail",
    },
    {
      image: productDatalogger,
      title: "Datalogger",
      subtitle: t("productsPage.datalogger.subtitle"),
      description: t("productsPage.datalogger.desc"),
      link: "/datalogger",
    },
  ];

  const ProductCard = ({ product }: { product: typeof desiccantProducts[0] }) => (
    <div className="product-card group bg-card border border-border rounded-xl overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {product.subtitle}
        </span>
        <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary hover:bg-primary/10 -ml-3 group/btn"
          asChild
        >
          <LocalizedLink to={product.link}>
            {t("productsPage.learnMore")}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </LocalizedLink>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <LocalizedLink to="/" className="hover:text-primary transition-colors">{t("productsPage.breadcrumbHome")}</LocalizedLink>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{t("productsPage.breadcrumbProducts")}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <MoistureBackground variant="large" className="bg-background">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                {t("productsPage.badge")}
              </span>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                {t("productsPage.title1")} 
                <span className="text-gradient"> {t("productsPage.title2")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("productsPage.description")}
              </p>
            </div>
          </div>
        </section>
      </MoistureBackground>

      {/* Desiccants Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t("productsPage.desiccantsBadge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              {t("productsPage.desiccantsTitle")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              {t("productsPage.desiccantsDesc")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {desiccantProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Protection Section */}
      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                {t("productsPage.cargoBadge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
                {t("productsPage.cargoTitle")}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {t("productsPage.cargoDesc")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cargoProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </div>
        </section>
      </MoistureBackground>

      {/* Other Products Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t("productsPage.otherBadge")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              {t("productsPage.otherTitle")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              {t("productsPage.otherDesc")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
              {t("productsPage.ctaTitle1")}
              <span className="text-gradient"> {t("productsPage.ctaTitle2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("productsPage.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                asChild
              >
                <LocalizedLink to="/contact">
                  {t("productsPage.contactSales")}
                </LocalizedLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent"
                asChild
              >
                <LocalizedLink to="/applications">
                  {t("productsPage.viewApplications")}
                </LocalizedLink>
              </Button>
            </div>
          </div>
        </section>
      </MoistureBackground>

      <Footer />
    </div>
  );
};

export default ProductsPage;
