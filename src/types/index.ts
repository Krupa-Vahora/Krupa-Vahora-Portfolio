import { type LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  experienceYears: string;
  featuresShipped: string;
  clientsServed: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface ContactConfig {
  web3FormsKey: string;
  formspreeUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  detail: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export interface ProjectStat {
  label: string;
  val: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  role: string;
  badge: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  stats: ProjectStat[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  focus: string;
}
