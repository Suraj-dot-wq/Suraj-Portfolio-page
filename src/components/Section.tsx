import { type ReactNode } from 'react';

type Props = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * A titled content section used inside project detail pages.
 */
export default function Section({ title, icon, children, className = '' }: Props) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
        {icon && <span className="text-electric-400">{icon}</span>}
        {title}
      </h2>
      <div className="text-slate-300">{children}</div>
    </section>
  );
}
