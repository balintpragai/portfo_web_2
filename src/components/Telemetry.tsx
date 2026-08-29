import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
} from "recharts";
import { Globe, Database } from "lucide-react";
import { visitsSeries, countries, referrers, platforms } from "../data";
import { SectionHeader } from "./ui";

// Categorical identity colors (label-paired, not color-alone)
const refColors: Record<string, string> = {
  GitHub: "#06b6d4",
  LinkedIn: "#10b981",
  Direct: "#f59e0b",
  Other: "#64748b",
};

export default function Telemetry() {
  const peak = visitsSeries.reduce((a, b) => (b.visits > a.visits ? b : a));
  const total = visitsSeries.reduce((s, d) => s + d.visits, 0);
  const maxCountry = Math.max(...countries.map((c) => c.value));

  return (
    <section id="telemetry" className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
      <SectionHeader
        index="06"
        kicker="Live Traffic"
        title="Portfolio Telemetry: Real-Time Traffic & Geolocation"
        desc="Visitor analytics resolved from IP geolocation, streamed from the backend."
      />

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5 font-mono text-[11px] text-mint">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-mint" />
        Telemetry powered by PythonAnywhere backend &amp; SQLite analytics engine
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        {/* Left: geo distribution */}
        <div className="glass rounded-2xl border border-hair/70 p-5 lg:col-span-4">
          <div className="flex items-center gap-2 text-ink-dim">
            <Globe size={15} className="text-cyan" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
              Visitors by country
            </span>
          </div>
          <MapBackdrop />
          <div className="mt-4 space-y-2.5">
            {countries.map((c) => (
              <div key={c.code} className="flex items-center gap-3">
                <span className="w-7 font-mono text-[11px] text-ink-faint">{c.code}</span>
                <span className="w-24 truncate text-xs text-ink-dim">{c.name}</span>
                <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${(c.value / maxCountry) * 100}%`,
                      background: `color-mix(in srgb, #06b6d4 ${
                        40 + (c.value / maxCountry) * 55
                      }%, #0f1521)`,
                    }}
                  />
                </div>
                <span className="w-9 text-right font-mono text-[11px] text-ink">{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: time series */}
        <div className="glass rounded-2xl border border-hair/70 p-5 lg:col-span-5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
              Visits · past 30 days
            </span>
            <span className="font-mono text-xs text-ink">
              <span className="text-mint">{total.toLocaleString()}</span> total
            </span>
          </div>
          <div className="mt-4 w-full">
            <ResponsiveContainer width="100%" height={256} minWidth={0}>
              <AreaChart data={visitsSeries} margin={{ top: 8, right: 10, bottom: 0, left: -18 }}>
                <defs>
                  <linearGradient id="vis" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#475569"
                  tick={{ fill: "#64748b", fontSize: 10, fontFamily: "JetBrains Mono" }}
                  tickLine={false}
                  interval={5}
                />
                <YAxis
                  stroke="#475569"
                  tick={{ fill: "#64748b", fontSize: 10, fontFamily: "JetBrains Mono" }}
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
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="url(#vis)"
                />
                <ReferenceDot
                  x={peak.date}
                  y={peak.visits}
                  r={5}
                  fill="#10b981"
                  stroke="#0b0f17"
                  strokeWidth={2}
                  label={{
                    value: `peak ${peak.visits}`,
                    position: "top",
                    fill: "#10b981",
                    fontSize: 11,
                    fontFamily: "JetBrains Mono",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: breakdowns */}
        <div className="grid gap-4 lg:col-span-3">
          <div className="glass rounded-2xl border border-hair/70 p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
              Top referrers
            </span>
            <div className="mt-4 space-y-3">
              {referrers.map((r) => (
                <div key={r.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2 text-ink-dim">
                      <span
                        className="h-2.5 w-2.5 rounded-sm"
                        style={{ background: refColors[r.name] }}
                      />
                      {r.name}
                    </span>
                    <span className="font-mono text-ink">{r.value}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${r.value}%`, background: refColors[r.name] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl border border-hair/70 p-5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
              Browser share
            </span>
            <div className="mt-4 space-y-2">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <span className="w-14 text-xs text-ink-dim">{p.name}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className="h-full rounded-full bg-mint"
                      style={{ width: `${p.value * 1.6}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-[11px] text-ink">{p.value}%</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-hair/60 pt-3 font-mono text-[10px] text-ink-faint">
              <Database size={12} /> SQLite · analytics.db
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapBackdrop() {
  // stylized dotted world backdrop with hotspot glows
  const dots = [];
  for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 16; x++) {
      dots.push({ x, y });
    }
  }
  const hot = new Set(["3-1", "8-1", "9-2", "11-1", "1-2", "13-3"]);
  return (
    <div className="mt-3 grid grid-cols-[repeat(16,1fr)] gap-1.5 rounded-xl border border-hair/60 bg-white/[0.015] p-3">
      {dots.map((d) => {
        const key = `${d.x}-${d.y}`;
        const on = hot.has(key);
        return (
          <span
            key={key}
            className="aspect-square rounded-[2px]"
            style={{
              background: on ? "#06b6d4" : "#1f2937",
              boxShadow: on ? "0 0 8px #06b6d4" : "none",
            }}
          />
        );
      })}
    </div>
  );
}
