import {
  Cloud,
  Server,
  GitBranch,
  Terminal,
  Code2,
  Bot,
  Network,
  GraduationCap,
  Target,
  Cpu,
} from 'lucide-react';
import { personal } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

const skillAreas = [
  { label: 'AWS', icon: Cloud },
  { label: 'Cloud Infrastructure', icon: Server },
  { label: 'Linux', icon: Terminal },
  { label: 'Docker', icon: Server },
  { label: 'Jenkins', icon: GitBranch },
  { label: 'CI/CD', icon: GitBranch },
  { label: 'Git / GitHub', icon: GitBranch },
  { label: 'Networking', icon: Network },
  { label: 'Python', icon: Code2 },
  { label: 'AI Automation', icon: Bot },
  { label: 'AI Agents', icon: Bot },
];

const handsOn = [
  'AWS EC2',
  'Docker',
  'Docker Compose',
  'Jenkins',
  'Nginx',
  'Django',
  'MySQL',
  'Linux',
];

export default function About() {
  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad max-w-4xl">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Me
            </h1>
            <p className="mt-3 text-base text-slate-400">
              {personal.targetRole}
            </p>
          </Reveal>

          {/* Introduction */}
          <Reveal delay={100}>
            <div className="glass-card mt-8 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-slate-300">
                I'm <span className="font-semibold text-white">{personal.shortName}</span>,
                a Computer Science and Design engineering student at{' '}
                <span className="text-electric-400">
                  {personal.education.institution}
                </span>{' '}
                ({personal.education.university}), currently in my{' '}
                {personal.education.duration} batch with a CGPA of{' '}
                {personal.education.cgpa}. I'm a fresher building practical,
                hands-on skills in cloud infrastructure, DevOps tooling, and AI
                automation — not just theory, but real deployable projects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                I'm particularly interested in{' '}
                <span className="text-cyan-400">Cloud Engineering</span>,{' '}
                <span className="text-cyan-400">DevOps</span> and{' '}
                <span className="text-cyan-400">AWS Cloud Support</span> roles,
                where I can combine Linux systems knowledge with modern CI/CD
                and cloud deployment practices. I enjoy the process of taking an
                application from source code on a developer's machine all the way
                to a running, monitored deployment on AWS — and I've done exactly
                that end-to-end.
              </p>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={150}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card glass-card-hover p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-3">
                  <GraduationCap className="h-6 w-6 text-electric-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {personal.education.degree}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {personal.education.institution}
                </p>
                <p className="text-sm text-slate-400">
                  {personal.education.university}
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
                  <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1">
                    {personal.education.duration}
                  </span>
                  <span className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1">
                    CGPA: {personal.education.cgpa}
                  </span>
                </div>
              </div>

              <div className="glass-card glass-card-hover p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-accent-500/10 p-3">
                  <Target className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Career Focus</h3>
                <p className="mt-2 text-sm text-slate-300">{personal.targetRole}</p>
                <p className="mt-2 text-sm text-slate-400">
                  {personal.currentFocus}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Skills I'm developing */}
          <Reveal delay={200}>
            <h2 className="mt-12 text-xl font-semibold text-white">
              Skills I'm Developing
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skillAreas.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-electric-500/30 hover:text-white"
                >
                  <s.icon className="h-4 w-4 text-electric-400" />
                  {s.label}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hands-on tools */}
          <Reveal delay={250}>
            <h2 className="mt-12 text-xl font-semibold text-white">
              Hands-on Tools & Technologies
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Technologies I've worked with directly in projects and labs.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {handsOn.map((t) => (
                <div
                  key={t}
                  className="glass-card glass-card-hover flex items-center gap-2 p-4 text-sm font-medium text-slate-200"
                >
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
