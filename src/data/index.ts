export interface ExperienceItem {
  year: string
  role: string
  company: string
  description: string
  achievements?: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    year: '2024–Present',
    role: 'Associate Consultant',
    company: 'Infosys',
    description: 'Danske Bank — Led asset validation, Java platform modernization and performance tuning that reduced latency and improved reliability.',
    achievements: [
      'Optimized query performance by 40%',
      'Designed resilient microservice patterns',
      'Mentored junior developers',
    ]
  },
  {
    year: '2021–2024',
    role: 'Java Full Stack Developer',
    company: 'DBQ',
    description: 'Built crypto trading automation and workflow systems; owned end-to-end features and operational improvements.',
    achievements: [
      'Developed 15+ production features',
      'Implemented Camunda BPM workflows',
      'Reduced deployment time by 60%',
    ]
  },
  {
    year: '2021',
    role: 'Intern',
    company: 'DBQ',
    description: 'Java + React foundations; improved UI maintainability and developer experience.',
    achievements: [
      'Built 5 React components',
      'Improved build time by 30%',
      'Learned production best practices',
    ]
  }
]

export interface ProjectItem {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  links: {
    github?: string
    live?: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 'asset-validation',
    title: 'Asset Validation Platform',
    description: 'Enterprise-grade validation system for financial assets',
    longDescription: 'Built a high-performance asset validation microservice handling 100K+ transactions daily with 99.99% uptime. Implemented circuit breakers, rate limiting, and distributed caching.',
    image: '/projects/asset-validation.jpg',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    links: {
      github: 'https://github.com',
    }
  },
  {
    id: 'trading-automation',
    title: 'Trading Automation Suite',
    description: 'Crypto trading workflow automation with BPM',
    longDescription: 'Developed workflow automation system using Camunda BPM for executing trading strategies with 0 manual intervention.',
    image: '/projects/trading.jpg',
    tags: ['Camunda', 'Spring Boot', 'React', 'Redis'],
    links: {
      github: 'https://github.com',
    }
  },
  {
    id: 'platform-modernization',
    title: 'Platform Modernization Initiative',
    description: 'Legacy system transformation to microservices',
    longDescription: 'Led modernization of monolithic banking platform to cloud-native microservices, reducing infrastructure costs by 45%.',
    image: '/projects/modernization.jpg',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'AWS'],
    links: {
      github: 'https://github.com',
    }
  },
]

export interface SkillCategory {
  name: string
  color: string
  icon: string
  skills: {
    name: string
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner'
    description: string
  }[]
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Backend',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 'Expert', description: 'Core Java, Java 8+ features, Collections, Streams API' },
      { name: 'Spring Boot', level: 'Expert', description: 'REST APIs, Dependency Injection, Spring Security' },
      { name: 'Microservices', level: 'Advanced', description: 'Service discovery, API Gateway, Circuit breakers' },
      { name: 'Resilience4j', level: 'Advanced', description: 'Fault tolerance, retry mechanisms, bulkhead pattern' },
    ]
  },
  {
    name: 'Databases',
    color: 'from-green-500 to-emerald-500',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', description: 'Schema design, query optimization, transactions' },
      { name: 'MySQL', level: 'Advanced', description: 'Database admin, performance tuning, replication' },
    ]
  },
  {
    name: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    icon: '🎨',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Hooks, Context API, Component lifecycle' },
      { name: 'TypeScript', level: 'Advanced', description: 'Type safety, Interfaces, Generics' },
    ]
  },
  {
    name: 'Tools',
    color: 'from-orange-500 to-red-500',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 'Advanced', description: 'Version control, branching strategies' },
      { name: 'Maven', level: 'Advanced', description: 'Build automation, dependency management' },
    ]
  },
]
