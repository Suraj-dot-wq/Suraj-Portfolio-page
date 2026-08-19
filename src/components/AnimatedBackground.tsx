/**
 * Animated technical background — subtle grid + floating gradient orbs.
 * Fixed position, pointer-events-none, sits behind all content.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />

      {/* Radial fade mask so grid fades at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,9,18,0.7)_70%,#060912_100%)]" />

      {/* Floating orbs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-electric-500/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-cyan-500/8 blur-[140px] animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-500/8 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: '3s' }}
      />
    </div>
  );
}
