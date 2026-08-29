import { FileText, Presentation, ArrowUpRight } from "lucide-react";
import { publications } from "../data";
import { SectionHeader } from "./ui";

export default function Publications() {
  return (
    <section
      id="publications"
      className="border-y border-hair/50 bg-charcoal/30"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeader
          index="05"
          kicker="Publications"
          title="Conference talks & papers"
        />

        <div className="divide-y divide-hair/60 border-y border-hair/60">
          {publications.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex items-center gap-5 py-5 hover:bg-white/[0.015] transition-colors -mx-2 px-2 rounded-lg"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-white/[0.02] text-cyan">
                {p.kind === "Talk" ? <Presentation size={18} /> : <FileText size={18} />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    {p.kind}
                  </span>
                  <span className="font-mono text-xs text-ink-dim truncate">{p.venue}</span>
                </div>
                <h3 className="mt-0.5 font-display font-semibold text-ink group-hover:text-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm text-ink-dim">{p.note}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
