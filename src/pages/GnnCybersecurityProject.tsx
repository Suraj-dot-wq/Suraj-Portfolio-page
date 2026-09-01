import {
  Github,
  ShieldCheck,
  Database,
  Cpu,
  Network,
  AlertTriangle,
  Rocket,
  Target,
  GitBranch,
  Brain,
  Check,
  Layers,
  Search,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import TechTag from '@/components/TechTag';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/portfolio';

const project = projects.find((p) => p.slug === 'gnn-cybersecurity')!;

const methodology = [
  'Network traffic data from the CIC-IoT-2023 dataset is preprocessed and represented as graph structures.',
  'Graph Neural Networks are used to model the relational structure of network entities and their connections.',
  'The model learns to distinguish normal traffic patterns from attack patterns using graph-based representations.',
  'Detection is performed by classifying graph-structured inputs as benign or malicious.',
];

const modelLayers = [
  'Input layer — graph-structured network traffic data',
  'Graph convolution layers — aggregate information from neighbouring nodes',
  'Activation and dropout — non-linearity and regularisation',
  'Readout / pooling — produce a graph-level representation',
  'Output layer — classification (benign vs. attack)',
];

const challenges = [
  'Handling the scale and complexity of the CIC-IoT-2023 dataset.',
  'Effectively representing network traffic as graph structures.',
  'Balancing model complexity with training efficiency.',
  'Addressing class imbalance between normal and attack traffic.',
];

const futureImprovements = [
  'Experiment with additional GNN architectures for comparison.',
  'Extend detection to a broader set of attack categories.',
  'Investigate real-time detection on streaming traffic data.',
  'Explore integration with cloud-based monitoring pipelines.',
];

export default function GnnCybersecurityProject() {
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
      <Section title="Technologies & Topics" icon={<Cpu className="h-5 w-5" />}>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </Section>

      {/* Problem Statement */}
      <Section
        title="Problem Statement"
        icon={<Target className="h-5 w-5" />}
      >
        <p className="leading-relaxed">
          Traditional intrusion detection systems often rely on rule-based or
          feature-based approaches that struggle to capture the relational
          structure of network traffic. As cyber attacks grow more sophisticated
          — especially in IoT environments — there is a need for detection
          approaches that can model the connections and interactions between
          network entities. This project explores using Graph Neural Networks
          (GNNs) to detect and prevent cyber attacks by leveraging graph-structured
          representations of network data.
        </p>
      </Section>

      {/* Dataset */}
      <Section title="Dataset" icon={<Database className="h-5 w-5" />}>
        <p className="leading-relaxed">
          The project uses the{' '}
          <span className="font-semibold text-electric-400">CIC-IoT-2023</span>{' '}
          dataset, a dataset designed for IoT cybersecurity research that
          includes a variety of network traffic scenarios covering both benign
          traffic and different types of attacks. The dataset provides the raw
          material for constructing graph representations of network activity.
        </p>
      </Section>

      {/* Methodology */}
      <Section title="Methodology" icon={<GitBranch className="h-5 w-5" />}>
        <ol className="space-y-3">
          {methodology.map((step, i) => (
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

      {/* Model Architecture */}
      <Section title="Model Architecture" icon={<Layers className="h-5 w-5" />}>
        <Reveal>
          <div className="glass-card p-6">
            <div className="flex flex-col gap-3">
              {modelLayers.map((layer, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-800/60 px-4 py-3 transition-all duration-300 hover:border-electric-500/40">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-cyan-500/10 text-xs font-semibold text-electric-400">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-200">{layer}</span>
                  </div>
                  {i < modelLayers.length - 1 && (
                    <div className="ml-7 h-3 w-px bg-gradient-to-b from-electric-500/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Detection Approach */}
      <Section title="Detection Approach" icon={<Search className="h-5 w-5" />}>
        <p className="leading-relaxed">
          By representing network traffic as graphs, the Graph Neural Network can
          capture structural relationships that flat feature vectors miss. The
          model aggregates information from neighbouring nodes through graph
          convolution operations, learning embeddings that reflect both node
          properties and their context within the network. These embeddings are
          then used to classify traffic as benign or as an attack, enabling
          intrusion detection grounded in the relational structure of the data.
        </p>
      </Section>

      {/* Results */}
      <Section title="Results" icon={<Brain className="h-5 w-5" />}>
        <div className="glass-card p-6">
          <p className="text-sm leading-relaxed text-slate-300">
            Model evaluation results are documented in the project materials.
          </p>
        </div>
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
      <div className="mt-12">
        <Section title="Key Features" icon={<ShieldCheck className="h-5 w-5" />}>
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
