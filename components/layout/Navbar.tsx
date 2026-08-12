"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl">
      <nav className="rounded-3xl border border-border bg-surface/70 backdrop-blur-md px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-foreground">
            M. Jibrail
          </span>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block rounded-full bg-foreground text-background text-sm font-medium px-4 py-2 hover:bg-accent-bright transition-colors"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-foreground text-background text-sm font-medium px-4 py-2 text-center hover:bg-accent-bright transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}