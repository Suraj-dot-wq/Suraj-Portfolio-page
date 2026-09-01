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
  { label: 'Developer', icon: Code2 },
  { label: 'GitHub', icon: Github },
  { label: 'Jenkins', icon: Workflow },
  { label: 'Docker Build', icon: Package },
  { label: 'Docker Image', icon: Container },
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
  'Source code is managed on GitHub and tracked through branches.',
  'Jenkins detects changes and triggers the CI/CD pipeline automatically.',
  'Docker builds a container image of the Django application.',
  'The built image is pushed to Docker Hub as a versioned artifact.',
  'AWS EC2 pulls the latest image from Docker Hub.',
  'Docker Compose orchestrates Nginx, Django, and MySQL containers on the EC2 instance.',
];

const challenges = [
  'Configuring Nginx as a reverse proxy to route traffic to the Django application container.',
  'Managing environment variables and secrets across local development and EC2 deployment.',
  'Ensuring container health checks correctly reflect application readiness.',
  'Coordinating multiple containers (Django, MySQL, Nginx) with Docker Compose networking.',
];

const futureImprovements = [
  'Add automated testing stages to the Jenkins pipeline before image build.',
  'Implement blue/green or rolling deployments for zero-downtime updates.',
  'Integrate AWS CloudWatch monitoring and alerting for the deployed containers.',
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
          This project is a containerized Django Notes application deployed on
          AWS EC2 using Docker, Docker Compose, MySQL, Nginx, and a Jenkins-based
          CI/CD pipeline. It demonstrates an end-to-end DevOps workflow — from
          source code management on GitHub through automated image building and
          cloud deployment — reflecting the kind of pipeline used in real Cloud
          Engineering and DevOps environments.
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
              Deploying a Django application with a MySQL database manually is
              error-prone, slow, and hard to reproduce. Server configuration
              drift, manual image builds, and inconsistent environments make it
              difficult to deliver updates reliably — especially as an application
              grows.
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
              Containerize the Django app and MySQL database with Docker, use
              Docker Compose to orchestrate multi-container deployment, place
              Nginx in front as a reverse proxy, and automate the entire
              build-and-deploy cycle with a Jenkins CI/CD pipeline running on an
              AWS EC2 instance.
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
          The Django application is packaged into a Docker image defined by a
          Dockerfile, ensuring the application runs identically across
          development and production environments. Docker Compose is used to
          define and run the multi-container stack — Django, MySQL, and Nginx —
          with container health checks in place so the system can detect and
          recover from unhealthy containers.
        </p>
      </Section>

      {/* AWS Deployment */}
      <Section title="AWS Deployment" icon={<Server className="h-5 w-5" />}>
        <p className="leading-relaxed">
          The application is deployed on an AWS EC2 instance running Linux. The
          EC2 instance pulls the latest Docker image from Docker Hub and uses
          Docker Compose to bring up the full stack. Nginx serves as the reverse
          proxy in front of the Django application, handling incoming HTTP
          requests. Linux server administration — including SSH access, package
          management, and service management — is part of the deployment
          workflow.
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
