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
  // ARTICLE: Vapor Pressure & Wooden Pallets
  // ------------------------------------------------------------
  "vapor-pressure-wooden-pallets": {
    title: "Vapor pressure explained: Why moisture \"hides\" in wooden pallets and how to get it out",
    excerpt: "Understanding the physics of vapor pressure reveals why wooden pallets trap moisture deep within their structure — and how to remove it effectively.",
    date: "2025-02-10",
    readTime: "7 min read",
    category: "Technical",
    heroImage: "/placeholder.svg",
    author: "DRY-BAG Technical Team",

    sections: [
      {
        type: "text",
        content: "Wooden pallets remain the workhorses of global logistics, yet beneath their rugged exterior lies a persistent problem: moisture that refuses to leave. Even pallets that feel dry to the touch can harbor significant water content deep within their structure, leading to mold growth, product damage, and failed heat treatment certifications.",
      },
      {
        type: "text",
        content: "The culprit isn't poor drying techniques alone. It's a fundamental physical principle called vapor pressure, and understanding how it works is essential for anyone managing wooden pallet inventory or operating heat treatment facilities.",
      },

      {
        type: "heading",
        content: "What vapor pressure actually means",
      },
      {
        type: "text",
        content: "Vapor pressure represents the tendency of water molecules to escape from wood into the surrounding air. Think of it as an invisible force pushing moisture from inside the wood outward toward the surface. Every material containing water has a vapor pressure that depends on temperature and moisture content.",
      },
      {
        type: "text",
        content: "Higher temperatures increase vapor pressure because heat provides water molecules with more energy to break free from the wood structure. This is why kiln drying operates at elevated temperatures: not just to speed the process, but to fundamentally increase the driving force that pushes moisture out.",
      },
      {
        type: "text",
        content: "The air surrounding the pallet also has its own vapor pressure, determined by temperature and humidity. When the vapor pressure inside the wood exceeds the vapor pressure of the surrounding air, moisture moves from the wood into the air. When these pressures equalize, drying stops, even if significant moisture remains trapped inside.",
      },

      {
        type: "heading",
        content: "Why moisture gets trapped in wood structure",
      },
      {
        type: "text",
        content: "Wood consists of cell walls, cell cavities, and intricate networks of capillaries. Moisture exists in two distinct forms: free water that fills the cell cavities, and bound water that adheres to the cell walls through hydrogen bonding.",
      },
      {
        type: "text",
        content: "Free water evaporates relatively easily once it reaches the surface. Bound water, however, clings to the cellular structure with considerable tenacity. As surface moisture evaporates, the outer layers dry and contract, creating a barrier that interior moisture must navigate. This barrier effect becomes more pronounced in thicker lumber sections commonly used in pallet stringers and deckboards.",
      },
      {
        type: "callout",
        title: "Case hardening",
        content: "Rapid surface drying can cause surface cells to collapse or harden, creating what kiln operators call case hardening. This dried shell acts like a seal, dramatically slowing moisture escape from the interior.",
      },
      {
        type: "text",
        content: "The moisture gradient that develops during drying creates a vapor pressure gradient as well. The wet interior has high vapor pressure, while the drier exterior has lower vapor pressure. However, the rate of movement depends on how easily water vapor can diffuse through the wood structure. Dense hardwoods resist moisture movement far more than porous softwoods, which is why oak pallets take substantially longer to dry than pine pallets of identical dimensions.",
      },

      {
        type: "heading",
        content: "The humidity factor and equilibrium moisture content",
      },
      {
        type: "text",
        content: "Wood stabilizes at an equilibrium moisture content (EMC) determined by the temperature and relative humidity of surrounding air. At 70 degrees Fahrenheit and 50 percent relative humidity, wood eventually stabilizes at approximately 9 percent moisture content.",
      },
      {
        type: "text",
        content: "Here's the practical challenge: if you dry pallets in a controlled environment but then move them to a humid warehouse, they will reabsorb moisture until reaching the new equilibrium point. The vapor pressure of moisture in humid air exceeds the vapor pressure within the now-dry wood, reversing the flow direction. This is why pallets that tested at 15 percent moisture content after heat treatment sometimes measure 20 percent or higher weeks later if stored in uncontrolled conditions.",
      },
      {
        type: "text",
        content: "This equilibrium concept explains why simply leaving pallets in a warehouse to \"air dry\" often fails. If the warehouse air is already saturated with moisture or moderately humid, the vapor pressure difference between the wood interior and air becomes too small to drive meaningful drying.",
      },

      {
        type: "heading",
        content: "Heat treatment and the vapor pressure solution",
      },
      {
        type: "text",
        content: "ISPM 15 regulations require wooden packaging materials to reach a core temperature of 56 degrees Celsius (133 degrees Fahrenheit) for minimum 30 minutes. While targeting wood-boring pests, heat treatment also demonstrates vapor pressure principles in action.",
      },
      {
        type: "text",
        content: "When pallet wood reaches these elevated temperatures, the vapor pressure of internal water increases exponentially. Water molecules gain enough kinetic energy to overcome hydrogen bonds holding them to cell walls. The temperature difference between the hot wood interior and cooler exterior creates a strong vapor pressure gradient that actively drives moisture toward the surface.",
      },
      {
        type: "callout",
        title: "Ventilation is critical",
        content: "If hot, moisture-laden air simply circulates within a closed chamber, the air's vapor pressure rises to match that of the wood, and moisture movement stops despite high temperature. Effective operations incorporate ventilation systems that continuously exhaust humid air and introduce drier makeup air.",
      },

      {
        type: "heading",
        content: "Practical moisture removal strategies",
      },
      {
        type: "text",
        content: "Getting moisture out of wooden pallets requires manipulating the vapor pressure equation in your favor. Several approaches accomplish this, each with distinct advantages.",
      },
      {
        type: "list",
        items: [
          "Kiln drying: The most controlled method — combining elevated temperatures with precisely managed humidity levels and air circulation to maintain optimal vapor pressure gradients throughout the drying cycle.",
          "Dehumidification drying: Uses refrigeration-based or desiccant-based dehumidifiers to continuously remove moisture from air in an enclosed space, maintaining a consistent driving force for moisture to leave the wood.",
          "Optimized air drying: Stacking pallets with adequate spacing, using fans for air movement, and positioning stacks in areas with lower ambient humidity to increase the vapor pressure differential.",
        ],
      },
      {
        type: "text",
        content: "For operations without specialized drying equipment, understanding vapor pressure still informs better practices. Storing pallets in climate-controlled spaces prevents moisture reabsorption. Using moisture meters to verify pallets have reached equilibrium with storage conditions before shipping prevents surprises.",
      },

      {
        type: "heading",
        content: "Monitoring and quality control",
      },
      {
        type: "text",
        content: "Moisture meters provide the practical means of verifying that vapor pressure manipulation has successfully reduced moisture content. Pin-type meters measure electrical resistance between two pins driven into the wood. Pinless meters use electromagnetic waves to scan density variations associated with moisture.",
      },
      {
        type: "callout",
        title: "Surface vs. core readings",
        content: "For pallets with stringers exceeding two inches in thickness, core moisture can remain 10 to 15 percentage points higher than surface moisture even after weeks of drying. Always measure at the core for accurate results.",
      },

      {
        type: "heading",
        content: "Common misconceptions about pallet drying",
      },
      {
        type: "text",
        content: "The belief that time alone will dry pallets persists in operations without formal drying procedures. While extended air exposure can reduce moisture, the time required depends entirely on vapor pressure conditions. Pallets stored in humid warehouses may require months to reach acceptable moisture levels, if they reach them at all.",
      },
      {
        type: "text",
        content: "Visual inspection provides almost no reliable information about moisture content. Wood surfaces can feel dry while interior sections remain saturated because capillary forces prevent moisture from reaching the surface faster than it evaporates.",
      },
      {
        type: "text",
        content: "The assumption that heat treatment alone adequately dries pallets overlooks the distinction between pest elimination and moisture reduction. Heat treatment raises wood temperature to lethal levels for insects, but the 30-minute minimum duration may not provide sufficient time for meaningful moisture reduction in thick sections.",
      },

      {
        type: "heading",
        content: "Moisture problems and their vapor pressure roots",
      },
      {
        type: "text",
        content: "Mold growth on supposedly dried pallets traces directly to trapped moisture that failed to escape due to inadequate vapor pressure management. Mold spores only germinate when wood moisture content exceeds approximately 20 percent. Pallets that appear dry on the surface but retain moisture in protected areas provide ideal germination sites.",
      },
      {
        type: "text",
        content: "Load damage from moisture-softened wood occurs when bound water weakens the lignin matrix that gives wood its structural rigidity. Pallets loaded when dry but exposed to high-humidity conditions during storage or transit absorb moisture, reducing their strength below design specifications.",
      },
      {
        type: "text",
        content: "Heat treatment certification failures frequently result from moisture gradients that leave wood cores below required temperatures. Water has high specific heat capacity, meaning wet wood requires substantially more energy to heat than dry wood.",
      },

      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "text",
        content: "Understanding vapor pressure transforms moisture management from a vague concept of \"letting wood dry\" into a controllable process with measurable parameters and predictable outcomes. By recognizing that moisture movement follows vapor pressure gradients determined by temperature, humidity, and wood moisture content, operations can implement targeted interventions that actually remove moisture rather than simply hoping it disappears over time.",
      },
    ],

    cta: {
      heading: "Need help managing moisture in your supply chain?",
      description: "Our technical team can help you select the right desiccant solutions to protect your cargo from moisture trapped in wooden pallets and packaging.",
      buttonText: "Get expert advice",
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
