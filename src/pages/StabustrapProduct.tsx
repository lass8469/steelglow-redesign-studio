import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Leaf, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StabustrapProduct = () => {
  const features = [
    "Perfect for internal transport – stabilizes pallets in warehouses",
    "Reduces single-use plastic waste – reusable and recyclable",
    "Protects without damage – gentle on packaging and pallet edges",
    "Lightweight & ergonomic – easy manual application",
    "Strong holding force – keeps goods stable",
    "Reusable and fully recyclable – supports circular logistics",
    "Speeds up handling – faster than conventional wrap solutions",
  ];

  const advantages = [
    "Supports greener internal logistics",
    "Cuts packaging material use",
    "Lowers operational handling time",
    "Increases safety for staff",
    "Maintains pallet integrity",
  ];

  const applications = [
    "Warehouses and logistics centers",
    "Food and beverage producers",
    "Consumer goods manufacturers",
    "Industrial parts and assemblies",
    "Distribution centers",
    "Any internal pallet transport needs",
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
              to="/cargo" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cargo Protection</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm mb-6">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Sustainable Strapping</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Stabustrap
              <span className="block text-gradient">Strapping System</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A lightweight, recyclable strapping solution engineered to secure palletized goods 
              during internal logistics and warehouse handling. Designed for safety, speed, and 
              sustainability—a cleaner, more efficient alternative to traditional wrapping methods.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Product Details */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="features" className="text-sm md:text-base">Features</TabsTrigger>
              <TabsTrigger value="advantages" className="text-sm md:text-base">Advantages</TabsTrigger>
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
                    <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Sustainable Solution</h3>
                      <p className="text-muted-foreground text-sm">
                        Reduces single-use plastic waste with a reusable, recyclable strapping 
                        system. Supports circular logistics and green initiatives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Fast & Efficient</h3>
                      <p className="text-muted-foreground text-sm">
                        Faster to apply and remove than conventional wrap-based solutions. 
                        Reduces handling time and improves operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
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

            <TabsContent value="advantages">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-card p-8 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-6 text-center text-xl">Key Advantages</h3>
                  <ul className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-sm">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{advantage}</span>
                      </li>
                    ))}
                  </ul>
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
            Optimize Your Logistics
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upgrade your internal pallet transport with Stabustrap for a cleaner, 
            safer, and more efficient solution.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StabustrapProduct;
