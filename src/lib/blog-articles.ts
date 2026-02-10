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
  // ARTICLE: Container Rain
  // ------------------------------------------------------------
  "container-rain-dew-point-physics": {
    title: "Container rain: Why dew point physics makes moisture damage inevitable during ocean transit",
    excerpt: "Understanding the thermodynamic forces that turn shipping containers into condensation chambers, and the only proven solution that works at scale.",
    date: "2025-02-10",
    readTime: "8 min read",
    category: "Technical",
    heroImage: "/placeholder.svg",
    author: "DRY-BAG Technical Team",

    sections: [
      {
        type: "text",
        content: "Every day, approximately 250,000 shipping containers cross the world's oceans. Inside these steel boxes, a silent meteorological event unfolds that costs the global supply chain an estimated $6–8 billion annually: container rain. This phenomenon isn't caused by leaks or poor packaging. It's the inevitable result of fundamental physics meeting the reality of transoceanic temperature gradients.",
      },

      {
        type: "heading",
        content: "The dew point equation: where physics meets logistics",
      },
      {
        type: "text",
        content: "The dew point represents the temperature at which air becomes saturated with moisture and condensation begins. This isn't a theoretical concern. It's a mathematical certainty governed by the Clausius-Clapeyron equation, which describes how air's moisture-holding capacity changes with temperature.",
      },
      {
        type: "callout",
        title: "The critical relationship",
        content: "For every 10°C (18°F) increase in temperature, air can hold approximately twice as much water vapor. Conversely, when temperature drops, that moisture-holding capacity plummets, forcing excess water vapor to condense on the coldest available surfaces.",
      },
      {
        type: "text",
        content: "A standard 40-foot high-cube container sealed at a humid port in Southeast Asia might contain air at 30°C (86°F) with 80% relative humidity. That air holds approximately 24 grams of water per cubic meter. When that same container crosses into cooler Pacific waters or arrives at a temperate-zone port where nighttime temperatures drop to 10°C (50°F), the air's capacity crashes to just 9.4 grams per cubic meter.",
      },
      {
        type: "text",
        content: "The difference — 14.6 grams per cubic meter — must go somewhere. In a 76-cubic-meter container, that's over 1,100 grams (more than a liter) of water that will condense as 'container rain,' dripping onto cargo, pooling in corners, and creating ideal conditions for mold growth.",
      },

      {
        type: "heading",
        content: "Why temperature swings are unavoidable",
      },
      {
        type: "text",
        content: "Unlike temperature-controlled logistics, standard container shipping operates without climate control — and for good reason. The economics simply don't support refrigerated transport for the vast majority of goods. But this means containers are subject to dramatic thermal variation:",
      },
      {
        type: "list",
        items: [
          "Equatorial to temperate routes: A container leaving Singapore (average 27°C) bound for Hamburg (average 9°C) will experience an 18°C temperature differential — enough to cut air's moisture capacity by more than half.",
          "Diurnal cycling: Even on a single route, containers experience day-night temperature swings of 15–20°C. Steel containers heat rapidly under direct sunlight (surface temperatures can exceed 60°C) and cool quickly at night, creating multiple condensation cycles during a single voyage.",
          "Cargo itself as a moisture source: Many products (timber, agricultural goods, textiles) contain hygroscopic materials that release moisture as temperatures rise, adding to the container's humidity burden.",
          "Hull positioning effects: Containers on deck experience more extreme temperature variations from solar radiation and wind chill, while those in the hold face different thermal dynamics from the ship's hull temperature.",
        ],
      },
      {
        type: "text",
        content: "The shipping industry has no mechanism to prevent these swings. Containers are passive steel boxes designed for structural integrity and standardization, not thermal stability. The temperature will fluctuate — it's not a matter of if, but when and by how much.",
      },

      {
        type: "heading",
        content: "Why alternative solutions fall short",
      },
      {
        type: "subheading",
        content: "Ventilation",
      },
      {
        type: "text",
        content: "While some containers feature ventilation slots, these create as many problems as they solve. In humid climates, ventilation introduces more moisture-laden air. In temperature transitions, ventilation can actually accelerate condensation by bringing in warm, humid air that immediately contacts cold container walls.",
      },
      {
        type: "subheading",
        content: "Vapor barriers and packaging",
      },
      {
        type: "text",
        content: "Shrink-wrapping and vapor barrier films protect individual items but trap moisture between the barrier and the container wall; any breach in the barrier negates the protection entirely. These solutions also add significant material costs and labor time.",
      },
      {
        type: "subheading",
        content: "Thermal blankets and liners",
      },
      {
        type: "text",
        content: "Insulated container liners reduce the rate of temperature change but cannot prevent it. They add substantial cost and still allow condensation to occur — the condensation just happens more slowly and potentially in less visible locations.",
      },
      {
        type: "subheading",
        content: "Dehumidification equipment",
      },
      {
        type: "text",
        content: "Active dehumidifiers require power sources that standard containers lack. Solar-powered units exist but add thousands of dollars in equipment cost, require maintenance, and introduce failure points.",
      },
      {
        type: "text",
        content: "Each of these approaches attempts to fight against thermodynamics rather than accepting the reality of temperature variation and addressing its consequences directly.",
      },

      {
        type: "heading",
        content: "Desiccants: the economically rational solution",
      },
      {
        type: "text",
        content: "Desiccant moisture absorbers work with physics rather than against it. These passive moisture control systems — typically calcium chloride or clay-based formulations — absorb water vapor from the air, preventing it from reaching dew point and condensing on surfaces.",
      },
      {
        type: "callout",
        title: "The economic advantage",
        content: "Container desiccants cost approximately 0.1–0.3% of typical cargo value — a negligible insurance cost against moisture damage that can destroy 10–100% of a shipment's value.",
      },
      {
        type: "text",
        content: "Compare this to a single moisture-damaged container of electronics ($50,000+ in losses), furniture (frequently total loss for upholstered items), or food products (automatic rejection for mold contamination).",
      },
      {
        type: "quote",
        content: "Unlike active systems, desiccants have no moving parts, require no power, and cannot 'fail' in the traditional sense. They simply continue absorbing moisture until saturated.",
        attribution: "DRY-BAG Technical Advisory",
      },

      {
        type: "heading",
        content: "Industry consensus on desiccants in shipping",
      },
      {
        type: "text",
        content: "Major shipping lines and freight forwarders have largely converged on desiccants as best practice for moisture-sensitive cargo. The Container Owners Association and TT Club (the leading transport and logistics insurer) both recommend desiccant use for any cargo susceptible to moisture damage.",
      },
      {
        type: "text",
        content: "Claims data supports this consensus. Analysis of moisture-damage insurance claims shows that containers using properly specified desiccants experience moisture damage at rates 85–95% lower than unprotected containers on comparable routes.",
      },

      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "text",
        content: "The physics is unambiguous: temperature will vary, dew point condensation will occur, and moisture damage will result — unless that moisture is captured before it condenses. Desiccants represent the only passive, reliable, economically scaled solution to this fundamental challenge.",
      },
      {
        type: "text",
        content: "For supply chain professionals managing moisture-sensitive cargo, the question isn't whether to use desiccants, but only how many to specify. The thermodynamics of container shipping have already answered that first question definitively.",
      },
    ],

    cta: {
      heading: "Protect your cargo from container rain",
      description: "Our technical team can help you calculate the right desiccant specification for your routes, cargo types, and shipping schedules.",
      buttonText: "Get expert advice",
      buttonLink: "/contact",
    },
  },

  // ------------------------------------------------------------
  // ADD MORE ARTICLES BELOW
  // ------------------------------------------------------------
  // Copy the template above and modify as needed

};
