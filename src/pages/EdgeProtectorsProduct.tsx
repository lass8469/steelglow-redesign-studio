import { motion } from "framer-motion";
import { ArrowLeft, Shield, Leaf, Package, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EdgeProtectorsProduct = () => {
  const features = [
    "Strong & durable – heavy-duty, FSC-certified cardboard",
    "Prevents damage – shields corners from crushing and tearing",
    "Customizable sizes – multiple thicknesses and lengths available",
    "Eco-friendly & sustainable – responsibly sourced, fully recyclable",
    "Lightweight & easy to use – quick to apply and remove",
    "Cost-effective protection – minimizes damage and return costs",
  ];

  const applications = [
    "Food and beverage shipments",
    "Electronics and appliances",
    "Furniture and home goods",
    "Industrial and automotive parts",
    "Palletized goods needing edge reinforcement",
    "Warehouse and distribution centers",
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
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Cargo Protection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Edge Protectors
              <span className="block text-gradient">For Cargo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Protect your palletized goods from strapping damage and impacts with high-quality 
              Edge Protectors. Made from FSC-certified cardboard, these profiles reinforce corners 
              and edges, providing reliable cushioning during transport and storage.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Product Details */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="features" className="text-sm md:text-base">Key Features</TabsTrigger>
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
                    <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Reliable Corner Protection</h3>
                      <p className="text-muted-foreground text-sm">
                        Shields pallet corners from crushing, tearing, and impacts during shipping 
                        and warehousing. Distributes strapping tension evenly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">FSC-Certified & Sustainable</h3>
                      <p className="text-muted-foreground text-sm">
                        Made from responsibly sourced materials. Fully recyclable and supports 
                        your company's green initiatives.
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
            Protect Your Shipments
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Minimize damage and protect your goods. Contact us to find the right 
            Edge Protectors for your specific needs.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeProtectorsProduct;
