const openTo = [
  { icon: "⚙️", role: "Operations Analyst", desc: "Commercial ops, compliance, process improvement, reporting." },
  { icon: "🎯", role: "Customer Success Operations", desc: "CS infrastructure, lifecycle management, retention strategy." },
  { icon: "🚀", role: "Implementation Consultant", desc: "System rollouts, UAT, change management, go-live readiness." },
  { icon: "📈", role: "Revenue Operations", desc: "RevOps support, CRM optimisation, cross-functional enablement." },
]

const goodFit = [
  "You're building or scaling ops infrastructure in Africa or remotely",
  "You need someone who bridges technical teams and business stakeholders",
  "You want rigour — SOPs, data quality, reporting that actually gets used",
  "You value people who ask why something broke, not just how to patch it",
]

const links = [
  {
    icon: "📧",
    label: "Email",
    value: "gabierading1@gmail.com",
    href: "mailto:gabierading1@gmail.com",
    desc: "Best for formal introductions and opportunities",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/gabriellarading",
    href: "https://linkedin.com/in/gabriellarading",
    desc: "Connect, follow my work, or send a message",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@gabie_rading",
    href: "https://instagram.com/gabie_rading",
    desc: "Behind-the-scenes of building in public",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Let's talk
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-slate-300">
            I'm actively looking for my next role. If something on this portfolio
            resonated or you just want to talk systems, ops, or AI.I'd love to hear from you.
          </p>
          <a
            href="mailto:gabierading1@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
          >
            📧 Send me an email
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">

        {/* ── Contact links ───────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Find me here</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Contact and socials</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-blue-300"
              >
                <span className="text-3xl">{l.icon}</span>
                <p className="mt-4 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {l.label}
                </p>
                <p className="mt-1 text-sm text-blue-600 break-all">{l.value}</p>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{l.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── Open to ─────────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            What I'm looking for
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Open to</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {openTo.map((o) => (
              <div
                key={o.role}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-2xl shrink-0">{o.icon}</span>
                <div>
                  <p className="font-bold text-slate-900">{o.role}</p>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400 pl-1">
            📍 Based in Nairobi, Kenya &nbsp;·&nbsp; Open to remote roles globally
          </p>
        </section>

        {/* ── Good fit ────────────────────────────────────────────────────── */}
        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Is this a match?
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            We're probably a good fit if...
          </h2>
          <ul className="space-y-4">
            {goodFit.map((g) => (
              <li key={g} className="flex gap-4 items-start">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
                  ✓
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{g}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Final CTA ───────────────────────────────────────────────────── */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 p-10 text-center text-white">
          <p className="text-2xl font-extrabold">Ready when you are 👋</p>
          <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto">
            Whether it's a role, a collaboration, a coffee chat, or just a good
            conversation about operations and AI-my inbox is open.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:gabierading1@gmail.com"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
            >
              📧 gabierading1@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/gabriellarading"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
