export interface ExperienceItem {
  year: string
  role: string
  company: string
  client?: string
  description: string
  achievements?: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    year: 'Aug 2024 – Present',
    role: 'Associate Consultant',
    company: 'Infosys Ltd',
    client: 'Danske Bank — Banking Domain',
    description: 'Designing and developing scalable microservices using Java 21 and Spring Boot for banking platforms supporting financial market workflows. Full ownership from development through testing, deployment, and production support (L3).',
    achievements: [
      'Modernized legacy Java 8 services to Java 21, reducing API latency by ~30%',
      'Implemented asynchronous communication with RabbitMQ for resilience and throughput',
      'Applied fault-tolerance patterns (Resilience4j: timeouts, retries, circuit breakers)',
      'Optimized database interactions and query performance for PostgreSQL-backed services',
    ]
  },
  {
    year: 'Oct 2021 – Jun 2024',
    role: 'Java Full Stack Developer',
    company: 'DBQ Technologies Pvt. Ltd',
    client: 'Bankhaus Scheich — Trading Automation Platform',
    description: 'Built backend microservices for trading automation using Java, Spring Boot, and event-driven messaging. Developed internal dashboards with React and integrated Camunda BPM for approval and trade workflows.',
    achievements: [
      'Implemented secure REST APIs for order processing and trade lifecycle management',
      'Integrated Camunda BPM, reducing manual intervention by 15%',
      'Improved database performance through schema tuning, indexing, and query optimization',
      'Delivered features end-to-end in Agile sprint-based delivery',
    ]
  },
  {
    year: 'May 2021 – Sep 2021',
    role: 'Intern',
    company: 'DBQ Technologies Pvt. Ltd',
    description: 'Assisted in backend and frontend development of internal tools using Java and React. Fixed production bugs and improved UI/UX for internal applications.',
    achievements: [
      'Built and maintained Java + React components',
      'Improved build time and developer experience',
      'Learned production best practices and deployment workflows',
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
    id: 'collateral-validation',
    title: 'Collateral Validation Platform',
    description: 'Microservices for validating financial assets and collateral data',
    longDescription: 'Developed microservices for validating financial assets and collateral data at Danske Bank. Migrated core modules to Java 21, improved service reliability, and introduced fault-tolerant patterns to handle downstream system failures.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Resilience4j', 'Microservices'],
    links: {}
  },
  {
    id: 'lpmm-trading',
    title: 'LPMM Trading Automation',
    description: 'Secure order flows and asynchronous processing for trade lifecycle',
    longDescription: 'Implemented secure order flows and asynchronous processing using RabbitMQ at Bankhaus Scheich. Supported full trade lifecycle from capture to execution with event-driven architecture.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'REST APIs', 'Camunda'],
    links: {}
  },
  {
    id: 'fincentives',
    title: 'Fincentives — Regulated eScrip Platform',
    description: 'Identity validation and transaction integrity with government systems',
    longDescription: 'Integrated with external government systems for identity validation. Improved audit logging, reconciliation, and transaction integrity for a regulated eScrip platform.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
    tags: ['Java', 'Spring Boot', 'Integration', 'Audit', 'Security'],
    links: {}
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
    name: 'Backend & Microservices',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 'Expert', description: 'Java 8–21, Collections, Streams API, Concurrency' },
      { name: 'Spring Boot', level: 'Expert', description: 'REST APIs, Spring Cloud, Dependency Injection, Spring Security' },
      { name: 'Microservices', level: 'Advanced', description: 'Service discovery, API Gateway, distributed systems' },
      { name: 'Resilience4j', level: 'Advanced', description: 'Circuit breakers, retries, timeouts, bulkhead' },
      { name: 'Hibernate/JPA', level: 'Advanced', description: 'ORM, migrations, query optimization' },
    ]
  },
  {
    name: 'Messaging & Streaming',
    color: 'from-amber-500 to-orange-500',
    icon: '📨',
    skills: [
      { name: 'RabbitMQ', level: 'Advanced', description: 'Event-driven architecture, queues, exchanges' },
      { name: 'Apache Kafka', level: 'Intermediate', description: 'Event streaming, producers, consumers' },
    ]
  },
  {
    name: 'Databases',
    color: 'from-green-500 to-emerald-500',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', description: 'Schema design, query optimization, indexing, transactions' },
      { name: 'MySQL', level: 'Advanced', description: 'Performance tuning, replication' },
    ]
  },
  {
    name: 'Observability',
    color: 'from-violet-500 to-purple-600',
    icon: '📊',
    skills: [
      { name: 'Micrometer', level: 'Advanced', description: 'Metrics, gauges, counters' },
      { name: 'Prometheus & Grafana', level: 'Advanced', description: 'Monitoring, dashboards, alerting' },
      { name: 'OpenTelemetry', level: 'Intermediate', description: 'Distributed tracing' },
    ]
  },
  {
    name: 'Frontend',
    color: 'from-pink-500 to-rose-500',
    icon: '🎨',
    skills: [
      { name: 'React', level: 'Advanced', description: 'Hooks, Context, component lifecycle' },
      { name: 'TypeScript', level: 'Advanced', description: 'Type safety, interfaces, generics' },
      { name: 'JavaScript / HTML / CSS', level: 'Advanced', description: 'Semantic HTML, responsive design' },
    ]
  },
  {
    name: 'Tools & Practices',
    color: 'from-slate-500 to-slate-700',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 'Advanced', description: 'Version control, branching, CI/CD integration' },
      { name: 'Maven', level: 'Advanced', description: 'Build automation, dependency management' },
      { name: 'Jenkins / GitHub Actions', level: 'Intermediate', description: 'CI/CD pipelines' },
      { name: 'Docker', level: 'Intermediate', description: 'Containers, Dockerfile basics' },
      { name: 'Camunda BPM', level: 'Advanced', description: 'Workflow automation, BPMN, DMN' },
      { name: 'Elasticsearch / Kibana', level: 'Intermediate', description: 'Search, analytics, logging' },
    ]
  },
]

/** Core stack – at-a-glance tech pills for Skills section */
export const coreStack = [
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'RabbitMQ',
  'Microservices',
  'React',
  'TypeScript',
  'Resilience4j',
  'Camunda',
  'Docker',
]

/** Domain expertise – "What I do" for Skills section */
export const domainExpertise = [
  {
    title: 'Microservices & APIs',
    short: 'Design and build scalable REST APIs and event-driven services.',
    icon: '⚙️',
  },
  {
    title: 'Resilience & Performance',
    short: 'Fault tolerance, latency optimization, and production reliability.',
    icon: '🛡️',
  },
  {
    title: 'Data & Storage',
    short: 'Schema design, query tuning, and transactional integrity.',
    icon: '🗄️',
  },
  {
    title: 'Observability',
    short: 'Metrics, tracing, and monitoring for production systems.',
    icon: '📊',
  },
]

/** Superhero-style "powers" / core strengths for cinematic reveal */
export const powersData = [
  { label: 'Resilience', value: 98, sub: 'Fault-tolerant systems' },
  { label: 'Scale', value: 95, sub: 'High-throughput microservices' },
  { label: 'Performance', value: 92, sub: 'Latency & query optimization' },
  { label: 'Uptime', value: 99.99, sub: 'Production reliability' },
  { label: 'Ownership', value: 100, sub: 'End-to-end delivery' },
]
