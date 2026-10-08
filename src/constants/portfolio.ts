import {
  Smartphone,
  Globe,
  Database,
  Terminal,
  Briefcase,
  Zap,
  Code2,
} from 'lucide-react';
import type {
  PersonalInfo,
  ContactConfig,
  StatItem,
  SkillCategory,
  Project,
  Experience,
  Education,
} from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Krupa Vahora",
  role: "Senior React Native & Full Stack Developer",
  tagline: "Architecting enterprise-grade, high-performance cross-platform mobile apps & scalable web systems with React Native, TypeScript, and MERN stack.",
  email: "krupavahora@gmail.com",
  location: "Surat, Gujarat, India",
  experienceYears: "5",
  featuresShipped: "30+",
  clientsServed: "US & Global Clients",
  githubUrl: "https://github.com/Krupa-Vahora",
  linkedinUrl: "https://linkedin.com",
};

export const CONTACT_CONFIG: ContactConfig = {
  web3FormsKey: "", // Paste your Web3Forms access key here (Get one free at https://web3forms.com)
  formspreeUrl: "", // Or paste Formspree endpoint (e.g. "https://formspree.io/f/your_form_id")
};

export const STATS: StatItem[] = [
  { label: "Years Experience", value: "5", icon: Briefcase, detail: "Mobile & MERN Stack" },
  { label: "Production Features", value: "30+", icon: Zap, detail: "Cross-platform enterprise apps" },
  { label: "Apps Deployed", value: "iOS & Android", icon: Smartphone, detail: "App Store & Play Store pipelines" },
  { label: "Core Specialization", value: "React Native", icon: Code2, detail: "TypeScript & TanStack Query" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Deep expertise in hybrid mobile architecture, native bridge modules, and hardware integration.",
    skills: [
      { name: "React Native", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Android Studio", level: 85 },
      { name: "Xcode & iOS Builds", level: 86 },
      { name: "Push Notifications", level: 90 },
      { name: "Deep Linking", level: 88 },
      { name: "Google Maps SDK", level: 90 },
      { name: "React Native CLI", level: 92 },
    ]
  },
  {
    id: "web_backend",
    title: "Web & Backend Engineering",
    icon: Globe,
    description: "Full-stack development building reactive user interfaces and robust RESTful microservices.",
    skills: [
      { name: "React.js", level: 94 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 78 },
      { name: "FastAPI", level: 80 },
      { name: "MongoDB", level: 86 },
      { name: "REST APIs", level: 95 },
    ]
  },
  {
    id: "state_libs",
    title: "State & Data Fetching",
    icon: Database,
    description: "Predictable state containers, asynchronous caching, and offline-first mobile sync.",
    skills: [
      { name: "Redux & Redux Toolkit", level: 92 },
      { name: "TanStack Query", level: 94 },
      { name: "React Context API", level: 95 },
      { name: "Firebase (Auth/Firestore)", level: 88 },
      { name: "Offline Sync Storage", level: 86 },
      { name: "Axios Interceptors", level: 92 },
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Terminal,
    description: "Version control, issue tracking, continuous delivery, and API profiling.",
    skills: [
      { name: "Git & GitHub", level: 94 },
      { name: "Jira / Agile Sprints", level: 90 },
      { name: "Postman API Suite", level: 92 },
      { name: "Play Store Console", level: 88 },
      { name: "Apple App Store Connect", level: 87 },
      { name: "CI/CD & Fastlane Basics", level: 80 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rooflink",
    title: "RoofLink - US Roofing CRM Platform",
    category: "Mobile Application",
    timeline: "2023 - 2026",
    role: "Core Lead React Native Developer",
    badge: "Enterprise US Flagship",
    summary: "Comprehensive roofing enterprise management suite connecting US contractors, suppliers, field inspectors, and homeowners in real-time.",
    description: "Architected Rooflink Mobile App from its day-one inception through multiple App Store & Google Play releases. Created field inspection flows, photo uploads with geotagging, on-site measurements, instant estimate generation, supplier inventory sync, and live GPS map tracking.",
    technologies: ["React Native", "TypeScript", "TanStack Query", "Firebase", "Google Maps SDK", "REST APIs", "Redux Toolkit", "iOS / Android Build Pipeline"],
    highlights: [
      "Core developer actively involved from project inception to production scale.",
      "Integrated Google Maps location routing & geolocation camera tags for roofing surveys.",
      "Engineered offline inspection capture with automatic background sync using TanStack Query.",
      "Independently prepared Android & iOS release archives, certificates, and store submissions."
    ],
    stats: [
      { label: "Target Market", val: "United States" },
      { label: "Deployment", val: "iOS & Android" },
      { label: "Platform Role", val: "Core Architect" }
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rooflink&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/rooflink/id1455589332",
    websiteUrl: "https://rooflink.com"
  },
  {
    id: "crmone",
    title: "CRMONE - All-In-One Enterprise CRM",
    category: "Full Stack & Mobile",
    timeline: "2022 - 2023",
    role: "Full Stack Developer (React / React Native / Node)",
    badge: "SaaS Enterprise",
    summary: "Integrated sales pipeline, marketing campaign automation, and lead funnel management system for growing enterprises.",
    description: "Designed responsive Web interfaces and synchronized mobile companions for field sales agents. Built end-to-end features spanning lead tracking, stages Kanban pipelines, automated marketing campaigns, task assignments, and customer communication histories.",
    technologies: ["React.js", "React Native", "JavaScript (ES6+)", "Redux", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    highlights: [
      "Built dynamic sales pipeline Kanban board and live customer interaction timeline.",
      "Engineered automated marketing trigger templates and push alert triggers for deals.",
      "Created reusable cross-platform logic shared across web portals and React Native mobile clients.",
      "Optimized MongoDB queries and REST APIs for quick lead searching and filtered pagination."
    ],
    stats: [
      { label: "Modules", val: "Sales & Leads" },
      { label: "Architecture", val: "MERN Stack" },
      { label: "Sync Engine", val: "Web + Mobile" }
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.crmone&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/crmone-llc/id1663144563",
    websiteUrl: "https://crmone.com"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "LA NET TEAM SOFTWARE SOLUTIONS",
    role: "Full Stack & Mobile Developer",
    period: "January 2022 – September 2026",
    location: "Surat, Gujarat, India",
    type: "Full-Time",
    bullets: [
      "Specialized in React Native (5 years) and MERN Stack (4 year) building scalable enterprise cross-platform mobile apps for US-based clientele.",
      "Led development of the flagship RoofLink Mobile App from ground-up MVP to continuous production releases.",
      "Shipped 30+ mission-critical production features, improving user retention and field contractor productivity.",
      "Oversaw App Store Connect and Google Play Store build provisioning, signing, release tracking, and bug triage.",
      "Collaborated closely with US stakeholders, UI/UX designers, and backend teams in fast-paced Agile sprint cycles."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gujarat Technological University",
    period: "2020 – 2022",
    focus: "Advanced Software Engineering, Cloud Systems & Mobile Computing"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Veer Narmad South Gujarat University",
    period: "2017 – 2020",
    focus: "Computer Science Foundations, Algorithms, Database Management & Web Technologies"
  }
];
