import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalizedLink from "./LocalizedLink";
import MoistureBackground from "./MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import productDunnageBag from "@/assets/product-dunnage-bag.webp";
import productDrybagI from "@/assets/product-drybag-i.jpg";
import productSilicaGel from "@/assets/product-silica-gel.webp";
import productDrybagIII from "@/assets/product-drybag-iii.webp";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      image: productDunnageBag,
      title: t("products.dunnage"),
      subtitle: t("products.dunnageBag.subtitle"),
      description: t("products.dunnageBag.desc"),
      link: "/dunnage-bag",
    },
    {
      image: productDrybagI,
      title: t("products.drybagI"),
      subtitle: t("products.drybagI.subtitle"),
      description: t("products.drybagI.desc"),
      link: "/drybag-i",
    },
    {
      image: productSilicaGel,
      title: t("products.silica"),
      subtitle: t("products.silicaGel.subtitle"),
      description: t("products.silicaGel.desc"),
      link: "/silica",
    },
    {
      image: productDrybagIII,
      title: t("products.drybagIII"),
      subtitle: t("products.drybagIII.subtitle"),
      description: t("products.drybagIII.desc"),
      link: "/drybag-iii",
    },
  ];

  return (
    <MoistureBackground variant="large" className="bg-background">
      <section id="products" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t("products.badge")}
            </span>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
              {t("products.title1")}
              <span className="text-gradient"> {t("products.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("products.description")}
            </p>
          </div>

          {/* Products grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <LocalizedLink
                key={product.title}
                to={product.link}
                className="product-card group bg-card border border-border rounded-xl overflow-hidden block hover:border-primary/50 transition-colors"
              >
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
                  <span className="inline-flex items-center text-primary text-sm font-medium group/btn">
                    {t("products.learnMore")}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </div>
              </LocalizedLink>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              asChild
            >
              <LocalizedLink to="/products">
                {t("products.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </LocalizedLink>
            </Button>
          </div>
        </div>
      </section>
    </MoistureBackground>
  );
};

export default Products;
