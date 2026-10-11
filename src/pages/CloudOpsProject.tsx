import {
  Activity,
  AlertTriangle,
  Check,
  Cloud,
  Code2,
  Github,
  Gauge,
  GitBranch,
  HardDrive,
  Layers,
  Network,
  Rocket,
  Server,
  Settings,
  Terminal,
  Workflow,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import TechTag from '@/components/TechTag';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/portfolio';

const project = projects.find((item) => item.slug === 'cloudops-self-healing')!;

const architectureSteps = [
  { label: 'Terraform', icon: Code2 },
  { label: 'AWS VPC + EC2', icon: Cloud },
  { label: 'Ubuntu Linux Host', icon: Terminal },
  { label: 'Node Exporter', icon: Activity },
  { label: 'Prometheus', icon: Gauge },
  { label: 'Grafana Dashboard', icon: Layers },
];

const implementationSteps = [
  'Python health checks measure CPU, memory, and disk utilization and write results to log files.',
  'A self-healing script checks whether cloudops-demo.service is active.',
  'If the service is inactive, the recovery script attempts to restart it automatically.',
  'Cron runs the health-check and recovery scripts every minute.',
  'Prometheus scrapes its own metrics and Node Exporter metrics from the Ubuntu host.',
  'Grafana visualizes infrastructure usage through CPU, memory, and disk panels.',
  'Prometheus rules evaluate high-resource thresholds at 80% with a two-minute pending period.',
];

const challenges = [
  'Coordinating infrastructure provisioning, host configuration, monitoring, and recovery automation.',
  'Writing recovery logic that responds to service failures without hiding the underlying issue.',
  'Connecting Prometheus, Node Exporter, Grafana, and alert rules into one useful monitoring workflow.',
  'Keeping alert behavior clear while external Alertmanager notification delivery is still being verified.',
];

const futureImprovements = [
  'Verify end-to-end email or webhook delivery through Alertmanager.',
  'Add persistent dashboards and longer-term metric retention.',
  'Expand self-healing coverage to additional services and failure conditions.',
  'Add automated tests and safer recovery limits for production use.',
];

export default function CloudOpsProject() {
  const isPlaceholder = project.githubUrl.startsWith('REPLACE_WITH_');

  return (
    <PageHeader title={project.title} subtitle={project.shortDescription}>
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

      <Section title="Technologies" icon={<Activity className="h-5 w-5" />}>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag key={technology} label={technology} />
          ))}
        </div>
      </Section>

      <Section title="Overview" icon={<Settings className="h-5 w-5" />}>
        <p className="leading-relaxed">
          CloudOps is an infrastructure monitoring and service-recovery platform
          designed to detect system resource issues, monitor an Ubuntu server, and
          automatically recover a managed service when it stops running. Terraform
          provisions the AWS networking and EC2 foundation, while Prometheus,
          Node Exporter, Grafana, Python, and cron provide the monitoring and
          automation layers.
        </p>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
              <AlertTriangle className="h-5 w-5 text-cyan-400" />
              Operating Challenge
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Infrastructure problems can become visible only after a service has
              stopped or a system resource has become constrained. Manual checks
              and recovery create delays and make failures harder to investigate.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-card h-full p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
              <Rocket className="h-5 w-5 text-electric-400" />
              Platform Approach
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              CloudOps combines infrastructure as code, scheduled Linux health
              checks, Prometheus metrics, Grafana dashboards, threshold-based
              alerts, and automatic systemd service recovery in one workflow.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mb-12 mt-12">
        <h2 className="mb-6 text-xl font-semibold text-white">Architecture</h2>
        <Reveal>
          <div className="glass-card relative overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />
            <div className="relative flex flex-col items-center gap-3">
              {architectureSteps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/60 px-5 py-3 shadow-lg transition-all duration-300 hover:border-electric-500/40 hover:shadow-electric-500/20 sm:px-6 sm:py-3.5">
                    <div className="rounded-lg bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2">
                      <step.icon className="h-5 w-5 text-electric-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-200 sm:text-base">
                      {step.label}
                    </span>
                  </div>
                  {index < architectureSteps.length - 1 && (
                    <div className="h-5 w-px bg-gradient-to-b from-cyan-400/60 to-electric-500/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Section title="Monitoring & Self-Healing Workflow" icon={<Workflow className="h-5 w-5" />}>
        <ol className="space-y-3">
          {implementationSteps.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-electric-500/10 text-xs font-semibold text-electric-400">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Infrastructure Provisioning" icon={<Network className="h-5 w-5" />}>
          <p className="leading-relaxed">
            Terraform describes the AWS VPC, public subnet, internet gateway,
            route table, security group, and Ubuntu EC2 instance. This makes the
            infrastructure repeatable and keeps the cloud foundation versioned
            alongside the project.
          </p>
        </Section>
        <Section title="Alert Handling" icon={<HardDrive className="h-5 w-5" />}>
          <p className="leading-relaxed">
            Prometheus alert rules cover high CPU, memory, and disk utilization
            with an 80% threshold and a two-minute pending period. Alertmanager is
            configured for alert handling, but end-to-end email or webhook delivery
            has not yet been verified.
          </p>
        </Section>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <AlertTriangle className="h-5 w-5 text-cyan-400" />
              Challenges
            </h3>
            <ul className="space-y-3">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {challenge}
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
              {futureImprovements.map((improvement) => (
                <li key={improvement} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-12">
        <Section title="Key Features" icon={<Server className="h-5 w-5" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.keyFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
              >
                <Check className="h-4 w-4 shrink-0 text-electric-400" />
                {feature}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </PageHeader>
  );
}
