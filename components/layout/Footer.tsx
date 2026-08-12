export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} Muhammad Jibrail. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}