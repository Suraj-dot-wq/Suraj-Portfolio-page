import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

/**
 * Shared layout for inner pages — page header with back link + content.
 */
export default function PageHeader({ title, subtitle, children }: Props) {
  return (
    <div className="section-pad pt-28">
      <div className="container-pad">
        <Link
          to="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-electric-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-slate-400">{subtitle}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}
