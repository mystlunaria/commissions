import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export const SOCIALS = [
  {
    icon: MessageCircle,
    label: "Discord",
    handle: "@mystlunaria",
    href: "https://discordapp.com/users/580358858820812811",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's build your <span className="text-gradient">GFX</span>
          </h2>
        </Reveal>


        <div className="mt-12 flex justify-center">
          {SOCIALS.map((social, i) => (
            <Reveal key={social.label} delay={i * 100}>
              <a
                href={social.href}
                className="flex min-w-[300px] flex-col items-center gap-3 rounded-3xl glass px-6 py-8 lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <social.icon size={20} />
                </span>
                <span className="font-display text-base font-semibold">
                  {social.label}
                </span>
                <span className="text-sm text-muted-foreground">{social.handle}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-md text-muted-foreground">
            To commission me, simply send me a message on Discord.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
