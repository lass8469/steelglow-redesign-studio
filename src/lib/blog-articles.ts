// ============================================================
// BLOG ARTICLE DATA - Easy to edit framework
// ============================================================
// 
// HOW TO ADD A NEW ARTICLE:
// 1. Add a new entry to the `articles` object below
// 2. Use the slug as the key (this becomes the URL: /blog/your-slug)
// 3. Fill in the article metadata and sections
// 4. Add the article to BlogPage.tsx blogPosts array for listing
//
// SECTION TYPES:
// - "text": Regular paragraph text
// - "heading": Section heading (h2)
// - "subheading": Subsection heading (h3)
// - "list": Bullet point list (items array)
// - "numbered-list": Numbered list (items array)
// - "image": Full-width image with caption
// - "callout": Highlighted info box
// - "quote": Block quote with optional attribution
// ============================================================

export type ArticleSection = 
  | { type: "text"; content: string }
  | { type: "heading"; content: string }
  | { type: "subheading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title: string; content: string }
  | { type: "quote"; content: string; attribution?: string };

export interface Article {
  // METADATA
  title: string;
  excerpt: string;
  date: string;           // Format: YYYY-MM-DD
  readTime: string;       // e.g., "5 min read"
  category: string;       // e.g., "Technical", "Best Practices", "Case Study"
  heroImage: string;      // Hero image URL or path
  author?: string;
  
  // CONTENT - Array of sections in order
  sections: ArticleSection[];
  
  // CTA - Customize the call-to-action at the bottom
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

// ============================================================
// ARTICLES DATABASE
// ============================================================

export const articles: Record<string, Article> = {
  
  // ------------------------------------------------------------
  // ARTICLE: Powdered Desiccants Guide
  // ------------------------------------------------------------
  "powdered-desiccants-guide": {
    title: "The Complete Guide to Powdered Desiccants",
    excerpt: "Discover the science behind powdered desiccants and how they protect your cargo from moisture damage during shipping and storage.",
    date: "2024-02-09",
    readTime: "5 min read",
    category: "Technical",
    heroImage: "/placeholder.svg",
    author: "DRY-BAG Technical Team",
    
    sections: [
      // SECTION 1: Introduction
      {
        type: "heading",
        content: "What Are Powdered Desiccants?",
      },
      {
        type: "text",
        content: "Powdered desiccants are finely ground hygroscopic materials designed to absorb moisture from the surrounding environment. Unlike their granular counterparts, powdered desiccants offer a significantly higher surface area-to-volume ratio, making them exceptionally efficient at moisture absorption.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Powdered desiccant close-up showing fine granular texture",
        caption: "Powdered desiccants offer superior surface area for moisture absorption",
      },
      
      // SECTION 2: Types
      {
        type: "heading",
        content: "Types of Powdered Desiccants",
      },
      {
        type: "subheading",
        content: "Silica Gel Powder",
      },
      {
        type: "text",
        content: "Silica gel in powdered form is one of the most versatile desiccants available. It's chemically inert, non-toxic, and can absorb up to 40% of its weight in water vapor. This makes it ideal for:",
      },
      {
        type: "list",
        items: [
          "Pharmaceutical packaging",
          "Electronics protection",
          "Food preservation",
          "Document archiving",
        ],
      },
      {
        type: "subheading",
        content: "Calcium Chloride Powder",
      },
      {
        type: "text",
        content: "Calcium chloride-based powdered desiccants are known for their aggressive moisture absorption capabilities. They can absorb moisture even at very low humidity levels and continue working until fully saturated.",
      },
      {
        type: "subheading",
        content: "Molecular Sieve Powder",
      },
      {
        type: "text",
        content: "For applications requiring extremely low humidity levels, molecular sieve powder is the gold standard. With precise pore sizes, it selectively adsorbs water molecules while excluding larger molecules.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Comparison of different desiccant types",
        caption: "Different desiccant types suited for various applications",
      },
      
      // SECTION 3: Applications
      {
        type: "heading",
        content: "Applications in Cargo Protection",
      },
      {
        type: "callout",
        title: "Did You Know?",
        content: "Container rain occurs when temperature fluctuations cause condensation inside shipping containers. A single 40ft container can release up to 1,000 liters of moisture during transit.",
      },
      {
        type: "subheading",
        content: "Container Shipping",
      },
      {
        type: "text",
        content: "During ocean freight, containers experience significant temperature fluctuations. This causes 'container rain' – condensation that forms on container walls and drips onto cargo. Powdered desiccants, when properly packaged, can prevent this phenomenon by maintaining low relative humidity inside the container.",
      },
      {
        type: "subheading",
        content: "Warehouse Storage",
      },
      {
        type: "text",
        content: "Long-term storage presents unique challenges. Powdered desiccants integrated into packaging materials provide continuous protection against ambient humidity fluctuations.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Shipping container with moisture protection",
        caption: "Proper desiccant placement ensures complete cargo protection",
      },
      
      // SECTION 4: Best Practices
      {
        type: "heading",
        content: "Best Practices for Implementation",
      },
      {
        type: "numbered-list",
        items: [
          "Calculate moisture load: Determine the total moisture that needs to be absorbed based on cargo type, transit time, and route conditions.",
          "Select appropriate quantity: Use industry-standard calculations to determine the correct amount of desiccant required.",
          "Proper placement: Distribute desiccants evenly throughout the cargo space for optimal protection.",
          "Monitor conditions: Use data loggers to verify that humidity levels remain within acceptable ranges.",
        ],
      },
      
      // SECTION 5: Why DRY-BAG
      {
        type: "heading",
        content: "The DRY-BAG Advantage",
      },
      {
        type: "text",
        content: "At DRY-BAG, we've been perfecting desiccant technology for over 45 years. Our powdered desiccant solutions are:",
      },
      {
        type: "list",
        items: [
          "Engineered for performance: Optimized absorption rates for maritime and ground transport",
          "Sustainably produced: Manufactured in Denmark with environmental responsibility",
          "Rigorously tested: Every batch meets our stringent quality standards",
          "Application-specific: Customized solutions for your unique cargo requirements",
        ],
      },
      {
        type: "quote",
        content: "Moisture damage costs the global shipping industry billions annually. The right desiccant solution isn't an expense—it's an investment in cargo integrity.",
        attribution: "DRY-BAG Technical Advisory",
      },
      
      // SECTION 6: Conclusion
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "text",
        content: "Powdered desiccants represent a crucial tool in the cargo protection arsenal. Their high efficiency, versatility, and reliability make them indispensable for protecting valuable shipments from moisture damage.",
      },
    ],
    
    // CTA at bottom of article
    cta: {
      heading: "Ready to Protect Your Cargo?",
      description: "Our technical team can help you design the optimal moisture protection strategy for your specific cargo and shipping routes.",
      buttonText: "Get Expert Advice",
      buttonLink: "/contact",
    },
  },

  // ------------------------------------------------------------
  // ADD MORE ARTICLES BELOW
  // ------------------------------------------------------------
  // Copy the template above and modify as needed
  
};
