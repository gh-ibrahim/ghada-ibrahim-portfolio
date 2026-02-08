import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-mono text-accent tracking-wider">04</span>
              <div className="h-px flex-1 bg-border max-w-16" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakt
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Lassen Sie uns gemeinsam digitale Lösungen entwickeln, die echte Wirkung erzielen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact info & social */}
            <div className="space-y-12">
              <div>
                <h3 className="font-semibold text-2xl text-foreground mb-6">
                  Nehmen Sie Kontakt auf
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Ich freue mich über Ihre Nachricht und antworte in der Regel innerhalb von 24
                  Stunden.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-muted-foreground mb-1">
                        E-Mail
                      </div>
                      <a
                        href="mailto:ghada.ibrahim@example.de"
                        className="text-lg text-foreground hover:text-accent transition-colors"
                      >
                        ghada.ibrahim@example.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-4">
                  Vernetzen Sie sich mit mir
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border bg-card hover:bg-accent hover:border-accent hover:text-primary-foreground flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border bg-card hover:bg-accent hover:border-accent hover:text-primary-foreground flex items-center justify-center transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Additional info box */}
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">
                  Interessiert an Zusammenarbeit?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Ich bin offen für neue Projekte und Kooperationen in den Bereichen:
                </p>
                <ul className="space-y-2">
                  {[
                    "Digitale Transformation & IT-Strategie",
                    "Human-Centered Design Workshops",
                    "Programm- & Projektmanagement",
                    "Tech Education & Capacity Building",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-xl text-foreground mb-6">
                Nachricht senden
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="ihre.email@example.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
