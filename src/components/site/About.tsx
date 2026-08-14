import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import portrait from "@/assets/rochak-portrait.jpg";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const points = [
  "Paid social campaigns built around clear business objectives",
  "Search advertising focused on qualified traffic and conversions",
  "Marketing creatives designed to stop the scroll",
  "Local visibility so nearby customers find the business first",
];

function AnimatedCounter({
  end,
  duration = 1500,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={portrait}
              alt="Rochak Regmi working as a digital marketing professional"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="surface-card absolute -bottom-6 -right-4 hidden rounded-2xl px-5 py-4 sm:block">
            <p className="font-display text-sm font-bold">
              Creative + Analytical
            </p>
            <p className="text-xs text-muted-foreground">
              Strategy, design and data in one place
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About Me
          </p>

          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            A digital marketer focused on measurable business outcomes
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a professional Digital Marketer specializing in Facebook
              &amp; Instagram Ads, Google Ads, Lead Generation, Graphic Design,
              and Local SEO. My work sits at the intersection of strategy,
              creative and performance — every campaign starts with a business
              goal, not just a budget.
            </p>

            <p>
              I help businesses attract the right customers, generate qualified
              leads, increase sales, build brand awareness, and strengthen their
              online presence. From audience research and ad creative to
              targeting, testing and optimization, I stay close to the numbers
              and keep improving what works.
            </p>
          </div>

          {/* Experience & Projects */}
          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-extrabold text-primary">
                <AnimatedCounter end={2} />+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-card)]">
              <p className="font-display text-3xl font-extrabold text-primary">
                <AnimatedCounter end={10} />+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Projects Completed
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm text-foreground/85"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Cta asChild>
              <a href="#contact">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}