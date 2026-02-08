import { Target, TrendingUp, Users2, Award } from "lucide-react";

export const Services = () => {
  return (
    <section id="value-add" className="relative py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-accent tracking-wider">02</span>
              <div className="h-px flex-1 bg-border max-w-16" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Was ich in dein Team einbringe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Strategische Wirkung statt nur Umsetzung – ich verbinde Strategie mit operativer
              Umsetzung, von der Konzeption digitaler Programme bis zur erfolgreichen
              Implementierung.
            </p>
          </div>

          {/* Results section */}
          <div className="mb-16">
            <h3 className="font-semibold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              Nachweisbare Ergebnisse
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      50+ Digitalprojekte erfolgreich geleitet
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Mit messbar höherer Nutzerakzeptanz und nachweislicher Wirkung
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Skalierung von Bildungsprogrammen
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Deutlich verbesserte Abschluss- und Jobvermittlungsquoten
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Internationale Partnerschaften
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Aufbau mit Tech-Unternehmen, NGOs und Fördergebern
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Fördermittelakquise & Budgetverantwortung
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Erfolgreiche Finanzierung und verantwortungsvolles Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working style & competencies */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Working style */}
            <div>
              <h3 className="font-semibold text-2xl text-foreground mb-6">Arbeitsweise</h3>
              <ul className="space-y-4">
                {[
                  "Menschenzentriert & nutzerfokussiert",
                  "Strukturiert & wirkungsorientiert",
                  "Erfahren in komplexen, internationalen Stakeholder-Umfeldern",
                  "Stark in Kommunikation, Facilitation und Teamführung",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical & methodological competencies */}
            <div>
              <h3 className="font-semibold text-2xl text-foreground mb-6">
                Technische & methodische Kompetenzen
              </h3>
              <ul className="space-y-4">
                {[
                  "Digitale Transformation & IT-Strategie",
                  "Agile Methoden, Design Thinking",
                  "Projekt- & Programmmanagement",
                  "Python (Data Analytics), JavaScript",
                  "Arbeit mit interdisziplinären, internationalen Teams",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
