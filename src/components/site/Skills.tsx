import { Instagram, MapPin, PenTool, Search, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const skills = [
  {
    icon: Instagram,
    title: "Facebook & Instagram Ads",
    body: "Paid social strategy end to end — campaign structure, audience targeting, creative testing and optimization for leads, sales and brand awareness.",
    tags: ["Campaign Strategy", "Audience Targeting", "Creative Testing"],
  },
  {
    icon: Search,
    title: "Google Ads",
    body: "Search campaigns built for intent: keyword targeting, tight ad groups, conversion tracking and continuous optimization for customer acquisition.",
    tags: ["Search Campaigns", "Keyword Targeting", "Conversion Tracking"],
  },
  {
    icon: Users,
    title: "Lead Generation",
    body: "Funnels and offers designed to attract qualified prospects and turn online traffic into real enquiries your sales process can act on.",
    tags: ["Lead Funnels", "Offer Positioning", "Qualified Traffic"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    body: "A supporting creative skill used to produce ad creatives and marketing materials that are on-brand, clear and built to capture attention.",
    tags: ["Ad Creatives", "Brand Visuals", "Marketing Assets"],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Improving local search visibility so nearby customers discover the business first — profiles, listings, local relevance and on-page basics.",
    tags: ["Google Business Profile", "Local Listings", "On-page Basics"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Skills &amp; Expertise
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            The channels and craft behind every campaign
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A focused skill set covering paid advertising, creative and local visibility — the
            pieces that work together to bring a business consistent enquiries.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, body, tags }, i) => (
            <Reveal
              as="article"
              key={title}
              delay={i * 80}
              className="surface-card group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-accent text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-surface-strong px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
