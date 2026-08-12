import { ArrowRight, BarChart3, MousePointerClick, Search, Sparkles, Target } from "lucide-react";
import portrait from "@/assets/rochak-portrait.jpg";
import { Cta } from "./Cta";

const floaters = [
  { icon: Target, label: "Audience Targeting", className: "left-0 top-10", delay: "0s" },
  { icon: BarChart3, label: "Campaign ROI", className: "right-0 top-32", delay: "1.4s" },
  { icon: Search, label: "Local SEO", className: "-left-4 bottom-40", delay: "2.6s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 halo opacity-60 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Digital Marketer
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Digital Marketing That Drives{" "}
            <span className="text-gradient">Real Business Growth</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m Rochak Regmi — I help businesses generate leads, increase sales, build brand
            awareness, and grow their online presence through strategic paid advertising, creative
            design, and Local SEO.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta asChild size="lg">
              <a href="#contact">
                Let&apos;s Work Together <ArrowRight className="h-4 w-4" />
              </a>
            </Cta>
            <Cta asChild size="lg" variant="outline">
              <a href="#services">Explore My Services</a>
            </Cta>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Meta Ads", "Google Ads", "Lead Gen", "Local SEO"].map((item) => (
              <li
                key={item}
                className="surface-card rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-gradient-accent opacity-25 blur-xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-surface shadow-[var(--shadow-elevated)]">
            <img
              src={portrait}
              alt="Portrait of Rochak Regmi, digital marketer"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent px-6 pb-6 pt-16">
              <p className="font-display text-lg font-bold">Rochak Regmi</p>
              <p className="text-sm text-muted-foreground">
                Paid Ads · Lead Generation · Local SEO
              </p>
            </div>
          </div>

          {floaters.map(({ icon: Icon, label, className, delay }) => (
            <div
              key={label}
              style={{ animationDelay: delay }}
              className={`animate-float absolute hidden items-center gap-2 rounded-2xl border border-border bg-background/85 px-3 py-2 text-xs font-semibold backdrop-blur-md sm:flex ${className}`}
              aria-hidden="true"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </div>
          ))}

          <div
            className="animate-float absolute -bottom-6 right-2 hidden items-center gap-2 rounded-2xl border border-border bg-background/85 px-3 py-2 text-xs font-semibold backdrop-blur-md sm:flex"
            style={{ animationDelay: "3.4s" }}
            aria-hidden="true"
          >
            <MousePointerClick className="h-4 w-4 text-accent" />
            Conversion Focused
          </div>
        </div>
      </div>
    </section>
  );
}
