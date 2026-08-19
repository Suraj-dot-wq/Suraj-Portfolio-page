// ============================================================================
// CENTRAL PORTFOLIO CONFIGURATION
// ============================================================================
// Update ALL your personal information, links, and content from this single
// file. Every component across the site reads from here.
// ============================================================================

export const personal = {
  name: 'Ghadage Suraj Ganpat',
  shortName: 'Suraj Ghadage',
  label: 'Computer Science & Design Engineering Student',
  tagline: 'Cloud & DevOps Engineer in Progress',
  description:
    'Building hands-on experience in AWS, Cloud Infrastructure, Linux, Docker, Jenkins, CI/CD and AI Automation.',
  currentFocus:
    'Currently preparing for Cloud, DevOps and AWS Cloud Support internship opportunities.',
  targetRole: 'Cloud / DevOps / AWS Cloud Support Engineer Intern',
  education: {
    degree: 'B.E. Computer Science and Design',
    institution: 'Atria Institute of Technology',
    university: 'VTU',
    duration: '2023–2027',
    cgpa: '8.1',
  },
  photoPath: '/images/Screenshot_2026-08-11_170251.png',
};

// --- Social links -----------------------------------------------------------
// TODO: Replace these placeholders with your real URLs.
export const social = {
  github: 'https://github.com/Suraj-dot-wq',
  linkedin: 'www.linkedin.com/in/suraj-ghadage-a14b1a421',
  email: 'surajghadage2004@gmail.com',
};

// --- File paths -------------------------------------------------------------
export const paths = {
  resume: '/documents/Ghadage_Suraj_Resume.pdf',
  certificates: {
    awsCloudPractitioner: '/documents/aws.pdf',
    oracleAiFoundation: '/documents/oracle_certification.pdf',
  },
};

// --- Tech strip (home page) -------------------------------------------------
export const techStrip = [
  'AWS',
  'Linux',
  'Docker',
  'Jenkins',
  'Git',
  'GitHub',
  'Python',
  'CI/CD',
];

// --- Highlights -------------------------------------------------------------
export const highlights = [
  'AWS Certified Cloud Practitioner',
  'Oracle AI Foundation Associate',
  'Hands-on AWS EC2 deployment',
  'Docker + Jenkins CI/CD project',
  'AI automation and AI agent experience',
];

// --- Skills -----------------------------------------------------------------
export const skillCategories = [
  {
    id: 'cloud',
    name: 'Cloud',
    icon: 'Cloud',
    color: 'from-electric-500 to-cyan-500',
    skills: [
      'AWS',
      'EC2',
      'S3',
      'IAM',
      'VPC',
      'Security Groups',
      'NACL',
      'EBS',
      'CloudWatch',
      'CloudTrail',
      'Route 53',
      'Load Balancer',
      'Auto Scaling',
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'GitBranch',
    color: 'from-cyan-500 to-electric-500',
    skills: ['Docker', 'Docker Compose', 'Jenkins', 'CI/CD', 'Git', 'GitHub'],
  },
  {
    id: 'linux',
    name: 'Linux & Systems',
    icon: 'Terminal',
    color: 'from-electric-500 to-accent-500',
    skills: [
      'Linux',
      'Ubuntu',
      'Amazon Linux',
      'Linux commands',
      'Package management',
      'systemd',
      'SSH',
      'Networking',
      'Troubleshooting',
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code2',
    color: 'from-accent-500 to-electric-500',
    skills: ['Python', 'SQL', 'Bash'],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    icon: 'Bot',
    color: 'from-cyan-500 to-accent-500',
    skills: [
      'AI Agents',
      'AI Automation Workflows',
      'Prompt Engineering',
      'Workflow Automation',
      'Gemini',
      'LLM-based Applications',
    ],
  },
];

// --- Projects ---------------------------------------------------------------
export const projects = [
  {
    slug: 'django-cicd',
    title: 'Django Notes Application — AWS + Docker + Jenkins CI/CD',
    shortDescription:
      'A containerized Django Notes application deployed on AWS EC2 using Docker, Docker Compose, MySQL, Nginx and Jenkins-based CI/CD.',
    technologies: [
      'Django',
      'Python',
      'MySQL',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Jenkins',
      'GitHub',
      'AWS EC2',
      'Linux',
    ],
    keyFeatures: [
      'GitHub source-code management',
      'Jenkins CI/CD pipeline',
      'Docker image building',
      'Docker Hub image push',
      'AWS EC2 deployment',
      'Django application',
      'MySQL database',
      'Nginx',
      'Container health checks',
      'Linux server administration',
    ],
    githubUrl: 'https://github.com/Suraj-dot-wq/Personal-Notes-App',
    icon: 'ServerCog',
  },
  {
    slug: 'gnn-cybersecurity',
    title: 'Graph Neural Network for Cybersecurity Detection and Prevention',
    shortDescription:
      'A cybersecurity and machine learning project using Graph Neural Networks for cyber attack detection and prevention.',
    technologies: [
      'Python',
      'Graph Neural Networks',
      'Machine Learning',
      'Cybersecurity',
      'Intrusion Detection',
      'CIC-IoT-2023 dataset',
    ],
    keyFeatures: [
      'Graph-based network traffic modelling',
      'Graph Neural Network architecture',
      'Cyber attack detection',
      'Intrusion detection',
      'CIC-IoT-2023 dataset analysis',
    ],
    githubUrl: 'https://github.com/Suraj-dot-wq/GNN-Cyber-Attack-Detection',
    icon: 'ShieldCheck',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation & AI Agent Projects',
    shortDescription:
      'Hands-on experience building AI automation workflows and AI agents for intelligent task automation.',
    technologies: [
      'AI Agents',
      'AI Automation',
      'LLM-based Applications',
      'Gemini',
      'Prompt Engineering',
      'Workflow Automation',
    ],
    keyFeatures: [
      'AI Product Intelligence System',
      'Data Extraction Agent',
      'WhatsApp automation / AI workflow',
      'AI-powered applications',
    ],
    githubUrl: 'https://github.com/Suraj-dot-wq/n8n-workflows',
    icon: 'Bot',
  },
];

// --- Certifications ---------------------------------------------------------
export const certifications = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    filePath: paths.certificates.awsCloudPractitioner,
    icon: 'Cloud',
  },
  {
    id: 'oracle-ai-foundation',
    name: 'Oracle AI Foundation Associate',
    issuer: 'Oracle',
    filePath: paths.certificates.oracleAiFoundation,
    icon: 'BrainCircuit',
  },
];

// --- Architecture diagram data (Django project) -----------------------------
export const architectureSteps = [
  { label: 'Developer', icon: 'Code2' },
  { label: 'GitHub', icon: 'Github' },
  { label: 'Jenkins', icon: 'Workflow' },
  { label: 'Docker Build', icon: 'Package' },
  { label: 'Docker Image', icon: 'Container' },
  { label: 'Docker Hub', icon: 'CloudUpload' },
  { label: 'AWS EC2', icon: 'Server' },
  { label: 'Docker Compose', icon: 'Layers' },
];

export const architectureStack = ['Nginx', 'Django', 'MySQL'];

// --- AI automation workflow steps -------------------------------------------
export const aiWorkflowSteps = [
  { label: 'Input', icon: 'ArrowDownToLine' },
  { label: 'AI Agent / LLM', icon: 'Bot' },
  { label: 'Automation Workflow', icon: 'Workflow' },
  { label: 'Processing', icon: 'Cpu' },
  { label: 'Output', icon: 'ArrowUpFromLine' },
];

export type Project = (typeof projects)[number];
export type Certification = (typeof certifications)[number];
export type SkillCategory = (typeof skillCategories)[number];
