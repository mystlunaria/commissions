import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GlowBackground } from "./GlowBackground";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(1);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrame: number | null = null;

    const startAnimation = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      setValue(1);
      const duration = 2400;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(1 + easedProgress * (target - 1));
        setValue(current);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        } else {
          animationFrame = null;
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          startAnimation();
        } else if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
          setValue(1);
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      observer.disconnect();
    };
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Hero() {
  const stats = [
    { type: "counter" as const, value: 100, suffix: "+", label: "Renders delivered" },
    { type: "text" as const, value: "3 yrs", label: "Experience" },
    { type: "text" as const, value: "Fast", label: "Reply time" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-20"
    >
      <GlowBackground />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">
          <Sparkles size={14} className="text-primary-glow" />
          Commissions currently open
        </div>

        <h1 className="text-balance text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
          Roblox <span className="text-gradient">GFX</span>
          <br />
          Commissions
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          High-quality custom Roblox renders made to bring your ideas to life.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-strong)]"
          >
            View Portfolio
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass px-3 py-5">
              <dt className="font-display text-2xl font-bold">
                {s.type === "counter" ? (
                  <AnimatedCounter target={s.value as number} suffix={s.suffix} />
                ) : (
                  s.value
                )}
              </dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
