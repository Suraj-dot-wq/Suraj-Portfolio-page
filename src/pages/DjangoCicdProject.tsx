import {
  Github,
  Server,
  Database,
  Globe,
  Layers,
  Container,
  Workflow,
  Package,
  CloudUpload,
  Code2,
  ArrowDown,
  Check,
  AlertTriangle,
  Rocket,
  Lightbulb,
  Cpu,
  Network,
  Settings,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import TechTag from '@/components/TechTag';
import Reveal from '@/components/Reveal';
import { projects, architectureStack, social } from '@/data/portfolio';

const project = projects.find((p) => p.slug === 'django-cicd')!;

const architectureSteps = [
  { label: 'GitHub Repository', icon: Github },
  { label: 'GitHub Webhook', icon: Code2 },
  { label: 'Jenkins CI/CD', icon: Workflow },
  { label: 'Docker Build', icon: Package },
  { label: 'Trivy Scan', icon: AlertTriangle },
  { label: 'Docker Hub', icon: CloudUpload },
  { label: 'AWS EC2', icon: Server },
  { label: 'Docker Compose', icon: Layers },
];

const stackIcons: Record<string, typeof Server> = {
  Nginx: Globe,
  Django: Cpu,
  MySQL: Database,
};

const cicdWorkflow = [
  'Code changes are pushed to the Personal-Notes-App GitHub repository.',
  'A GitHub webhook triggers the Jenkins pipeline automatically.',
  'Jenkins builds the React frontend, Django REST API, and supporting Docker images.',
  'Trivy scans the built images for vulnerabilities before publishing.',
  'Versioned images are published to Docker Hub for deployment.',
  'AWS EC2 pulls the images and Docker Compose starts Nginx, Django REST API, MySQL, and React services.',
];

const challenges = [
  'Coordinating React, Django REST Framework, MySQL, and Nginx services in one Docker Compose deployment.',
  'Configuring Nginx to serve web traffic and route requests to the Django REST API.',
  'Managing environment variables, service dependencies, and networking across local development and EC2.',
  'Adding Trivy image scanning while keeping the pipeline delivery flow reliable.',
];

const futureImprovements = [
  'Add automated frontend and backend tests to the Jenkins pipeline.',
  'Implement blue/green or rolling deployments for zero-downtime updates.',
  'Connect Prometheus and Grafana dashboards to the deployed application or host.',
  'Move database persistence to a managed service or attached EBS volume.',
];

export default function DjangoCicdProject() {
  const isPlaceholder = project.githubUrl.startsWith('REPLACE_WITH_');

  return (
    <PageHeader
      title={project.title}
      subtitle={project.shortDescription}
    >
      {/* Buttons */}
      <div className="mb-12 flex flex-wrap gap-3">
        {!isPlaceholder && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        )}
      </div>

      {/* Technologies */}
      <Section title="Technologies" icon={<Cpu className="h-5 w-5" />}>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview" icon={<Settings className="h-5 w-5" />}>
        <p className="leading-relaxed">
          NexaVault is a containerized, multi-user knowledge and productivity
          platform built with React and Django REST Framework. It is deployed on
          AWS EC2 using Docker, Docker Compose, MySQL, and Nginx, with Jenkins
          automating the delivery workflow from GitHub webhook through image
          scanning, Docker Hub publishing, and cloud deployment.
        </p>
      </Section>

      {/* Problem & Solution */}
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
              <AlertTriangle className="h-5 w-5 text-cyan-400" />
              Problem
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Deploying a multi-user productivity platform with separate frontend,
              API, database, and web-serving services manually is error-prone and
              difficult to reproduce. Manual image builds and server changes make
              reliable updates harder as the platform grows.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-card h-full p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
              <Lightbulb className="h-5 w-5 text-electric-400" />
              Solution
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Package the React frontend, Django REST API, and MySQL services with
              Docker, use Docker Compose for orchestration, place Nginx in front
              for web traffic, scan images with Trivy, and automate the delivery
              cycle with Jenkins on AWS EC2.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Architecture diagram */}
      <div className="mb-12 mt-12">
        <h2 className="mb-6 text-xl font-semibold text-white">Architecture</h2>
        <Reveal>
          <div className="glass-card relative overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />

            {/* Pipeline flow */}
            <div className="relative flex flex-col items-center gap-3">
              {architectureSteps.map((step, idx) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/60 px-5 py-3 shadow-lg transition-all duration-300 hover:border-electric-500/40 hover:shadow-electric-500/20 sm:px-6 sm:py-3.5">
                    <div className="rounded-lg bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2">
                      <step.icon className="h-5 w-5 text-electric-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-200 sm:text-base">
                      {step.label}
                    </span>
                  </div>

                  {idx < architectureSteps.length - 1 && (
                    <ArrowDown
                      className="my-1 h-5 w-5 animate-pulse text-cyan-400/60"
                      aria-hidden
                    />
                  )}
                </div>
              ))}

              {/* Final stack box */}
              <ArrowDown className="my-1 h-5 w-5 animate-pulse text-cyan-400/60" aria-hidden />
              <div className="w-full max-w-sm rounded-2xl border border-electric-500/30 bg-gradient-to-br from-electric-500/10 to-cyan-500/5 p-5 shadow-lg shadow-electric-500/10">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-electric-400">
                  Containerized Stack on EC2
                </p>
                <div className="space-y-2">
                  {architectureStack.map((tech) => {
                    const Icon = stackIcons[tech] ?? Server;
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-900/60 px-4 py-2.5 transition-all duration-300 hover:border-cyan-500/40"
                      >
                        <Icon className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm font-medium text-slate-200">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* CI/CD Workflow */}
      <Section
        title="CI/CD Workflow"
        icon={<Workflow className="h-5 w-5" />}
      >
        <ol className="space-y-3">
          {cicdWorkflow.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-xs font-semibold text-electric-400">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed text-slate-300">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* Docker Setup */}
      <Section title="Docker Setup" icon={<Container className="h-5 w-5" />}>
        <p className="leading-relaxed">
          NexaVault packages its React frontend, Django REST API, MySQL database,
          and Nginx web server into a Docker-based stack. Docker Compose defines
          the service relationships and deployment flow, while the Jenkins
          pipeline builds the images and Trivy scans them for vulnerabilities
          before they are published to Docker Hub.
        </p>
      </Section>

      {/* AWS Deployment */}
      <Section title="AWS Deployment" icon={<Server className="h-5 w-5" />}>
        <p className="leading-relaxed">
          NexaVault is hosted on an AWS EC2 instance running Linux. Docker Compose
          brings up the React, Django REST API, MySQL, and Nginx services, while
          AWS VPC networking and security groups control access to the deployment.
          Prometheus, Grafana, and Node Exporter are part of the monitoring work
          associated with the project; they are described as connected monitoring
          only when they are actively observing the deployed application or host.
        </p>
      </Section>

      {/* Challenges & Future */}
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <AlertTriangle className="h-5 w-5 text-cyan-400" />
              Challenges
            </h3>
            <ul className="space-y-3">
              {challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-card h-full p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Rocket className="h-5 w-5 text-electric-400" />
              Future Improvements
            </h3>
            <ul className="space-y-3">
              {futureImprovements.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Key features */}
      <div className="mb-4 mt-12">
        <Section title="Key Features" icon={<Network className="h-5 w-5" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.keyFeatures.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
              >
                <Check className="h-4 w-4 shrink-0 text-electric-400" />
                {f}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageHeader>
  );
}
