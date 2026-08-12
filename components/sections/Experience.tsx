const experience = [
  {
    role: "Freelance Medical Billing Specialist",
    period: "2024 — Present",
    description:
      "Providing claim submission, denial follow-up, and insurance verification support to multiple healthcare providers on a project basis. Focused on reducing claim rejections and improving turnaround time on reimbursements.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border"
    >
      <p className="text-sm uppercase tracking-widest text-accent-bright mb-4">
        Experience
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-12">
        Hands-on work with real healthcare providers.
      </h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.role}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="text-sm text-accent-bright font-medium mt-1 sm:mt-0">
                {job.period}
              </span>
            </div>
            <p className="text-muted leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}