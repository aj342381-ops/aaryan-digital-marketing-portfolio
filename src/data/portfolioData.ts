import { 
  Service, 
  SkillCategory, 
  MarketingTool, 
  ProjectCaseStudy, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  CreativeItem 
} from '../types/portfolio';

export const personalInfo = {
  name: "Aaryan Jangid",
  title: "Digital Marketer | Growth Strategist",
  headline: "Digital Marketing That Turns Strategy Into Growth.",
  badge: "Open to Digital Marketing Opportunities",
  summary: "I am a dedicated Digital Marketing Professional passionate about helping businesses grow their online presence through creative ideas and data-driven marketing strategies. I specialize in Social Media Marketing, Search Engine Optimization (SEO), Meta Ads, and Google Ads. My focus is on developing effective marketing campaigns, conducting keyword research, generating quality leads, and creating engaging content strategies that help brands improve visibility, reach their target audience, and achieve business growth.",
  location: "Jaipur, Rajasthan, India",
  email: "digitalaaryan11@gmail.com",
  phone: "+91 7568703342",
  socials: {
    linkedin: "https://www.linkedin.com/in/aaryan-jangid-digital-marketer-65603b414/",
    instagram: "https://www.instagram.com/digitalwithaaryan?obrf=MWhoMmhwbW1jeTI4ZQ==",
    wixPortfolio: "https://digitalaaryan11.wixsite.com/my-portfolio"
  },
  resumeDriveUrl: "https://drive.google.com/file/d/1PBlow-m5POiXT6m9pstVT1sKXXWjlUCV/view?usp=sharing"
};

export const heroStats = [
  { label: "Core Domains", value: "4+", detail: "SEO, Meta, Google Ads, Social" },
  { label: "Real Client Brands", value: "4+", detail: "Spices, FMCG, Dental, Fitness" },
  { label: "Strategic Focus", value: "100%", detail: "Organic & Paid Growth Synergy" },
  { label: "Location Ready", value: "Jaipur", detail: "On-site / Hybrid / Remote" }
];

export const servicesData: Service[] = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    category: "Organic Growth & Brand Affinity",
    tagline: "Build engaged communities and strong brand loyalty across modern social platforms.",
    description: "End-to-end management of brand social channels from ideation to community execution. Translating brand voice into compelling visual stories and high-retention content.",
    iconName: "Share2",
    deliverables: [
      "Social media management across platforms",
      "Monthly & weekly content planning calendars",
      "Audience-first content strategy & hooks",
      "Brand awareness campaigns & identity building",
      "Community engagement & comment handling"
    ],
    keyBenefit: "Turns passive scrollers into passionate brand advocates and organic ambassadors."
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "Organic Search Visibility",
    tagline: "Capture high-intent organic traffic by ranking for terms customers search every day.",
    description: "Holistic SEO methodology covering in-depth search demand discovery, technical on-page alignment, semantic content architecture, and strategic off-page positioning.",
    iconName: "Search",
    deliverables: [
      "In-depth keyword research & search intent mapping",
      "On-page SEO (meta tags, headings, schema, URLs)",
      "Technical website optimization & user experience checks",
      "Competitor gap analysis & keyword ranking opportunities",
      "Off-page SEO foundation & local business directory visibility"
    ],
    keyBenefit: "Generates predictable, compounding organic traffic without paying per click."
  },
  {
    id: "meta-ads",
    title: "Meta Ads & Paid Social",
    category: "Targeted Customer Acquisition",
    tagline: "Laser-focused Instagram & Facebook campaigns engineered to acquire qualified leads.",
    description: "Strategic paid advertising frameworks on Meta platforms. Aligning audience demographics and lookalikes with persuasive ad creatives and conversion-optimized lead funnels.",
    iconName: "Target",
    deliverables: [
      "Full-funnel campaign planning (TOFU / MOFU / BOFU)",
      "Granular audience targeting & demographic profiling",
      "Lead generation campaigns with native instant forms",
      "Ad creative strategy, copy variants & visual hooks",
      "Ongoing A/B test iterations & campaign optimization"
    ],
    keyBenefit: "Accelerates customer acquisition with trackable cost-per-lead and rapid testing."
  },
  {
    id: "google-ads",
    title: "Google Ads & PPC",
    category: "High-Intent Search Advertising",
    tagline: "Be at the exact top of Google when potential buyers are looking for your solutions.",
    description: "Search advertising structured around commercial intent keywords. Crafting relevant ad copies and landing page alignments that drive qualified conversions.",
    iconName: "TrendingUp",
    deliverables: [
      "Google Search campaign setup & ad group structure",
      "Commercial & transactional keyword targeting",
      "Negative keyword lists to eliminate wasted budget",
      "Compelling ad copy with sitelinks & callout extensions",
      "Conversion-focused bidding and budget efficiency"
    ],
    keyBenefit: "Connects your business directly with ready-to-buy prospects at their exact search moment."
  },
  {
    id: "content-strategy",
    title: "Content Strategy & Planning",
    category: "Brand Communication & Engagement",
    tagline: "Craft cohesive messaging that educates, inspires, and converts audiences.",
    description: "Bridging the gap between brand voice and customer pain points. Building structured content roadmaps that keep communication consistent and impactful.",
    iconName: "FileText",
    deliverables: [
      "Strategic monthly & quarterly content calendars",
      "Multi-format social media content ideas (carousels, reels, graphics)",
      "Clear brand tone of voice & messaging pillars",
      "Educational infographics & product highlight scripts",
      "Cross-channel consistency across web and social"
    ],
    keyBenefit: "Builds authority, credibility, and brand recall through strategic consistency."
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Search Engine Optimization (SEO)",
    iconName: "Search",
    skills: [
      { name: "Keyword Research & Intent Mapping", level: "Core Expertise", highlight: true },
      { name: "On-Page SEO Optimization", level: "Core Expertise", highlight: true },
      { name: "Technical SEO & UX Alignment", level: "Proficient" },
      { name: "Competitor Search Analysis", level: "Core Expertise" },
      { name: "Off-Page SEO & Link Building", level: "Proficient" },
      { name: "Local SEO (Google Business Profile)", level: "Proficient" }
    ]
  },
  {
    title: "Paid Advertising & Performance",
    iconName: "Target",
    skills: [
      { name: "Meta Ads Manager & Campaign Setup", level: "Core Expertise", highlight: true },
      { name: "Lead Generation Campaigns", level: "Core Expertise", highlight: true },
      { name: "Audience Profiling & Custom Targeting", level: "Proficient" },
      { name: "Google Search Ads & PPC", level: "Core Expertise", highlight: true },
      { name: "Ad Copywriting & Creative Angles", level: "Proficient" },
      { name: "Negative Keywords & Budget Planning", level: "Proficient" }
    ]
  },
  {
    title: "Social Media & Growth Strategy",
    iconName: "Share2",
    skills: [
      { name: "Social Media Management", level: "Core Expertise", highlight: true },
      { name: "Content Planning & Calendars", level: "Core Expertise", highlight: true },
      { name: "Brand Positioning & Storytelling", level: "Proficient" },
      { name: "Audience Engagement Strategy", level: "Proficient" },
      { name: "Market & Trend Research", level: "Proficient" },
      { name: "Digital Growth Strategy", level: "Core Expertise", highlight: true }
    ]
  }
];

export const marketingTools: MarketingTool[] = [
  { name: "Google Ads", category: "PPC & Search", proficiency: "Proficient", iconName: "Search" },
  { name: "Meta Ads Manager", category: "Paid Social", proficiency: "Proficient", iconName: "Target" },
  { name: "Google Analytics (GA4)", category: "Web Analytics", proficiency: "Working Knowledge", iconName: "BarChart3" },
  { name: "Google Search Console", category: "SEO Diagnostics", proficiency: "Proficient", iconName: "Terminal" },
  { name: "Google Keyword Planner", category: "Search Demand", proficiency: "Proficient", iconName: "Key" },
  { name: "Canva Pro", category: "Creative Design", proficiency: "Advanced", iconName: "Palette" },
  { name: "WordPress CMS", category: "Web & On-Page", proficiency: "Proficient", iconName: "Globe" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "arena-infosolution",
    role: "Digital Marketing Trainee | Client Projects",
    company: "ARENA INFOSOLUTION",
    location: "Jaipur, Rajasthan",
    period: "2026 – Present",
    type: "Full-Time Practical Training & Client Execution",
    description: "Hands-on execution of live digital marketing campaigns, client website search optimization, and social media management across retail, healthcare, FMCG, and wellness clients.",
    clientHighlights: [
      {
        client: "LAXMI MASALE",
        industry: "Packaged Foods & Spices",
        activities: [
          "Analyzed site navigation, meta tags, and content structure to enhance user experience and organic search discoverability.",
          "Created engaging social media post schedules and promotional creative themes for festive seasoning campaigns."
        ]
      },
      {
        client: "FMCG BASKET",
        industry: "Online Grocery & Retail",
        activities: [
          "Managed core social media accounts, driving audience interaction through structured content calendars.",
          "Conducted targeted keyword research around high-demand grocery queries to improve organic rank visibility."
        ]
      },
      {
        client: "GUPTA DENTISTREE",
        industry: "Dental Healthcare & Clinic",
        activities: [
          "Executed targeted SEO activities to improve clinic discovery for local dental treatments.",
          "Curated educational and patient-trust social media content to elevate brand credibility and appointment engagement."
        ]
      }
    ]
  }
];

export const caseStudiesData: ProjectCaseStudy[] = [
  {
    id: "laxmi-masale",
    title: "Laxmi Masale: Website Optimization & Brand Engagement",
    clientName: "Laxmi Masale",
    category: "SEO",
    industry: "FMCG / Food & Spices",
    duration: "Client Project Trainee Assignment",
    summary: "Comprehensive digital presence upgrade for a prominent regional spices brand, focusing on on-page SEO discoverability and festive social media promotional campaigns.",
    objective: "Modernize the brand's digital presence, improve on-page SEO signals for organic product discovery, and execute promotional social media campaigns to drive local brand loyalty.",
    role: "Digital Marketing Trainee — SEO & Social Strategy",
    strategy: [
      "Audited existing website layout, page loading experience, and content hierarchy for consumer clarity.",
      "Identified high-volume regional spice queries (turmeric, garam masala, organic blends) to map into page titles and meta descriptions.",
      "Developed an engaging festive content theme around authentic kitchen recipes, culinary tips, and holiday season discounts.",
      "Coordinated promotional creatives to maintain uniform visual identity across Instagram and Facebook."
    ],
    workPerformed: [
      "On-page meta tags, image alt attributes, and structured heading optimizations.",
      "Keyword research matrix mapped across 15+ spice product categories.",
      "Monthly social media content schedule with recipe reels and infographic posts.",
      "Promotional banner copy and festive campaign announcements."
    ],
    deliverables: [
      "SEO Audit & Keyword Mapping Document",
      "30-Day Social Media Content Calendar",
      "Festive Campaign Creative Strategy Deck",
      "Website UX Optimization Recommendations"
    ],
    placeholderNote: "Performance metrics (rank tracking and traffic reports) are currently being monitored for client review and will be updated with verified analytics.",
    image: "/assets/workspace.jpeg",
    tags: ["On-Page SEO", "Social Media Marketing", "Content Calendar", "FMCG"]
  },
  {
    id: "fmcg-basket",
    title: "FMCG Basket: Social Media Growth & Search Demand Capture",
    clientName: "FMCG Basket",
    category: "Social Media",
    industry: "E-Commerce / Grocery Retail",
    duration: "Client Project Trainee Assignment",
    summary: "Integrated social media management paired with keyword research to build consumer engagement and strengthen search engine positioning for grocery essentials.",
    objective: "Establish active social media presence for recurring grocery buyers, create consistent content schedules, and identify search keywords to boost category ranking.",
    role: "Digital Marketer — Social Media Management & Keyword Research",
    strategy: [
      "Mapped target demographic behaviors around weekly grocery buying patterns in urban clusters.",
      "Researched long-tail search queries with strong local buying intent for daily FMCG staples.",
      "Built a predictable content schedule featuring weekly discount carousels, bundle deals, and lifestyle tips.",
      "Formulated quick-response engagement guidelines for customer inquiries in comments."
    ],
    workPerformed: [
      "Full monthly social calendar planning with visual hook testing.",
      "Categorized keyword lists for pantry items, organic staples, and personal care.",
      "Drafted high-conversion captions and promotional hashtag banks.",
      "Monitored post engagement metrics to iterate on top-performing creative formats."
    ],
    deliverables: [
      "High-Intent Grocery Keyword Matrix",
      "Weekly Product Showcase Templates",
      "Community Engagement Framework",
      "Competitor Social Strategy Breakdown"
    ],
    placeholderNote: "Specific client sales attribution and page impressions are confidential; editable verified case report metrics available upon employer request.",
    image: "/assets/workspace.jpeg",
    tags: ["Social Media Management", "Keyword Research", "Content Planning", "Community"]
  },
  {
    id: "gupta-dentistree",
    title: "Gupta Dentistree: Local SEO & Trust-Building Social Healthcare",
    clientName: "Gupta Dentistree",
    category: "SEO",
    industry: "Healthcare / Dental Clinic",
    duration: "Client Project Trainee Assignment",
    summary: "Targeted local SEO activities and healthcare social content designed to build patient trust, elevate clinic visibility, and drive dental consultations.",
    objective: "Help local patients easily discover the dental clinic online and establish dental hygiene authority through educational, patient-friendly social content.",
    role: "Digital Marketing Trainee — Local SEO & Healthcare Content",
    strategy: [
      "Conducted localized search intent research for treatment queries (root canal, teeth whitening, invisible braces).",
      "Optimized clinic digital information for local search consistency (NAP: Name, Address, Phone).",
      "Designed educational social media posts answering frequent patient concerns with approachable medical graphics.",
      "Created seasonal dental care checklists to prompt regular preventive checkup bookings."
    ],
    workPerformed: [
      "Local service keyword targeting and on-page optimization advice.",
      "Educational dental care infographics and myth-busting carousel concepts.",
      "Patient appointment CTA placement on social profiles.",
      "Competitor clinic visibility and review positioning audit."
    ],
    deliverables: [
      "Dental Service Local Keyword Catalog",
      "12-Part Patient Education Carousel Series",
      "Local Clinic Search Visibility Checklist",
      "Patient Engagement Content Guidelines"
    ],
    placeholderNote: "Patient inquiry logs and Google Business Profile local rank tracking data are maintained by the clinic practice.",
    image: "/assets/workspace.jpeg",
    tags: ["Local SEO", "Healthcare Marketing", "Educational Content", "Patient Trust"]
  },
  {
    id: "titans-gym",
    title: "Titans Gym: Meta Ads Campaign Planning & Lead Generation",
    clientName: "Titans Gym",
    category: "Meta Ads",
    industry: "Fitness & Wellness",
    duration: "Strategic Campaign Planning Module",
    summary: "Data-driven Meta Ads campaign architecture designed to capture fitness trial signups and new gym memberships using geo-targeted ad creatives.",
    objective: "Structure high-converting Meta Ads (Facebook & Instagram) to generate qualified local fitness inquiries and free trial passes for gym memberships.",
    role: "Paid Ads Specialist — Funnel Strategy & Ad Copywriting",
    strategy: [
      "Constructed demographic audience segments (fitness enthusiasts, weight training, transformation goals) within a 5-8km radius.",
      "Developed high-urgency lead magnets (Free 3-Day Trial Pass + Personal Assessment).",
      "Scripted motivational ad copies with transparent pricing, coach credentials, and strong calls-to-action.",
      "Structured frictionless native Meta Instant Lead Forms to maximize submission rates on mobile devices."
    ],
    workPerformed: [
      "Audience persona definition and radius targeting setup.",
      "Lead generation funnel workflow with custom form question filters.",
      "Copywriting matrix with 3 headline variants, 3 primary text styles, and urgency hooks.",
      "A/B creative testing plan (coach highlight vs. member transformation vs. gym facility tour)."
    ],
    deliverables: [
      "Meta Ads Campaign Structure Document",
      "Native Lead Form Architecture & Custom Qualifying Questions",
      "Ad Copy Variant Library (Short-form, Long-form, Bulleted)",
      "Targeting Matrix with Interest & Behavioral Intersections"
    ],
    placeholderNote: "Sample campaign architecture prepared for implementation; metrics will reflect live spend and lead volume upon scheduled seasonal launch.",
    image: "/assets/workspace.jpeg",
    tags: ["Meta Ads", "Lead Generation", "Ad Copywriting", "Audience Targeting", "Funnel Strategy"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "ma-english",
    degree: "Master of Arts (M.A.)",
    field: "English Literature",
    institution: "University of Rajasthan",
    period: "2020 – 2021",
    location: "Jaipur, Rajasthan",
    highlights: [
      "Developed advanced written communication, persuasive rhetoric, and content analytical skills.",
      "Strengthened creative storytelling and linguistic precision essential for high-converting marketing copywriting."
    ]
  },
  {
    id: "ba",
    degree: "Bachelor of Arts (B.A.)",
    institution: "University of Rajasthan",
    period: "2017 – 2019",
    location: "Jaipur, Rajasthan",
    highlights: [
      "Completed broad undergraduate studies in humanities and social sciences.",
      "Built foundation in research, critical thinking, cultural analysis, and structured presentation."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-google-digital",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage / Skillshop",
    status: "Verified",
    date: "Certified",
    isPlaceholder: false
  },
  {
    id: "cert-meta-ads",
    title: "Meta Certified Digital Marketing Associate (Placeholder)",
    issuer: "Meta Blueprint",
    status: "In Progress",
    isPlaceholder: true
  },
  {
    id: "cert-hubspot-content",
    title: "HubSpot Inbound Marketing Certification (Placeholder)",
    issuer: "HubSpot Academy",
    status: "Upcoming",
    isPlaceholder: true
  },
  {
    id: "cert-google-search",
    title: "Google Ads Search Certification (Placeholder)",
    issuer: "Google Skillshop",
    status: "In Progress",
    isPlaceholder: true
  }
];

export const creativeWorkData: CreativeItem[] = [
  {
    id: "creative-1",
    title: "Festive Season Social Campaign Design",
    category: "Social Media",
    description: "Vibrant promotional visual concept crafted for festive spice gift packs and regional holiday discounts.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "1:1 Square Post",
    tags: ["Canva Pro", "Social Media", "Festive Campaign"]
  },
  {
    id: "creative-2",
    title: "Dental Care Tip Infographic Carousel",
    category: "Infographics",
    description: "Educational carousel slide sequence breaking down daily oral hygiene best practices and prevention tips.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "4:5 Portrait Carousel",
    tags: ["Infographic", "Healthcare", "Education"]
  },
  {
    id: "creative-3",
    title: "Gym Membership Trial Pass Ad Creative",
    category: "Ad Creatives",
    description: "High-contrast, benefit-driven Meta Ad creative layout highlighting the 3-Day Free Trial pass with bold headline typography.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "1:1 Feed & 9:16 Story",
    tags: ["Ad Creative", "Lead Generation", "Direct Response"]
  },
  {
    id: "creative-4",
    title: "E-Commerce Grocery Discount Announcement",
    category: "Social Media",
    description: "Clean modern promotional creative announcing weekly basket essentials discounts with clear pricing badges.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "1:1 Square Post",
    tags: ["FMCG", "Product Showcase", "Social Media"]
  },
  {
    id: "creative-5",
    title: "Organic Search Content Roadmap",
    category: "Campaign Planning",
    description: "Structured content calendar blueprint detailing weekly publishing cadence, keyword intent targets, and channel formats.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "16:9 Landscape Blueprint",
    tags: ["Content Calendar", "Strategy", "Execution"]
  },
  {
    id: "creative-6",
    title: "Brand Voice & Visual Guide Template",
    category: "Social Media",
    description: "Consistent brand presentation framework featuring primary palette guidelines, typography rules, and logo spacing.",
    imageUrl: "/assets/workspace.jpeg",
    aspectRatio: "16:9 Slide Presentation",
    tags: ["Branding", "Visual Identity", "Style Guide"]
  }
];
