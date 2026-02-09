import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, Beaker, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MoistureBackground from "@/components/MoistureBackground";

const blogPosts = [
  {
    slug: "powdered-desiccants-guide",
    title: "The Complete Guide to Powdered Desiccants",
    excerpt: "Discover the science behind powdered desiccants and how they protect your cargo from moisture damage during shipping and storage.",
    date: "2024-02-09",
    readTime: "5 min read",
    category: "Technical",
    image: "/placeholder.svg",
  },
];

const features = [
  {
    icon: Beaker,
    title: "Scientific Analysis",
    description: "Deep dives into moisture control chemistry and material science",
  },
  {
    icon: Shield,
    title: "Protection Strategies",
    description: "Proven methods to safeguard cargo across all transport modes",
  },
  {
    icon: TrendingUp,
    title: "Industry Trends",
    description: "Latest developments in logistics and cargo preservation",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Technical Knowledge Hub</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Cargo <span className="text-gradient">Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your definitive resource for in-depth technical articles on cargo protection, moisture management, and safe shipping practices—backed by 45+ years of Danish engineering expertise.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-accent/50">Desiccant Science</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">Container Climate</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">Moisture Prevention</span>
              <span className="px-3 py-1 rounded-full bg-accent/50">Best Practices</span>
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
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
              <p className="text-muted-foreground">Technical insights from our moisture control experts</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden hover:border-primary/30">
                  <div className="aspect-video bg-accent/20 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Expert Guidance?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our technical team is ready to help you design the optimal moisture protection strategy for your specific cargo requirements.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Consult Our Experts
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
