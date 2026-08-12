import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const services = [
  "Facebook & Instagram Ads",
  "Google Ads",
  "Lead Generation",
  "Graphic Design",
  "Local SEO",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-surface-strong px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/40";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thanks for reaching out — I'll get back to you soon.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-[28rem] w-[52rem] -translate-x-1/2 halo opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Let&apos;s Grow Your Business Together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Have a project in mind or looking to improve your digital marketing? Let&apos;s talk
            about how I can help your business reach more customers and generate better results.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "digitalrochak.officialgmail.com" },
              { icon: Phone, label: "Phone / WhatsApp", value: "9817379939" },
              { icon: MapPin, label: "Location", value: "Itahari,Nepal" },
            ].map(({ icon: Icon, label, value }) => (
              <li key={label} className="surface-card flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-semibold">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="surface-card rounded-[2rem] p-7 sm:p-9">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={fieldClass}
                  placeholder="Phone / WhatsApp"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold">
                  Service interested in
                </label>
                <select id="service" name="service" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={fieldClass}
                placeholder="Tell me about your business and goals"
              />
            </div>

            <Cta type="submit" size="lg" className="mt-2 w-full sm:w-auto">
              Send Message <Send className="h-4 w-4" />
            </Cta>

            <p aria-live="polite" className="text-sm text-muted-foreground">
              {submitted
                ? "Message received — I'll be in touch shortly."
                : "I usually reply within one business day."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
