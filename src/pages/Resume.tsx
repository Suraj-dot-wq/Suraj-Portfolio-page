import {
  FileText,
  Eye,
  Download,
  FileWarning,
  Loader2,
  Cloud,
  Mail,
} from 'lucide-react';
import { paths, personal, social } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import useFileExists from '@/hooks/useFileExists';
import { Link } from 'react-router-dom';

export default function Resume() {
  const { loading, exists } = useFileExists(paths.resume);
  const emailPlaceholder = social.email.startsWith('REPLACE_WITH_');

  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad max-w-3xl">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Resume
            </h1>
            <p className="mt-3 text-base text-slate-400">
              View or download my latest resume.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card mt-8 p-8 sm:p-12">
              {/* Document preview icon */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-electric-500/20 blur-xl" />
                  <div className="relative rounded-2xl border border-white/10 bg-navy-800/60 p-6">
                    <FileText className="h-16 w-16 text-electric-400" />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-white">
                  {personal.shortName} — Resume
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {personal.tagline}
                </p>

                {/* Loading state */}
                {loading && (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking resume file…
                  </div>
                )}

                {/* File exists */}
                {!loading && exists && (
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href={paths.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Eye className="h-4 w-4" />
                      View Resume
                    </a>
                    <a href={paths.resume} download className="btn-secondary">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </div>
                )}

                {/* File missing */}
                {!loading && !exists && (
                  <div className="mt-8 w-full max-w-md">
                    <div className="flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4 text-left">
                      <FileWarning className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Resume file not uploaded yet.
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Add your resume at{' '}
                          <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-electric-400">
                            /public{paths.resume}
                          </code>{' '}
                          to enable viewing and download.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Alt actions */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-white/5 pt-6 text-sm">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-electric-400"
                  >
                    <Cloud className="h-4 w-4" />
                    View Projects
                  </Link>
                  {!emailPlaceholder && (
                    <a
                      href={`mailto:${social.email}`}
                      className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-electric-400"
                    >
                      <Mail className="h-4 w-4" />
                      Contact Me
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
