import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StudyTipsList } from "@/components/study-tips-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공부 팁 - StudyFlow",
  description: "암기, 집중력, 시험 대비, 노트 정리 등 실천 가능한 공부 팁을 모았습니다.",
};

export default function StudyTipsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
          <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
            {"공부 팁"}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {"검증된 학습법으로 공부 효율을 높여보세요"}
          </p>
          <StudyTipsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
