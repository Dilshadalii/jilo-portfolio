export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl">
      <nav className="flex items-center justify-between rounded-full border border-border bg-surface/70 backdrop-blur-md px-6 py-3">
        <span className="text-sm font-semibold tracking-wide text-foreground">
          M. Jibrail
        </span>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </a>

          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            Experience
          </a>

          <a
            href="#certifications"
            className="hover:text-foreground transition-colors"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-foreground text-background text-sm font-medium px-4 py-2 hover:bg-accent-bright transition-colors"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}