import { motion } from "framer-motion";
import { ArrowLeft, FlaskConical, Shield, Leaf, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MolecularSieveProduct = () => {
  const features = [
    "Superior moisture absorption even at extremely low humidity",
    "Ultra-low dew point maintenance for lyophilized drugs & biologics",
    "Pharma-grade compliance: Non-toxic, chemically inert, odorless",
    "FDA & EU standards compliant",
    "Extended shelf life protection for tablets, capsules, powders",
    "Regenerable & cost-effective for long-term use",
    "Dust-free Tyvek® pouches for sensitive medical products",
  ];

  const applications = [
    "Moisture-sensitive drug packaging (tablets, capsules, powders)",
    "Injectable vials & biologics storage",
    "Diagnostic kits & medical device protection",
    "Nutraceuticals & supplement preservation",
    "E-commerce & retail pharmaceutical shipments",
    "Insulating glass units",
    "Industrial gas drying applications",
  ];

  const sizes = [
    { size: "1g", packaging: "Tyvek® pouch", application: "Small vials, blister packs" },
    { size: "5g", packaging: "Tyvek® pouch", application: "Standard pharmaceutical boxes" },
    { size: "10g", packaging: "Tyvek® pouch", application: "Medium containers" },
    { size: "12.5g", packaging: "Tyvek® pouch", application: "Diagnostic kits" },
    { size: "25g", packaging: "Tyvek® pouch", application: "Bulk shipments" },
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
          {/* Breadcrumb */}
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
              <FlaskConical className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Pharmaceutical Grade</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Molecular Sieve
              <span className="block text-gradient">Desiccant</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Unmatched moisture control specifically engineered for pharmaceutical and medical packaging. 
              Highly porous crystalline structure rapidly adsorbs water vapor, maintaining ultra-low humidity 
              (&lt;0.1% RH) to protect moisture-sensitive drugs, APIs, and diagnostics from degradation.
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
              <TabsTrigger value="sizes" className="text-sm md:text-base">Available Sizes</TabsTrigger>
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
                      <h3 className="font-semibold text-foreground mb-2">Superior Protection</h3>
                      <p className="text-muted-foreground text-sm">
                        Outperforms silica gel and clay desiccants at extremely low humidity levels, 
                        ensuring maximum protection for sensitive pharmaceuticals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">FDA & EU Compliant</h3>
                      <p className="text-muted-foreground text-sm">
                        Meets strict regulatory requirements for pharmaceutical and medical applications. 
                        Non-toxic, chemically inert, and odorless.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Key Benefits</h3>
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

            <TabsContent value="sizes">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-card rounded-sm border border-border overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-foreground">
                    <span>Size</span>
                    <span>Packaging</span>
                    <span>Application</span>
                  </div>
                  {sizes.map((item, index) => (
                    <div 
                      key={index} 
                      className="grid grid-cols-3 gap-4 p-4 border-t border-border hover:bg-muted/20 transition-colors"
                    >
                      <span className="text-primary font-medium">{item.size}</span>
                      <span className="text-muted-foreground">{item.packaging}</span>
                      <span className="text-muted-foreground">{item.application}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-6 text-sm">
                  Custom sizes available. Contact us for bulk orders and specific requirements.
                </p>
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
            Ensure Product Integrity
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Looking for a superior moisture control solution for your pharmaceutical and medical products? 
            Contact us today to learn how our molecular sieve desiccants can safeguard your sensitive goods.
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

export default MolecularSieveProduct;
