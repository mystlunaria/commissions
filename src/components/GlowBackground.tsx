/** Ambient animated purple glow orbs used behind the hero. */
export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-primary/25 blur-[140px] animate-float-slow" />
      <div className="absolute -right-40 top-1/4 h-[38rem] w-[38rem] rounded-full bg-primary-glow/20 blur-[150px] animate-float-slower" />
      <div className="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/40 blur-[130px] animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--background)_75%)]" />
    </div>
  );
}
