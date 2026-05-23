import Link from "next/link";

const stats = [
  { value: "6+",   label: "Years Experience" },
  { value: "70%",  label: "Contact Rate Increase" },
  { value: "95%",  label: "Defect Reduction" },
  { value: "30%",  label: "Turnaround Time Saved" },
  { value: "84%",  label: "Customer Retention" },
];

const skillTeasers = [
  { icon: "📊", title: "Data & Analytics" },
  { icon: "🔧", title: "CRM & Enterprise Systems" },
  { icon: "🚀", title: "Implementation & Change" },
  { icon: "⚙️", title: "Operations & Compliance" },
];

const cards = [
  {
    label: "Summary",
    color: "text-blue-600",
    body: "Operations & Business Analyst with 6+ years turning operational breakdowns into measurable improvements across CRM systems, enterprise implementations, and customer success workflows in regulated financial services.",
  },
  {
    label: "Impact",
    color: "text-indigo-600",
    body: "70% increase in contact rates · 95% reduction in post-launch defects · 30% faster resolution turnaround · 84% customer retention · 20% improvement in reporting reliability.",
  },
  {
    label: "Focus",
    color: "text-violet-600",
    body: "Systems implementation, process improvement, and customer success operations — at the intersection of technical execution and human adoption. I don't just build systems; I make sure teams trust and use them.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white">
        {/* subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
            Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight md:text-7xl">
            Gabriella<br />
            <span className="text-blue-300">Rading</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
            Operations Analyst&nbsp;·&nbsp;Business Analyst&nbsp;·&nbsp;Customer Success Operations
            &nbsp;·&nbsp;System Implementation&nbsp;·&nbsp;Data Analysis &amp; Process Improvement
          </p>

          <p className="mt-4 max-w-2xl text-base text-slate-300">
            I fix systems that quietly break businesses — then build the infrastructure
            to make sure they don&apos;t break again.
          </p>

          {/* Chips */}
          <div className="mt-7 flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              📍 Nairobi, Kenya
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              🌍 Open to Remote
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              💼 CS Operations · Implementation · Revenue Ops
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Experience
            </Link>
            <Link
              href="/skills"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3 md:grid-cols-5 md:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <p className="text-3xl font-extrabold text-slate-900 md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summary cards ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <p className={`text-xs font-bold uppercase tracking-widest ${c.color}`}>
                {c.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills teaser ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Skills &amp; Tools
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              What I bring to the table
            </h2>
            <p className="mt-3 max-w-2xl text-slate-500">
              Built across 6+ years in regulated financial services — technical depth
              paired with the change management skills to make systems get adopted.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skillTeasers.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <span className="text-3xl">{cat.icon}</span>
                <p className="text-sm font-semibold text-slate-700">{cat.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-400 hover:text-blue-600"
            >
              View full skills breakdown →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Actively seeking Operations Analyst, CS Operations, and System Implementation
            roles. Based in Nairobi — open to remote opportunities across Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:gabierading1@gmail.com"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
            >
              📧 Get in touch
            </a>
            <a
              href="https://linkedin.com/in/gabriellarading"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
