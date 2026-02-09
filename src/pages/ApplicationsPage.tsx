import { motion } from "framer-motion";
import { 
  Pill, Cpu, Apple, Truck, Car, Shield, 
  Beaker, Shirt, Cog, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import applicationsHeroBg from "@/assets/applications-hero.jpg";

const ApplicationsPage = () => {
  const industries = [
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "Moisture can degrade active ingredients and shorten shelf life. Our desiccants protect the chemical integrity and efficacy of drugs, tablets, and powders."
    },
    {
      icon: Cpu,
      title: "Electronics & Semiconductors",
      description: "Moisture is a leading cause of corrosion and short circuits. Our desiccants safeguard sensitive components like circuit boards and microchips during storage and transit."
    },
    {
      icon: Apple,
      title: "Food & Beverage",
      description: "Prevent clumping, spoilage, and microbial growth in dry foods. Our food-grade desiccants maintain freshness and extend the shelf life of your products."
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description: "Protect cargo from \"container rain\" and moisture damage during global transport. Our desiccants ensure goods arrive in pristine condition, regardless of climate changes."
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Prevent corrosion and malfunction in sensitive automotive electronics and precision metal parts. Our solutions keep components dry during storage and transport."
    },
    {
      icon: Shield,
      title: "Defense & Military",
      description: "Ensure mission-critical equipment, including weapons, optics, and electronics, remains dry and functional for long-term storage and use in harsh environments."
    },
    {
      icon: Beaker,
      title: "Chemical & Petrochemical",
      description: "Crucial for removing water from industrial gas streams and protecting moisture-sensitive chemical substances during processing and storage."
    },
    {
      icon: Shirt,
      title: "Textile & Leather",
      description: "Prevent mold, mildew, and discoloration on clothing, footwear, and leather goods. Our desiccants maintain product quality, especially during long-term storage and shipping."
    },
    {
      icon: Cog,
      title: "Metal Processing",
      description: "Combat rust and corrosion on metal parts, tools, and machinery. Our desiccants provide a protective environment for components during storage and shipping."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center justify-center w-full">
        <div 
          className="absolute inset-0 w-full bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${applicationsHeroBg})`,
          }}
        />
        <div className="absolute inset-0 w-full bg-gradient-to-b from-background/90 via-background/70 to-background" />
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Moisture Protection
              <span className="block text-gradient">For Every Industry</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover how our industrial desiccants provide critical protection against moisture damage, 
              corrosion, and spoilage across a wide range of sectors.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Industries Grid */}
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
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our moisture control solutions are trusted across diverse industries worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors group"
              >
                <industry.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Solution
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Not sure which product is right for your industry? Our experts can help you 
              assess your requirements and recommend the most effective solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-sm hover:bg-secondary/80 transition-colors"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Contact Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationsPage;
