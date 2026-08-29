import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui";

const links = [
  { label: "About & CV", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Publications", href: "#publications" },
  { label: "Live Traffic", href: "#telemetry" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hair/60 bg-obsidian/70 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <span className="font-display font-bold text-ink text-[15px] tracking-tight">
              Balint Pragai
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-ink-faint border-l border-hair pl-3">
              Data Science &amp; ML
            </span>
            <span className="hidden lg:flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 font-mono text-[10px] text-mint">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
              Open to Opportunities
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-ink-dim hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/balintpragai"
              className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-hair text-ink-dim hover:text-cyan hover:border-cyan/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/balintpragai"
              className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-hair text-ink-dim hover:text-cyan hover:border-cyan/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="#contact"
              className="glow-cyan group flex items-center gap-1.5 rounded-lg bg-cyan px-3.5 py-2 text-[13px] font-semibold text-obsidian hover:bg-cyan/90 transition-colors"
            >
              Get in Touch
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              className="xl:hidden grid h-9 w-9 place-items-center rounded-lg border border-hair text-ink"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-hair/60 bg-obsidian/95 px-5 py-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-dim hover:bg-white/[0.03] hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="glow-cyan mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyan px-3.5 py-2.5 text-sm font-semibold text-obsidian"
            >
              Get in Touch
              <ArrowUpRight size={15} />
            </a>
            <div className="mt-1 flex items-center gap-2">
              <a
                href="https://github.com/balintpragai"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-hair py-2.5 text-sm text-ink-dim hover:text-cyan"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/balintpragai"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-hair py-2.5 text-sm text-ink-dim hover:text-cyan"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
