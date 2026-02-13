import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import { useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, User, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles, ArticleSection } from "@/lib/blog-articles";
import { articlesDa } from "@/lib/blog-articles-da";
import { useLanguage } from "@/contexts/LanguageContext";

const renderSection = (section: ArticleSection, index: number) => {
  switch (section.type) {
    case "heading":
      return (
        <h2 key={index} className="text-2xl lg:text-3xl font-bold text-foreground mt-12 mb-4">
          {section.content}
        </h2>
      );
    
    case "subheading":
      return (
        <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
          {section.content}
        </h3>
      );
    
    case "text":
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {section.content}
        </p>
      );
    
    case "list":
      return (
        <ul key={index} className="space-y-2 mb-6 ml-6">
          {section.items.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    
    case "numbered-list":
      return (
        <ol key={index} className="space-y-4 mb-6">
          {section.items.map((item, i) => (
            <li key={i} className="text-muted-foreground flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center shrink-0 text-sm">
                {i + 1}
              </span>
              <span className="pt-1">{item}</span>
            </li>
          ))}
        </ol>
      );
    
    case "image":
      return (
        <figure key={index} className="my-8">
          <div className="aspect-video bg-accent/20 rounded-xl overflow-hidden border border-border">
            <img 
               src={section.src} 
               alt={section.alt}
               loading="lazy"
               className="w-full h-full object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    
    case "callout":
      return (
        <div key={index} className="my-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{section.title}</h4>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          </div>
        </div>
      );
    
    case "quote":
      return (
        <blockquote key={index} className="my-8 pl-6 border-l-4 border-primary">
          <p className="text-lg italic text-foreground mb-2">"{section.content}"</p>
          {section.attribution && (
            <cite className="text-sm text-muted-foreground not-italic">— {section.attribution}</cite>
          )}
        </blockquote>
      );
    
    default:
      return null;
  }
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const articleSource = language === 'da' ? articlesDa : articles;
  const article = slug ? (articleSource[slug] || articles[slug]) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("blogPage.articleNotFound")}</h1>
          <p className="text-muted-foreground mb-6">{t("blogPage.articleNotFoundDesc")}</p>
          <LocalizedLink to="/blog">
            <Button>{t("blogPage.backButton")}</Button>
          </LocalizedLink>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <LocalizedLink 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("blogPage.backToBlog")}
            </LocalizedLink>
            
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground">
              {article.author && (
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                {t("blogPage.share")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video bg-accent/20 rounded-xl overflow-hidden border border-border">
              <img 
                src={article.heroImage} 
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-3xl mx-auto">
            {article.sections.map((section, index) => renderSection(section, index))}
          </article>
        </div>
      </section>

      {/* Article CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 lg:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {article.cta.heading}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  {article.cta.description}
                </p>
                <LocalizedLink to={article.cta.buttonLink}>
                  <Button size="lg" className="font-semibold px-8">
                    {article.cta.buttonText}
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Placeholder */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              {t("blogPage.moreArticles")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticlePage;
