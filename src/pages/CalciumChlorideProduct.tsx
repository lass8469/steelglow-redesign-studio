import { motion } from "framer-motion";
import { ArrowLeft, Container, Shield, Droplets, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CalciumChlorideProduct = () => {
  const features = [
    "International compliance – meets global shipping standards",
    "High-capacity absorption – 3X more effective than silica gel",
    "Visible moisture tracking – blankets liquefy when saturated",
    "Non-toxic & safe – will not contaminate food-adjacent cargo",
    "Durable packaging – withstands rough handling during transit",
    "Long-lasting protection for extended ocean voyages",
  ];

  const applications = [
    "Automotive parts & machinery exports",
    "Agricultural commodities (coffee, grains, tobacco)",
    "Electronics & sensitive equipment shipments",
    "Textiles, furniture, and manufactured goods",
    "Metal parts and machinery protection",
    "Container shipping worldwide",
  ];

  const formats = [
    { name: "Stripe (6 x 125g units)", description: "Compact, heavy-duty pouches for strategic placement in shipping containers" },
    { name: "Absorber Blanket (2000g)", description: "Extra-large transparent pouches that show moisture absorption at a glance" },
  ];

  const protectionAgainst = [
    "Container rain formation",
    "Metal part corrosion",
    "Mold growth on organic materials",
    "Condensation damage to electronics",
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
              <Container className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Export Grade</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Absorber Blanket
              <span className="block text-gradient">Calcium Chloride</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Industrial-strength humidity control for goods in transit worldwide. Specially formulated 
              to meet the demands of export packaging, cross-border shipping, and long-haul logistics. 
              Prevents moisture damage during ocean voyages or extended storage.
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
              <TabsTrigger value="formats" className="text-sm md:text-base">Formats</TabsTrigger>
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
                      <h3 className="font-semibold text-foreground mb-2">Export-Ready Protection</h3>
                      <p className="text-muted-foreground text-sm">
                        Designed for international shipping standards. 3X more effective than 
                        silica gel for container use, ensuring cargo arrives in pristine condition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Droplets className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Visual Tracking</h3>
                      <p className="text-muted-foreground text-sm">
                        Transparent blanket pouches show moisture absorption at a glance. 
                        Contents liquefy when saturated for easy monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-sm border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Prevents</h3>
                    <ul className="space-y-3">
                      {protectionAgainst.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Export Features</h3>
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

            <TabsContent value="formats">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {formats.map((format, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-primary mb-3">{format.name}</h3>
                    <p className="text-muted-foreground">{format.description}</p>
                  </div>
                ))}
              </motion.div>
              <p className="text-center text-muted-foreground mt-8 text-sm">
                Pricing varies by size and quantity. Contact us for bulk orders.
              </p>
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
            Protect Your Export Cargo
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need industrial-strength moisture protection for your container shipments? 
            Contact us today to discuss your requirements.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalciumChlorideProduct;
