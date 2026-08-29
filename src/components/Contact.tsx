import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { SectionHeader, GithubIcon, LinkedinIcon } from "./ui";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`,
    );
    const subject = encodeURIComponent(form.subject || "Portfolio enquiry");
    window.location.href = `mailto:balintpragai@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-hair bg-white/[0.02] px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition";

  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-5 md:px-8 py-20 md:py-28">
      <SectionHeader
        index="07"
        kicker="Contact"
        title="Let's build something reliable"
        desc="Open to Data Science & ML roles. Fastest way to reach me is the form or email."
      />

      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={submit} className="glass rounded-2xl border border-hair/70 p-6 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-mono text-[11px] text-ink-faint">NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className={field}
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] text-ink-faint">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className={field}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block font-mono text-[11px] text-ink-faint">SUBJECT</label>
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Data Scientist opportunity"
              className={field}
            />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block font-mono text-[11px] text-ink-faint">MESSAGE</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or project..."
              className={`${field} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="glow-cyan mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-obsidian hover:bg-cyan/90 transition-colors"
          >
            {sent ? <Check size={16} /> : <Send size={16} />}
            {sent ? "Opening your mail client…" : "Send message"}
          </button>
        </form>

        <div className="flex flex-col gap-3">
          {[
            {
              icon: <Mail size={17} />,
              label: "Email",
              value: "balintpragai@gmail.com",
              href: "mailto:balintpragai@gmail.com",
            },
            {
              icon: <LinkedinIcon size={17} />,
              label: "LinkedIn",
              value: "/in/balintpragai",
              href: "https://linkedin.com/in/balintpragai",
            },
            {
              icon: <GithubIcon size={17} />,
              label: "GitHub",
              value: "github.com/balintpragai",
              href: "https://github.com/balintpragai",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="glass group flex items-center gap-4 rounded-2xl border border-hair/70 p-5 hover:border-cyan/30 transition-colors"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-hair bg-white/[0.02] text-cyan">
                {c.icon}
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {c.label}
                </div>
                <div className="truncate text-sm text-ink group-hover:text-cyan transition-colors">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
