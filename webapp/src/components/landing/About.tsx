export const About = () => {
  return (
    <section id="ueber-mich" className="border-t border-border bg-background px-6 py-24">
      <div className="container max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Section label */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="mb-4 h-px w-12 bg-foreground" />
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                01 — Über mich
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="space-y-12">
              {/* Main bio */}
              <div className="space-y-6">
                <h3 className="font-sans text-3xl font-light leading-tight text-foreground sm:text-4xl">
                  Hallo, ich bin ein Designer und Entwickler mit Leidenschaft
                  für saubere, funktionale digitale Lösungen.
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Mit über 10 Jahren Erfahrung in der digitalen Branche habe
                    ich zahlreiche Projekte von der Konzeption bis zur
                    Umsetzung begleitet. Mein Ansatz verbindet technisches
                    Know-how mit gestalterischem Feingefühl.
                  </p>
                  <p>
                    Ich glaube an die Kraft von klarem Design und gut
                    durchdachter Funktionalität. Jedes Projekt ist eine
                    Gelegenheit, etwas Bedeutungsvolles zu schaffen, das sowohl
                    schön als auch nützlich ist.
                  </p>
                </div>
              </div>

              {/* Skills/Expertise grid */}
              <div className="grid gap-8 pt-8 sm:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Kompetenzen
                  </h4>
                  <ul className="space-y-2 text-base text-foreground">
                    <li>UI/UX Design</li>
                    <li>Web Development</li>
                    <li>Brand Identity</li>
                    <li>Art Direction</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Technologien
                  </h4>
                  <ul className="space-y-2 text-base text-foreground">
                    <li>React, TypeScript</li>
                    <li>Next.js, Node.js</li>
                    <li>Figma, Adobe CC</li>
                    <li>Webflow, WordPress</li>
                  </ul>
                </div>
              </div>

              {/* Stats or highlights */}
              <div className="grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
                <div>
                  <div className="mb-2 font-sans text-3xl font-light text-foreground">
                    10+
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Jahre Erfahrung
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-sans text-3xl font-light text-foreground">
                    50+
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Projekte
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-sans text-3xl font-light text-foreground">
                    20+
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Zufriedene Kunden
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
