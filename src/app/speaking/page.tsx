const talks = [
  {
    event: "Prudential Zambia",
    topic: "Innovation at Work",
    date: "August 2026",
    location: "Lusaka, Zambia",
    status: "Upcoming",
    statusColor: "bg-blue-100 text-blue-700",
    description:
      "Invited as a guest speaker to share insights on driving innovation from within — covering how to identify operational gaps, build AI-powered solutions, and lead change in regulated financial services environments. Drawing on 6+ years of experience building InsuNasi and delivering 25+ workflow improvements at Prudential Kenya.",
    topics: ["AI in Insurance", "Operational Innovation", "Change from Within", "Building in Regulated Environments"],
    icon: "🎤",
    type: "Guest Speaker",
  },
]

export default function SpeakingPage() {
  return (
    <div className="bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            On stage
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Speaking</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Sharing what I've learned about building AI solutions, driving operational
            change, and making systems work for more people across Africa.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">

        {/* ── About my speaking ───────────────────────────────────────────── */}
        <section className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              What I talk about
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
              The intersection of systems, people & innovation
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                I speak from the inside — as someone who has spent years fixing
                operational systems in regulated environments, not as an outside
                consultant. That perspective shapes everything I talk about.
              </p>
              <p>
                My talks are grounded in real delivery: what actually breaks,
                why it breaks, and how to build systems — and cultures — that
                don't quietly fall apart under pressure.
              </p>
              <p>
                I'm particularly drawn to conversations about AI in financial
                services, operational innovation from within large organisations,
                and what financial inclusion actually looks like in practice
                across Africa.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: "🤖", title: "AI in Insurance & Financial Services", desc: "Practical applications, accessibility gaps, and building for the people current systems don't serve." },
              { icon: "⚙️", title: "Operational Innovation from Within", desc: "How to identify what's quietly breaking and build the case for change in regulated environments." },
              { icon: "🌍", title: "Financial Inclusion & Systems Design", desc: "Why access is an infrastructure problem — and what it takes to actually solve it." },
              { icon: "📊", title: "Data-Driven Operations", desc: "Building dashboards and reporting infrastructure that changes decisions, not just fills slides." },
            ].map((t) => (
              <div key={t.title} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="text-xl shrink-0">{t.icon}</span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Talks ───────────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Engagements
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Talks & appearances</h2>

          <div className="space-y-6">
            {talks.map((talk) => (
              <div
                key={talk.event}
                className="rounded-2xl bg-white p-7 shadow-sm ring-2 ring-blue-100 transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{talk.icon}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-slate-900 text-lg">{talk.event}</h3>
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${talk.statusColor}`}>
                          {talk.status}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                          {talk.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-blue-600 mt-1">
                        &ldquo;{talk.topic}&rdquo;
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {talk.location} &nbsp;·&nbsp; {talk.date}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">{talk.description}</p>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Covering</p>
                  <div className="flex flex-wrap gap-2">
                    {talk.topics.map((t) => (
                      <span key={t} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Invite CTA ──────────────────────────────────────────────────── */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 p-10 text-white text-center">
          <p className="text-2xl font-extrabold">Want me to speak at your event?</p>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            I'm open to speaking at conferences, company events, and panel discussions
            on AI, operations, financial inclusion, and innovation in regulated industries.
            Based in Nairobi — available in-person across Africa and virtually worldwide.
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
              Connect on LinkedIn
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
