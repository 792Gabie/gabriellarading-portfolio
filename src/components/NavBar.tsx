"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/",           label: "Home"       },
  { href: "/about",      label: "About"      },
  { href: "/experience", label: "Experience" },
  { href: "/projects",   label: "Projects"   },
  { href: "/contact",    label: "Contact"    },
]

export default function NavBar() {
  const pathname  = usePathname()
  const isHome    = pathname === "/"
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // On the home page: transparent until scrolled; on inner pages: always solid
  const transparent = isHome && !scrolled

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        transparent
          ? "border-b border-white/10 bg-transparent"
          : "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Monogram logo */}
        <Link
          href="/"
          aria-label="Gabriella Rading — Home"
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
            transparent
              ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          GR
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  transparent
                    ? isActive
                      ? "text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-blue-300 after:content-['']"
                      : "text-blue-100 hover:text-white"
                    : isActive
                    ? "text-blue-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-blue-600 after:content-['']"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          {/* CTA */}
          <a
            href="mailto:gabierading1@gmail.com"
            className={`ml-4 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              transparent
                ? "border border-white/40 text-white hover:bg-white hover:text-slate-900"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex flex-col items-center justify-center gap-1.5 rounded-md p-2 md:hidden"
        >
          {[
            menuOpen ? "translate-y-2 rotate-45" : "",
            menuOpen ? "opacity-0" : "",
            menuOpen ? "-translate-y-2 -rotate-45" : "",
          ].map((extra, i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-200 ${
                transparent ? "bg-white" : "bg-slate-700"
              } ${extra}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown — always solid regardless of scroll */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="mailto:gabierading1@gmail.com"
              className="mt-3 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

