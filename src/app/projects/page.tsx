const aiProjects = [
  {
    title: "InsuNasi",
    subtitle: "AI-Powered Insurance Accessibility Platform",
    year: "2024 – Present",
    status: "Prototype",
    statusColor: "bg-purple-100 text-purple-700",
    awardBadge: "🏆 AKI Future Leaders Award 2024",
    description:
      "Designed and built an AI-powered framework to extend insurance access to Kenya's informal economy — the 83% of workers that current insurance systems were never designed to serve. InsuNasi uses conversational AI and simplified onboarding flows to bridge the gap between formal insurance products and underserved populations.",
    outcomes: [
      "Awarded 3rd Place at the 2024 AKI Future Leaders Award (Association of Kenya Insurers)",
      "Recognised for innovation in insurance accessibility across East Africa",
      "Prototype validated and presented to industry stakeholders",
    ],
    tags: ["AI", "Insurance", "Product Design", "Financial Inclusion", "Kenya"],
    icon: "🤖",
    github: null as string | null,
  },
  {
    title: "Imara",
    subtitle: "AI Agentic Insurance Financial Advisor",
    year: "2025 – Present",
    status: "In progress",
    statusColor: "bg-orange-100 text-orange-700",
    awardBadge: null as string | null,
    description:
      "An AI-powered agentic financial advisor built for the insurance space — designed to guide users through product selection, policy management, and financial planning using conversational AI. Imara aims to make expert insurance advice accessible regardless of financial literacy level.",
    outcomes: [] as string[],
    tags: ["AI Agents", "Insurance", "Financial Advisory", "Conversational AI", "Financial Inclusion"],
    icon: "🛡️",
    github: null as string | null,
  },
]

const professional = [
  {
    title: "UAT Microsoft Copilot Agent",
    company: "Prudential Life Assurance Kenya",
    year: "2024",
    status: "Deployed",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Configured a Microsoft Copilot agent to automate UAT test case creation and review for the project delivery team — eliminating the manual effort of writing, structuring, and reviewing test cases across large system implementations. Deployed and adopted by the team as part of their standard delivery workflow.",
    outcomes: [
      "Reduced UAT preparation time from 4 days to 4 hours — a 95%+ efficiency gain",
      "Freed the project team to focus on defect resolution and higher-value delivery tasks",
      "Adopted in production across live system implementation workstreams at Prudential Kenya",
    ],
    tags: ["Microsoft Copilot", "UAT Automation", "AI", "Systems Implementation", "Productivity"],
    icon: "🧪",
  },
  {
    title: "Customer Engagement Sampling Project",
    company: "Prudential Life Assurance Kenya",
    year: "2024",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Identified a post-issuance engagement gap and designed a structured programme to close it. Coordinated SQL logic development, implemented automated customer sampling and CRM task assignment — streamlining agent workflows and generating actionable coaching data.",
    outcomes: [
      "70% increase in customer contact rates",
      "Improved onboarding completion across enterprise accounts",
      "Generated coaching insights that fed into performance optimisation",
    ],
    tags: ["SQL", "CRM", "Workflow Automation", "Customer Success", "Power BI"],
    icon: "📬",
  },
  {
    title: "Policy Administration System (PAS) Implementation",
    company: "Prudential Life Assurance Kenya",
    year: "2024",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Supported the end-to-end delivery of a large-scale PAS rollout as Project Manager Assistant — contributing to requirements gathering, UAT execution, compliance stakeholder coordination, and go-live readiness across Technology, Operations, Compliance, and Regulatory teams.",
    outcomes: [
      "Supported on-time go-live by coordinating cross-functional workstreams and tracking delivery milestones",
      "Contributed to go-live enablement materials including user guides and rollout communications",
      "Assisted in identifying and resolving a critical integration failure through API log analysis across three failure layers",
    ],
    tags: ["Systems Implementation", "UAT", "Project Support", "Compliance", "Change Management"],
    icon: "🏗️",
  },
  {
    title: "CRM Implementation & Integration Upgrades",
    company: "Prudential Life Assurance Kenya",
    year: "2023 – 2024",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    description:
      "Managed end-to-end UAT execution for CRM implementation and ongoing upgrades — including test case design, defect tracking, regression testing, and post-launch monitoring. Simultaneously managed integration escalations between CRM and third-party systems.",
    outcomes: [
      "95% reduction in post-launch issues across 300+ test cases",
      "Resolved 50+ defects before go-live",
      "Reduced invalid data payloads by ~40%, improving feedback capture rates by 30–50%",
    ],
    tags: ["CRM", "UAT", "Defect Management", "QA", "Jira", "Confluence"],
    icon: "🔧",
  },
  {
    title: "Operational Performance Dashboards",
    company: "Prudential Life Assurance Kenya",
    year: "2022 – Present",
    status: "Ongoing",
    statusColor: "bg-amber-100 text-amber-700",
    description:
      "Designed, built, and maintained a suite of Power BI dashboards tracking NPS/CSAT, case volumes, resolution times, and enterprise CX metrics — used in weekly governance reviews and monthly leadership reporting.",
    outcomes: [
      "20% improvement in reporting reliability and data compliance",
      "Reduced average case resolution time to under 2 days",
      "Dashboard adopted as the primary tool for weekly leadership governance reviews",
    ],
    tags: ["Power BI", "DAX", "SQL", "Data Visualisation", "Operational Reporting"],
    icon: "📊",
  },
]

const building = [
  {
    title: "Customer Churn Prediction Dashboard",
    year: "2025 – Present",
    status: "In progress",
    statusColor: "bg-orange-100 text-orange-700",
    description:
      "End-to-end portfolio project: building a churn prediction model and interactive Power BI dashboard — modelling customer churn signals using SQL and visualising retention insights for a fictional SaaS business.",
    tags: ["Power BI", "SQL", "DAX", "Churn Analysis", "Customer Success Ops"],
    icon: "📉",
    github: null as string | null,
  },
  {
    title: "Customer Churn Analysis",
    year: "2025 – Present",
    status: "In progress",
    statusColor: "bg-orange-100 text-orange-700",
    description:
      "Exploratory data analysis project identifying key drivers of customer churn — producing a structured report with actionable retention recommendations and segment-level insights.",
    tags: ["SQL", "Data Analysis", "Retention Strategy", "Reporting"],
    icon: "🔍",
    github: null as string | null,
  },
]

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
      {label}
    </span>
  )
}

function OutcomeList({ outcomes }: { outcomes: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {outcomes.map((o) => (
        <li key={o} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          {o}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Work, ideas & appearances
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Professional delivery, personal AI projects, and portfolio work — all
            connected by one thread: making systems work better for more people.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-20">

        {/* ── AI Projects ─────────────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Personal work</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">AI Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {aiProjects.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-blue-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900">{p.title}</h3>
                <p className="text-sm font-medium text-blue-600">{p.subtitle}</p>
                <p className="text-xs text-slate-400 mt-0.5">{p.year}</p>

                {p.awardBadge && (
                  <div className="mt-3 w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1">
                    <span className="text-xs font-semibold text-amber-700">{p.awardBadge}</span>
                  </div>
                )}

                <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-1">{p.description}</p>

                {p.outcomes.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Outcomes</p>
                    <OutcomeList outcomes={p.outcomes} />
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Tag key={t} label={t} />)}
                </div>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <GitHubIcon /> View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Professional projects ───────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">At Prudential Kenya</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Professional delivery</h2>
          <div className="space-y-6">
            {professional.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{p.title}</h3>
                      <p className="text-sm font-medium text-blue-600">{p.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.statusColor}`}>
                      {p.status}
                    </span>
                    <span className="text-xs text-slate-400">{p.year}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Key outcomes</p>
                  <OutcomeList outcomes={p.outcomes} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Currently building ──────────────────────────────────────────── */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Portfolio work</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Currently building 🚧</h2>
          <p className="text-slate-500 text-sm mb-8">
            Independent projects built in public to demonstrate CS Operations and data analysis skills.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {building.map((b) => (
              <div key={b.title} className="flex flex-col rounded-2xl border border-dashed border-slate-300 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-3xl">{b.icon}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${b.statusColor}`}>
                    {b.status}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1">{b.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
                {b.github && (
                  <a
                    href={b.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <GitHubIcon /> View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
