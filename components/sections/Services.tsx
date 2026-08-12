const services = [
  {
    title: "Claim Submission",
    description:
      "Accurate, timely submission of medical claims to reduce rejections and speed up reimbursement.",
  },
  {
    title: "Denial Management & Follow-up",
    description:
      "Identifying denial reasons, correcting issues, and resubmitting claims to recover lost revenue.",
  },
  {
    title: "Payer Communication",
    description:
      "Direct follow-up with insurance companies to resolve claim status, disputes, and payment delays.",
  },
  {
    title: "Patient Billing & Invoicing",
    description:
      "Clear, accurate patient statements and invoicing that reduce confusion and billing errors.",
  },
  {
    title: "Revenue Cycle Reporting",
    description:
      "Tracking claims, denials, and collections to give providers visibility into their revenue cycle.",
  },
  {
    title: "Insurance Verification",
    description:
      "Confirming patient eligibility and coverage details before service to prevent claim denials.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-border"
    >
      <p className="text-sm uppercase tracking-widest text-accent-bright mb-4">
        Services
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground max-w-2xl mb-12">
        What I can help your practice with.
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}