import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import MoistureBackground from "@/components/MoistureBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <MoistureBackground variant="large" className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Droplets className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-7xl md:text-8xl font-black tracking-tight text-foreground mb-4">
              4<span className="text-gradient">0</span>4
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Oops! This page has been absorbed.
            </p>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Like moisture in a container, this page has vanished. Let's get you back to dry ground.
            </p>

            <Button size="lg" className="font-semibold px-8" asChild>
              <LocalizedLink to="/">
                Back to Homepage
              </LocalizedLink>
            </Button>
          </motion.div>
        </div>
      </MoistureBackground>
      <Footer />
    </div>
  );
};

export default NotFound;
