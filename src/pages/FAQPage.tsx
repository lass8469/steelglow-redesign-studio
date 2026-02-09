import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is a desiccant and how does it work?",
      answer: "A desiccant is a hygroscopic substance that induces or sustains a state of dryness in its vicinity. It absorbs water molecules from the surrounding air, effectively reducing humidity levels. Our desiccants use materials like silica gel, clay (Moclay), and calcium chloride to protect products from moisture damage during storage and shipping."
    },
    {
      question: "Which desiccant is right for my application?",
      answer: "The right desiccant depends on several factors: the type of goods being protected, humidity levels, duration of protection needed, and regulatory requirements. Silica gel is ideal for pharmaceuticals and electronics. Clay-based products like DRY-BAG I and III are excellent for container shipping. Calcium chloride is best for heavy-duty, long-haul ocean freight. Contact our experts for personalized recommendations."
    },
    {
      question: "How much desiccant do I need for my container?",
      answer: "The amount of desiccant needed depends on the container size, contents, expected transit time, and climate conditions. As a general rule, for a 20ft container, you might need 8-12 units of DRY-BAG for standard shipments. For high-humidity routes or sensitive cargo, more may be required. Our team can help calculate the exact requirements for your specific situation."
    },
    {
      question: "Are your desiccants safe for use with food products?",
      answer: "Yes, our silica gel and clay-based desiccants (DRY-BAG I and III) are made with FDA-approved materials and are safe for use in food-adjacent applications. They are non-toxic and chemically inert. However, they should not be consumed. For specific food safety certifications, please contact us."
    },
    {
      question: "Can desiccants be regenerated and reused?",
      answer: "Some of our desiccants can be regenerated. DRY BAG Retail is specifically designed to be regenerable—simply dry the contents in an oven to restore absorption capacity. Silica gel can also be regenerated in some cases. Clay-based shipping desiccants are typically single-use due to their heavy-duty nature."
    },
    {
      question: "What is 'container rain' and how do desiccants prevent it?",
      answer: "Container rain occurs when temperature fluctuations during shipping cause moisture in the air inside a container to condense on the container walls and ceiling, then drip onto cargo. This can cause mold, corrosion, and water damage. Desiccants absorb excess moisture from the air, preventing condensation from forming."
    },
    {
      question: "How should desiccants be stored before use?",
      answer: "Desiccants should be stored in their original, sealed packaging until ready for use. Keep them in a cool, dry place away from direct sunlight. Once the packaging is opened, unused desiccants should be resealed in airtight containers or bags to prevent premature moisture absorption."
    },
    {
      question: "Do you offer custom sizes or formulations?",
      answer: "Yes, we offer custom solutions for specific applications. Whether you need particular sizes, packaging types, or absorption capacities, our team can work with you to develop a tailored moisture control solution. Contact us to discuss your requirements."
    },
    {
      question: "What shipping options are available?",
      answer: "We ship globally and offer various shipping options depending on order size and urgency. Standard freight, express shipping, and bulk container loads are all available. Contact our sales team for specific shipping quotes and lead times."
    },
    {
      question: "How can I become a distributor?",
      answer: "We welcome partnership inquiries from potential distributors worldwide. If you're interested in becoming a DRY-BAG distributor, please contact us with information about your company, market area, and experience in the moisture control or packaging industry."
    }
  ];

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
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="block text-gradient">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our desiccants, applications, and services.
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-sm px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help with any 
              questions about our products or services.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
