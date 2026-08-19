import { Link } from 'react-router-dom';
import { ArrowRight, Github, Check } from 'lucide-react';
import { projects, personal } from '@/data/portfolio';
import DynamicIcon from '@/components/DynamicIcon';
import TechTag from '@/components/TechTag';
import Reveal from '@/components/Reveal';

export default function Projects() {
  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Hands-on projects spanning AWS cloud deployment, CI/CD pipelines,
              cybersecurity machine learning, and AI automation.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => {
              const isPlaceholder = p.githubUrl.startsWith('REPLACE_WITH_');
              return (
                <Reveal key={p.slug} delay={i * 120}>
                  <div className="glass-card glass-card-hover group flex h-full flex-col p-6">
                    {/* Icon */}
                    <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-3 ring-1 ring-white/5">
                      <DynamicIcon
                        name={p.icon}
                        className="h-7 w-7 text-electric-400"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold leading-snug text-white">
                      {p.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {p.shortDescription}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 5).map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                      {p.technologies.length > 5 && (
                        <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                          +{p.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Key features */}
                    <div className="mt-5 flex-1">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Key Features
                      </p>
                      <ul className="space-y-1.5">
                        {p.keyFeatures.slice(0, 4).map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-xs text-slate-400"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-5">
                      <Link
                        to={`/projects/${p.slug}`}
                        className="btn-primary !px-5 !py-2.5 !text-xs"
                      >
                        Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {!isPlaceholder && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary !px-5 !py-2.5 !text-xs"
                          aria-label={`View ${p.title} on GitHub`}
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Note */}
          <Reveal delay={300}>
            <p className="mt-10 text-center text-sm text-slate-500">
              {personal.shortName} — {personal.tagline}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
