import { motion } from "framer-motion";
import { Star, Quote, Award } from "lucide-react";
import varoLogo from "@/assets/logo-varo.png";
import babydanLogo from "@/assets/logo-babydan.png";
import kkWindLogo from "@/assets/logo-kk-wind.svg";
import envasesLogo from "@/assets/logo-envases.png";
import r2Logo from "@/assets/logo-r2.svg";
import palbyLogo from "@/assets/logo-palby.png";
import srpackLogo from "@/assets/logo-srpack.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageMeta } from "@/hooks/usePageMeta";

const SocialProofPage = () => {
  const { t } = useLanguage();
  usePageMeta(t("meta.testimonials.title"), t("meta.testimonials.description"));

  // Placeholder logos - replace with actual company logos
  const trustedLogos = [
    { name: "VARO", icon: null, accent: true, logo: varoLogo },
    { name: "BabyDan", icon: null, accent: false, logo: babydanLogo },
    { name: "KK Wind Solutions", icon: null, accent: true, logo: kkWindLogo },
    { name: "Envases", icon: null, accent: false, logo: envasesLogo },
    { name: "R2 Group", icon: null, accent: true, logo: r2Logo },
    { name: "Palby Marine", icon: null, accent: false, logo: palbyLogo },
    { name: "SR Pack", icon: null, accent: false, logo: srpackLogo },
  ];

  const textReviews = [
    {
      name: t("socialProof.review1.name"),
      role: t("socialProof.review1.role"),
      company: t("socialProof.review1.company"),
      text: t("socialProof.review1.text"),
      rating: 5,
    },
    {
      name: t("socialProof.review2.name"),
      role: t("socialProof.review2.role"),
      company: t("socialProof.review2.company"),
      text: t("socialProof.review2.text"),
      rating: 5,
    },
    {
      name: t("socialProof.review3.name"),
      role: t("socialProof.review3.role"),
      company: t("socialProof.review3.company"),
      text: t("socialProof.review3.text"),
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <MoistureBackground variant="large" className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("socialProof.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t("socialProof.title1")}
              <span className="block text-gradient">{t("socialProof.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("socialProof.description")}
            </p>
          </motion.div>
        </div>
      </MoistureBackground>

      {/* Trusted By Banner */}
      <section className="py-16 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              {t("socialProof.trustedBy")}
            </h2>
          </motion.div>
          
          <div className="overflow-hidden">
            <div className="logo-marquee-track">
              {[...Array(4)].map((_, setIndex) => (
                trustedLogos.map((logo, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex items-center justify-center h-16 px-10 flex-shrink-0"
                  >
                    {logo.logo ? (
                      <img src={logo.logo} alt={logo.name} className="max-h-10 w-auto object-contain" />
                    ) : (
                      <span className="font-bold text-sm tracking-tight text-muted-foreground whitespace-nowrap">
                        {logo.name}
                      </span>
                    )}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Text Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("socialProof.reviewsTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("socialProof.reviewsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {textReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-sm p-8 relative group hover:border-primary/30 transition-colors"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.role ? `${review.role}, ${review.company}` : review.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("socialProof.ctaTitle")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("socialProof.ctaDesc")}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              {t("socialProof.ctaButton")}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialProofPage;
