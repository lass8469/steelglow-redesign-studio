 import { ChevronDown, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroBg from "@/assets/hero-bg.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Background image with overlay */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${heroBg})` }}
       />
       <div className="absolute inset-0 hero-overlay" />
       
       {/* Gradient accent */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
 
       {/* Content */}
       <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
         <div className="max-w-4xl">
           <div className="animate-fade-in-up">
             <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
               Industry-Leading Protection
             </span>
           </div>
           
           <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
             YOUR PARTNER IN
             <br />
             <span className="bg-gradient-to-r from-[#8B2D2D] via-[#D4652F] to-[#F5B82E] bg-clip-text text-transparent">MOISTURE CONTROL</span>
             <br />
             & CARGO SAFETY
           </h1>
           
           <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
             Discover our innovative and sustainable solutions for protecting 
             your goods from moisture damage and ensuring stable transport worldwide.
           </p>
 
           <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
             <Button
               size="lg"
               className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base glow-orange group"
             >
               Explore Products
               <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
             </Button>
             <Button
               variant="outline"
               size="lg"
               className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 h-14 text-base"
             >
               Contact Us
             </Button>
           </div>
 
           {/* Stats */}
           <div className="animate-fade-in-up delay-400 mt-16 grid grid-cols-3 gap-8 max-w-lg">
             <div>
               <div className="text-3xl lg:text-4xl font-black text-primary">45+</div>
               <div className="text-sm text-muted-foreground">Years Experience</div>
             </div>
             <div>
               <div className="text-3xl lg:text-4xl font-black text-primary">100+</div>
               <div className="text-sm text-muted-foreground">Countries Served</div>
             </div>
             <div>
               <div className="text-3xl lg:text-4xl font-black text-primary">24/7</div>
               <div className="text-sm text-muted-foreground">Global Support</div>
             </div>
           </div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <a
         href="#about"
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
       >
         <ChevronDown size={32} />
       </a>
     </section>
   );
 };
 
 export default Hero;