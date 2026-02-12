import { useState } from "react";
import { Wind, Factory, Apple, Pill } from "lucide-react";
import MoistureBackground from "./MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import industryWind from "@/assets/industry-wind.jpg";
import industryMetal from "@/assets/industry-metal.jpg";
import industryFood from "@/assets/industry-food.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    {
      id: "wind",
      icon: Wind,
      title: t("industries.wind.title"),
      image: industryWind,
      description: t("industries.wind.desc"),
    },
    {
      id: "metals",
      icon: Factory,
      title: t("industries.metals.title"),
      image: industryMetal,
      description: t("industries.metals.desc"),
    },
    {
      id: "food",
      icon: Apple,
      title: t("industries.food.title"),
      image: industryFood,
      description: t("industries.food.desc"),
    },
    {
      id: "pharma",
      icon: Pill,
      title: t("industries.pharma.title"),
      image: industryPharma,
      description: t("industries.pharma.desc"),
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleIndustryChange = (industry: typeof industries[0]) => {
    if (industry.id === activeIndustry.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndustry(industry);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <MoistureBackground variant="default" className="bg-secondary">
      <section id="industries" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              {t("industries.badge")}
            </span>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
              {t("industries.title1")}
              <span className="text-gradient"> {t("industries.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("industries.description")}
            </p>
          </div>

          {/* Industry selector */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => handleIndustryChange(industry)}
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
                  loading="lazy"
                  className={`w-full aspect-video object-cover transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
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
