import { Link } from 'react-router-dom';
import {
  FolderGit2,
  Download,
  Mail,
  ChevronRight,
  Sparkles,
  Cloud,
  Terminal,
  GitBranch,
  Container,
  Github,
  Code2,
  Repeat,
} from 'lucide-react';
import {
  personal,
  techStrip,
  highlights,
  social,
  paths,
} from '@/data/portfolio';
import ProfilePhoto from '@/components/ProfilePhoto';
import Reveal from '@/components/Reveal';

const techIcons: Record<string, typeof Cloud> = {
  AWS: Cloud,
  Linux: Terminal,
  Docker: Container,
  Jenkins: Repeat,
  Git: GitBranch,
  GitHub: Github,
  Python: Code2,
  'CI/CD': GitBranch,
};

export default function Home() {
  const isPlaceholder = (v: string) => v.startsWith('REPLACE_WITH_');

  return (
    <div className="pt-16">
      {/* --- Hero --- */}
      <section className="section-pad pt-16 lg:pt-24">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-electric-400">
              <Sparkles className="h-3.5 w-3.5" />
              {personal.label.toUpperCase()}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="gradient-text">{personal.tagline}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {personal.description}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              {personal.currentFocus}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                <FolderGit2 className="h-4 w-4" />
                View My Projects
              </Link>
              <a
                href={paths.resume}
                download
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <Link to="/contact" className="btn-secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="flex justify-center lg:justify-end">
            <ProfilePhoto className="w-64 sm:w-80 lg:w-96 animate-float" />
          </div>
        </div>
      </section>

      {/* --- Tech strip --- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-pad">
          <Reveal>
            <div className="glass-card glass-card-hover flex flex-wrap items-center justify-center gap-3 p-6 sm:gap-4">
              {techStrip.map((tech) => {
                const Icon = techIcons[tech] ?? Cloud;
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-electric-500/30 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-electric-400" />
                    {tech}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Highlights --- */}
      <section className="section-pad pt-4">
        <div className="container-pad">
          <Reveal>
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Key Highlights
            </h2>
            <p className="mt-2 text-center text-sm text-slate-400">
              Certifications and hands-on experience
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={i * 80}>
                <div className="glass-card glass-card-hover group h-full p-6">
                  <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-2.5">
                    <ChevronRight className="h-5 w-5 text-electric-400" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-slate-200">
                    {h}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- Target roles banner --- */}
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="container-pad">
          <Reveal>
            <div className="glass-card relative overflow-hidden p-8 text-center sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 via-transparent to-cyan-500/5" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  Open to internship opportunities
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
                  Actively seeking Cloud, DevOps, AWS Cloud Support, Linux/System
                  Administration and Infrastructure Engineering intern roles.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="btn-primary">
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </Link>
                  <Link to="/projects" className="btn-secondary">
                    Explore my work
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
