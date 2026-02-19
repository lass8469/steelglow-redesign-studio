import { ArrowRight, BookOpen } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { productLinks } from "@/lib/internal-links";
import { articles } from "@/lib/blog-articles";
import { articlesDa } from "@/lib/blog-articles-da";

interface RelatedProductsProps {
  productKey: string;
}

const RelatedProducts = ({ productKey }: RelatedProductsProps) => {
  const { t, language } = useLanguage();
  const config = productLinks[productKey];
  if (!config) return null;

  const articleSource = language === "da" ? articlesDa : articles;

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
          {t("relatedProducts.title")}
        </h2>

        {/* Related Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {config.relatedProducts.map((product) => (
            <LocalizedLink
              key={product.path}
              to={product.path}
              className="group p-6 bg-card rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {t(product.labelKey)}
              </h3>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                {t("relatedProducts.viewProduct")}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </LocalizedLink>
          ))}
        </div>

        {/* Related Articles */}
        {config.relatedArticles.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {t("relatedProducts.relatedReading")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {config.relatedArticles.map((article) => {
                const articleData = articleSource[article.slug] || articles[article.slug];
                return (
                  <LocalizedLink
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="group flex items-start gap-4 p-5 bg-card rounded-sm border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm line-clamp-2">
                        {articleData?.title || t(article.labelKey)}
                      </h4>
                      <span className="text-xs text-muted-foreground mt-1 inline-block">
                        {articleData?.readTime}
                      </span>
                    </div>
                  </LocalizedLink>
                );
              })}
            </div>
          </>
        )}

        {/* Applications Link */}
        <div className="text-center mt-10">
          <LocalizedLink
            to="/applications"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t("relatedProducts.exploreApplications")}
            <ArrowRight className="w-4 h-4" />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
