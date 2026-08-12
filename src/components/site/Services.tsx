import { ArrowUpRight, Instagram, MapPin, PenTool, Search, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    icon: Instagram,
    title: "Facebook & Instagram Ads",
    body: "Paid social campaigns built for lead generation, sales and brand awareness — with precise audience targeting and ongoing campaign optimization.",
  },
  {
    no: "02",
    icon: Search,
    title: "Google Ads",
    body: "Conversion-focused search campaigns with keyword targeting and structured optimization to acquire customers who are already looking for you.",
  },
  {
    no: "03",
    icon: Users,
    title: "Lead Generation",
    body: "Digital marketing strategies that attract potential customers and turn interest into qualified leads your business can follow up on.",
  },
  {
    no: "04",
    icon: PenTool,
    title: "Graphic Design",
    body: "Professional marketing graphics and advertising creatives designed to capture attention and give campaigns a strong visual edge.",
  },
  {
    no: "05",
    icon: MapPin,
    title: "Local SEO",
    body: "Improve local search visibility, attract nearby customers and strengthen your local online presence where buying decisions happen.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 halo opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Services</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Services built around growth, not vanity metrics
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Choose a single channel or a combined strategy — each service is delivered with clear
            objectives, thoughtful creative and continuous optimization.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ no, icon: Icon, title, body }, i) => (
            <Reveal
              as="article"
              key={no}
              delay={i * 80}
              className="surface-card group relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-surface-strong text-primary transition-colors duration-300 group-hover:bg-gradient-accent group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-bold text-muted-foreground/60">
                  {no}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Get Started <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          ))}

          <Reveal
            delay={400}
            className="flex flex-col justify-center rounded-3xl border border-primary/40 bg-gradient-accent p-7 text-primary-foreground shadow-[var(--shadow-elevated)]"
          >
            <h3 className="font-display text-xl font-extrabold">Not sure where to start?</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              Tell me about your business and goals — I&apos;ll suggest the channel mix that makes
              the most sense for you.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4"
            >
              Work With Me <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
