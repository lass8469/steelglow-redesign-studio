import { useState } from "react";
import { Wind, Factory, Apple, Pill } from "lucide-react";
import MoistureBackground from "./MoistureBackground";
import industryWind from "@/assets/industry-wind.jpg";
import industryMetal from "@/assets/industry-metal.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";

const industries = [
  {
    id: "wind",
    icon: Wind,
    title: "Wind Energy",
    image: industryWind,
    description:
      "Desiccants prevent moisture from corroding critical components within wind turbines, such as gearboxes and generators. By maintaining a dry internal environment, they extend lifespan and ensure reliable operation.",
  },
  {
    id: "metals",
    icon: Factory,
    title: "Metals Industry",
    image: industryMetal,
    description:
      "Protect steel coils, aluminum sheets, and precision metal components from rust and oxidation during shipping. Our solutions ensure metals arrive in pristine condition.",
  },
  {
    id: "food",
    icon: Apple,
    title: "Food & Feed",
    image: industryFood,
    description:
      "Safeguard food ingredients and animal feed from moisture-induced spoilage. Our food-safe desiccants maintain product quality throughout the supply chain.",
  },
  {
    id: "pharma",
    icon: Pill,
    title: "Pharmaceuticals",
    image: industryPharma,
    description:
      "Pharmaceutical-grade molecular sieve desiccants ensure medication stability and efficacy. Meet stringent regulatory requirements with our certified solutions.",
  },
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <MoistureBackground variant="default" className="bg-secondary">
      <section id="industries" className="py-24 lg:py-32">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
             Applications
           </span>
           <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
             Tailored Solutions for 
             <span className="text-gradient"> Every Industry</span>
           </h2>
           <p className="text-lg text-muted-foreground">
             Discover how our moisture control solutions protect critical assets 
             across diverse industries worldwide.
           </p>
         </div>
 
         {/* Industry selector */}
         <div className="grid lg:grid-cols-12 gap-8">
           {/* Tabs */}
           <div className="lg:col-span-4 space-y-3">
             {industries.map((industry) => (
               <button
                 key={industry.id}
                 onClick={() => setActiveIndustry(industry)}
                 className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                   activeIndustry.id === industry.id
                     ? "bg-primary text-primary-foreground"
                     : "bg-card border border-border text-foreground hover:bg-accent"
                 }`}
               >
                 <div
                   className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                     activeIndustry.id === industry.id
                       ? "bg-primary-foreground/20"
                       : "bg-primary/10"
                   }`}
                 >
                   <industry.icon
                     className={`w-6 h-6 ${
                       activeIndustry.id === industry.id
                         ? "text-primary-foreground"
                         : "text-primary"
                     }`}
                   />
                 </div>
                 <span className="font-semibold">{industry.title}</span>
               </button>
             ))}
           </div>
 
           {/* Content */}
           <div className="lg:col-span-8">
             <div className="relative rounded-2xl overflow-hidden">
               <img
                 src={activeIndustry.image}
                 alt={activeIndustry.title}
                 className="w-full aspect-video object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
               
               <div className="absolute bottom-0 left-0 right-0 p-8">
                 <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                   {activeIndustry.title}
                 </h3>
                 <p className="text-muted-foreground max-w-2xl">
                   {activeIndustry.description}
                 </p>
               </div>
             </div>
           </div>
          </div>
        </div>
      </section>
    </MoistureBackground>
  );
};

export default Industries;