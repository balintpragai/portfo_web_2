import { ArrowRight, Download } from "lucide-react";

const metrics = [
  { value: "30%", label: "Bug Reduction", sub: "Bosch Time-Series Pipeline" },
  { value: "40+", label: "Hours Automated", sub: "Simulation Scheduling · Coognit" },
  { value: "1,000+", label: "Downloads", sub: "Pilot Game Launch" },
  { value: "Double", label: "MSc Degree", sub: "EIT Digital · Aalto & ELTE" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hair/50">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[120px] opacity-25"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, #10b981 55%, transparent 75%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-ink-dim mb-7">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
          Entry-level Data Scientist · Helsinki / Budapest
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">
          Engineering <span className="text-gradient">Data Pipelines</span>, Time-Series
          Models, and <span className="text-gradient">Privacy-Preserving</span> Systems
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-dim leading-relaxed">
          Recent MSc Data Science graduate (Aalto University &amp; Eötvös Loránd University)
          specializing in scalable backend ingestion, mathematical optimization, and applied
          machine learning.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="glow-cyan group inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-obsidian hover:bg-cyan/90 transition-colors"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-hair bg-white/[0.02] px-5 py-3 text-sm font-semibold text-ink hover:border-cyan/40 hover:text-cyan transition-colors"
          >
            <Download size={16} />
            Download CV (PDF)
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl border border-hair/70 p-5 hover:border-cyan/30 transition-colors group"
            >
              <div className="font-mono text-3xl md:text-4xl font-bold text-ink group-hover:text-cyan transition-colors">
                {m.value}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-ink">{m.label}</div>
              <div className="mt-0.5 font-mono text-[11px] text-ink-faint leading-snug">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
