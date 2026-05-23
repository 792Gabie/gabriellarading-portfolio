const skillCategories = [
  {
    icon: "📊",
    title: "Data & Analytics",
    color: "blue",
    context: "Used daily to build dashboards, analyse operational performance, and turn raw data into decisions for senior leadership.",
    confident: ["Power BI", "DAX", "SQL", "Excel (Advanced)"],
    developing: ["Python", "Celonis Process Mining"],
  },
  {
    icon: "🔧",
    title: "CRM & Enterprise Systems",
    color: "indigo",
    context: "Hands-on with CRM implementation, integration escalations, workflow configuration, and user adoption across enterprise rollouts.",
    confident: ["SimpleCRM", "Zendesk", "Jira", "Confluence"],
    developing: ["HubSpot", "Jasper Reports"],
  },
  {
    icon: "🚀",
    title: "Implementation & Change",
    color: "violet",
    context: "Led end-to-end system implementations — from requirements gathering through UAT, go-live enablement, and post-launch adoption.",
    confident: ["UAT Leadership", "Requirements Gathering", "Defect Management", "Agile / Scrum", "Sprint Planning & Standups", "Go-live Enablement"],
    developing: ["Process Mapping (Visio)", "Change Management"],
  },
  {
    icon: "⚙️",
    title: "Operations & Compliance",
    color: "teal",
    context: "Built the operational backbone — SOPs, approval workflows, compliance documentation, and reporting frameworks in regulated environments.",
    confident: ["SOP Development", "Workflow Optimisation", "Compliance Documentation", "Approval Workflows", "Operational Dashboards"],
    developing: ["Regulatory Compliance", "Audit Readiness"],
  },
]

const competencies = [
  { icon: "🤝", title: "Cross-functional Collaboration", desc: "Coordinating IT, Operations, Compliance, and CX teams toward a shared delivery outcome." },
  { icon: "📋", title: "Stakeholder Management", desc: "Translating between technical teams and business stakeholders — making complexity legible." },
  { icon: "🔍", title: "Root Cause Analysis", desc: "Finding what made a breakdown possible, not just patching the symptom." },
  { icon: "🎓", title: "User Enablement", desc: "Writing training materials, SOPs, and rollout communications people actually read and follow." },
  { icon: "📈", title: "Data-driven Decision Making", desc: "Building reporting infrastructure that changes behaviour, not just fills slide decks." },
  { icon: "⚡", title: "Rapid Learning", desc: "Mastering new systems quickly and translating that knowledge to the team." },
]

const certifications = [
  { name: "Power BI DAX Masterclass", issuer: "Udemy" },
  { name: "Celonis Process Mining Foundations", issuer: "Celonis" },
  { name: "Customer Experience Leadership", issuer: "Udemy" },
  { name: "Strategic Thinking", issuer: "Udemy" },
  { name: "Customer Service Foundations", issuer: "Udemy" },
  { name: "SQL for Data Analysis", issuer: "Udemy" },
  { name: "Business Intelligence & Data Visualization", issuer: "Udemy" },
  { name: "Data and AI Governance", issuer: "Udemy" },
]

const colorMap: Record<string, { pill: string; badge: string; heading: string }> = {
  blue:   { pill: "bg-blue-50 text-blue-700 border-blue-100",   badge: "bg-blue-100 text-blue-500",   heading: "text-blue-600" },
  indigo: { pill: "bg-indigo-50 text-indigo-700 border-indigo-100", badge: "bg-indigo-100 text-indigo-500", heading: "text-indigo-600" },
  violet: { pill: "bg-violet-50 text-violet-700 border-violet-100", badge: "bg-violet-100 text-violet-500", heading: "text-violet-600" },
  teal:   { pill: "bg-teal-50 text-teal-700 border-teal-100",   badge: "bg-teal-100 text-teal-500",   heading: "text-teal-600" },
}

export default function SkillsPage() {
  return (
    <div className="bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Tools & capabilities
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Skills</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Built across 6+ years in regulated financial services — technical depth paired
            with the operational and human skills to make systems actually get adopted.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">

        {/* ── Skill categories ────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Technical skills</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">What I work with</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((cat) => {
              const c = colorMap[cat.color]
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className={`font-bold text-lg ${c.heading}`}>{cat.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-5 leading-relaxed">{cat.context}</p>

                  {/* Confident */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                      Use confidently
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.confident.map((s) => (
                        <span
                          key={s}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${c.pill}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Developing */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                      Actively developing
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.developing.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-dashed border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Core competencies ───────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            How I think & work
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Core competencies</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-2xl">{c.icon}</span>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Verified learning
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-blue-200"
              >
                <span className="text-xl">🎓</span>
                <p className="mt-3 text-sm font-semibold text-slate-900 leading-snug">{cert.name}</p>
                <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
