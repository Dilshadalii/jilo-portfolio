import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Background photo, right side, faded into the dark background */}
      <div className="absolute inset-0 flex justify-end">
        <div className="relative w-full sm:w-2/3 md:w-1/2 h-full">
          <Image
            src="/images/muhammad.jpg"
            alt="Muhammad Jibrail"
            fill
            priority
            className="object-cover object-top opacity-40 sm:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>
      </div>

      {/* Text content, left side, above the photo */}
      <div className="relative z-10 max-w-2xl">
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
          Helping healthcare providers get paid faster and more accurately.
          I specialize in claims processing, denial management, and
          end-to-end revenue cycle optimization.
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
      </div>
    </section>
  );
}