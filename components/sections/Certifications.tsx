const certifications = [
  {
    name: "Certified Billing and Coding Specialist (CBCS)",
    issuer: "National Healthcareer Association (NHA)",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border"
    >
      <p className="text-sm uppercase tracking-widest text-accent-bright mb-4">
        Certifications
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-12">
        Verified expertise, backed by credentials.
      </h2>

      <div className="space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {cert.name}
              </h3>
              <p className="text-muted mt-1">{cert.issuer}</p>
            </div>
            <span className="mt-3 sm:mt-0 text-sm text-accent-bright font-medium">
              {cert.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}