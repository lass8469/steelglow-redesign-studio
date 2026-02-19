import { ArrowRight, Calendar, Clock } from "lucide-react";
import LocalizedLink from "@/components/LocalizedLink";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/lib/blog-articles";
import { articlesDa } from "@/lib/blog-articles-da";
import { articleRelatedSlugs } from "@/lib/internal-links";

interface RelatedArticlesProps {
  currentSlug: string;
}

const RelatedArticles = ({ currentSlug }: RelatedArticlesProps) => {
  const { t, language } = useLanguage();
  const relatedSlugs = articleRelatedSlugs[currentSlug];
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  const articleSource = language === "da" ? articlesDa : articles;

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {t("relatedArticles.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedSlugs.slice(0, 3).map((slug) => {
              const article = articleSource[slug] || articles[slug];
              if (!article) return null;
              return (
                <LocalizedLink key={slug} to={`/blog/${slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden hover:border-primary/30">
                    <div className="aspect-video bg-accent/20 overflow-hidden">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="w-fit mb-2">
                        {article.category}
                      </Badge>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.date).toLocaleDateString(
                            language === "da" ? "da-DK" : "en-US",
                            { month: "short", day: "numeric" }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <ArrowRight className="h-3 w-3 ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
