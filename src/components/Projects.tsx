import { useMemo, useState } from "react";
import { Search, ExternalLink, X, Activity } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { projects, filterPills, type Project } from "../data";
import { SectionHeader, Tag, GithubIcon } from "./ui";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const pill = active === "All" || p.tags.includes(active);
      const text =
        !q ||
        [p.title, p.problem, p.solution, ...p.tags].join(" ").toLowerCase().includes(q);
      return pill && text;
    });
  }, [query, active]);

  return (
    <section id="projects" className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
      <SectionHeader
        index="02"
        kicker="Showcase"
        title="Searchable Projects"
        desc="Filter by model, stack or topic. Open any card for architecture notes and training curves."
      />

      <div className="flex flex-col gap-4 mb-8">
        <div className="relative max-w-xl">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by model, tech stack, or topic..."
            className="w-full rounded-xl border border-hair bg-white/[0.02] py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filterPills.map((pill) => {
            const on = active === pill;
            return (
              <button
                key={pill}
                onClick={() => setActive(pill)}
                className={`font-mono text-xs rounded-full border px-3 py-1.5 transition-colors ${
                  on
                    ? "border-cyan/50 bg-cyan/15 text-cyan"
                    : "border-hair text-ink-dim hover:border-cyan/30 hover:text-ink"
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="glass group flex flex-col rounded-2xl border border-hair/70 p-5 hover:border-cyan/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-semibold text-ink leading-snug group-hover:text-cyan transition-colors">
                {p.title}
              </h3>
              <div className="flex items-center gap-1.5 shrink-0">
                {p.demo && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-mint/10 px-1.5 py-0.5 font-mono text-[10px] text-mint">
                    <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
                    live
                  </span>
                )}
                <a
                  href={`https://${p.repo}`}
                  aria-label="Repository"
                  className="text-ink-faint hover:text-cyan transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {[...new Set(p.tags)].slice(0, 4).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <p className="mt-4 text-sm text-ink-dim leading-relaxed">
              <span className="text-ink-faint">Problem — </span>
              {p.problem}
            </p>
            <p className="mt-2 text-sm text-ink-dim leading-relaxed">
              <span className="text-ink-faint">Solution — </span>
              {p.solution}
            </p>

            <div className="mt-auto pt-5 flex items-center justify-between border-t border-hair/60 mt-5">
              <span className="text-xs text-mint font-medium">{p.impact}</span>
            </div>
            <button
              onClick={() => setOpen(p)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-hair py-2 text-xs font-semibold text-ink hover:border-cyan/40 hover:text-cyan transition-colors"
            >
              <Activity size={14} /> View architecture &amp; metrics
            </button>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-hair py-16 text-center font-mono text-sm text-ink-faint">
            No projects match “{query}”.
          </div>
        )}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-obsidian/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="glass relative w-full max-w-3xl rounded-2xl border border-hair max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-hair/60 p-6">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {[...new Set(project.tags)].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">{project.title}</h3>
            <a
              href={`https://${project.repo}`}
              className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline"
            >
              <GithubIcon size={13} /> {project.repo}
              <ExternalLink size={12} />
            </a>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-hair text-ink-dim hover:text-ink"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-ink-dim leading-relaxed">
              <span className="text-ink-faint">Problem — </span>
              {project.problem}
            </p>
            <p className="mt-3 text-sm text-ink-dim leading-relaxed">
              <span className="text-ink-faint">Solution — </span>
              {project.solution}
            </p>
            <div className="mt-5 rounded-xl border border-hair/70 bg-white/[0.02] p-4">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Impact
              </div>
              <div className="mt-1 text-sm text-mint font-medium">{project.impact}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-ink">
                  {project.metric.value}
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  {project.metric.label}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              Architecture
            </div>
            <ArchDiagram tags={[...new Set(project.tags)]} />
          </div>
        </div>

        <div className="border-t border-hair/60 p-6">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Training / Validation Loss
          </div>
          <div className="w-full">
            <ResponsiveContainer width="100%" height={224} minWidth={0}>
              <LineChart data={project.loss} margin={{ top: 6, right: 12, bottom: 4, left: -12 }}>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="x"
                  stroke="#475569"
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "JetBrains Mono" }}
                  tickLine={false}
                  label={{ value: "epoch", fill: "#475569", fontSize: 10, dy: 12 }}
                />
                <YAxis
                  stroke="#475569"
                  tick={{ fill: "#64748b", fontSize: 11, fontFamily: "JetBrains Mono" }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#0b0f17",
                    border: "1px solid #1f2937",
                    borderRadius: 10,
                    fontFamily: "JetBrains Mono",
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Legend wrapperStyle={{ fontSize: 12, fontFamily: "JetBrains Mono" }} />
                <Line
                  type="monotone"
                  dataKey="train"
                  name="train"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="val"
                  name="val"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="4 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchDiagram({ tags }: { tags: string[] }) {
  const nodes = ["Source", tags[0] ?? "API", tags[1] ?? "Store", "Consumer"];
  return (
    <div className="rounded-xl border border-hair/70 bg-white/[0.02] p-4">
      <div className="flex items-center justify-between gap-1">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-1">
            <div className="grid place-items-center rounded-lg border border-cyan/25 bg-cyan/5 px-2.5 py-3 text-center">
              <span className="font-mono text-[10px] text-cyan leading-tight">{n}</span>
            </div>
            {i < nodes.length - 1 && (
              <span className="h-px w-3 md:w-5 bg-gradient-to-r from-cyan/60 to-mint/60" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["ingest", "transform", "serve"].map((s) => (
          <div
            key={s}
            className="rounded-md border border-hair bg-white/[0.02] py-2 text-center font-mono text-[10px] text-ink-faint"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
