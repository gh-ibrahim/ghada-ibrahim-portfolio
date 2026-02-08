import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Ein modernes E-Commerce-System mit nahtloser Benutzererfahrung und performanter Backend-Architektur.",
    year: "2024",
    tags: ["React", "Next.js", "Stripe"],
  },
  {
    title: "Brand Identity",
    category: "Design",
    description:
      "Komplette Markenentwicklung für ein Technologie-Startup, von Logo bis Designsystem.",
    year: "2024",
    tags: ["Branding", "UI/UX", "Figma"],
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Minimalistische Portfolio-Website für einen Fotografen mit Fokus auf Bildpräsentation.",
    year: "2023",
    tags: ["React", "Framer Motion", "CMS"],
  },
  {
    title: "Mobile App",
    category: "App Development",
    description:
      "Native mobile Anwendung für iOS und Android mit Fokus auf Performance und Usability.",
    year: "2023",
    tags: ["React Native", "TypeScript", "Firebase"],
  },
];

export const Projects = () => {
  return (
    <section id="projekte" className="border-t border-border bg-background px-6 py-24">
      <div className="container max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Section label */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="mb-4 h-px w-12 bg-foreground" />
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                03 — Projekte
              </h2>
            </div>
          </div>

          {/* Projects list */}
          <div className="lg:col-span-9">
            <div className="mb-12 space-y-4">
              <h3 className="font-sans text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Ausgewählte Arbeiten
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Eine Auswahl meiner aktuellen Projekte und Arbeiten.
              </p>
            </div>

            <div className="space-y-1">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group border-t border-border py-8 transition-all first:border-t-0 hover:bg-muted"
                >
                  <div className="grid gap-6 px-6 lg:grid-cols-12 lg:gap-8">
                    {/* Project info */}
                    <div className="lg:col-span-8">
                      <div className="mb-3 flex items-center gap-4">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {project.category}
                        </span>
                        <span className="h-px w-4 bg-border" />
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.year}
                        </span>
                      </div>
                      <h4 className="mb-3 font-sans text-2xl font-light text-foreground transition-colors group-hover:text-accent">
                        {project.title}
                      </h4>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="border border-border bg-background px-3 py-1 font-mono text-xs text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project image placeholder and link */}
                    <div className="lg:col-span-4">
                      <div className="aspect-[4/3] border border-border bg-muted/50">
                        {/* Placeholder for project image */}
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <div className="mb-2 mx-auto h-12 w-12 border border-muted-foreground/20" />
                            <p className="font-mono text-xs text-muted-foreground">
                              Projektbild
                            </p>
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 flex w-full items-center justify-center gap-2 border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background">
                        Projekt ansehen
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
