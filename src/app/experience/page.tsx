const roles = [
  {
    title: "Business Analyst — Project Delivery",
    subtitle: "Internal Assignment · Systems Implementation & Customer Success",
    company: "Prudential Life Assurance Kenya",
    period: "Feb 2024 – Present",
    badge: "Current",
    bullets: [
      "Managed end-to-end delivery of a Policy Administration System,PAS,implementation; coordinating requirements gathering, UAT execution, compliance stakeholder management, and go-live readiness across Technology, Operations, and Regulatory teams.",
      "Spearheaded the Customer Engagement Sampling Project: coordinated SQL logic development, implemented automated customer sampling and CRM task assignment — increasing contact rates by 70%, improving onboarding completion, and generating actionable coaching insights.",
      "Designed and owned CX and operational performance dashboards enabling weekly governance reviews and monthly leadership reporting — improving data compliance and reporting reliability by 20%.",
      "Drove 25+ workflow and journey improvements across policy servicing and onboarding, reducing average resolution turnaround by 30% and improving service reliability across enterprise accounts.",
      "Managed CRM and third-party system integration escalations;diagnosed root causes, reduced invalid data payloads by ~40%, and improved feedback capture rates by 30–50%.",
      "Led UAT and SIT execution for CRM implementation;managed 300+ test cases, resolved 50+ defects, and achieved a 95% reduction in post-launch issues.",
      "Developed go-live enablement materials including user guides, training content, and rollout communications — driving consistent CRM adoption across business units.",
      "Operated within an Agile framework using 2-week sprint cycles, participating in daily standups, sprint planning and retrospectives while coordinating backlog management in Jira and Confluence.",
      "Collaborated with Harvard Business School researchers on Kenya gig economy study;conducting customer interviews and delivering insights on flexible payment models, digital sales toolkits, and loyalty programmes.",
    ],
  },
  {
    title: "Customer Experience Executive",
    subtitle: "Enterprise Support and Operations",
    company: "Prudential Life Assurance Kenya",
    period: "Jun 2020 – Jan 2024",
    badge: null,
    bullets: [
      "Supported customer lifecycle management across enterprise accounts — achieving 92.6% first-contact resolution and contributing to 84% overall customer retention through data-informed engagement and service improvements.",
      "Built and maintained Power BI dashboards tracking NPS/CSAT, engagement metrics, resolution times, and case volumes — reducing average case resolution to under 2 days.",
      "Maintained accurate records of customer information, agreements, and service documentation — ensuring CRM data integrity and compliance with internal policies.",
      "Led UAT and reporting validation for new Life Insurance Product launch — improving customer onboarding efficiency by 20% and ensuring full operational readiness at launch.",
      "Partnered with vendor and IT teams to optimise CRM workflows and routing logic across multiple service queues.",
      "Collaborated cross-functionally with Marketing, IT, and Compliance to deliver CRM enhancements, accelerating rollout timelines and improving customer experience consistency.",
    ],
  },
]

const awards = [
  {
    title: "AKI Future Leaders Award — 3rd Place",
    org: "Association of Kenya Insurers · 2024",
    desc: "Recognised for developing InsuNasi, an AI-powered framework for extending insurance accessibility to underserved and informal economy segments in Kenya.",
    icon: "🏆",
  },
  {
    title: "Prudential Kenya Accelerator Award",
    org: "Prudential Life Assurance Kenya · 2026",
    desc: "Internal recognition for AI-driven process innovation and measurable operational impact across customer success workflows.",
    icon: "⚡",
  },
  {
    title: "Prudential Global Innovation Award",
    org: "Prudential plc — Group-wide · 2022 / 2023",
    desc: "Group-wide recognition for AI-driven process and customer outcome improvements across all global business units.",
    icon: "🌍",
  },
]

const certs = [
  "Power BI DAX Masterclass",
  "Celonis Process Mining Foundations",
  "Customer Experience Leadership",
  "Strategic Thinking",
  "Customer Service Foundations",
]

export default function ExperiencePage() {
  return (
    <div className="bg-slate-50">

      {/* ── Page header ───────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Career history
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Experience</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            6+ years at Prudential Life Assurance Kenya — growing from customer operations
            into enterprise system implementation and business analysis.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* ── Timeline ──────────────────────────────────────────────────── */}
        <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:h-full before:w-0.5 before:bg-slate-200 md:before:left-[15px]">
          {roles.map((role) => (
            <div key={role.title} className="relative pl-10 md:pl-14">

              {/* Timeline dot */}
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-50">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

                {/* Role header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-bold text-slate-900">{role.title}</h2>
                      {role.badge && (
                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                          {role.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm font-semibold text-blue-600">{role.company}</p>
                    <p className="text-sm text-slate-500">{role.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {role.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-3">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── Awards ────────────────────────────────────────────────────── */}
        <div className="mt-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
            Recognition
          </p>
          <h2 className="mb-8 text-3xl font-extrabold text-slate-900">Awards</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {awards.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-3xl">{a.icon}</span>
                <p className="mt-4 text-sm font-bold text-slate-900">{a.title}</p>
                <p className="mt-0.5 text-xs font-medium text-blue-600">{a.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ────────────────────────────────────────────── */}
        <div className="mt-20">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
            Learning
          </p>
          <h2 className="mb-8 text-3xl font-extrabold text-slate-900">Certifications</h2>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => (
              <span
                key={c}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                🎓 {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
