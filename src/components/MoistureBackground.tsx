import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MoistureBackgroundProps {
  variant?: "default" | "large";
  className?: string;
  children: React.ReactNode;
}

const MoistureBackground = ({ 
  variant = "default", 
  className = "",
  children 
}: MoistureBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Animated moisture layer */}
      <motion.div
        className={`absolute inset-0 pointer-events-none ${
          variant === "large" ? "moisture-droplets-lg" : "moisture-droplets"
        }`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Multiple droplet layers with different drift speeds */}
        <motion.div
          className="droplet-layer droplet-layer-1"
          animate={isInView ? {
            y: [0, 80, 0],
            opacity: [0.6, 0.8, 0.6],
          } : {}}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="droplet-layer droplet-layer-2"
          animate={isInView ? {
            y: [0, 60, 0],
            opacity: [0.5, 0.7, 0.5],
          } : {}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="droplet-layer droplet-layer-3"
          animate={isInView ? {
            y: [0, 100, 0],
            opacity: [0.4, 0.6, 0.4],
          } : {}}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MoistureBackground;
