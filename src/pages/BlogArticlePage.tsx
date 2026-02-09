import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "powdered-desiccants-guide": {
    title: "The Complete Guide to Powdered Desiccants",
    date: "2024-02-09",
    readTime: "5 min read",
    category: "Technical",
    content: `
## What Are Powdered Desiccants?

Powdered desiccants are finely ground hygroscopic materials designed to absorb moisture from the surrounding environment. Unlike their granular counterparts, powdered desiccants offer a significantly higher surface area-to-volume ratio, making them exceptionally efficient at moisture absorption.

## Types of Powdered Desiccants

### Silica Gel Powder
Silica gel in powdered form is one of the most versatile desiccants available. It's chemically inert, non-toxic, and can absorb up to 40% of its weight in water vapor. This makes it ideal for:

- Pharmaceutical packaging
- Electronics protection
- Food preservation
- Document archiving

### Calcium Chloride Powder
Calcium chloride-based powdered desiccants are known for their aggressive moisture absorption capabilities. They can absorb moisture even at very low humidity levels and continue working until fully saturated.

### Molecular Sieve Powder
For applications requiring extremely low humidity levels, molecular sieve powder is the gold standard. With precise pore sizes, it selectively adsorbs water molecules while excluding larger molecules.

## Applications in Cargo Protection

### Container Shipping
During ocean freight, containers experience significant temperature fluctuations. This causes "container rain" – condensation that forms on container walls and drips onto cargo. Powdered desiccants, when properly packaged, can prevent this phenomenon by maintaining low relative humidity inside the container.

### Warehouse Storage
Long-term storage presents unique challenges. Powdered desiccants integrated into packaging materials provide continuous protection against ambient humidity fluctuations.

## Best Practices for Implementation

1. **Calculate moisture load**: Determine the total moisture that needs to be absorbed based on cargo type, transit time, and route conditions.

2. **Select appropriate quantity**: Use industry-standard calculations to determine the correct amount of desiccant required.

3. **Proper placement**: Distribute desiccants evenly throughout the cargo space for optimal protection.

4. **Monitor conditions**: Use data loggers to verify that humidity levels remain within acceptable ranges.

## The DRY-BAG Advantage

At DRY-BAG, we've been perfecting desiccant technology for over 45 years. Our powdered desiccant solutions are:

- **Engineered for performance**: Optimized absorption rates for maritime and ground transport
- **Sustainably produced**: Manufactured in Denmark with environmental responsibility
- **Rigorously tested**: Every batch meets our stringent quality standards
- **Application-specific**: Customized solutions for your unique cargo requirements

## Conclusion

Powdered desiccants represent a crucial tool in the cargo protection arsenal. Their high efficiency, versatility, and reliability make them indispensable for protecting valuable shipments from moisture damage.

Contact our team to discuss how powdered desiccant solutions can protect your cargo.
    `,
  },
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
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
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cargo Intelligence
            </Link>
            
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString('en-US', { 
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
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-6">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.match(/^\d+\./)) {
                return <li key={index} className="ml-6 list-decimal">{paragraph.replace(/^\d+\.\s*/, '')}</li>;
              }
              if (paragraph.trim()) {
                return <p key={index} className="mb-4">{paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>;
              }
              return null;
            })}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Protect Your Cargo?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact our team of experts to discuss the best desiccant solutions for your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticlePage;
