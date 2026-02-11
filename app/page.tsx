import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { DailyTipsSection } from "@/components/daily-tips-section";
import { PopularSection } from "@/components/popular-section";

export default function HomePage() {
  return (
        <main>
      <h1>StudyFlow</h1>

      <ul>
        <li>
          <Link href="/study-focus">
            집중력 높이는 공부법 5가지
          </Link>
        </li>
      </ul>
    </main>
  );
}
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
