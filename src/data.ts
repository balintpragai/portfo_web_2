export type Project = {
  id: string;
  title: string;
  repo: string;
  demo: boolean;
  tags: string[];
  problem: string;
  solution: string;
  impact: string;
  metric: { label: string; value: string };
  loss: { x: number; train: number; val: number }[];
};

export const projects: Project[] = [
  {
    id: "bosch-tsdb",
    title: "Telemetry Ingestion Pipeline",
    repo: "github.com/balintpragai/ts-ingest",
    demo: true,
    tags: ["Python", "FastAPI", "InfluxDB", "Docker", "Time-Series"],
    problem: "Legacy monolith dropped high-frequency sensor packets under load.",
    solution: "Async FastAPI ingestion writing to InfluxDB with batched line protocol.",
    impact: "30% reduction in defect escape rate on the Bosch line.",
    metric: { label: "throughput", value: "48k pts/s" },
    loss: mkLoss(0.62, 0.09, 0.11),
  },
  {
    id: "privacy-marketplace",
    title: "Privacy-Preserving Marketplace",
    repo: "github.com/balintpragai/fixme-core",
    demo: false,
    tags: ["Python", "PostgreSQL", "Docker", "PostgreSQL"],
    problem: "Marketplace matching leaked PII across tenant boundaries.",
    solution: "Row-level-security PostgreSQL schema with tokenized identity joins.",
    impact: "Zero PII exposure across 3 integrated third-party partners.",
    metric: { label: "rls policies", value: "27" },
    loss: mkLoss(0.5, 0.12, 0.14),
  },
  {
    id: "sim-scheduler",
    title: "Agent-Based Simulation Scheduler",
    repo: "github.com/balintpragai/coognit-sched",
    demo: true,
    tags: ["Python", "Time-Series", "PostgreSQL"],
    problem: "Manual scheduling of overnight simulation sweeps wasted engineer time.",
    solution: "Constraint solver + dashboard queuing parametric agent-based runs.",
    impact: "40+ engineer-hours/week reclaimed from manual orchestration.",
    metric: { label: "hrs saved / wk", value: "40+" },
    loss: mkLoss(0.7, 0.15, 0.18),
  },
  {
    id: "sauna-ai",
    title: "Voice-Driven IoT Social Game",
    repo: "github.com/balintpragai/sauna-deduction",
    demo: true,
    tags: ["Python", "GenAI", "FastAPI"],
    problem: "Sauna hardware had no engaging multiplayer software layer.",
    solution: "Gemini reasoning + ElevenLabs TTS driving a voice social-deduction loop.",
    impact: "Built end-to-end in 48h at Junction 2025 (Harvia Challenge).",
    metric: { label: "latency", value: "820ms" },
    loss: mkLoss(0.55, 0.2, 0.24),
  },
  {
    id: "veo-maintenance",
    title: "QR Maintenance Platform",
    repo: "github.com/balintpragai/veo-maint",
    demo: false,
    tags: ["Python", "Docker", "PostgreSQL"],
    problem: "Field technicians lacked traceable per-asset maintenance history.",
    solution: "Keycloak-secured QR portal on containerized PostgreSQL.",
    impact: "Finalist — Junction x Vaasa 2025 (VEO Challenge).",
    metric: { label: "assets/min", value: "12" },
    loss: mkLoss(0.6, 0.18, 0.2),
  },
  {
    id: "pilot-game",
    title: "Cross-Platform Pilot Game",
    repo: "github.com/balintpragai/bigsmall-pilot",
    demo: true,
    tags: ["Python", "Docker"],
    problem: "Studio needed a validated cross-platform build for a pilot launch.",
    solution: "CI/CD pipeline shipping signed builds to iOS, Android and web.",
    impact: "1,000+ downloads within the first launch window.",
    metric: { label: "downloads", value: "1,000+" },
    loss: mkLoss(0.65, 0.22, 0.25),
  },
  {
    id: "forecast-lab",
    title: "Time-Series Forecasting Lab",
    repo: "github.com/balintpragai/forecast-lab",
    demo: true,
    tags: ["Python", "PyTorch", "Time-Series"],
    problem: "No shared baseline for benchmarking demand-forecasting models.",
    solution: "PyTorch TCN + LSTM ensemble with reproducible InfluxDB backtests.",
    impact: "11% MAPE improvement over the seasonal-naïve baseline.",
    metric: { label: "MAPE", value: "6.4%" },
    loss: mkLoss(0.8, 0.06, 0.09),
  },
  {
    id: "rice-golomb",
    title: "Rice-Golomb Codec in Sage",
    repo: "github.com/balintpragai/rice-golomb",
    demo: false,
    tags: ["Python"],
    problem: "Teaching entropy coding lacked an interactive, inspectable reference.",
    solution: "Sage implementation with visual bit-stream and ratio analysis.",
    impact: "Presented at Research & Innovation 2022.",
    metric: { label: "comp ratio", value: "3.2×" },
    loss: mkLoss(0.4, 0.1, 0.1),
  },
  {
    id: "genai-rag",
    title: "Doc-Grounded GenAI Assistant",
    repo: "github.com/balintpragai/rag-desk",
    demo: true,
    tags: ["Python", "GenAI", "FastAPI", "PyTorch"],
    problem: "Support team re-answered the same questions from scattered docs.",
    solution: "Retrieval-augmented assistant with citation-grounded responses.",
    impact: "68% of queries resolved without human escalation.",
    metric: { label: "recall@5", value: "0.91" },
    loss: mkLoss(0.9, 0.14, 0.17),
  },
];

function mkLoss(start: number, endTrain: number, endVal: number) {
  const n = 24;
  return Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    const decay = Math.exp(-3 * t);
    const jitter = (Math.sin(i * 1.7) + Math.cos(i * 0.9)) * 0.012;
    return {
      x: i + 1,
      train: +(endTrain + (start - endTrain) * decay + jitter).toFixed(3),
      val: +(endVal + (start - endVal) * decay + jitter * 1.6 + 0.02).toFixed(3),
    };
  });
}

export const filterPills = [
  "All",
  "Python",
  "PyTorch",
  "InfluxDB",
  "Docker",
  "PostgreSQL",
  "Time-Series",
  "GenAI",
];

export type Job = {
  role: string;
  org: string;
  year: string;
  tags: string[];
  summary: string;
};

export const jobs: Job[] = [
  {
    role: "Junior Data Scientist",
    org: "Fixmeapp AB",
    year: "2026",
    tags: ["PostgreSQL", "Privacy", "Python"],
    summary:
      "Privacy-preserving marketplace integration and a row-level-security PostgreSQL architecture serving multi-tenant identity resolution.",
  },
  {
    role: "Data Scientist Intern",
    org: "Bosch",
    year: "2025",
    tags: ["InfluxDB", "FastAPI", "Microservices"],
    summary:
      "Real-time time-series telemetry ingestion with InfluxDB and FastAPI; led migration of a monolith to resilient microservices.",
  },
  {
    role: "Software Developer (Contract)",
    org: "Big Small Games",
    year: "2024",
    tags: ["CI/CD", "Docker", "Cross-platform"],
    summary:
      "Cross-platform pilot deployment with automated signed builds shipping to iOS, Android and web.",
  },
  {
    role: "Mathematician",
    org: "Coognit",
    year: "2023",
    tags: ["Optimization", "Simulation", "Dashboards"],
    summary:
      "Agent-based simulation optimization and analytics dashboarding, automating 40+ engineer-hours of scheduling weekly.",
  },
];

export const stack = {
  Core: ["Python", "SQL", "R"],
  "ML / AI": ["PyTorch", "TensorFlow", "Scikit-learn"],
  "Data / DevOps": ["InfluxDB", "PostgreSQL", "Snowflake", "Docker", "CI/CD"],
};

export const hackathons = [
  {
    title: "Junction x Vaasa 2025",
    challenge: "VEO Challenge",
    result: "Finalist",
    body: "QR-code maintenance platform secured with Keycloak on a containerized PostgreSQL backend.",
    tags: ["Keycloak", "PostgreSQL", "Docker"],
  },
  {
    title: "Junction 2025",
    challenge: "Harvia Challenge",
    result: "Shipped",
    body: "Voice-driven IoT sauna social-deduction game powered by Google Gemini and ElevenLabs.",
    tags: ["Gemini", "ElevenLabs", "IoT"],
  },
  {
    title: "EIT Climate-KIC",
    challenge: "Summer School · Madrid",
    result: "Participant",
    body: "Financial resilience data challenge modelling climate-linked economic exposure.",
    tags: ["Data", "Climate", "Finance"],
  },
];

export const publications = [
  {
    kind: "Talk",
    venue: "'Research and Innovation 2022' Conference",
    title: "Rice-Golomb coding in Sage",
    note: "Entropy coding — interactive reference implementation.",
  },
  {
    kind: "Paper",
    venue: "VI. International Interdisciplinary Conference",
    title: "The Four-Color Theorem and graph coloring mathematics",
    note: "Discrete mathematics — graph coloring foundations.",
  },
];

// Telemetry data
export const visitsSeries = Array.from({ length: 30 }, (_, i) => {
  const base = 60 + i * 2.1;
  const wk = Math.sin(i * 0.9) * 22;
  const spike = i === 21 ? 140 : i === 12 ? 70 : 0;
  return {
    day: i + 1,
    date: new Date(2026, 7, i + 1).toISOString().slice(5, 10),
    visits: Math.max(20, Math.round(base + wk + spike + Math.sin(i * 2.3) * 8)),
  };
});

export const countries = [
  { code: "FI", name: "Finland", value: 412 },
  { code: "HU", name: "Hungary", value: 386 },
  { code: "DE", name: "Germany", value: 244 },
  { code: "US", name: "United States", value: 198 },
  { code: "SE", name: "Sweden", value: 141 },
  { code: "NL", name: "Netherlands", value: 96 },
  { code: "ES", name: "Spain", value: 72 },
  { code: "GB", name: "United Kingdom", value: 63 },
];

export const referrers = [
  { name: "GitHub", value: 44 },
  { name: "LinkedIn", value: 33 },
  { name: "Direct", value: 18 },
  { name: "Other", value: 5 },
];

export const platforms = [
  { name: "Chrome", value: 51 },
  { name: "Safari", value: 24 },
  { name: "Firefox", value: 14 },
  { name: "Edge", value: 11 },
];
