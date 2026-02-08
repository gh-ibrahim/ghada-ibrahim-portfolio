export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="container max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-sans text-lg font-medium text-foreground">
              Max Mustermann
            </div>
            <p className="text-sm text-muted-foreground">
              Digital Designer & Web Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#ueber-mich"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Über mich
              </a>
              <a
                href="#leistungen"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Leistungen
              </a>
              <a
                href="#projekte"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Projekte
              </a>
              <a
                href="#kontakt"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Kontakt
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:kontakt@example.de"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                kontakt@example.de
              </a>
              <a
                href="tel:+491234567890"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                +49 123 456 7890
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Social Media
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Max Mustermann. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
