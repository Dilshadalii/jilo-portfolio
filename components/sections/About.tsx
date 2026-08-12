export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border"
    >
      <p className="text-sm uppercase tracking-widest text-accent-bright mb-4">
        About Me
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-8">
        Accuracy-driven billing support for healthcare providers.
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <p className="text-lg text-muted leading-relaxed">
          I&apos;m a Certified Billing Specialist (CBCS) specializing in
          Revenue Cycle Management (RCM). With a year of hands-on
          experience, I focus on accurate claim submission, minimizing
          errors, and helping providers get reimbursed without unnecessary
          delays.
        </p>

        <p className="text-lg text-muted leading-relaxed">
          My approach is built on precision and compliance: every claim
          matters, and small details in documentation can be the difference
          between a paid claim and a denied one. I bring that same
          attention to detail to every account I manage.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
          CBCS Certified
        </span>
        <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
          1 Year Experience
        </span>
        <span className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
          Claim Submission Specialist
        </span>
      </div>
    </section>
  );
}