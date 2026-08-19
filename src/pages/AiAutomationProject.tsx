import {
  Github,
  Bot,
  Workflow,
  ArrowDown,
  ArrowDownToLine,
  Cpu,
  ArrowUpFromLine,
  Sparkles,
  Check,
  Database,
  MessageSquare,
  Brain,
  Rocket,
  AlertTriangle,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import TechTag from '@/components/TechTag';
import Reveal from '@/components/Reveal';
import { projects, aiWorkflowSteps } from '@/data/portfolio';

const project = projects.find((p) => p.slug === 'ai-automation')!;

const workflowIconMap: Record<string, typeof Bot> = {
  Input: ArrowDownToLine,
  'AI Agent / LLM': Bot,
  'Automation Workflow': Workflow,
  Processing: Cpu,
  Output: ArrowUpFromLine,
};

const projectItems = [
  {
    title: 'AI Product Intelligence System',
    icon: Sparkles,
    description:
      'A system that uses AI agents and LLMs to gather, analyze, and synthesize product-related intelligence — turning scattered information into structured insights.',
  },
  {
    title: 'Data Extraction Agent',
    icon: Database,
    description:
      'An AI agent built to extract structured data from unstructured sources, automating what would otherwise be a manual and repetitive data collection process.',
  },
  {
    title: 'WhatsApp Automation / AI Workflow',
    icon: MessageSquare,
    description:
      'An AI-powered workflow that integrates with WhatsApp to automate interactions and processing, combining LLM reasoning with messaging automation.',
  },
  {
    title: 'AI-Powered Applications',
    icon: Brain,
    description:
      'Hands-on experience building applications that integrate LLM-based capabilities and automation workflows into practical tools.',
  },
];

const challenges = [
  'Designing automation workflows that are reliable and produce consistent outputs.',
  'Crafting effective prompts to guide LLM behaviour for each specific use case.',
  'Integrating AI agents with external services and messaging platforms.',
];

const futureImprovements = [
  'Expand automation workflows to cover additional real-world scenarios.',
  'Add monitoring and logging for AI agent decisions and outputs.',
  'Explore deployment of AI automation pipelines on cloud infrastructure.',
];

export default function AiAutomationProject() {
  const isPlaceholder = project.githubUrl.startsWith('REPLACE_WITH_');

  return (
    <PageHeader title={project.title} subtitle={project.shortDescription}>
      {/* GitHub */}
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
      <Section title="Overview" icon={<Bot className="h-5 w-5" />}>
        <p className="leading-relaxed">
          I have hands-on experience building AI automation workflows and AI
          agents that use Large Language Models to reason, extract, and process
          information — then hand off the results to automation pipelines that
          take action. This project page collects several of these workflows into
          one overview, highlighting the kinds of AI automation I've built
          alongside my cloud and DevOps work.
        </p>
      </Section>

      {/* Workflow diagram */}
      <div className="mb-12 mt-4">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Automation Workflow
        </h2>
        <Reveal>
          <div className="glass-card relative overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />

            <div className="relative flex flex-col items-center gap-3">
              {aiWorkflowSteps.map((step, idx) => {
                const Icon = workflowIconMap[step.icon] ?? Bot;
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800/60 px-5 py-3.5 shadow-lg transition-all duration-300 hover:border-accent-500/40 hover:shadow-accent-500/20">
                      <div className="rounded-lg bg-gradient-to-br from-accent-500/20 to-cyan-500/10 p-2">
                        <Icon className="h-5 w-5 text-accent-400" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 sm:text-base">
                        {step.label}
                      </span>
                    </div>

                    {idx < aiWorkflowSteps.length - 1 && (
                      <ArrowDown
                        className="my-1 h-5 w-5 animate-pulse text-accent-400/60"
                        aria-hidden
                      />
                    )}
                  </div>
                );
              })}

              {/* Output result box */}
              <div className="mt-2 w-full max-w-sm rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/10 to-cyan-500/5 p-5 text-center shadow-lg shadow-accent-500/10">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                  Result
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Structured, actionable output delivered through the automation
                  pipeline.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Projects / Workflows */}
      <Section
        title="Projects & Workflows"
        icon={<Workflow className="h-5 w-5" />}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {projectItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="glass-card glass-card-hover h-full p-5">
                <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/10 p-2.5">
                  <item.icon className="h-5 w-5 text-accent-400" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key features */}
      <Section title="Key Features" icon={<Check className="h-5 w-5" />}>
        <div className="grid gap-3 sm:grid-cols-2">
          {project.keyFeatures.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
            >
              <Check className="h-4 w-4 shrink-0 text-accent-400" />
              {f}
            </div>
          ))}
        </div>
      </Section>

      {/* Challenges & Future */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
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
              <Rocket className="h-5 w-5 text-accent-400" />
              Future Improvements
            </h3>
            <ul className="space-y-3">
              {futureImprovements.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </PageHeader>
  );
}
