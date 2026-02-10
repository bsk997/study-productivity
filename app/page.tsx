import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { DailyTipsSection } from "@/components/daily-tips-section";
import { PopularSection } from "@/components/popular-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DailyTipsSection />
        <PopularSection />
      </main>
      <Footer />
    </div>
  );
}
