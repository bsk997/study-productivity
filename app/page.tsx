import Link from "next/link";

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

        {/* 🔽 여기부터 추가 */}
        <section className="px-6 py-12">
          <h2 className="mb-4 text-2xl font-bold">최신 공부 팁</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/study-focus"
                className="text-blue-600 hover:underline"
              >
                집중력 높이는 공부법 5가지
              </Link>
            </li>
          </ul>
        </section>
        {/* 🔼 여기까지 */}
      </main>
      <Footer />
    </div>
  );
}
