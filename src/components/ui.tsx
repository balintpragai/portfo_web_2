import type { ReactNode } from "react";

export function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1-.015-1.965-3.196.695-3.87-1.54-3.87-1.54-.523-1.33-1.278-1.684-1.278-1.684-1.044-.714.08-.7.08-.7 1.154.082 1.762 1.185 1.762 1.185 1.026 1.758 2.693 1.25 3.35.955.104-.743.402-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.46.112-3.043 0 0 .965-.31 3.163 1.178a10.98 10.98 0 0 1 2.88-.388c.977.004 1.96.132 2.88.388 2.196-1.488 3.16-1.178 3.16-1.178.626 1.583.232 2.753.114 3.043.737.804 1.18 1.829 1.18 3.084 0 4.415-2.688 5.386-5.25 5.67.413.356.78 1.058.78 2.134 0 1.54-.014 2.782-.014 3.16 0 .308.207.668.79.554A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-tight px-2 py-0.5 rounded-md border border-hair/80 bg-white/[0.02] text-ink-dim">
      {children}
    </span>
  );
}

export function SectionHeader({
  index,
  kicker,
  title,
  desc,
}: {
  index: string;
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-cyan">{index}</span>
        <span className="h-px w-8 bg-hair" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-3xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-ink-dim max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl border border-hair/70 hover:border-cyan/30 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
