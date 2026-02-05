 import { ArrowUpRight } from "lucide-react";
 
 const footerLinks = {
   products: [
     { label: "DRY-BAG I", href: "#" },
     { label: "DRY-BAG III", href: "#" },
     { label: "Silica Gel", href: "#" },
     { label: "Dunnage Bags", href: "#" },
     { label: "Molecular Sieve", href: "#" },
   ],
   company: [
     { label: "About Us", href: "#about" },
     { label: "Industries", href: "#industries" },
     { label: "Resources", href: "#" },
     { label: "Contact", href: "#contact" },
   ],
   resources: [
     { label: "Downloads", href: "#" },
     { label: "FAQ", href: "#" },
     { label: "Technical Specs", href: "#" },
     { label: "Case Studies", href: "#" },
   ],
 };
 
 const Footer = () => {
   return (
     <footer className="bg-card border-t border-border">
       <div className="container mx-auto px-4 lg:px-8 py-16">
         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
           {/* Brand */}
           <div className="lg:col-span-2">
             <div className="mb-6">
               <span className="text-2xl font-black tracking-tighter text-foreground">
                 DRY<span className="text-primary">BAG</span>
               </span>
               <span className="block text-xs tracking-widest text-muted-foreground uppercase mt-1">
                 Desiccant Systems
               </span>
             </div>
             <p className="text-muted-foreground max-w-sm mb-6">
               Leading Danish manufacturer of high-quality desiccants, protecting 
               cargo worldwide since 1979.
             </p>
             <div className="flex gap-4">
               <a
                 href="#"
                 className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/20 flex items-center justify-center transition-colors"
               >
                 <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                 </svg>
               </a>
             </div>
           </div>
 
           {/* Products */}
           <div>
             <h4 className="font-semibold text-foreground mb-4">Products</h4>
             <ul className="space-y-3">
               {footerLinks.products.map((link) => (
                 <li key={link.label}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Company */}
           <div>
             <h4 className="font-semibold text-foreground mb-4">Company</h4>
             <ul className="space-y-3">
               {footerLinks.company.map((link) => (
                 <li key={link.label}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Resources */}
           <div>
             <h4 className="font-semibold text-foreground mb-4">Resources</h4>
             <ul className="space-y-3">
               {footerLinks.resources.map((link) => (
                 <li key={link.label}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {link.label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         </div>
 
         {/* Bottom bar */}
         <div className="section-divider mt-12 mb-8" />
         
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground">
             © 2024 DRY-BAG. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               Privacy Policy
             </a>
             <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               Terms of Service
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;