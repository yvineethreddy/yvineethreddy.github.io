export interface ExperienceItem {
  year: string
  role: string
  company: string
  description: string
  achievements?: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    year: 'Apr 2026 – Present',
    role: 'Consultant',
    company: 'KPMG',
    description: 'Working on an enterprise healthcare pricing platform using Java 17 and Spring Boot. The work includes REST API development, database query analysis, asynchronous processing with Google Cloud Pub/Sub, and batch workflows using Spring Batch. The platform uses AlloyDB and runs on Google Kubernetes Engine.',
    achievements: [
      'Developing and enhancing APIs for pricing and product workflows',
      'Working with asynchronous batch processing and job-status tracking',
      'Investigating application behaviour through logs and Kubernetes tooling',
    ]
  },
  {
    year: 'Aug 2024 – Mar 2026',
    role: 'Associate Consultant',
    company: 'Infosys',
    description: 'Worked on enterprise banking applications using Java and Spring Boot. Experience included containerised application delivery, CI/CD pipelines, and deployment support across Azure and Kubernetes environments.',
    achievements: [
      'Worked with Azure Pipelines and later GitHub Actions for deployment automation',
      'Used Docker and Kubernetes for container-based application delivery',
      'Used the Red Hat web console to inspect workloads, containers, and application logs',
    ]
  },
  {
    year: 'Oct 2021 – Jul 2024',
    role: 'Java Full Stack Developer',
    company: 'DBQ Technologies',
    description: 'Developed Java full-stack applications and operational tools. Work included backend development, frontend features, and exposure to AWS-based services and authentication integrations.',
    achievements: [
      'Built application features using Java and React',
      'Worked with AWS, OIDC, and single sign-on integrations',
      'Contributed across development and application support',
    ]
  },
]

export interface ProjectItem {
  id: string
  title: string
  description: string
  longDescription: string
  architecture: string
  features: string[]
  stack: string[]
  image: string
  links: {
    github?: string
    live?: string
  }
}

export const projectsData: ProjectItem[] = [
  {
    id: 'pricing-platform',
    title: 'Enterprise Pricing Platform',
    description: 'Backend services and batch workflows for customer-specific product pricing.',
    longDescription: 'Professional experience on an enterprise pricing platform. The work involves Java and Spring Boot APIs, pricing workflows, asynchronous processing, and database-backed operations. Source code and client-specific implementation details are not public.',
    architecture: 'Spring Boot services, REST APIs, AlloyDB, Google Cloud Pub/Sub, Spring Batch, and Google Kubernetes Engine.',
    features: [
      'API development for product and customer pricing workflows',
      'Asynchronous processing for batch operations',
      'Job-status tracking and operational troubleshooting',
      'Database query analysis and performance-focused changes',
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Batch', 'AlloyDB', 'Pub/Sub', 'GKE'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
    links: {}
  },
  {
    id: 'banking-applications',
    title: 'Enterprise Banking Applications',
    description: 'Java application development and deployment support in an enterprise environment.',
    longDescription: 'Professional experience contributing to enterprise banking applications. The work covered Java and Spring Boot development, container-based environments, CI/CD workflows, and application troubleshooting.',
    architecture: 'Java and Spring Boot applications delivered through containerised environments and automated pipelines.',
    features: [
      'Backend application development and API integration',
      'Build and deployment automation with Azure Pipelines and GitHub Actions',
      'Container and workload inspection using Kubernetes tooling',
      'Application log investigation through the Red Hat web console',
    ],
    stack: ['Java', 'Spring Boot', 'Azure Pipelines', 'GitHub Actions', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    links: {}
  },
  {
    id: 'full-stack-applications',
    title: 'Full-Stack Application Development',
    description: 'Java services and frontend features for business applications.',
    longDescription: 'Professional experience building full-stack application features with Java and React, with additional exposure to AWS services and identity integrations. Client-owned source code is not published in this portfolio.',
    architecture: 'Java application services, React user interfaces, and cloud-based identity integrations.',
    features: [
      'Backend feature development using Java',
      'Frontend development using React',
      'Integration work involving OIDC and single sign-on',
      'Application development and support',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'AWS', 'OIDC', 'SSO'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
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
    name: 'Backend Development',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚙️',
    skills: [
      { name: 'Java', level: 'Advanced', description: 'Java 17, collections, streams, and application development' },
      { name: 'Spring Boot', level: 'Advanced', description: 'REST APIs, dependency injection, and service development' },
      { name: 'Microservices', level: 'Advanced', description: 'Service-based application development and integration' },
      { name: 'Spring Batch', level: 'Intermediate', description: 'Batch jobs and scheduled processing' },
      { name: 'Gradle / Maven', level: 'Intermediate', description: 'Build and dependency management' },
    ]
  },
  {
    name: 'Frontend Development',
    color: 'from-pink-500 to-rose-500',
    icon: '🎨',
    skills: [
      { name: 'React 18', level: 'Intermediate', description: 'Components, hooks, and application UI development' },
      { name: 'JavaScript', level: 'Intermediate', description: 'Frontend behaviour and API integration' },
      { name: 'HTML / CSS', level: 'Intermediate', description: 'Responsive application interfaces' },
      { name: 'Axios', level: 'Intermediate', description: 'HTTP client integration and API calls' },
    ]
  },
  {
    name: 'Databases and Messaging',
    color: 'from-green-500 to-emerald-500',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL / AlloyDB', level: 'Intermediate', description: 'Relational data, SQL, and query analysis' },
      { name: 'Google Cloud Pub/Sub', level: 'Intermediate', description: 'Asynchronous messaging and event-driven workflows' },
    ]
  },
  {
    name: 'Cloud and DevOps',
    color: 'from-violet-500 to-purple-600',
    icon: '☁️',
    skills: [
      { name: 'Google Cloud Platform', level: 'Intermediate', description: 'GKE, Pub/Sub, and cloud-hosted application workflows' },
      { name: 'Microsoft Azure', level: 'Intermediate', description: 'Azure Pipelines and deployment environments' },
      { name: 'Docker', level: 'Intermediate', description: 'Containerised application workflows' },
      { name: 'Kubernetes / GKE', level: 'Intermediate', description: 'Workload inspection, deployment, and troubleshooting' },
      { name: 'GitHub Actions', level: 'Intermediate', description: 'CI/CD workflow automation' },
      { name: 'Red Hat Web Console', level: 'Intermediate', description: 'Container, workload, and log inspection' },
    ]
  },
  {
    name: 'Identity and Integration',
    color: 'from-slate-500 to-slate-700',
    icon: '🔐',
    skills: [
      { name: 'OIDC / SSO', level: 'Intermediate', description: 'Authentication and identity integration' },
      { name: 'AWS', level: 'Intermediate', description: 'Cloud platform exposure and application integration' },
      { name: 'Git', level: 'Intermediate', description: 'Version control and collaborative development' },
    ]
  },
]

export const coreStack = [
  'Java',
  'Spring Boot',
  'REST APIs',
  'Microservices',
  'React',
  'PostgreSQL',
  'AlloyDB',
  'Google Cloud Pub/Sub',
  'GKE',
  'Docker',
  'Kubernetes',
  'Azure Pipelines',
  'GitHub Actions',
]

export const domainExpertise = [
  {
    title: 'Backend APIs',
    short: 'Java and Spring Boot service development and API integration.',
    icon: '⚙️',
  },
  {
    title: 'Batch and Asynchronous Processing',
    short: 'Scheduled jobs, messaging workflows, and operational status tracking.',
    icon: '🔄',
  },
  {
    title: 'Database Work',
    short: 'SQL analysis, relational data, and query performance investigation.',
    icon: '🗄️',
  },
  {
    title: 'Cloud and Delivery',
    short: 'Containerised applications, CI/CD pipelines, and deployment support.',
    icon: '☁️',
  },
]

export const powersData = []
