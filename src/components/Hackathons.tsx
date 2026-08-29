import { Trophy, Zap } from "lucide-react";
import { hackathons } from "../data";
import { SectionHeader, Tag } from "./ui";

export default function Hackathons() {
  return (
    <section id="hackathons" className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
      <SectionHeader
        index="04"
        kicker="Hackathons"
        title="Rapid prototyping under a 48-hour clock"
        desc="Where the mathematical rigor meets ship-it-tonight pragmatism."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {hackathons.map((h) => (
          <article
            key={h.title}
            className="glass group relative overflow-hidden rounded-2xl border border-hair/70 p-6 hover:border-cyan/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{h.title}</h3>
                <div className="mt-0.5 font-mono text-xs text-cyan">{h.challenge}</div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] ${
                  h.result === "Finalist"
                    ? "bg-mint/10 text-mint border border-mint/30"
                    : "bg-white/[0.03] text-ink-dim border border-hair"
                }`}
              >
                {h.result === "Finalist" ? <Trophy size={12} /> : <Zap size={12} />}
                {h.result}
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-dim leading-relaxed">{h.body}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {h.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
