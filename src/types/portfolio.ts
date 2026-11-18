export interface Service {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  keyBenefit: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface MarketingTool {
  name: string;
  category: string;
  proficiency: 'Advanced' | 'Proficient' | 'Working Knowledge';
  iconUrl?: string;
  iconName: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientName: string;
  category: 'SEO' | 'Social Media' | 'Meta Ads' | 'Google Ads';
  industry: string;
  duration: string;
  summary: string;
  objective: string;
  role: string;
  strategy: string[];
  workPerformed: string[];
  deliverables: string[];
  actualVerifiedResults?: {
    label: string;
    value: string;
    description: string;
  }[];
  placeholderNote?: string;
  image: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  clientHighlights: {
    client: string;
    industry: string;
    activities: string[];
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Verified' | 'In Progress' | 'Upcoming';
  isPlaceholder?: boolean;
  date?: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Social Media' | 'Ad Creatives' | 'Infographics' | 'Campaign Planning';
  description: string;
  imageUrl: string;
  aspectRatio: string;
  tags: string[];
}
