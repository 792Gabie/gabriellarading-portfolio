import type { Metadata } from "next"
import "./globals.css"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Gabriella Rading | Operations Analyst",
  description:
    "Operations Analyst with 6+ years in commercial operations, compliance, data analysis, system implementation, and customer success operations.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              {/* Left: name + tagline */}
              <div>
                <p className="text-sm font-bold text-slate-900">Gabriella Rading</p>
                <p className="mt-1 text-xs text-slate-400">
                  Operations Analyst · Nairobi, Kenya · Open to Remote
                </p>
              </div>
              {/* Right: links */}
              <div className="flex items-center gap-5 text-sm text-slate-500">
                <a
                  href="mailto:gabierading1@gmail.com"
                  className="transition hover:text-blue-600"
                >
                  📧 Email
                </a>
                <a
                  href="https://linkedin.com/in/gabriellarading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-600"
                >
                  LinkedIn
                </a>
                {/* Replace href with your actual GitHub URL when ready */}
                <a
                  href="https://github.com/gabriellarading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-blue-600"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
              © 2026 Gabriella Rading.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
