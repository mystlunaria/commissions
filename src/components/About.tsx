import { Reveal } from "./Reveal";
import avatar from "@/assets/me gfx.png";

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <img
            src={avatar}
            alt="Portrait of the Roblox GFX artist"
            width={768}
            height={768}
            loading="lazy"
            className="relative w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-card)]"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              About me
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Hi! I'm <span className="text-gradient">Mystic</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              I'm a passionate, 18 year old Roblox GFX artist that creates custom
              artworks ranging from simple profile pictures to cinematic thumbnails.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I work closely with every client and I am highly cooperative, sharing
              progress previews and revisions until the commissioner is satisfied with
              my work.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I have worked with individuals and with Roblox roleplay groups, my
              biggest contribution being in{' '}
              <span className="font-semibold text-foreground">
                Serendipity Support Center (500K+ group members & 16.5 million visits)
              </span>
              , as the lead GFX designer.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
