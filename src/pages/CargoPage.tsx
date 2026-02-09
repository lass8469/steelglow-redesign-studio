import { motion } from "framer-motion";
import { Package, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";

const CargoPage = () => {
  const benefits = [
    {
      icon: Package,
      title: "Load Stability",
      description: "Prevent product shifting and movement during transportation to minimize in-transit damage."
    },
    {
      icon: Shield,
      title: "Cost Savings",
      description: "Reduce claims and returns from damaged goods, protecting your valuable products and profit margins."
    },
    {
      icon: Zap,
      title: "Easy & Efficient",
      description: "Quick to install and remove, our solutions save you time and labor during the loading and unloading process."
    }
  ];

  const products = [
    {
      title: "Dunnage Bags for Container-Loading",
      description: "Air-filled cushions designed to secure and stabilize cargo within containers, trucks, or railcars. By filling the empty spaces between cargo, they prevent movement and absorb impacts, drastically reducing damage from shifting.",
      link: "/dunnage-bags",
      image: "/placeholder.svg"
    },
    {
      title: "Edge Protectors for Cargo",
      description: "L-shaped pieces of durable cardboard or plastic placed on the corners of palletized goods to prevent strapping from cutting into products and to reinforce the stacking strength of the load.",
      link: "/edge-protectors",
      image: "/placeholder.svg"
    },
    {
      title: "Anti-Slip Sheets for Pallets",
      description: "Designed to be placed between layers of products on a pallet. They increase the friction between goods, preventing them from sliding or shifting during transport, which greatly enhances load stability and safety.",
      link: "/anti-slip",
      image: "/placeholder.svg"
    },
    {
      title: "Stabustrap Strapping System",
      description: "An elastic and reusable band that is a sustainable and economical alternative to stretch film. It is an ideal solution for internal logistics, where pallets need to be moved over short distances.",
      link: "/stabustrap",
      image: "/placeholder.svg"
    }
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Secure Your Shipment,
              <span className="block text-gradient">Protect Your Bottom Line.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our dunnage bags and edge protectors provide the ultimate solution for 
              cargo stability and damage prevention.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Cargo Protection?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Products
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-sm border border-border overflow-hidden group"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Link 
                    to={product.link}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Finding the Right Cargo Protection?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unsure which cargo protection solution is right for your specific application? 
              Our experts are here to help you assess your requirements and recommend the most 
              effective and efficient solution.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Contact Our Cargo Experts
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CargoPage;
