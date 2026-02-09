import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoistureBackground from "@/components/MoistureBackground";
import productDunnage from "@/assets/product-dunnage.jpg";
import productDrybag from "@/assets/product-drybag.jpg";
import productSilica from "@/assets/product-silica.jpg";
import productDrybag3 from "@/assets/product-drybag3.jpg";
import productDrybagI from "@/assets/product-drybag-i.jpg";
import productDrybagIII from "@/assets/product-drybag-iii.jpg";
import productDunnageBag from "@/assets/product-dunnage-bag.jpg";
import productSilicaGel from "@/assets/product-silica-gel.jpg";
import productAntislip from "@/assets/product-antislip.jpg";
import productRetail from "@/assets/product-retail.jpg";
import productEdgeProtectors from "@/assets/product-edge-protectors.jpg";

const desiccantProducts = [
  {
    image: productDrybagI,
    title: "DRY-BAG I",
    subtitle: "Original Formula",
    description: "Clay-based desiccant engineered for long ocean journeys with up to 60 days protection.",
    link: "/drybag-i",
  },
  {
    image: productDrybagIII,
    title: "DRY-BAG III",
    subtitle: "Bentonite Clay",
    description: "Industrial-grade desiccant made from natural bentonite clay, eco-friendly and biodegradable.",
    link: "/drybag-iii",
  },
  {
    image: productSilicaGel,
    title: "Silica Gel",
    subtitle: "E-Commerce Ready",
    description: "Premium silica gel packets for in-box moisture protection with FDA approval.",
    link: "/silica",
  },
  {
    image: "/placeholder.svg",
    title: "Molecular Sieve",
    subtitle: "Pharma Grade",
    description: "Ultra-low humidity desiccant for pharmaceutical and medical device applications.",
    link: "/molecular-sieve",
  },
  {
    image: "/placeholder.svg",
    title: "Calcium Chloride",
    subtitle: "High Capacity",
    description: "Absorbs 3X more moisture than standard silica gel for long ocean voyages.",
    link: "/calcium-chloride",
  },
];

const cargoProducts = [
  {
    image: productDunnageBag,
    title: "Dunnage Bag",
    subtitle: "Kraft Paper & PP Woven",
    description: "Industrial air bags for cargo stabilization during rail, truck, and ocean transport.",
    link: "/dunnage-bag",
  },
  {
    image: productEdgeProtectors,
    title: "Edge Protectors",
    subtitle: "FSC Certified",
    description: "Cardboard corner protection for palletized goods, recyclable and sustainable.",
    link: "/edge-protectors",
  },
  {
    image: productAntislip,
    title: "Anti-Slip Sheets",
    subtitle: "High Friction",
    description: "Paper sheets that prevent sliding between stacked layers on pallets.",
    link: "/anti-slip",
  },
  {
    image: "/placeholder.svg",
    title: "Stabustrap",
    subtitle: "Reusable Strapping",
    description: "Eco-friendly, reusable pallet strapping that replaces single-use plastic wrap.",
    link: "/stabustrap",
  },
];

const otherProducts = [
  {
    image: productRetail,
    title: "Retail Products",
    subtitle: "Consumer Ready",
    description: "Regenerable moisture absorbers for boats, campers, basements, and home use.",
    link: "/retail",
  },
  {
    image: "/placeholder.svg",
    title: "Datalogger",
    subtitle: "Temperature & Humidity",
    description: "USB plug-and-play monitoring devices with automatic report generation.",
    link: "/datalogger",
  },
];

const ProductCard = ({ product }: { product: typeof desiccantProducts[0] }) => (
  <div className="product-card group bg-card border border-border rounded-xl overflow-hidden">
    <div className="relative aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
    </div>
    
    <div className="p-6">
      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
        {product.subtitle}
      </span>
      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
        {product.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {product.description}
      </p>
      <Button
        variant="ghost"
        size="sm"
        className="text-primary hover:text-primary hover:bg-primary/10 -ml-3 group/btn"
        asChild
      >
        <Link to={product.link}>
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </Button>
    </div>
  </div>
);

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Products</span>
        </nav>
      </div>

      {/* Hero Section */}
      <MoistureBackground variant="large" className="bg-background">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                Our Solutions
              </span>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Industrial-Grade 
                <span className="text-gradient"> Protection Products</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive range of desiccants, cargo protection solutions, 
                and monitoring devices designed to protect your goods during storage and transport.
              </p>
            </div>
          </div>
        </section>
      </MoistureBackground>

      {/* Desiccants Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              Moisture Protection
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Desiccants
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Professional-grade moisture absorbers for shipping containers, packaging, and industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {desiccantProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Protection Section */}
      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
                Cargo Security
              </span>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
                Cargo Protection
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Solutions to stabilize, secure, and protect your cargo during transport and handling.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cargoProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>
          </div>
        </section>
      </MoistureBackground>

      {/* Other Products Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
              Additional Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Other Products
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Consumer products and monitoring solutions for specialized applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <MoistureBackground className="bg-background">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
              Need Help Choosing the
              <span className="text-gradient"> Right Solution?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team of experts can help you select the perfect protection solution 
              for your specific application and cargo requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                asChild
              >
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent"
                asChild
              >
                <Link to="/applications">
                  View Applications
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </MoistureBackground>

      <Footer />
    </div>
  );
};

export default ProductsPage;
