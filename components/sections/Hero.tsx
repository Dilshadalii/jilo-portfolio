export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-32 pb-20 max-w-5xl mx-auto"
    >
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-accent-bright mb-8">
        <span className="h-2 w-2 rounded-full bg-accent-bright animate-pulse" />
        Available for Freelance Projects
      </div>

      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight">
        <span className="text-foreground">MUHAMMAD</span>
        <br />
        <span className="text-accent">JIBRAIL</span>
      </h1>

      <div className="mt-6 h-px w-16 bg-accent" />

      <p className="mt-8 text-2xl sm:text-3xl font-semibold text-foreground max-w-xl">
        Medical Billing &amp; RCM Specialist
      </p>

      <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
        Helping healthcare providers get paid faster and more accurately. I
        specialize in claims processing, denial management, and end-to-end
        revenue cycle optimization.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent-bright transition-colors"
        >
          Get In Touch
        </a>

        <a
          href="#services"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent transition-colors"
        >
          View Services
        </a>
      </div>
    </section>
  );
}