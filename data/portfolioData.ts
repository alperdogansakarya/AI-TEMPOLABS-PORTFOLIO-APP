import { Project, Skill, Experience } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Araç Filosu Yönetim Sistemi',
    description: 'Otokar araç filosu için gerçek zamanlı izleme ve yönetim platformu',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    id: '2',
    title: 'Mobil Servis Takip Uygulaması',
    description: 'Servis operasyonları için mobil uygulama ve gerçek zamanlı bildirimler',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    featured: true,
  },
  {
    id: '3',
    title: 'IoT Sensör Entegrasyonu',
    description: 'Araç sensörlerinden veri toplama ve analiz sistemi',
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80',
    technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana'],
    featured: true,
  },
  {
    id: '4',
    title: 'Üretim Hattı Dashboard',
    description: 'Üretim süreçlerini izlemek için gerçek zamanlı dashboard',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'Docker'],
    featured: false,
  },
  {
    id: '5',
    title: 'Tedarikçi Portal Sistemi',
    description: 'Tedarikçi yönetimi ve sipariş takip platformu',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    technologies: ['Next.js', 'GraphQL', 'Prisma', 'TailwindCSS'],
    featured: false,
  },
  {
    id: '6',
    title: 'Kalite Kontrol Mobil App',
    description: 'Üretim kalite kontrol süreçleri için mobil uygulama',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    technologies: ['React Native', 'SQLite', 'Camera API'],
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'React Native', level: 95, category: 'mobile' },
  { name: 'TypeScript', level: 92, category: 'frontend' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 87, category: 'backend' },
  { name: 'Docker', level: 82, category: 'tools' },
  { name: 'AWS', level: 78, category: 'tools' },
  { name: 'GraphQL', level: 85, category: 'backend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Otokar',
    position: 'Yazılım Mühendisi',
    period: '2020 - Günümüz',
    description: 'Otomotiv sektöründe yazılım çözümleri geliştirme ve sistem entegrasyonları',
    achievements: [
      'Araç filosu yönetim sistemini baştan sona geliştirdim',
      'Mobil uygulamalar ile servis süreçlerini %40 hızlandırdım',
      'IoT sensör entegrasyonu ile gerçek zamanlı veri toplama sistemi kurdum',
    ],
  },
  {
    id: '2',
    company: 'Teknoloji Şirketi',
    position: 'Full Stack Developer',
    period: '2018 - 2020',
    description: 'Web ve mobil uygulama geliştirme projeleri',
    achievements: [
      '10+ kurumsal web uygulaması geliştirdim',
      'CI/CD pipeline kurarak deployment süresini %70 azalttım',
      'Mikroservis mimarisine geçiş projesini yönettim',
    ],
  },
  {
    id: '3',
    company: 'Yazılım Ajansı',
    position: 'Frontend Developer',
    period: '2016 - 2018',
    description: 'Responsive web uygulamaları ve kullanıcı arayüzleri geliştirme',
    achievements: [
      'React component kütüphanesi oluşturdum',
      'Web performansını optimize ederek sayfa hızını 2 kat artırdım',
      'Tasarımcılarla işbirliği içinde pixel-perfect UI geliştirdim',
    ],
  },
];

export const profile = {
  name: 'Ali Alper Doğan',
  title: 'Yazılım Mühendisi',
  bio: 'Otokar\'da yazılım mühendisi olarak çalışıyorum. Modern web ve mobil teknolojiler ile gerçek dünya problemlerine çözümler üretmeyi seviyorum. React Native, TypeScript ve cloud teknolojileri konusunda uzmanım.',
  email: 'aldogan@otokar.com.tr',
  phone: '+90 542 775 20 01',
  github: 'github.com/alialperdogan',
  linkedin: 'linkedin.com/in/alialperdogan',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AliAlper',
  location: 'Türkiye',
  company: 'Otokar',
};