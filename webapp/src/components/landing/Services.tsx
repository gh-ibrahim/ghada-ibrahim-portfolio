import { Code, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design",
    description:
      "Visuelles Design, Brand Identity und User Interface Design für digitale Produkte.",
    details: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping"],
  },
  {
    icon: Code,
    title: "Entwicklung",
    description:
      "Frontend- und Backend-Entwicklung mit modernen Technologien und Best Practices.",
    details: ["Web Development", "React/Next.js", "TypeScript", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first Ansatz für optimale Darstellung auf allen Geräten und Bildschirmgrößen.",
    details: ["Mobile Optimization", "Cross-Browser", "Performance", "Accessibility"],
  },
  {
    icon: Zap,
    title: "Beratung",
    description:
      "Strategische Beratung für digitale Projekte, von der Konzeption bis zum Launch.",
    details: ["Strategy", "Workshops", "Code Review", "Optimization"],
  },
];

export const Services = () => {
  return (
    <section id="leistungen" className="border-t border-border bg-muted px-6 py-24">
      <div className="container max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Section label */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="mb-4 h-px w-12 bg-foreground" />
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                02 — Leistungen
              </h2>
            </div>
          </div>

          {/* Services grid */}
          <div className="lg:col-span-9">
            <div className="mb-12 space-y-4">
              <h3 className="font-sans text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Was ich anbiete
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ein umfassendes Spektrum digitaler Dienstleistungen, maßgeschneidert
                für Ihre Anforderungen.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group border border-border bg-background p-8 transition-all hover:border-foreground"
                  >
                    <div className="mb-6">
                      <Icon className="h-8 w-8 text-foreground" strokeWidth={1} />
                    </div>
                    <h4 className="mb-3 font-sans text-xl font-medium text-foreground">
                      {service.title}
                    </h4>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2 border-t border-border pt-6">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 font-mono text-xs text-foreground"
                        >
                          <span className="h-px w-4 bg-foreground" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
