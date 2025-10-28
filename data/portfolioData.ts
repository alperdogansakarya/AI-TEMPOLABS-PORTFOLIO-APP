import { Project, Skill, Experience } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Mobile App',
    description: 'Full-featured shopping app with cart, payments, and real-time inventory',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Stripe'],
    demoUrl: 'https://demo.example.com',
    sourceUrl: 'https://github.com/example',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'ML-powered tool for generating marketing content and social media posts',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    sourceUrl: 'https://github.com/example',
    featured: true,
  },
  {
    id: '3',
    title: 'Project Management Dashboard',
    description: 'Collaborative workspace with kanban boards, time tracking, and analytics',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
    demoUrl: 'https://demo.example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Real-time Chat API',
    description: 'Scalable WebSocket server with message queuing and presence detection',
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    technologies: ['Node.js', 'Socket.io', 'Redis', 'MongoDB'],
    sourceUrl: 'https://github.com/example',
    featured: false,
  },
  {
    id: '5',
    title: 'Fitness Tracking App',
    description: 'Track workouts, nutrition, and progress with beautiful data visualizations',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    demoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: '6',
    title: 'Analytics Platform',
    description: 'Business intelligence dashboard with custom reports and data pipelines',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Apache Airflow'],
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'React Native', level: 95, category: 'mobile' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'GraphQL', level: 85, category: 'backend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Mobile Developer',
    period: '2022 - Present',
    description: 'Leading mobile development team building cross-platform applications',
    achievements: [
      'Architected and launched 3 mobile apps with 500K+ downloads',
      'Reduced app load time by 60% through optimization',
      'Mentored 5 junior developers',
    ],
  },
  {
    id: '2',
    company: 'Digital Solutions Co.',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed web and mobile applications for enterprise clients',
    achievements: [
      'Built real-time collaboration features serving 10K+ users',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Led migration from monolith to microservices architecture',
    ],
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Created responsive web applications and landing pages',
    achievements: [
      'Developed component library used across 15+ projects',
      'Improved website performance score from 65 to 95',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
  },
];

export const profile = {
  name: 'Alex Johnson',
  title: 'Senior Software Developer',
  bio: 'Passionate about building elegant mobile and web applications that solve real-world problems. Specialized in React Native, TypeScript, and modern web technologies.',
  email: 'alex.johnson@example.com',
  github: 'github.com/alexjohnson',
  linkedin: 'linkedin.com/in/alexjohnson',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
};
