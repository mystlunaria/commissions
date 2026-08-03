import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#prices", label: "Prices" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "#home";
      for (const link of LINKS) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 140) current = link.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl px-5 py-3 transition-all duration-500 md:flex md:justify-between",
          scrolled ? "glass shadow-[var(--shadow-card)]" : "border border-transparent",
        )}
      >
        <a
          href="#home"
          className="min-w-0 truncate font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">mystlunaria</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-foreground",
                  active === link.href
                    ? "bg-accent/60 text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110 md:inline-flex"
        >
          Commission me!
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {open && (
          <ul className="col-span-2 flex flex-col gap-1 border-t border-border pt-3 md:hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
