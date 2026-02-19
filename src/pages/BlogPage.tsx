import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Calendar, Clock, ArrowRight, BookOpen, Beaker, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";
import { articles } from "@/lib/blog-articles";

const BlogPage = () => {
  const { t, language } = useLanguage();
  usePageMeta(t("meta.blog.title"), t("meta.blog.description"), { ogImage: "/og-blog.jpg" });

  const blogPosts = [
    {
      slug: "anti-slip-sheets-pallet-load-stability",
      titleKey: "blogPage.post11.title",
      excerptKey: "blogPage.post11.excerpt",
      date: "2025-02-24",
      readTime: "10",
      category: "Guide",
    },
    {
      slug: "data-logger-verification-guide",
      titleKey: "blogPage.post10.title",
      excerptKey: "blogPage.post10.excerpt",
      date: "2025-02-23",
      readTime: "12",
      category: "Guide",
    },
    {
      slug: "dunnage-bags-container-loading-guide",
      titleKey: "blogPage.post9.title",
      excerptKey: "blogPage.post9.excerpt",
      date: "2025-02-22",
      readTime: "11",
      category: "Guide",
    },
    {
      slug: "drybag-i-clay-desiccant-guide",
      titleKey: "blogPage.post8.title",
      excerptKey: "blogPage.post8.excerpt",
      date: "2025-02-21",
      readTime: "12",
      category: "Guide",
    },
    {
      slug: "silica-gel-desiccant-guide",
      titleKey: "blogPage.post7.title",
      excerptKey: "blogPage.post7.excerpt",
      date: "2025-02-20",
      readTime: "10",
      category: "Guide",
    },
    {
      slug: "mold-growth-timelines-80-rh",
      titleKey: "blogPage.post6.title",
      excerptKey: "blogPage.post6.excerpt",
      date: "2025-02-18",
      readTime: "18",
      category: "Technical",
    },
    {
      slug: "agriculture-feed-moisture-living-cargo",
      titleKey: "blogPage.post5.title",
      excerptKey: "blogPage.post5.excerpt",
      date: "2025-02-15",
      readTime: "15",
      category: "Technical",
    },
    {
      slug: "data-loggers-vs-desiccants",
      titleKey: "blogPage.post4.title",
      excerptKey: "blogPage.post4.excerpt",
      date: "2025-02-13",
      readTime: "12",
      category: "Technical",
    },
    {
      slug: "chemistry-clay-mo-clay-vs-silica-gel",
      titleKey: "blogPage.post3.title",
      excerptKey: "blogPage.post3.excerpt",
      date: "2025-02-10",
      readTime: "10",
      category: "Technical",
    },
    {
      slug: "container-rain-dew-point-physics",
      titleKey: "blogPage.post2.title",
      excerptKey: "blogPage.post2.excerpt",
      date: "2025-02-10",
      readTime: "8",
      category: "Technical",
    },
    {
      slug: "vapor-pressure-wooden-pallets",
      titleKey: "blogPage.post1.title",
      excerptKey: "blogPage.post1.excerpt",
      date: "2025-02-10",
      readTime: "7",
      category: "Technical",
    },
  ];

  const features = [
    {
      icon: Beaker,
      title: t("blogPage.feature1.title"),
      description: t("blogPage.feature1.desc"),
    },
    {
      icon: Shield,
      title: t("blogPage.feature2.title"),
      description: t("blogPage.feature2.desc"),
    },
    {
      icon: TrendingUp,
      title: t("blogPage.feature3.title"),
      description: t("blogPage.feature3.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("blogPage.badge")}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              {t("blogPage.title1")} <span className="text-gradient">{t("blogPage.title2")}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("blogPage.description")}
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-accent/50">{t("blogPage.tag1")}</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">{t("blogPage.tag2")}</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">{t("blogPage.tag3")}</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">{t("blogPage.tag4")}</span>
            </div>
          </div>
        </div>
      </MoistureBackground>

      {/* Features Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{t("blogPage.latestArticles")}</h2>
              <p className="text-muted-foreground">{t("blogPage.latestDesc")}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <LocalizedLink key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden hover:border-primary/30">
                  <div className="aspect-video bg-accent/20 overflow-hidden">
                    <img 
                      src={articles[post.slug]?.heroImage || "/placeholder.svg"} 
                      alt={t(post.titleKey)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {t(`blogPage.category.${post.category.toLowerCase()}`)}
                    </Badge>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t(post.titleKey)}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {t(post.excerptKey)}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime} {t("blogPage.minRead")}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {t("blogPage.ctaTitle")}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t("blogPage.ctaDesc")}
          </p>
          <LocalizedLink to="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              {t("blogPage.ctaButton")}
            </button>
          </LocalizedLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
