import { Crown, Image, Layers } from "lucide-react";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    icon: Image,
    title: "Game Icons",
    desc: "Single-icon designs optimized for Roblox profile and group use.",
    price: "$10 / 3k Robux",
  },
  {
    icon: Layers,
    title: "Game Thumbnails",
    desc: "Cinematic thumbnail artwork designed to stand out on Roblox.",
    price: "$15 / 4.5k Robux",
  },
  {
    icon: Crown,
    title: "Logos",
    desc: "Custom brand-style logos for groups, teams, and communities.",
    price: "$7 / 2k Robux",
  },
];

export function Prices() {
  return (
    <section id="prices" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
            Prices
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Commission <span className="text-gradient">rates</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Placeholder pricing;  final payment depends on complexity and revisions.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.title} delay={(i % 3) * 100}>
              <article
                className={`relative flex h-full flex-col rounded-3xl glass p-7 lift ${
                  plan.featured ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Popular
                  </span>
                )}
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/60 text-primary-glow">
                  <plan.icon size={19} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{plan.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {plan.desc}
                </p>
                <p className="mt-6 font-display text-3xl font-bold text-gradient">
                  {plan.price}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 max-w-2xl">
          <div className="rounded-3xl border border-border/70 bg-background/60 p-6 backdrop-blur">
            <h3 className="font-display text-xl font-semibold">Payment methods</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I accept cash (PayPal) and Robux payments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
