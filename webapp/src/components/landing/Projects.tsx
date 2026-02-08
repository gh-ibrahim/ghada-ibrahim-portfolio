import { Building2, GraduationCap, MapPin } from "lucide-react";

const experiences = [
  {
    organization: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    role: "IKT- & Digitalisierungsberaterin",
    location: "Palästina",
    period: "2019-2022",
    highlights: [
      "Entwicklung digitaler Beteiligungsformate (E-Participation)",
      "Digitale Jugendprogramme mit über 1.000 Teilnehmenden",
      "Aufbau von Multi-Stakeholder-Partnerschaften",
    ],
  },
  {
    organization: "Gaza Sky Geeks",
    role: "Senior Managerin & Programmmanagerin",
    location: "Palästina",
    period: "2016-2019",
    highlights: [
      "Strategische Leitung von Tech-Education-Programmen",
      "Skalierung von Bildungsangeboten (Software Development, Freelancing, ICT)",
      "Internationale Förder- und Partnernetzwerke",
    ],
  },
  {
    organization: "Universität Stuttgart",
    role: "Freelance Trainerin",
    location: "Deutschland",
    period: "2022-Heute",
    highlights: [
      "Workshops zu Human-Centered Design",
      "Interdisziplinäre Studienprogramme",
      "Praxisorientierte Methodenvermittlung",
    ],
  },
];

const education = [
  {
    title: "Mini MBA / Emerging Leaders Programme",
    institution: "Portland State University",
    location: "USA",
    focus: "Leadership & Strategisches Management",
  },
  {
    title: "Projektmanagement für Entwicklungsprojekte",
    institution: "PMD Pro Zertifizierung",
    location: "International",
    focus: "Project Management for Development",
  },
  {
    title: "Data Analytics mit Python",
    institution: "DataCamp",
    location: "Online",
    focus: "Datenanalyse & Programmierung",
  },
];

export const Projects = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-accent tracking-wider">03</span>
              <div className="h-px flex-1 bg-border max-w-16" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Internationale Erfahrung
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Über viele Jahre habe ich in internationalen Entwicklungs- und Bildungsprojekten
              gearbeitet – mit Fokus auf Digitalisierung, Tech Education und Governance in
              Technology.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="font-semibold text-2xl text-foreground mb-8 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-accent" />
              Berufserfahrung
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {exp.organization}
                      </h4>
                      <p className="text-lg text-primary font-medium mb-2">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h3 className="font-semibold text-2xl text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Weiterbildung & Qualifikationen
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="mb-3">
                    <div className="text-xs font-mono text-accent mb-2">{edu.location}</div>
                    <h4 className="font-semibold text-foreground mb-1">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">{edu.focus}</p>
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
