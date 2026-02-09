import { motion } from "framer-motion";
import { ArrowLeft, Thermometer, Clock, Usb, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DataloggerProduct = () => {
  const features = [
    "Accurate temperature and humidity monitoring",
    "120 days monitoring time",
    "USB format for easy connectivity",
    "Automatic report generation upon PC insertion",
    "Compact and portable design",
    "Long battery life for extended monitoring",
    "Durable construction for challenging environments",
    "User-friendly interface and setup",
  ];

  const benefits = [
    "Ensures product integrity during transit",
    "Provides verifiable data for compliance and quality control",
    "Simplifies data retrieval and analysis",
    "Reduces risk of spoilage or damage to sensitive goods",
    "Offers peace of mind throughout the supply chain",
  ];

  const applications = [
    "Pharmaceuticals and healthcare products",
    "Food and beverage exports",
    "Electronics and high-tech equipment",
    "Agricultural products and floriculture",
    "Chemical and industrial materials",
    "Any shipment requiring precise environmental control",
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
              <Thermometer className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Environmental Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Data Logger
              <span className="block text-gradient">Temperature & Humidity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Invaluable tools for export settings, providing precise monitoring of environmental 
              conditions throughout the shipping process. Compact USB devices automatically generate 
              comprehensive reports, ensuring seamless data access and compliance for sensitive goods.
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
              <TabsTrigger value="benefits" className="text-sm md:text-base">Benefits</TabsTrigger>
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
                    <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">120 Days Monitoring</h3>
                      <p className="text-muted-foreground text-sm">
                        Extended monitoring capability for long ocean voyages and extended 
                        storage periods. Reliable battery life ensures continuous data collection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-card rounded-sm border border-border">
                    <Usb className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Automatic Reports</h3>
                      <p className="text-muted-foreground text-sm">
                        Simply insert into any PC's USB port to automatically generate 
                        comprehensive reports. No software installation required.
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

            <TabsContent value="benefits">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-card p-8 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-6 text-center text-xl">Why Use Data Loggers?</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-sm">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
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
            Ensure Product Integrity
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take control of your export monitoring with advanced data loggers. 
            Contact us to discuss your specific requirements.
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

export default DataloggerProduct;
