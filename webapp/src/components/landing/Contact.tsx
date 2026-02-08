import { Mail, MapPin, Phone } from "lucide-react";
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
    <section id="kontakt" className="border-t border-border bg-muted px-6 py-24">
      <div className="container max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Section label */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="mb-4 h-px w-12 bg-foreground" />
              <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                04 — Kontakt
              </h2>
            </div>
          </div>

          {/* Contact content */}
          <div className="lg:col-span-9">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-sans text-3xl font-light leading-tight text-foreground sm:text-4xl">
                    Lassen Sie uns zusammenarbeiten
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Ich freue mich über Ihre Nachricht und antworte in der Regel
                    innerhalb von 24 Stunden.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-foreground" strokeWidth={1} />
                    <div>
                      <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        E-Mail
                      </div>
                      <a
                        href="mailto:kontakt@example.de"
                        className="text-base text-foreground transition-colors hover:text-accent"
                      >
                        kontakt@example.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-foreground" strokeWidth={1} />
                    <div>
                      <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Telefon
                      </div>
                      <a
                        href="tel:+491234567890"
                        className="text-base text-foreground transition-colors hover:text-accent"
                      >
                        +49 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-foreground" strokeWidth={1} />
                    <div>
                      <div className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Standort
                      </div>
                      <p className="text-base text-foreground">
                        Berlin, Deutschland
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="border-t border-border pt-6">
                  <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Social Media
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="font-mono text-sm text-foreground transition-colors hover:text-accent"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="font-mono text-sm text-foreground transition-colors hover:text-accent"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="font-mono text-sm text-foreground transition-colors hover:text-accent"
                    >
                      Dribbble
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="border border-border bg-background p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-foreground bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-wider text-background transition-all hover:bg-transparent hover:text-foreground"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
