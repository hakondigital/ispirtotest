/* ─────────────────────────────────────────────────────────
   Ispirto Property Advisory – Site Content & Configuration
   ───────────────────────────────────────────────────────── */

// ── Company ──
export const company = {
  name: "Ispirto Property Advisory",
  tagline: "Your Strategic Partner in Property",
  phone: "0408 860 956",
  phoneHref: "tel:+61408860956",
  email: "jeren@ispirtopropertyadvisory.com.au",
  abn: "45 493 659 317",
  instagram: "https://www.instagram.com/ispirtopropertyadvisory/",
  instagramHandle: "@ispirtopropertyadvisory",
  location: "Sydney, NSW",
  serviceArea: "Home Buyers & Investors Australia-Wide",
  principal: "Jeren Ispirto",
};

// ── Navigation ──
export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

// ── Hero ──
export const hero = {
  headline: "Strategic Property Advisory for Serious Buyers & Investors",
  subheadline:
    "We research, advocate and negotiate on your behalf — securing the right property at the right price, whether you're buying your first home or building a portfolio.",
  pills: [
    "Buyers Agent & Advocate",
    "Off-Market Access",
    "Australia-Wide Service",
  ],
  ctaPrimary: "Book a Discovery Call",
  ctaSecondary: "See How It Works",
};

// ── About ──
export const about = {
  headline: "Who We Are",
  intro:
    "Ispirto Property Advisory was founded with a clear purpose — to give home buyers and investors an unfair advantage in the property market.",
  body: [
    "Led by Jeren Ispirto, we operate as your dedicated buyers agent and advocate. We don't sell property — we buy it for you. That means our interests are always aligned with yours.",
    "From first-home buyers navigating a competitive market to seasoned investors seeking high-yield opportunities, we bring deep market research, strategic negotiation and access to properties most buyers never see.",
    "Based in Sydney and servicing buyers Australia-wide, we combine local expertise with a data-driven approach. Every brief is treated as unique, because no two property goals are the same.",
  ],
  values: [
    {
      title: "Independent Advice",
      description:
        "We work exclusively for buyers. No conflicts of interest, no sales commissions from vendors.",
    },
    {
      title: "Research-Led Strategy",
      description:
        "Every recommendation is backed by thorough due diligence, market analysis and comparable data.",
    },
    {
      title: "Personalised Guidance",
      description:
        "Your property brief drives everything. We tailor our search, strategy and negotiation to your specific goals.",
    },
  ],
};

// ── Services ──
export type Service = {
  title: string;
  description: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    title: "Buyers Agency for Home Owners",
    description:
      "Whether you're a first-home buyer or upgrading, we search, evaluate and negotiate on your behalf so you can buy with confidence — without the stress of going it alone.",
    outcomes: [
      "Access to on-market and off-market properties",
      "Independent property assessments and due diligence",
      "Skilled negotiation to secure the best possible price",
    ],
  },
  {
    title: "Investment Property Acquisition",
    description:
      "We help investors identify high-growth, high-yield opportunities aligned with their financial strategy. From suburb selection to settlement, we manage the entire process.",
    outcomes: [
      "Data-driven suburb and property analysis",
      "Portfolio strategy aligned with your financial goals",
      "Connections to trusted mortgage brokers and advisors",
    ],
  },
  {
    title: "Off-Market Property Access",
    description:
      "Many of the best properties never hit the open market. Through our extensive agent network, we source exclusive opportunities before they're publicly listed.",
    outcomes: [
      "Early access to pre-market and off-market listings",
      "Reduced competition and better negotiation leverage",
      "Exclusive network of selling agents across Australia",
    ],
  },
  {
    title: "Auction Bidding & Negotiation",
    description:
      "Auctions can be high-pressure and emotional. We represent you with composure, strategy and deep knowledge of bidding psychology to secure the win.",
    outcomes: [
      "Professional auction representation on your behalf",
      "Strategic bidding plans tailored to each auction",
      "Post-auction negotiation if the property passes in",
    ],
  },
  {
    title: "Research & Due Diligence",
    description:
      "Before any purchase, we conduct thorough research — market comparables, zoning checks, building assessments and rental yield analysis to ensure you're making a sound decision.",
    outcomes: [
      "Comprehensive comparable market analysis",
      "Zoning, planning and council compliance checks",
      "Rental appraisal and investment return modelling",
    ],
  },
  {
    title: "End-to-End Purchase Support",
    description:
      "From your initial brief through to settlement and beyond, we coordinate with solicitors, conveyancers, mortgage brokers and building inspectors to keep everything on track.",
    outcomes: [
      "Trusted referral network of property professionals",
      "Settlement coordination and timeline management",
      "Post-purchase support and ongoing advisory",
    ],
  },
];

// ── Process ──
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start with a discovery call to understand your goals, budget, timeline and what matters most in your next property.",
  },
  {
    number: "02",
    title: "Strategy & Brief",
    description:
      "We develop a tailored property brief and acquisition strategy based on your unique requirements and market conditions.",
  },
  {
    number: "03",
    title: "Research & Shortlisting",
    description:
      "Our team conducts deep market research to identify suitable properties — both on-market and off-market — that match your brief.",
  },
  {
    number: "04",
    title: "Inspections & Due Diligence",
    description:
      "We attend inspections on your behalf, assess each property thoroughly and provide detailed reports with our professional opinion.",
  },
  {
    number: "05",
    title: "Negotiation & Acquisition",
    description:
      "We negotiate directly with agents or bid at auction on your behalf, using proven strategies to secure the property at the best possible terms.",
  },
  {
    number: "06",
    title: "Settlement & Beyond",
    description:
      "We coordinate with your legal and finance team through to settlement, and remain available for ongoing property advisory support.",
  },
];

// ── Case Studies ──
export type CaseStudy = {
  headline: string;
  summary: string;
  tag: string;
};

export const caseStudies: CaseStudy[] = [
  {
    headline: "Secured an off-market family home under asking price",
    summary:
      "Our clients were looking for a family home in a competitive Sydney suburb. Through our agent network, we sourced an off-market opportunity and negotiated a purchase well below the seller's expectations — saving them from the stress of an auction.",
    tag: "Home Buyer",
  },
  {
    headline: "Built an investor's portfolio with two high-yield properties",
    summary:
      "Working with an interstate investor, we identified two high-growth suburbs with strong rental demand. Both properties were acquired below market value and achieved rental returns above initial projections.",
    tag: "Investor",
  },
  {
    headline: "Won at auction with a disciplined bidding strategy",
    summary:
      "In a heated auction with multiple registered bidders, we executed a strategic bidding plan that unsettled the competition. Our client secured the property within their budget while competing bidders dropped out early.",
    tag: "Auction Win",
  },
  {
    headline: "First-home buyer navigated a complex market with confidence",
    summary:
      "A first-home buyer felt overwhelmed by the Sydney market. We guided them from initial brief to settlement — handling inspections, due diligence and negotiation — so they could focus on the excitement of buying their first home.",
    tag: "First Home",
  },
];

// ── Testimonials ──
export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jeren made the entire process seamless. We felt confident knowing someone was genuinely looking out for our best interests. Couldn't recommend Ispirto more highly.",
    name: "M. & S. Thompson",
    context: "Home Buyers — Sydney",
  },
  {
    quote:
      "As an investor, having a buyers agent who understands numbers and strategy was a game changer. The properties Jeren sourced have exceeded our expectations.",
    name: "D. Patel",
    context: "Property Investor — Melbourne",
  },
  {
    quote:
      "We were first-home buyers with no idea where to start. Jeren took the stress out of everything. The off-market property he found was exactly what we were looking for.",
    name: "J. & L. Chen",
    context: "First Home Buyers — Sydney",
  },
  {
    quote:
      "Auction day was completely stress-free with Ispirto representing us. Jeren's composure and bidding strategy won us the home. Five stars all the way.",
    name: "R. Williams",
    context: "Home Buyer — Sydney",
  },
  {
    quote:
      "Professional, knowledgeable and always available. Jeren's research and due diligence gave us the confidence to make a decision quickly when the right property came up.",
    name: "A. & K. Nguyen",
    context: "Upgraders — Sydney",
  },
];

// ── Insights ──
export type Insight = {
  title: string;
  summary: string;
  topic: string;
};

export const insights: Insight[] = [
  {
    title: "What Does a Buyer's Agent Actually Do?",
    summary:
      "A buyer's agent works exclusively for you — the buyer. We research, inspect, evaluate and negotiate on your behalf so you can make informed decisions without the emotional pressure of going it alone.",
    topic: "Education",
  },
  {
    title: "5 Questions to Ask a Selling Agent Before You Make an Offer",
    summary:
      "Not all information is volunteered. Knowing what to ask the selling agent can reveal critical details about the property, the vendor's motivation and your negotiation position.",
    topic: "Tips",
  },
  {
    title: "Why Off-Market Properties Deserve Your Attention",
    summary:
      "Off-market properties can offer reduced competition and better pricing. Understanding how to access these opportunities is a key advantage for serious buyers and investors.",
    topic: "Market Insight",
  },
  {
    title: "The True Cost of Buying Without an Advocate",
    summary:
      "Going it alone might seem like a cost-saving move, but overpaying, missing red flags or losing at auction can cost far more than a buyer's agent fee.",
    topic: "Education",
  },
  {
    title: "How Investors Can Identify High-Growth Suburbs",
    summary:
      "Population growth, infrastructure investment, supply constraints and rental yield data are key indicators. We break down how to assess suburb fundamentals like a professional.",
    topic: "Investment",
  },
  {
    title: "Auction Day: What First-Time Buyers Need to Know",
    summary:
      "Auctions are fast-paced and emotional. Understanding the rules, setting a firm limit and having a bidding strategy can be the difference between winning smart and overpaying.",
    topic: "Tips",
  },
];

// ── Stats ──
export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export const stats: Stat[] = [
  { value: "100", suffix: "%", label: "Buyer-Focused Advisory" },
  { value: "50", suffix: "+", label: "Suburbs Researched Across Australia" },
  { value: "24", suffix: "hr", label: "Average Response Time" },
  { value: "5", suffix: "★", label: "Client Satisfaction Rating" },
];

// ── Differentiators ──
export type Differentiator = {
  title: string;
  description: string;
  icon: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "We Only Represent Buyers",
    description:
      "Unlike traditional agents who represent sellers, we work exclusively on your side. No split loyalties, no sales commissions — just independent advice aligned with your goals.",
    icon: "shield",
  },
  {
    title: "Off-Market Advantage",
    description:
      "Our extensive network of selling agents gives you access to properties before they hit the public market — reducing competition and strengthening your negotiating position.",
    icon: "key",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Every recommendation is backed by market comparables, rental yield analysis, growth data and council research. We don't guess — we analyse.",
    icon: "chart",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial consultation through to settlement and beyond, we coordinate every moving part — solicitors, brokers, inspectors and more — so nothing falls through the cracks.",
    icon: "handshake",
  },
];

// ── Marquee Items ──
export const marqueeItems = [
  "Buyers Agent & Advocate",
  "Off-Market Access",
  "Strategic Negotiation",
  "Auction Representation",
  "Research & Due Diligence",
  "Investment Advisory",
  "Australia-Wide Service",
  "First Home Buyers",
  "Portfolio Strategy",
  "Settlement Support",
];

// ── Packages ──
export type Package = {
  option: string;
  title: string;
  description: string;
  features: string[];
  suitableFor?: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    option: "Option 1",
    title: "Research & Reassurance",
    description:
      "Ideal for buyers who want to source their own property but need expert suburb research and market data to make confident decisions.",
    features: [
      "Research into tailored locations suited for you",
      "Detailed comparison of suburbs best suited for your brief & goals",
      "Reassurance with data to identify suburbs likely to have growth",
      "A minimum of 3 suburbs tailored to your brief & goal",
      "In-depth suburb research including supply & demand, infrastructure & planned developments",
    ],
    suitableFor: [
      "Sourcing their own property",
      "Owner occupiers looking to live in their home",
      "Buyers wanting market support to invest in the right areas",
    ],
  },
  {
    option: "Option 2",
    title: "Full Service Buyers Agent",
    description:
      "Our comprehensive end-to-end service. We handle everything from research through to settlement so you can buy with total confidence.",
    features: [
      "All inclusions in Option 1",
      "Expertise in the field to ensure additional costs are accounted for",
      "Sourcing multiple properties suited for you",
      "Supporting the purchasing process from sourcing to settlement",
      "Negotiating with agents so you don't overpay",
      "Access to off-market & pre-market properties",
      "All inspections including initial & final walkthrough",
      "Building & pest reports from trusted companies",
      "Connecting you with trusted brokers, conveyancers & property managers",
    ],
    featured: true,
  },
  {
    option: "Option 3",
    title: "Negotiation Only",
    description:
      "For buyers who have approved finance and sourced their own property but want expert negotiation to ensure they don't overpay.",
    features: [
      "Attend & bid on your behalf at auctions",
      "Negotiate with real estate agents & private sellers",
      "Leverage market knowledge & advocate on your behalf",
      "Experience in negotiation strategy & psychology",
      "Analysis report provided on your property",
    ],
  },
];

// ── Contact Form Options ──
export const buyerTypes = [
  "Home Buyer",
  "First Home Buyer",
  "Property Investor",
  "Upgrader / Downsizer",
  "Other",
];

export const budgetRanges = [
  "Under $500,000",
  "$500,000 – $750,000",
  "$750,000 – $1,000,000",
  "$1,000,000 – $1,500,000",
  "$1,500,000 – $2,000,000",
  "$2,000,000+",
  "Not sure yet",
];
