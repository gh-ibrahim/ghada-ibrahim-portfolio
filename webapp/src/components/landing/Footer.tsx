import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="font-serif text-3xl font-bold text-foreground mb-2">
                  Ghada Ibrahim
                </div>
                <p className="text-lg text-muted-foreground">
                  Expertin für Digitalisierung & Human-Centered Design
                </p>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Strategische Wirkung durch Technologie – von der digitalen Transformation bis zur
                Entwicklung nachhaltiger, menschenzentrierter Lösungen.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <div className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Navigation
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Über mich
                </a>
                <a
                  href="#value-add"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Value Add
                </a>
                <a
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Erfahrung
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <div className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Vernetzen
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/ghada-m-ibrahim-247a7486/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ghada Ibrahim. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-primary-foreground flex items-center justify-center hover:bg-accent/90 transition-all hover:scale-110 shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
