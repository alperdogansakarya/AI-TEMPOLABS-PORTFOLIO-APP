export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'mobile' | 'web' | 'backend' | 'ai';
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}
