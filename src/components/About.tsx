import { Shield, Leaf, Globe, Award } from "lucide-react";
import MoistureBackground from "./MoistureBackground";
const features = [{
  icon: Globe,
  title: "Located in Denmark",
  description: "Headquartered in the heart of Scandinavian innovation"
}, {
  icon: Award,
  title: "Since 1979",
  description: "Over four decades of moisture control expertise"
}, {
  icon: Leaf,
  title: "Eco-Friendly Production",
  description: "Sustainable practices for a greener future"
}, {
  icon: Shield,
  title: "Tailored Solutions",
  description: "Custom-engineered for your specific needs"
}];
const About = () => {
  return <MoistureBackground variant="default" className="bg-secondary">
      <section id="about" className="py-24 lg:py-32">
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Text content */}
           <div>
             <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
               About DRY-BAG
             </span>
             
             <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
               Leading Danish Manufacturer of 
               <span className="text-gradient"> High-Quality Desiccants</span>
             </h2>
             
             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
               DRY-BAG is a leading Danish manufacturer of high-quality desiccants, 
               specifically engineered to safeguard your goods during transit for both 
               export and e-commerce. We understand the critical need to protect products 
               from moisture damage, ensuring they arrive at their destination in perfect 
               condition, every time.
             </p>
 
             <div className="grid sm:grid-cols-2 gap-6">
               {features.map((feature, index) => <div key={feature.title} className="flex gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                   <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                     <feature.icon className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                     <p className="text-sm text-muted-foreground">{feature.description}</p>
                   </div>
                 </div>)}
             </div>
           </div>
 
           {/* Visual element */}
           <div className="relative">
             <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent to-background p-8 lg:p-12">
               <div className="h-full rounded-xl bg-card border border-border flex items-center justify-center">
                 <div className="text-center p-8">
                   <div className="text-8xl lg:text-9xl font-black text-gradient mb-4">45+</div>
                   <div className="text-xl lg:text-2xl font-semibold text-foreground">Years of Excellence</div>
                   <div className="text-muted-foreground">Protecting cargo worldwide</div>
                 </div>
               </div>
             </div>
             
             {/* Decorative elements */}
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
           </div>
          </div>
        </div>
      </section>
    </MoistureBackground>;
};
export default About;