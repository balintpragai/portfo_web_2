import { stack, jobs } from "../data";
import { SectionHeader, Tag } from "./ui";
import portrait from "@/imports/TalentExpo2025_18404.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-y border-hair/50 bg-charcoal/30"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
        <SectionHeader
          index="03"
          kicker="About & CV"
          title="A mathematical foundation, applied to production data"
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="mb-6 flex items-center gap-5">
              <div className="glow-cyan relative shrink-0 overflow-hidden rounded-2xl border border-hair/70">
                <img
                  src={portrait}
                  alt="Balint Janos Pragai"
                  style={{ imageOrientation: "from-image" }}
                  className="h-28 w-24 object-cover object-center sm:h-32 sm:w-28"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Balint Janos Pragai
                </h3>
                <p className="mt-0.5 text-sm text-cyan">Data Scientist · ML Engineer</p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 font-mono text-[10px] text-mint">
                  <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
                  Open to Opportunities
                </div>
              </div>
            </div>
            <p className="text-ink-dim leading-relaxed">
              I build the unglamorous parts of data science that make everything else
              possible — resilient ingestion, clean schemas, and models that survive
              contact with real telemetry. My path started with a{" "}
              <span className="text-ink">BSc in Mathematics at ELTE</span>, giving me the
              rigor behind optimization and probabilistic modelling, then a{" "}
              <span className="text-ink">double MSc in Data Science</span> through EIT
              Digital across Aalto University and Eötvös Loránd University.
            </p>
            <p className="mt-4 text-ink-dim leading-relaxed">
              I care about privacy-preserving architecture, time-series systems, and
              shipping things that hold up under load — not just in a notebook.
            </p>

            <div className="mt-8 space-y-5">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group}>
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-cyan">
                    {group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((i) => (
                      <Tag key={i}>{i}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Work History
            </div>
            <ol className="relative border-l border-hair/80 pl-6 space-y-6">
              {jobs.map((j, i) => (
                <li key={j.org} className="relative group">
                  <span
                    className={`absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 ${
                      i === 0
                        ? "border-mint bg-mint status-dot"
                        : "border-cyan/60 bg-obsidian"
                    }`}
                  />
                  <div className="glass rounded-xl border border-hair/70 p-4 group-hover:border-cyan/30 transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display font-semibold text-ink">{j.role}</h3>
                      <span className="font-mono text-xs text-cyan shrink-0">{j.year}</span>
                    </div>
                    <div className="mt-0.5 text-sm text-mint">{j.org}</div>
                    <p className="mt-2 text-sm text-ink-dim leading-relaxed">{j.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {j.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
