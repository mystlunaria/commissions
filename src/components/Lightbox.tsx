import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  width: number;
  height: number;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const go = useCallback(
    (dir: number) => onIndexChange((index + dir + items.length) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-background/85 p-4 backdrop-blur-xl"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:bg-accent/60"
      >
        <X size={18} />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-3 grid h-12 w-12 place-items-center rounded-full glass transition-all hover:bg-accent/60 sm:left-8"
      >
        <ChevronLeft size={20} />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-4xl animate-scale-in flex-col items-center gap-4"
      >
        <img
          src={item.src}
          alt={item.title}
          width={item.width}
          height={item.height}
          className="max-h-[75vh] w-auto rounded-3xl border border-border object-contain shadow-[var(--shadow-glow)]"
        />
        <figcaption className="h-4" />
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-3 grid h-12 w-12 place-items-center rounded-full glass transition-all hover:bg-accent/60 sm:right-8"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
