import { Sparkles, Users, Globe, BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-accent tracking-wider">
                01
              </span>
              <div className="h-px flex-1 bg-border max-w-16" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Über mich
            </h2>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left column - Main bio */}
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground">
                  Ich bin Expertin für <strong>Digitalisierung und Technologie</strong> mit über{" "}
                  <strong>10 Jahren internationaler Erfahrung</strong> in IT-Programmmanagement,
                  digitaler Transformation und nutzerzentriertem Design.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Mein Fokus liegt darauf, Technologie sinnvoll einzusetzen, um echte Wirkung zu
                  erzielen – für Organisationen, Teams und Nutzer:innen.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Als <strong>Trainerin und Praktikerin für Human-Centered Design</strong> und
                  Design Thinking unterstütze ich Organisationen dabei, menschenzentrierte,
                  nachhaltige Lösungen zu entwickeln. Ich arbeite gern an der Schnittstelle von
                  Technologie, Bildung und gesellschaftlichem Wandel und bewege mich sicher in
                  interdisziplinären, internationalen Kontexten.
                </p>
              </div>

              {/* Key expertise cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-secondary/50 border border-border rounded-lg hover:shadow-md transition-shadow">
                  <Sparkles className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Digitalisierung & IT-Strategie
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Strategische Planung und Umsetzung digitaler Transformationsprojekte
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 border border-border rounded-lg hover:shadow-md transition-shadow">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Human-Centered Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Design Thinking, nutzerzentrierte Lösungsentwicklung und Facilitation
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 border border-border rounded-lg hover:shadow-md transition-shadow">
                  <Globe className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Internationale Zusammenarbeit
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Multi-Stakeholder-Management in komplexen, internationalen Projekten
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 border border-border rounded-lg hover:shadow-md transition-shadow">
                  <BookOpen className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Digitale Bildungsprogramme
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Entwicklung und Skalierung von Tech-Education und Workforce Development
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Quick facts */}
            <div className="space-y-8">
              {/* Languages */}
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Sprachen
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-foreground">Arabisch</span>
                    <span className="text-sm text-muted-foreground">Muttersprache</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-foreground">Englisch</span>
                    <span className="text-sm text-muted-foreground">C1</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-foreground">Deutsch</span>
                    <span className="text-sm text-muted-foreground">B1-B2</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-foreground">Französisch</span>
                    <span className="text-sm text-muted-foreground">B1</span>
                  </li>
                </ul>
              </div>

              {/* Core skills */}
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Kernkompetenzen
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Agiles PM",
                    "Design Thinking",
                    "IT-Strategie",
                    "Stakeholder-Management",
                    "Program Management",
                    "Python",
                    "JavaScript",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm border border-accent/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
