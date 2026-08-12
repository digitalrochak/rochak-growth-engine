import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Services } from "@/components/site/Services";
import { WhyMe } from "@/components/site/WhyMe";
import { Portfolio } from "@/components/site/Portfolio";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Rochak Regmi | Digital Marketer";
const description =
  "Rochak Regmi is a Digital Marketer specializing in Facebook & Instagram Ads, Google Ads, Lead Generation, Graphic Design, and Local SEO.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rochak Regmi",
          jobTitle: "Digital Marketer",
          description,
          knowsAbout: [
            "Facebook Ads",
            "Instagram Ads",
            "Google Ads",
            "Lead Generation",
            "Graphic Design",
            "Local SEO",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <WhyMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
