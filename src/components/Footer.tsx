import { SOCIALS } from "./Contact";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <ul className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
              >
                <social.icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
