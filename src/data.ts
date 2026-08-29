export const BIZ = {
  name: "Anvi Makeover & Academy",
  tagline: "Bridal Artistry · Professional Academy",
  phoneDisplay: "+91 96230 48864",
  phoneTel: "tel:+919623048864",
  whatsapp: (msg: string) => `https://wa.me/919623048864?text=${encodeURIComponent(msg)}`,
  instagram: "https://www.instagram.com/",
  instaHandle: "@anvi.makeover",
  address: "No. 12, Arni Road, Arani, Tiruvannamalai Dist., Tamil Nadu 632301",
  hours: "Mon – Sun · 9:00 AM – 9:00 PM",
  rating: 5.0,
  reviews: 151,
  established: 2019,
};

export const IMG = {
  heroBride:
    "https://image.qwenlm.ai/generated-images/7f8979a0-15c3-45bc-bb7f-07e7e24fab4b/_result.png",
  lookClassic:
    "https://image.qwenlm.ai/generated-images/8680b056-33b0-4d0e-8e14-bd3d228fd450/_result.png",
  lookPastel:
    "https://image.qwenlm.ai/generated-images/614fccd1-2b5e-4ffa-bba2-978c3e066589/_result.png",
  lookRoyal:
    "https://image.qwenlm.ai/generated-images/b6bcdcd8-4588-420d-9c2f-c971276e634d/_result.png",
  lookHd:
    "https://image.qwenlm.ai/generated-images/6ec24003-1ccc-4a0b-80bc-ea66d33c8350/_result.png",
  kit: "https://image.qwenlm.ai/generated-images/4bbd12f0-7fca-4ef3-b428-0f2fe00b5449/_result.png",
  academy:
    "https://image.qwenlm.ai/generated-images/9636de92-20ab-4db7-819c-7334573cbd93/_result.png",
  artist:
    "https://image.qwenlm.ai/generated-images/14dfe2b6-dab9-4617-a1f2-bc8857b6167a/_result.png",
};

/* ---------------- marquee ---------------- */
export const MARQUEE = [
  "Bridal Makeover",
  "Airbrush Artistry",
  "HD Makeup",
  "Reception Glam",
  "Saree Draping",
  "Hair Styling",
  "Nail Art",
  "Groom Styling",
  "Pro Academy",
  "Bridal Trials",
];

/* ---------------- stats ---------------- */
export const STATS = [
  { value: 5.0, decimals: 1, suffix: "★", label: "Google rating" },
  { value: 151, suffix: "+", label: "Five-star reviews" },
  { value: 800, suffix: "+", label: "Brides transformed" },
  { value: 300, suffix: "+", label: "Certified students" },
  { value: 7, suffix: " yrs", label: "Of artistry" },
];

/* ---------------- services ---------------- */
export type Service = {
  num: string;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    icon: "veil",
    title: "Bridal Makeover",
    desc: "Our signature HD & airbrush bridal artistry — skin-first prep, colour-matched base and jewellery-aware styling that survives muhurtham heat and happy tears alike.",
    tags: ["HD Base", "Airbrush", "Skin Prep"],
  },
  {
    num: "02",
    icon: "spray",
    title: "Airbrush & HD Makeup",
    desc: "Feather-light silicone airbrush application that reads flawless on camera and in person — crease-proof for 16+ hours of functions and flash photography.",
    tags: ["16-hr Stay", "Camera Ready"],
  },
  {
    num: "03",
    icon: "rings",
    title: "Reception & Engagement",
    desc: "A second look, a second story. Pastel dewy glam for receptions, statement shimmer for engagements — styled around your outfit, jewels and venue lighting.",
    tags: ["Dewy Glam", "Shimmer"],
  },
  {
    num: "04",
    icon: "lips",
    title: "Party & Event Glam",
    desc: "Cocktails, sangeet nights, festivals and photoshoots — polished, photographable glam tailored to your features, never a copy-paste template.",
    tags: ["Sangeet", "Photoshoot"],
  },
  {
    num: "05",
    icon: "hair",
    title: "Hair Styling & Saree Draping",
    desc: "Classic temple buns, soft romantic waves, modern braids — plus nine-yard Kanjeevaram draping with perfect pleats, done by artists who respect the craft.",
    tags: ["Bridal Bun", "Kanjeevaram"],
  },
  {
    num: "06",
    icon: "nail",
    title: "Nail Art Add-ons",
    desc: "Bridal nail extensions, chrome finishes, classic french or kundanesque gold detailing — coordinated with your jewellery so every close-up sparkles.",
    tags: ["Extensions", "Chrome"],
  },
  {
    num: "07",
    icon: "groom",
    title: "Groom Styling",
    desc: "HD finish for the groom — undetectable base, beard sculpting and hairstyling, so the two of you glow with equal confidence in every frame.",
    tags: ["HD Finish", "Beard Sculpt"],
  },
];

/* ---------------- à la carte ---------------- */
export const ALACARTE = [
  { item: "Party / Event Glam", price: "₹2,499" },
  { item: "Engagement Look", price: "₹6,999" },
  { item: "Reception Look", price: "₹8,999" },
  { item: "Groom Styling", price: "₹3,499" },
  { item: "Hair + Saree Draping", price: "₹1,999" },
  { item: "Bridal Trial Session", price: "₹1,499" },
  { item: "Nail Art (both hands)", price: "₹799" },
];

/* ---------------- packages ---------------- */
export type Package = {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const PACKAGES: Package[] = [
  {
    name: "Signature Bridal",
    price: "₹12,999",
    note: "The classic Anvi bridal experience",
    features: [
      "HD bridal makeup (single look)",
      "Bridal hairstyling + dupatta setting",
      "Kanjeevaram saree draping",
      "Premium false lashes & nail paint",
      "Jewellery setting assistance",
      "Complimentary touch-up kit",
    ],
  },
  {
    name: "Royal Bridal",
    price: "₹21,999",
    note: "Airbrush artistry, morning to night",
    badge: "Most Loved",
    featured: true,
    features: [
      "Airbrush base — 16-hour wear",
      "Skin-prep facial session (day before)",
      "Hair + draping + dupatta styling",
      "Premium lashes & body shimmer",
      "Bridal trial included (₹1,499 value)",
      "2 family touch-ups (mother / sister)",
      "Photo-ready setting & on-call retouch",
    ],
  },
  {
    name: "Imperial Bridal",
    price: "₹35,999",
    note: "A full glam squad at your venue",
    features: [
      "Celebrity-style airbrush artistry",
      "Dedicated artist all day at venue",
      "Bridal + reception dual coverage",
      "4 family makeovers included",
      "Hair extensions & premium draping",
      "Bridal trial + consultation session",
      "Priority date lock & travel included*",
    ],
  },
];

/* ---------------- academy ---------------- */
export type Course = {
  name: string;
  duration: string;
  fee: string;
  mode: string;
  points: string[];
  accent: "blush" | "gold" | "rose";
};

export const COURSES: Course[] = [
  {
    name: "Self-Grooming Workshop",
    duration: "5 days",
    fee: "₹4,999",
    mode: "Weekend batches",
    accent: "blush",
    points: [
      "Skincare & base matching on your own face",
      "Day, office & party makeup techniques",
      "Basic hair styling & saree draping",
      "Personal product-kit guidance",
    ],
  },
  {
    name: "Bridal Pro Certificate",
    duration: "8 weeks",
    fee: "₹29,999",
    mode: "Mon – Sat · 10 AM – 4 PM",
    accent: "gold",
    points: [
      "HD & airbrush bridal techniques",
      "5 live bridal model sessions",
      "Professional starter kit included",
      "Photoshoot + portfolio building",
      "Government-recognised certificate",
    ],
  },
  {
    name: "Master Artist Diploma",
    duration: "16 weeks",
    fee: "₹49,999",
    mode: "Full-time intensive",
    accent: "rose",
    points: [
      "Advanced airbrush & SFX fundamentals",
      "Salon internship with live clients",
      "Business, pricing & Instagram marketing",
      "Lifetime mentorship from Anvi ma'am",
      "Diploma + placement assistance",
    ],
  },
];

export const ACADEMY_PERKS = [
  { icon: "kit", text: "Pro kits included" },
  { icon: "certificate", text: "Certified curriculum" },
  { icon: "users", text: "Max 12 per batch" },
  { icon: "camera", text: "Portfolio shoots" },
];

/* ---------------- reviews ---------------- */
export type Review = {
  name: string;
  context: string;
  quote: string;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Divya Ramkumar",
    context: "Royal Bridal Package",
    initials: "DR",
    quote:
      "Anvi akka understood exactly the look I had pinned for months. My airbrush base didn't move through the muhurtham, the nalaingu games and two hours of crying. Every single photo looks retouched — but it was just her work.",
  },
  {
    name: "Priyanka Selvaraj",
    context: "Reception Makeover",
    initials: "PS",
    quote:
      "She transformed me into a pastel dream for my reception. The skin prep she did the day before made my makeup sit like a second skin. My in-laws keep showing my photos to everyone!",
  },
  {
    name: "Meenakshi Iyer",
    context: "Bridal + Family Makeovers",
    initials: "MI",
    quote:
      "Booked the Imperial package — the whole team reached our Arani venue at 4 AM, calm and organised. My mother and sisters looked stunning too. Worth every rupee for the peace of mind alone.",
  },
  {
    name: "Kavya Prasad",
    context: "Party Glam",
    initials: "KP",
    quote:
      "Went for my college reunion with Anvi's party glam — got stopped at every table asking who did my makeup. Booking was so easy on WhatsApp and she finished right on time.",
  },
  {
    name: "Revathi Mohan",
    context: "Bridal Pro Certificate · Batch 9",
    initials: "RM",
    quote:
      "I joined the Bridal Pro course as a homemaker with zero experience. Eight weeks later I did my first paid bridal booking — Anvi ma'am personally reviewed my work before I went. This academy changes lives.",
  },
  {
    name: "Sruthi & Vikram",
    context: "Bride + Groom Styling",
    initials: "SV",
    quote:
      "The only studio on Arni Road that styled both of us together. Vikram's HD finish looked natural, not cakey — even his friends noticed he was 'glowing'. 5 stars is honestly not enough.",
  },
];

/* ---------------- portfolio ---------------- */
export type PortfolioItem = {
  src: string;
  cat: "Bridal" | "Reception" | "Party" | "Backstage";
  title: string;
  desc: string;
  tall?: boolean;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    src: IMG.heroBride,
    cat: "Bridal",
    title: "The Muse Portrait",
    desc: "Airbrush bridal · antique gold temple jewellery · maroon lehenga",
    tall: true,
  },
  {
    src: IMG.lookClassic,
    cat: "Bridal",
    title: "Temple Gold",
    desc: "Classic South-Indian muhurtham look · Kanjeevaram & jasmine braid",
  },
  {
    src: IMG.lookPastel,
    cat: "Reception",
    title: "Blush Reverie",
    desc: "Dewy pastel reception glam · pearls & rose-gold tones",
  },
  {
    src: IMG.lookRoyal,
    cat: "Bridal",
    title: "Emerald Royale",
    desc: "Kundan & polki · smoky gold eyes · candlelit evening muhurtham",
    tall: true,
  },
  {
    src: IMG.lookHd,
    cat: "Party",
    title: "Champagne Hour",
    desc: "HD party glam · sequin saree · glass-skin highlight",
  },
  {
    src: IMG.kit,
    cat: "Backstage",
    title: "The Vanity Edit",
    desc: "Behind every look — our sterilised, pro-grade artistry kit",
  },
];

/* ---------------- instagram ---------------- */
export const INSTA_TILES = [
  { src: IMG.heroBride, likes: "2.4k", comments: "186" },
  { src: IMG.lookPastel, likes: "1.8k", comments: "142" },
  { src: IMG.kit, likes: "1.2k", comments: "88" },
  { src: IMG.lookRoyal, likes: "2.1k", comments: "164" },
  { src: IMG.academy, likes: "986", comments: "71" },
  { src: IMG.lookClassic, likes: "1.6k", comments: "120" },
];

/* ---------------- booking ---------------- */
export const BOOKING_SERVICES = {
  Makeovers: [
    "Party / Event Glam — ₹2,499",
    "Engagement Look — ₹6,999",
    "Reception Look — ₹8,999",
    "Groom Styling — ₹3,499",
    "Hair + Saree Draping — ₹1,999",
    "Bridal Trial Session — ₹1,499",
  ],
  "Bridal Packages": [
    "Signature Bridal Package — ₹12,999",
    "Royal Bridal Package — ₹21,999",
    "Imperial Bridal Package — ₹35,999",
  ],
  "Academy Admissions": [
    "Self-Grooming Workshop — ₹4,999",
    "Bridal Pro Certificate — ₹29,999",
    "Master Artist Diploma — ₹49,999",
  ],
};

export const TIME_SLOTS = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:30 PM"];

export const HERO_WORDS = ["Bride.", "Muse.", "Glow.", "Moment."];
