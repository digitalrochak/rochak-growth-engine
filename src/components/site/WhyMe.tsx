import { Brain, Gauge, Layers, LineChart, Rocket, Target } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: Gauge,
    title: "Results-focused approach",
    body: "Campaigns are judged by leads, enquiries and sales — not impressions alone.",
  },
  {
    icon: Layers,
    title: "Multi-channel expertise",
    body: "Meta Ads, Google Ads and Local SEO working together instead of in isolation.",
  },
  {
    icon: Target,
    title: "Built for lead generation",
    body: "Targeting, offers and creative aligned to attract genuinely interested prospects.",
  },
  {
    icon: LineChart,
    title: "Conversion-oriented",
    body: "Every step from ad click to enquiry is reviewed and refined for better outcomes.",
  },
  {
    icon: Brain,
    title: "Creative + analytical",
    body: "Design thinking paired with data, so campaigns look good and perform well.",
  },
  {
    icon: Rocket,
    title: "Focused on business growth",
    body: "Marketing decisions made in the context of what actually grows your business.",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="surface-card overflow-hidden rounded-[2.5rem] p-8 sm:p-12">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why Work With Me
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              A partner who cares about what happens after the click
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-strong text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-12">
            <Cta asChild size="lg">
              <a href="#contact">Work With Me</a>
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
