import { ArrowLeft, Package, Shield, Droplets, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Link } from "react-router-dom";

const specifications = [
  { label: "Active Ingredient", value: "Calcium Chloride" },
  { label: "Absorption Capacity", value: "3X more than Silica Gel" },
  { label: "Protection Duration", value: "Up to 90 days" },
  { label: "Operating Temperature", value: "-20°C to +60°C" },
  { label: "Shelf Life", value: "24 months sealed" },
  { label: "Certifications", value: "ISO 9001, International Shipping" },
];

const sizes = [
  { weight: "Stripe 6x125g", description: "Strategic container placement", popular: false },
  { weight: "Blanket 1000g", description: "Standard containers", popular: true },
  { weight: "Blanket 2000g", description: "40ft containers, long voyages", popular: false },
  { weight: "Custom", description: "Tailored to your requirements", popular: false },
];

const features = [
  {
    icon: Droplets,
    title: "Visual Tracking",
    description: "Transparent pouches show moisture absorption at a glance.",
  },
  {
    icon: Shield,
    title: "Export Grade",
    description: "Meets international shipping standards for global cargo.",
  },
  {
    icon: Package,
    title: "High Capacity",
    description: "Absorbs 3X more moisture than standard silica gel.",
  },
];

const applications = [
  "Automotive Parts & Machinery",
  "Agricultural Commodities",
  "Electronics & Equipment",
  "Textiles & Manufactured Goods",
  "Metal Parts & Components",
  "Container Shipping Worldwide",
];

const CalciumChlorideProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/#products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Calcium Chloride</span>
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
                <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border">
                  <img
                    src="/placeholder.svg"
                    alt="Calcium Chloride Absorber Blanket"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/90 text-primary-foreground rounded-full">
                      Export Grade
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                    Industrial Strength
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
                    Absorber Blanket
                    <span className="text-gradient"> Calcium Chloride</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Industrial-strength humidity control for goods in transit worldwide. 
                    Specially formulated to meet the demands of export packaging and 
                    long-haul logistics, preventing moisture damage during ocean voyages.
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
                      <h3 className="text-2xl font-black text-foreground mb-2">{size.weight}</h3>
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
              Protect Your
              <span className="text-gradient"> Export Cargo?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Need industrial-strength moisture protection for your container shipments? 
              Contact us today to discuss your requirements.
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
                <Link to="/#products">
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

export default CalciumChlorideProduct;
