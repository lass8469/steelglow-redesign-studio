 import { useState } from "react";
 import { Send, MapPin, Phone, Mail, MessageCircle, Check } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 
 const benefits = [
   "40+ years of industry expertise",
   "Tailored solutions for your unique needs",
   "Global shipping with local support",
   "24-hour response guarantee",
 ];
 
 const Contact = () => {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     company: "",
     message: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     // Handle form submission
     console.log(formData);
   };
 
   return (
     <section id="contact" className="py-24 lg:py-32 bg-background moisture-bg moisture-bg-lg">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
           {/* Left column */}
           <div>
             <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
               Get in Touch
             </span>
             
             <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
               Let's Protect Your
               <span className="text-gradient"> Cargo Together</span>
             </h2>
             
             <p className="text-lg text-muted-foreground mb-8">
               Have questions about moisture control or cargo safety? Our team is ready 
               to help. Whether you need a quote, technical specifications, or guidance 
               on the right desiccant for your shipment, we'll respond within 24 hours.
             </p>
 
             {/* Benefits */}
             <div className="space-y-4 mb-10">
               <h3 className="text-lg font-semibold text-foreground">Why Partner with DRY-BAG?</h3>
               {benefits.map((benefit) => (
                 <div key={benefit} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                     <Check className="w-3 h-3 text-primary" />
                   </div>
                   <span className="text-muted-foreground">{benefit}</span>
                 </div>
               ))}
             </div>
 
             {/* Contact info */}
             <div className="space-y-4">
               <div className="flex items-center gap-4 text-muted-foreground">
                 <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <span>Denmark (Headquarters)</span>
               </div>
               <div className="flex items-center gap-4 text-muted-foreground">
                 <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <span>info@drybag.com</span>
               </div>
               <div className="flex items-center gap-4 text-muted-foreground">
                 <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                   <MessageCircle className="w-5 h-5 text-primary" />
                 </div>
                 <span>WhatsApp Available</span>
               </div>
             </div>
           </div>
 
           {/* Form */}
           <div className="bg-card border border-border rounded-2xl p-8">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">
                     Full Name
                   </label>
                   <Input
                     type="text"
                     placeholder="John Doe"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     className="bg-background border-border"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-2">
                     Email Address
                   </label>
                   <Input
                     type="email"
                     placeholder="john@company.com"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="bg-background border-border"
                   />
                 </div>
               </div>
 
               <div>
                 <label className="block text-sm font-medium text-foreground mb-2">
                   Company Name
                 </label>
                 <Input
                   type="text"
                   placeholder="Your Company Ltd."
                   value={formData.company}
                   onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                   className="bg-background border-border"
                 />
               </div>
 
               <div>
                 <label className="block text-sm font-medium text-foreground mb-2">
                   Message
                 </label>
                 <Textarea
                   placeholder="Tell us about your moisture control needs..."
                   rows={5}
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="bg-background border-border resize-none"
                 />
               </div>
 
               <Button
                 type="submit"
                 size="lg"
                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14"
               >
                 Send Message
                 <Send className="ml-2 h-5 w-5" />
               </Button>
             </form>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;