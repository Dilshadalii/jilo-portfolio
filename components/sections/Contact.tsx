export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border"
    >
      <p className="text-sm uppercase tracking-widest text-accent-bright mb-4">
        Contact
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-4">
        Let&apos;s work together.
      </h2>

      <p className="text-lg text-muted max-w-xl mb-12">
        Have a billing challenge or need RCM support? Reach out directly or
        send a message below.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Direct contact info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted mb-1">Email</p>

            <a
              href="mailto:jibrailrcm@gmail.com"
              className="text-lg text-foreground hover:text-accent-bright transition-colors"
            >
              jibrailrcm@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm text-muted mb-1">Phone</p>

            <a
              href="tel:+923039771130"
              className="text-lg text-foreground hover:text-accent-bright transition-colors"
            >
              +92 303 9771130
            </a>
          </div>

          <div>
            <p className="text-sm text-muted mb-1">Connect</p>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-accent transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-2">Name</label>

            <input
              type="text"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-2">Email</label>

            <input
              type="email"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-2">Message</label>

            <textarea
              rows={4}
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="Tell me about your billing needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent-bright transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}