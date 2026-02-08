import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
      <div className="container max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left side - Name and Title */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Name with line accent */}
              <div className="relative">
                <div className="mb-6 h-px w-16 bg-foreground opacity-0 animate-scale-in" />
                <h1
                  className="font-sans text-5xl font-light leading-tight tracking-tight text-foreground opacity-0 animate-fade-in sm:text-6xl md:text-7xl"
                  style={{ animationDelay: "0.2s" }}
                >
                  Max Mustermann
                </h1>
              </div>

              {/* Title/Role */}
              <div
                className="space-y-3 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  Beruf / Position
                </p>
                <h2 className="font-sans text-2xl font-light text-foreground sm:text-3xl">
                  Digital Designer &<br />
                  Web Developer
                </h2>
              </div>

              {/* Short tagline */}
              <p
                className="max-w-md font-sans text-base leading-relaxed text-muted-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                Ich gestalte digitale Erlebnisse mit Fokus auf Funktionalität,
                Ästhetik und Benutzererfahrung.
              </p>

              {/* CTA */}
              <div
                className="flex gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="group relative overflow-hidden border border-foreground bg-foreground px-8 py-3 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-transparent hover:text-foreground"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => scrollToSection("projekte")}
                  className="border border-foreground px-8 py-3 font-mono text-sm uppercase tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Projekte
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/5] overflow-hidden border border-border bg-muted opacity-0 animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Placeholder for profile image */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 h-24 w-24 mx-auto border-2 border-muted-foreground/20" />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Bild hier einfügen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("ueber-mich")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s" }}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6 animate-float text-muted-foreground" />
      </button>
    </section>
  );
};
