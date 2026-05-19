const beliefs = [
  {
    icon: "🔍",
    title: "The best systems are the ones people actually use",
    body: "Anyone can build a dashboard. Getting a team to trust it — and change how they work because of it — is the hard part. That's where I focus.",
  },
  {
    icon: "🧩",
    title: "Breakdowns are usually design problems in disguise",
    body: "When something keeps going wrong, I don't just patch it. I ask what made the breakdown possible in the first place.",
  },
  {
    icon: "📊",
    title: "Data without decisions is just noise",
    body: "I build reporting infrastructure to create action — not to fill slide decks. If a metric doesn't change behaviour, it doesn't belong on the dashboard.",
  },
  {
    icon: "🌍",
    title: "Financial access is an infrastructure problem",
    body: "Most people who can't access financial services aren't excluded by choice — they're excluded by systems that were never designed to include them. That matters to me personally.",
  },
]

const funFacts = [
  { emoji: "☕", fact: "I debug workflows the same way I make coffee — methodically, and never before I understand the full process." },
  { emoji: "📚", fact: "I studied Education at Kenyatta University. Turns out teaching and change management are basically the same job." },
  { emoji: "🤖", fact: "I built an AI platform (InsuNasi) to extend insurance access to Kenya's informal economy — and won an award for it." },
  { emoji: "🌱", fact: "I document my career journey publicly on LinkedIn. Building in public keeps me honest and sharp." },
  { emoji: "🔬", fact: "I've collaborated with Harvard Business School researchers three years running — contributed to gig economy research on flexible payment models across Kenya." },
  { emoji: "⚽", fact: "Outside of spreadsheets and system logs, I love football. The tactics. The chaos. The data." },
]

const currentlyBuilding = [
  { label: "Churn Prediction Dashboard", desc: "Using SQL and Power BI to model customer churn signals — built from scratch as a portfolio project.", tag: "In progress" },
  { label: "Customer Churn Analysis", desc: "End-to-end analysis of churn patterns with actionable retention recommendations.", tag: "In progress" },
  { label: "Portfolio site", desc: "This one. Built with Next.js and Tailwind. Shipped publicly as part of building in the open.", tag: "Live" },
]

export default function AboutPage() {
  return (
    <div className="bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            The person behind the dashboards
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            I fix systems that quietly break businesses — then build the infrastructure
            to make sure they don&apos;t break again.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">

        {/* ── Origin story ────────────────────────────────────────────────── */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Origin story
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Hi, I&apos;m Gabriella 👋
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m a Business and Operations Analyst based in Nairobi, Kenya — with 5+ years
                spent inside one of Africa&apos;s largest insurers, turning broken workflows
                into systems that actually scale.
              </p>
              <p>
                I started in customer experience, which meant I was on the receiving end
                of every operational failure — the bad CRM data, the slow handoffs, the
                reports that told you nothing useful. So I started fixing them.
              </p>
              <p>
                That hands-on frustration turned into a career. Now I lead system
                implementations, design operational dashboards, run UAT programmes,
                and build the data infrastructure that lets CS and operations teams
                do their jobs without fighting their tools.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              The side of the story that matters most
            </p>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="text-2xl mb-3">🤖</p>
              <h3 className="font-bold text-slate-900 mb-2">InsuNasi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I built an AI-powered framework to extend insurance access to
                Kenya&apos;s informal economy — the 83% of workers that current
                systems were never designed to serve. It won the{" "}
                <span className="font-semibold text-blue-700">
                  2024 AKI Future Leaders Award
                </span>
                .
              </p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                It started as a question: why do the people who need financial
                protection most have the least access to it? The answer was
                always infrastructure — and that&apos;s something I know how to build.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-2xl mb-3">🎓</p>
              <h3 className="font-bold text-slate-900 mb-2">The unexpected background</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I studied Education at Kenyatta University. Sounds unrelated —
                until you realise that training people to use new systems, writing
                SOPs they&apos;ll actually follow, and getting teams to trust a new
                process is fundamentally a teaching problem.
              </p>
            </div>
          </div>
        </section>

        {/* ── What I believe ──────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            How I think
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
            Things I believe about systems &amp; operations
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-blue-200"
              >
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-4 font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Fun facts ───────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            The less formal stuff
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
            A few things about me ✨
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funFacts.map((f) => (
              <div
                key={f.fact}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-blue-200"
              >
                <span className="text-2xl shrink-0">{f.emoji}</span>
                <p className="text-sm leading-relaxed text-slate-600">{f.fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Currently building ──────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Right now
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
            Currently building 🚧
          </h2>
          <div className="space-y-4">
            {currentlyBuilding.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-slate-900">{item.label}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.tag === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold">Want to work together?</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto text-sm">
            I&apos;m actively looking for Operations Analyst, CS Operations, and
            System Implementation roles — remote or Nairobi-based. If something
            I&apos;ve said resonates, let&apos;s talk.
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
              View LinkedIn
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
