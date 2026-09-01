import {
  Cloud,
  GitBranch,
  Terminal,
  Code2,
  Bot,
  Check,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import Reveal from '@/components/Reveal';

const iconMap: Record<string, typeof Cloud> = {
  Cloud,
  GitBranch,
  Terminal,
  Code2,
  Bot,
};

export default function Skills() {
  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              The technologies and tools I'm building hands-on proficiency in —
              organized by domain.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] ?? Cloud;
              return (
                <Reveal key={cat.id} delay={i * 100}>
                  <div className="glass-card glass-card-hover h-full p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`rounded-2xl bg-gradient-to-br ${cat.color} p-3 shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          {cat.name}
                        </h2>
                        <p className="text-xs text-slate-500">
                          {cat.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-electric-500/40 hover:bg-electric-500/5 hover:text-white"
                        >
                          <Check className="h-3.5 w-3.5 text-electric-400/60 transition-colors group-hover:text-electric-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
