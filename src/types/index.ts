export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  location: string;
  summary: string;
  shortSummary?: string;
  social: SocialLinks;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  type?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  type: string;
  longDescription?: string;
  images?: string[];
  architecture?: string[];
  features?: string[];
  company?: string;
}

export interface Skills {
  backend: string[];
  frontend: string[];
  database: string[];
  architecture: string[];
  devops: string[];
  [key: string]: string[]; // Allow index signature for mapping
}

export interface ContactFormState {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
}
