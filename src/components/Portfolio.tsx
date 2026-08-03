import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { Reveal } from "./Reveal";
import { Lightbox, type GalleryItem } from "./Lightbox";
import christmasGroup from "@/assets/christmas group icon 2025.png";
import gameIconSpring from "@/assets/game icon 2026 spring.png";
import serendipityLogo from "@/assets/serendipity support clinic official LOGO.png";
import sscMainLogo from "@/assets/ssc main logo.png";
import sscVdaySpringGroupIcon from "@/assets/ssc 2026 vday x spring group icon.png";
import sscThumbnailArt from "@/assets/ssc thumbnail art.png";
import sscShortLogo from "@/assets/SSC_shortened_logo.png";
import tekFighting2 from "@/assets/tek personal project fighting game version 2.png";
import tekFighting from "@/assets/tek personal project fighting game.png";
import tekProjectIcon from "@/assets/tek personal project icon.png";
import tekIcon from "@/assets/tek_personal_project_icon.png";

const FILTERS = ["All work", "Icons", "Thumbnails", "Logos"] as const;
type Filter = (typeof FILTERS)[number];

const ITEMS: GalleryItem[] = [
  { src: christmasGroup, title: "", category: "Icons", width: 1024, height: 1024 },
  { src: gameIconSpring, title: "", category: "Icons", width: 1024, height: 1024 },
  { src: sscVdaySpringGroupIcon, title: "", category: "Icons", width: 1024, height: 1024 },
  { src: serendipityLogo, title: "", category: "Logos", width: 1024, height: 1024 },
  { src: sscMainLogo, title: "", category: "Icons", width: 1024, height: 1024 },
  { src: sscThumbnailArt, title: "", category: "Thumbnails", width: 1024, height: 1024 },
  { src: sscShortLogo, title: "", category: "Logos", width: 1024, height: 1024 },
  { src: tekFighting2, title: "", category: "Thumbnails", width: 1024, height: 1024 },
  { src: tekFighting, title: "", category: "Thumbnails", width: 1024, height: 1024 },
  { src: tekProjectIcon, title: "", category: "Icons", width: 1024, height: 1024 },
  { src: tekIcon, title: "", category: "Icons", width: 1024, height: 1024 },
];

export function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  const [filter, setFilter] = useState<Filter>("All work");

  const filteredItems = useMemo(() => {
    if (filter === "All work") return ITEMS;
    return ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Portfolio
            </p>
          </div>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            A curated look at my <span className="text-gradient">best work</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Click any piece to view it full size and browse the collection.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                filter === item
                  ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "bg-[rgba(255,255,255,0.05)] text-muted-foreground hover:bg-accent/30"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {filteredItems.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 100} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-border lift text-left"
              >
                <img
                  src={item.src}
                  alt={item.title || "Portfolio image"}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(to_top,var(--background),transparent_55%)] opacity-80" />
                <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full glass opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand size={15} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <Lightbox
          items={filteredItems}
          index={open}
          onClose={() => setOpen(null)}
          onIndexChange={setOpen}
        />
      )}
    </section>
  );
}
