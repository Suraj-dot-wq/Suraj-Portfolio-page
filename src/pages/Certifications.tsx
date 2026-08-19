import { Award, ExternalLink, FileWarning, Loader2 } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import DynamicIcon from '@/components/DynamicIcon';
import Reveal from '@/components/Reveal';
import useFileExists from '@/hooks/useFileExists';

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const { loading, exists } = useFileExists(cert.filePath);

  return (
    <Reveal delay={index * 120}>
      <div className="glass-card glass-card-hover group flex h-full flex-col p-6 sm:p-8">
        {/* Icon / badge */}
        <div className="mb-5 flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 p-3 ring-1 ring-white/5">
            <DynamicIcon
              name={cert.icon}
              className="h-7 w-7 text-electric-400"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-electric-500/20 bg-electric-500/5 px-3 py-1 text-xs font-medium text-electric-400">
            <Award className="h-3.5 w-3.5" />
            Certified
          </div>
        </div>

        {/* Name & issuer */}
        <h3 className="text-lg font-semibold leading-snug text-white">
          {cert.name}
        </h3>
        <p className="mt-2 text-sm text-slate-400">Issued by {cert.issuer}</p>

        {/* Button / status */}
        <div className="mt-auto pt-6">
          {loading ? (
            <div className="inline-flex items-center gap-2 text-sm text-slate-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Checking certificate…
            </div>
          ) : exists ? (
            <a
              href={cert.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !py-2.5 !text-xs"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Certificate
            </a>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-xs text-slate-400">
              <FileWarning className="h-4 w-4 shrink-0 text-cyan-400" />
              Certificate file not uploaded yet.
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <div className="pt-24">
      <section className="section-pad pt-8">
        <div className="container-pad">
          <Reveal>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certifications
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              Professional certifications validating cloud and AI knowledge.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
