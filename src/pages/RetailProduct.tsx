import { motion } from "framer-motion";
import { ArrowLeft, Home, Eye, RefreshCw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RetailProduct = () => {
  const features = [
    "Handmade in Denmark – individually crafted for consistent performance",
    "Sustainable & eco-friendly – locally sourced materials",
    "FDA-approved materials – safe for sensitive items",
    "Clear window design – easy visual tracking of saturation",
    "Breathable non-woven bags – optimized moisture capture",
    "Proven Moclay formula – up to 90 days of continuous absorption",
    "Drip-free at full saturation – clean and safe handling",
    "Packaged airtight with zip-lock – sealed for freshness",
    "Regenerable – dry in oven to restore capacity",
    "Non-toxic & safe disposal – regular household waste",
  ];

  const applications = [
    "Private boats and marine equipment",
    "Campers, RVs, and caravans",
    "Basements, sheds, and garages",
    "Storage closets and cupboards",
    "Household items sensitive to moisture",
    "Gun safes and tool storage",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/placeholder.svg')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm mb-6">
              <Home className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Consumer Products</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              DRY BAG
              <span className="block text-gradient">Retail</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Crafted in Denmark using our proven Moclay formula. Offers reliable, long-lasting 
              moisture absorption with a convenient clear window to monitor saturation—perfect for 
              protecting boats, campers, basements, and more.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Product Details */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="features" className="text-sm md:text-base">Key Features</TabsTrigger>
              <TabsTrigger value="how-it-works" className="text-sm md:text-base">How It Works</TabsTrigger>
              <TabsTrigger value="applications" className="text-sm md:text-base">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="features">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Eye className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Clear Window Monitoring</h3>
                      <p className="text-muted-foreground text-sm">
                        Unique clear window design allows you to easily track moisture saturation 
                        levels. Know exactly when it's time to regenerate or replace.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <RefreshCw className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Regenerable & Reusable</h3>
                      <p className="text-muted-foreground text-sm">
                        Simply dry the contents in an oven to restore absorption capacity. 
                        Extend product life and reduce waste with multiple uses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-4">All Features</h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="how-it-works">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-card rounded-sm border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Place</h3>
                    <p className="text-muted-foreground text-sm">
                      Remove from airtight packaging and place in your boat, camper, or storage area.
                    </p>
                  </div>

                  <div className="text-center p-6 bg-card rounded-sm border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Monitor</h3>
                    <p className="text-muted-foreground text-sm">
                      Watch the clear window to track moisture absorption over up to 90 days.
                    </p>
                  </div>

                  <div className="text-center p-6 bg-card rounded-sm border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Regenerate</h3>
                    <p className="text-muted-foreground text-sm">
                      When saturated, simply dry in an oven to restore full absorption capacity.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-sm text-center">
                  <p className="text-lg text-foreground font-medium">
                    Up to <span className="text-primary">90 days</span> of continuous moisture protection
                  </p>
                  <p className="text-muted-foreground mt-2">Set it and forget it – then regenerate for extended use</p>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="applications">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {applications.map((application, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{application}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Take Control of Moisture
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enjoy set-and-forget moisture protection that's easy to monitor and reusable. 
            Order your DRY BAG Retail today to keep your valuables dry and safe.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailProduct;
