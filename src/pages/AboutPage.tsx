import { motion } from "framer-motion";
import { Award, Leaf, Shield, Users, Globe, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { Link } from "react-router-dom";
import aboutHeroBg from "@/assets/about-hero.jpg";

const AboutPage = () => {
  const stats = [
    { value: "45+", label: "years protecting cargo globally" },
    { value: "20K+", label: "satisfied customers since 1979" },
    { value: "100+", label: "countries where we safeguard cargo" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Our products are designed with environmental stewardship in mind. We use eco-friendly materials and sustainable processes to deliver effective moisture control without compromising your company's green initiatives."
    },
    {
      icon: Award,
      title: "Innovative Technology",
      description: "We leverage cutting-edge technology and continuous research to develop solutions that are at the forefront of the industry. Our commitment to innovation ensures your products are protected by the most advanced moisture control available."
    },
    {
      icon: Shield,
      title: "Guaranteed Product Integrity",
      description: "With over four decades of experience, we know how to safeguard your goods. We provide reliable, customized solutions that consistently exceed expectations, giving you peace of mind that your products will arrive in perfect condition."
    }
  ];

  const offerings = [
    {
      title: "Custom-Engineered Solutions",
      description: "We start by understanding your unique challenges to build a moisture control strategy that works specifically for you. This means less wasted product and more peace of mind."
    },
    {
      title: "Proven Performance",
      description: "Our products are backed by over 40 years of expertise and a commitment to quality. You can trust that our solutions will perform reliably, protecting your goods and your bottom line."
    },
    {
      title: "Long-Term Sustainability",
      description: "We're dedicated to responsible and sustainable practices. Our solutions are designed for efficiency and long-term performance, helping you reduce waste and minimize your environmental impact."
    },
    {
      title: "Expert Support",
      description: "We're more than just a provider; we're your partner. Our team of experts is here to provide guidance and support every step of the way, ensuring your products are protected no matter where they go."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center justify-center w-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${aboutHeroBg})`,
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="w-full h-full flex items-center justify-center px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our job is to make
              <span className="block text-gradient">your job easier.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              That means making sure your products arrive in perfect condition. With four decades 
              of experience, we've learned that every shipment has its own challenges.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Four Decades Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Four Decades of Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission, since 1979, has been to reliably and responsibly protect products from moisture. 
              We offer custom moisture control solutions designed to safeguard your goods, focusing on 
              long-term performance and sustainability.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              As a manufacturer with in-house production, we have direct control over the entire process. 
              This allows us to ensure every product meets our rigorous quality standards while providing 
              you with the most competitive prices on the market.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-card rounded-sm border border-border"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm">{offering.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-bold text-primary">{stat.value}</span>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
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
              Ready to Learn More?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always happy to discuss how Dry-Bag can meet your specific needs. 
              Reach out to our team today.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
