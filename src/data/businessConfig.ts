export interface BusinessConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  locationArea: string;
  fullServiceArea: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  hours: string;
  weekendHours: string;
  intakeAvailability: string;
  
  trustPillars: {
    title: string;
    description: string;
  }[];

  stats: {
    value: string;
    label: string;
    subtext: string;
  }[];

  services: {
    id: string;
    title: string;
    isPrimary?: boolean;
    tag: string;
    description: string;
    highlights: string[];
  }[];

  homes: {
    id: string;
    name: string;
    city: string;
    area: string;
    regionKey: 'east' | 'central' | 'west';
    image: string;
    type: string;
    totalBeds: string;
    roomTypes: string[];
    features: string[];
    neighborhoodHighlight: string;
    status: 'Move-in Ready' | 'Limited Availability' | 'Waitlist Available';
  }[];

  amenities: {
    category: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  }[];

  referralAudiences: {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    checklist: string[];
  }[];

  referralSteps: {
    step: string;
    title: string;
    description: string;
  }[];

  testimonials: {
    author: string;
    role: string;
    city: string;
    quote: string;
    tag: string;
  }[];

  comparisonTable: {
    feature: string;
    traditional: string;
    desertOasis: string;
    highlight?: boolean;
  }[];

  faqs: {
    question: string;
    answer: string;
    category: 'all' | 'eligibility' | 'inclusions' | 'referrals' | 'general';
  }[];
}

export const businessData: BusinessConfig = {
  name: "Desert Oasis Housing",
  tagline: "Dignified, Community-Centered Independent Living in the Valley of the Sun",
  shortDescription: "Providing peaceful, safe, and quality residential homes for adults seeking stability, respect, and community in Phoenix and Maricopa County.",
  locationArea: "Phoenix Metro & Maricopa County, AZ",
  fullServiceArea: "Phoenix, Mesa, Scottsdale, Tempe, Glendale, Chandler, Peoria & surrounding communities",
  phone: "tel:6025550198",
  phoneDisplay: "(602) 555-0198",
  email: "intake@desertoasishousing.com",
  hours: "Monday – Friday: 8:00 AM – 6:00 PM MST",
  weekendHours: "Saturday: 9:00 AM – 2:00 PM MST",
  intakeAvailability: "24/7 On-Call for Hospital & Agency Referrals",

  trustPillars: [
    {
      title: "Resident Dignity & Autonomy First",
      description: "We honor personal independence in a respectful, peaceful atmosphere where every resident feels valued, heard, and at home."
    },
    {
      title: "Real Homes, Never Institutional",
      description: "Our residences are authentic single-family suburban homes with modern kitchens, comfortable living rooms, and private outdoor yards."
    },
    {
      title: "Responsive Referral Coordination",
      description: "We work directly and transparently with hospital case managers, discharge planners, social workers, and families for prompt intake."
    }
  ],

  stats: [
    {
      value: "3",
      label: "Residential Homes",
      subtext: "Across East, West & Central Phoenix"
    },
    {
      value: "20+",
      label: "Dedicated Resident Beds",
      subtext: "Comfortable private & shared rooms"
    },
    {
      value: "100%",
      label: "Utilities & High-Speed Wi-Fi",
      subtext: "Fully inclusive monthly living"
    },
    {
      value: "24/7",
      label: "On-Call Support Access",
      subtext: "Attentive residential coordination"
    }
  ],

  services: [
    {
      id: "independent-living",
      title: "Independent Living",
      isPrimary: true,
      tag: "Primary Service",
      description: "Our core foundation: stable, dignified residential living in peaceful single-family homes designed for self-sufficient adults desiring safety, comfort, and community.",
      highlights: [
        "Fully furnished private and semi-private rooms",
        "All utilities, Wi-Fi, and air conditioning included",
        "Shared access to full kitchen, living room & patio",
        "Homelike environment promoting autonomy and peace"
      ]
    },
    {
      id: "recuperative-respite",
      title: "Post-Hospitalization & Recuperative Housing",
      tag: "Short-Term Care",
      description: "Quiet, low-stress residential environments for individuals transitioning out of medical or rehabilitative stays who require a peaceful setting to complete their recovery.",
      highlights: [
        "Single-level accessible floorplans",
        "Calm and restorative living quarters",
        "Coordination for visiting home-health or outpatient visits",
        "Flexible 30, 60, or 90-day recovery stays"
      ]
    },
    {
      id: "transitional-living",
      title: "Transitional Community Housing",
      tag: "Community Re-entry",
      description: "Structured, stable community housing for individuals rebuilding life routines, establishing employment, or bridging toward permanent long-term housing.",
      highlights: [
        "Predictable daily routine and household accountability",
        "Safe peer community and supportive house guidelines",
        "Close proximity to Valley Metro transit and job centers",
        "Encouraging environment centered on personal progress"
      ]
    },
    {
      id: "daily-coordination",
      title: "Daily Living Coordination Support",
      tag: "Support Coordination",
      description: "Holistic residential coordination to ensure our homes run smoothly and residents have assistance connecting with local resources.",
      highlights: [
        "Household supplies and fresh linen provision",
        "Coordination assistance for meal delivery or groceries",
        "Courtesy medication reminders if requested",
        "Guidance connecting to community wellness services"
      ]
    }
  ],

  homes: [
    {
      id: "east-valley",
      name: "The Saguaro House",
      city: "Mesa / Gilbert Area",
      area: "East Valley, Phoenix Metro",
      regionKey: "east",
      image: "/images/residence_east_valley.jpg",
      type: "Single-Story Residential Home",
      totalBeds: "5 Resident Beds",
      roomTypes: ["Private Master Suite", "Furnished Semi-Private Rooms"],
      features: [
        "Quiet suburban cul-de-sac with manicured grounds",
        "Shaded covered patio with desert flower garden",
        "Walking distance to Valley Metro bus lines & grocery",
        "High-efficiency A/C & smart keyless entry locks"
      ],
      neighborhoodHighlight: "Near Banner Desert Medical Center & Superstition Springs",
      status: "Move-in Ready"
    },
    {
      id: "central-phoenix",
      name: "The Arcadia Vista House",
      city: "Central Phoenix / Arcadia",
      area: "Central Valley, Phoenix Metro",
      regionKey: "central",
      image: "/images/residence_central.jpg",
      type: "Modern Stucco Ranch",
      totalBeds: "6 Resident Beds",
      roomTypes: ["Private Suites", "Standard Semi-Private Accommodations"],
      features: [
        "Open-concept chef kitchen with granite island",
        "Camelback Mountain views and private shade pergola",
        "Wheelchair-accessible step-free entrance and wide hallways",
        "Dedicated quiet study lounge with high-speed internet"
      ],
      neighborhoodHighlight: "Minutes from Phoenix healthcare corridors & Valley Metro Light Rail",
      status: "Limited Availability"
    },
    {
      id: "west-valley",
      name: "The Citrus Grove House",
      city: "Glendale / Peoria",
      area: "West Valley, Phoenix Metro",
      regionKey: "west",
      image: "/images/residence_west_valley.jpg",
      type: "Single-Level Desert Haven",
      totalBeds: "5 Resident Beds",
      roomTypes: ["Private Rooms", "Co-living Shared Rooms"],
      features: [
        "Spacious private backyard with mature fruit trees & patio",
        "Full kitchen with dual full-sized refrigerators",
        "Complimentary high-capacity washer & dryer with detergent starter",
        "24/7 keyless secure entry with individual room privacy"
      ],
      neighborhoodHighlight: "Quiet residential neighborhood close to Arrowhead Mall and Loop 101",
      status: "Waitlist Available"
    }
  ],

  amenities: [
    {
      category: "Room & Accommodations",
      items: [
        {
          title: "Fully Furnished Bedrooms",
          description: "Sturdy comfortable beds, high-density mattresses, dressers, nightstands, and ample closet storage.",
          icon: "Bed"
        },
        {
          title: "Private & Shared Options",
          description: "Flexible room styles to accommodate personal preferences, budgets, and companionship needs.",
          icon: "LayoutGrid"
        },
        {
          title: "Fresh Linens & Bedding",
          description: "Clean sheets, pillowcases, hypoallergenic pillows, and fresh towel sets provided upon arrival.",
          icon: "Sparkles"
        }
      ]
    },
    {
      category: "Utilities & Daily Living",
      items: [
        {
          title: "All Utilities Included",
          description: "Electricity, powerful central A/C, heating, water, and trash services fully bundled with no surprise bills.",
          icon: "Zap"
        },
        {
          title: "High-Speed Wi-Fi & Media",
          description: "Gigabit wireless internet throughout the home and smart TV setup in the communal living room.",
          icon: "Wifi"
        },
        {
          title: "Full Kitchen & Pantries",
          description: "Equipped with refrigerators, ovens, microwaves, coffee stations, cookware, and dedicated shelf space.",
          icon: "Utensils"
        },
        {
          title: "On-Site Laundry Facilities",
          description: "Full-sized modern washers and dryers free for resident use, complete with laundry starter detergent.",
          icon: "Shirt"
        }
      ]
    },
    {
      category: "Safety & Coordination",
      items: [
        {
          title: "Keyless Secure Access",
          description: "Modern digital entry locks ensure resident privacy and home safety at all hours.",
          icon: "Key"
        },
        {
          title: "24/7 On-Call Support",
          description: "Dedicated residential house manager available around the clock for any maintenance or resident questions.",
          icon: "PhoneCall"
        },
        {
          title: "Courtesy Coordination",
          description: "Assistance with non-emergency transport scheduling, delivery coordination, and courtesy wellness reminders.",
          icon: "HeartHandshake"
        }
      ]
    }
  ],

  referralAudiences: [
    {
      title: "Case Managers & Social Workers",
      subtitle: "Fast, Reliable Placements",
      description: "We understand urgent discharge timelines. We provide prompt bed checks, clear intake requirements, and smooth communication to prevent hospital readmissions.",
      icon: "FileSpreadsheet",
      checklist: [
        "Same-day or 24-hour placement response",
        "Direct point of contact for case coordination",
        "Transparent move-in criteria with no hidden hurdles",
        "Status updates provided to the referring agency"
      ]
    },
    {
      title: "Families & Loved Ones",
      subtitle: "Peace of Mind & Dignity",
      description: "When seeking independent housing for an adult family member, we offer a welcoming home where your loved one is respected, safe, and part of a healthy household.",
      icon: "Users",
      checklist: [
        "In-person or virtual scheduled home previews",
        "Clear financial terms with all-inclusive pricing",
        "Caring, respectful, and drug/alcohol-free house culture",
        "Open communication with family members upon consent"
      ]
    },
    {
      title: "Independent Adults",
      subtitle: "Comfortable, Autonomous Living",
      description: "Whether you are relocating, downsizing, or starting a new life chapter, enjoy a beautiful private or shared room in a calm, fully equipped home without lease stress.",
      icon: "Home",
      checklist: [
        "Move-in ready spaces with zero furniture purchase needed",
        "Single monthly payment covering rent and all utilities",
        "Freedom to live autonomously with privacy and quiet",
        "Respectful housemates and peaceful residential setting"
      ]
    }
  ],

  referralSteps: [
    {
      step: "01",
      title: "Initial Inquiry or Referral Submission",
      description: "Submit our secure online form, email us your intake sheet, or call our intake line directly at (602) 555-0198."
    },
    {
      step: "02",
      title: "Quick Eligibility & Room Matching",
      description: "Within 2 to 4 business hours, our team reviews preferences, room availability (private vs. shared), and confirms fit."
    },
    {
      step: "03",
      title: "Move-In & Welcome Home",
      description: "Sign our transparent residential agreement, tour your chosen home, and move into your clean, fully furnished room."
    }
  ],

  testimonials: [
    {
      author: "Sarah M., MSW",
      role: "Medical Social Worker & Discharge Planner",
      city: "Phoenix, AZ",
      quote: "Working with Desert Oasis has made acute hospital discharges vastly smoother. They communicate immediately, their homes are pristine, and our clients feel safe and respected.",
      tag: "Healthcare Partner"
    },
    {
      author: "David R.",
      role: "Family Caregiver",
      city: "Mesa, AZ",
      quote: "Finding an independent living residence that actually feels like a warm home—rather than an institution—was our top priority for my brother. Desert Oasis has been a true blessing.",
      tag: "Resident Family"
    },
    {
      author: "Marcus T.",
      role: "Independent Resident",
      city: "Glendale, AZ",
      quote: "Having my own furnished room, quiet housemates, and knowing all utilities and Wi-Fi are handled in one monthly rate took huge weight off my shoulders. I have peace of mind.",
      tag: "Resident Experience"
    }
  ],

  comparisonTable: [
    {
      feature: "Monthly Budget Predictability",
      traditional: "Separate bills for rent, A/C, electric, water, trash & Wi-Fi ($500+ extra)",
      desertOasis: "100% All-Inclusive single monthly payment with zero surprise bills",
      highlight: true
    },
    {
      feature: "Furniture & Setup",
      traditional: "Must buy bed, mattress, dresser, couch, kitchen utensils ($2,000+ upfront)",
      desertOasis: "Fully furnished & move-in ready from Day 1 including bedding & cookware",
      highlight: true
    },
    {
      feature: "High-Speed Gigabit Wi-Fi",
      traditional: "Self-contract ($80 - $120 / month + setup fees)",
      desertOasis: "Included complimentary across the entire home",
      highlight: false
    },
    {
      feature: "Laundry Access",
      traditional: "Laundromat trips or coin-operated machines ($60+ / month)",
      desertOasis: "Free on-site modern washer & dryer inside the residence",
      highlight: false
    },
    {
      feature: "Environment & House Culture",
      traditional: "Unsupervised complex, unpredictable neighbors, no guidelines",
      desertOasis: "Quiet residential single-family home with drug- & alcohol-free guidelines",
      highlight: true
    },
    {
      feature: "Emergency & On-Call Coordination",
      traditional: "Unresponsive off-site landlords or management companies",
      desertOasis: "24/7 on-call coordinator dedicated to resident peace and maintenance",
      highlight: false
    }
  ],

  faqs: [
    {
      question: "Who is eligible to live at Desert Oasis Housing?",
      answer: "We welcome independent adults who are able to manage their daily activities, respect fellow residents, and uphold a peaceful, drug-free and alcohol-free residential home environment. This includes self-pay individuals, veterans, adults rebuilding life stability, and individuals discharged from care who desire stable, independent housing.",
      category: "eligibility"
    },
    {
      question: "What types of housing arrangements are offered?",
      answer: "Independent living is our primary service. We offer both private bedrooms (for maximum autonomy and solitude) and semi-private shared bedrooms (budget-friendly options with 2 beds per room). In addition, we accommodate short-term recuperative post-hospital stays and transitional supportive stays.",
      category: "eligibility"
    },
    {
      question: "What amenities and utilities are included in the monthly fee?",
      answer: "Everything is covered in one simple monthly rate: fully furnished bedroom (bed, mattress, storage), all utilities (high-efficiency A/C, heat, water, electricity, trash), gigabit Wi-Fi internet, streaming access in common areas, access to the full kitchen, on-site laundry with washer and dryer, and fresh starter linens.",
      category: "inclusions"
    },
    {
      question: "Do you accept referrals from case managers, hospitals, and community agencies?",
      answer: "Yes, we actively welcome referrals from hospital discharge planners, case managers, community re-entry navigators, veteran liaisons, and social workers. We prioritize prompt communication and strive to provide bed availability confirmations within 24 hours.",
      category: "referrals"
    },
    {
      question: "How do I check current room availability?",
      answer: "You can check availability immediately by submitting our 'Check Availability' inquiry form on this website, calling our intake coordinator at (602) 555-0198, or emailing intake@desertoasishousing.com. We will let you know which homes currently have open beds.",
      category: "referrals"
    },
    {
      question: "Why are full street addresses not listed on the public website?",
      answer: "To ensure maximum privacy, safety, and tranquility for our existing residents, our homes are private single-family residences. We gladly provide exact street addresses and schedule personal home previews once an initial intake inquiry is submitted and verified.",
      category: "general"
    },
    {
      question: "What does the move-in process look like and how fast can someone move in?",
      answer: "Our move-in process is streamlined and can often be completed in as little as 24 to 48 hours. After verifying eligibility and reviewing house guidelines, the resident or referral partner signs the agreement and selects a move-in date. All rooms are 100% furnished and ready for immediate occupancy.",
      category: "general"
    },
    {
      question: "Are meals and transportation provided?",
      answer: "All residents have full access to our fully equipped kitchens to store groceries and prepare their own meals. For residents who require meal support or non-emergency transportation coordination, our house coordinators can connect residents with local meal services and Valley Metro transit options upon referral.",
      category: "inclusions"
    },
    {
      question: "Are you a licensed medical facility or assisted living facility?",
      answer: "No. Desert Oasis Housing operates as an independent living and supportive residential housing provider. We do not provide 24/7 skilled nursing or direct hands-on medical care on-site. Residents who require clinical care may coordinate with their own visiting home-health nurses or physicians.",
      category: "eligibility"
    }
  ]
};
