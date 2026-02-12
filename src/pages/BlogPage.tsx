import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { Calendar, Clock, ArrowRight, BookOpen, Beaker, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPage = () => {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      slug: "chemistry-clay-mo-clay-vs-silica-gel",
      titleKey: "blogPage.post3.title",
      excerptKey: "blogPage.post3.excerpt",
      date: "2025-02-10",
      readTime: "10",
      category: "Technical",
      image: "/placeholder.svg",
    },
    {
      slug: "container-rain-dew-point-physics",
      titleKey: "blogPage.post2.title",
      excerptKey: "blogPage.post2.excerpt",
      date: "2025-02-10",
      readTime: "8",
      category: "Technical",
      image: "/placeholder.svg",
    },
    {
      slug: "vapor-pressure-wooden-pallets",
      titleKey: "blogPage.post1.title",
      excerptKey: "blogPage.post1.excerpt",
      date: "2025-02-10",
      readTime: "7",
      category: "Technical",
      image: "/placeholder.svg",
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
                      src={post.image} 
                      alt={t(post.titleKey)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {t("blogPage.category.technical")}
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
