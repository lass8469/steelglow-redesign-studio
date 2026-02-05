 import { ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import productDunnage from "@/assets/product-dunnage.jpg";
 import productDrybag from "@/assets/product-drybag.jpg";
 import productSilica from "@/assets/product-silica.jpg";
 import productDrybag3 from "@/assets/product-drybag3.jpg";
 
 const products = [
   {
     image: productDunnage,
     title: "Dunnage Bag",
     subtitle: "Kraft Paper & PP Woven",
     description: "Industrial air bags for cargo stabilization during transport",
   },
   {
     image: productDrybag,
     title: "DRY-BAG I",
     subtitle: "Original Formula",
     description: "Clay-based desiccant engineered for long ocean journeys",
   },
   {
     image: productSilica,
     title: "Silica Gel",
     subtitle: "E-Commerce Ready",
     description: "Premium silica gel packets for in-box moisture protection",
   },
   {
     image: productDrybag3,
     title: "DRY-BAG III",
     subtitle: "Bentonite Clay",
     description: "Industrial-grade desiccant available in multiple sizes",
   },
 ];
 
 const Products = () => {
   return (
     <section id="products" className="py-24 lg:py-32 bg-background">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
             Featured Products
           </span>
           <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6">
             Industrial-Grade 
             <span className="text-gradient"> Protection Solutions</span>
           </h2>
           <p className="text-lg text-muted-foreground">
             Explore our range of innovative solutions designed to protect your goods 
             and optimize your logistics operations.
           </p>
         </div>
 
         {/* Products grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.map((product, index) => (
             <div
               key={product.title}
               className="product-card group bg-card border border-border rounded-xl overflow-hidden"
             >
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
                 >
                   Learn More
                   <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                 </Button>
               </div>
             </div>
           ))}
         </div>
 
         {/* CTA */}
         <div className="text-center mt-12">
           <Button
             size="lg"
             className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
           >
             View All Products
             <ArrowRight className="ml-2 h-5 w-5" />
           </Button>
         </div>
       </div>
     </section>
   );
 };
 
 export default Products;