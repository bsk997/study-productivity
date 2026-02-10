import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductivityTipsList } from "@/components/productivity-tips-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "생산성 팁 - StudyFlow",
  description: "시간 관리, 미루기 극복, 루틴, 도구 추천 등 일상과 업무 생산성을 높이는 팁을 모았습니다.",
};

export default function ProductivityTipsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
          <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
            {"생산성 팁"}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {"일상과 업무에서 바로 적용할 수 있는 생산성 향상 방법"}
          </p>
          <ProductivityTipsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
