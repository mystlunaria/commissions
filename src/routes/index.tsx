import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Prices } from "@/components/Prices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "NOVA.gfx — Roblox GFX Commissions & Custom Renders";
const description =
  "Premium custom Roblox GFX renders: profile pictures, full body renders, group banners and thumbnails. View the portfolio and commission your own.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
