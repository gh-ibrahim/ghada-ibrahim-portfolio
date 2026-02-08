import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle grain texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <div
              className="order-2 lg:order-1 flex justify-center lg:justify-start animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700" />

                {/* Image container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full border-2 border-border overflow-hidden bg-card shadow-2xl">
                    <img
                      src="/ghada-profile.png"
                      alt="Ghada Ibrahim"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Accent border */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div
                  className="inline-block animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium tracking-wide uppercase border border-accent/20 rounded-full">
                    Digitalisierung & Transformation
                  </span>
                </div>

                <h1
                  className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Ghada
                  <br />
                  <span className="text-primary">Ibrahim</span>
                </h1>

                <p
                  className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  Expertin für Digitalisierung, Human-Centered Design &
                  internationale IT-Programmmanagement
                </p>
              </div>

              {/* CTA buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
                >
                  Kontakt aufnehmen
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  Mehr erfahren
                </a>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Jahre Erfahrung
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projekte
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">
                    4
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Sprachen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};
