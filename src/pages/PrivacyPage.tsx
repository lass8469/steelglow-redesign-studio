import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[40vh] flex items-center">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Privacy
              <span className="block text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Content */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto prose prose-invert"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Dry-Bag A/S ("we," "our," or "us") respects your privacy and is committed to protecting 
                  your personal data. This privacy policy explains how we collect, use, and safeguard your 
                  information when you visit our website or interact with our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you contact us or fill out forms.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited for website analytics.</li>
                  <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email or phone.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process orders and deliver products</li>
                  <li>To improve our website and services</li>
                  <li>To send relevant product information (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your 
                  data with trusted service providers who assist us in operating our business, such as 
                  shipping companies and payment processors. These parties are bound by confidentiality 
                  agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p>Under GDPR and applicable laws, you have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience and analyze site traffic. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-card rounded-sm border border-border">
                  <p><strong>Dry-Bag A/S</strong></p>
                  <p>Odinsvej 21, 8722 Hedensted, Denmark</p>
                  <p>Email: contact@dry-bag.com</p>
                  <p>Phone: +45 86 19 05 00</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
