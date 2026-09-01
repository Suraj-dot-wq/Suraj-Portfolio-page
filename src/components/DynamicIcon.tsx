import {
  Cloud,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GitBranch,
  Terminal,
  Code2,
  Bot,
  ServerCog,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Package,
  Container,
  CloudUpload,
  Server,
  Layers,
  ArrowDownToLine,
  Cpu,
  ArrowUpFromLine,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GitBranch,
  Terminal,
  Code2,
  Bot,
  ServerCog,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Package,
  Container,
  CloudUpload,
  Server,
  Layers,
  ArrowDownToLine,
  Cpu,
  ArrowUpFromLine,
};

export default function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (Icon) return <Icon className={className} />;
  return <Cloud className={className} />;
}
