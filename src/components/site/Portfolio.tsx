import { ImageIcon } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const categories = [
  "Facebook & Instagram Ads",
  "Google Ads",
  "Lead Generation",
  "Graphic Design",
  "Local SEO",
];

const placeholders = [
  { category: "Facebook & Instagram Ads", objective: "Scale online sales and ROAS" },
  { category: "Google Ads", objective: "Drive qualified service inquiries" },
  { category: "Lead Generation", objective: "Generate qualified property buyer leads" },
  { category: "Graphic Design", objective: " Create compelling ad creatives" },
  { category: "Local SEO", objective: "Improve local search rankings" },
  { category: "Multi-channel", objective: "Increase foot traffic and online orders" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Results / Portfolio
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Case studies, ready to be filled with real work
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            This space is reserved for upcoming client campaigns and case studies. Each card will
            document the business, the service provided, the objective and the results achieved.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <Reveal
              as="article"
              key={`${p.category}-${i}`}
              delay={i * 70}
              className="surface-card group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="grid aspect-[16/10] place-items-center border-b border-border bg-surface-strong">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <ImageIcon className="h-7 w-7" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Project image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-base font-bold">Client / business name</h3>
                <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div>
                    <dt className="inline font-semibold text-foreground/80">Objective: </dt>
                    <dd className="inline">{p.objective}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground/80">Results: </dt>
                    <dd className="inline">To be added</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-foreground/80">Case study: </dt>
                    <dd className="inline">Short summary coming soon</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <Cta asChild variant="outline" size="lg">
            <a href="#contact">Become the next case study</a>
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
