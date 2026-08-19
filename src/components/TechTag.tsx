/**
 * Reusable technology tag/badge.
 */
export default function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-electric-500/20 bg-electric-500/5 px-3 py-1 text-xs font-medium text-electric-400">
      {label}
    </span>
  );
}
