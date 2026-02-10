import { ArrowLeft, Package, Shield, Anchor, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import LocalizedLink from "@/components/LocalizedLink";
import productDrybagI from "@/assets/product-drybag-i.jpg";

const specifications = [
  { label: "Material", value: "Calcium Chloride Clay Blend" },
  { label: "Absorption Capacity", value: "Up to 300% of its weight" },
  { label: "Protection Duration", value: "Up to 60 days" },
  { label: "Operating Temperature", value: "-5°C to +50°C" },
  { label: "Shelf Life", value: "36 months sealed" },
  { label: "Certifications", value: "ISO 9001, REACH Compliant" },
];

const sizes = [
  { weight: "125g", description: "Small containers, pallets", popular: false },
  { weight: "250g", description: "Standard shipping containers", popular: false },
  { weight: "500g", description: "20ft containers, machinery", popular: true },
  { weight: "1kg", description: "40ft containers, large cargo", popular: false },
  { weight: "2kg", description: "High-humidity environments", popular: false },
];

const features = [
  {
    icon: Shield,
    title: "Ocean-Grade",
    description: "Specifically formulated for long sea voyages and extreme humidity conditions.",
  },
  {
    icon: Anchor,
    title: "Extended Protection",
    description: "Provides up to 60 days of continuous moisture absorption.",
  },
  {
    icon: Package,
    title: "Leak-Proof Design",
    description: "Advanced packaging prevents gel leakage even at maximum absorption.",
  },
];

const applications = [
  "Ocean Freight Containers",
  "Steel & Metal Products",
  "Automotive Parts",
  "Machinery & Equipment",
  "Agricultural Products",
  "Textiles & Fabrics",
];

const DryBagIProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <LocalizedLink to="/" className="hover:text-primary transition-colors">Home</LocalizedLink>
          <ChevronRight className="h-4 w-4" />
          <LocalizedLink to="/products" className="hover:text-primary transition-colors">Products</LocalizedLink>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">DRY-BAG I</span>
        </nav>
      </div>

      {/* Hero Section */}
      <MoistureBackground variant="large" className="bg-background">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Product Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted/80 via-muted/40 to-accent/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.08),transparent_50%)]" />
                  <img
                    src={productDrybagI}
                    alt="DRY-BAG I Container Desiccant"
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105 relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent z-20" />
                  <div className="absolute bottom-6 left-6 z-30">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full">
                      Ocean Freight
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                    Original Formula
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                    DRY-BAG I
                    <span className="text-gradient"> Desiccant</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Clay-based desiccant engineered for long ocean journeys. 
                    Our original formula provides superior moisture absorption 
                    to protect your cargo from humidity damage during transit.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <feature.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-orange"
                  >
                    Request Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-accent"
                  >
                    Download Spec Sheet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MoistureBackground>

      {/* Tabs Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 bg-card border border-border h-12">
              <TabsTrigger value="specifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="sizes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Sizes
              </TabsTrigger>
              <TabsTrigger value="applications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Applications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {specifications.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between items-center py-3 px-4 rounded-lg bg-background/50 border border-border/50"
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sizes" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <Card
                    key={size.weight}
                    className={`bg-card/50 border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${
                      size.popular ? "ring-2 ring-primary/50" : ""
                    }`}
                  >
                    <CardContent className="p-6 text-center relative">
                      {size.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          Most Popular
                        </span>
                      )}
                      <h3 className="text-3xl font-black text-foreground mb-2">{size.weight}</h3>
                      <p className="text-sm text-muted-foreground">{size.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg bg-background/50 border border-border/50"
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
              Ready to Protect Your
              <span className="text-gradient"> Cargo?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get in touch with our team to discuss your container desiccant needs 
              and receive a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10"
                asChild
              >
              <Link to="/products">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </MoistureBackground>

      <Footer />
    </div>
  );
};

export default DryBagIProduct;
