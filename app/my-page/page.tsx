import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MyPageContent } from "@/components/my-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마이페이지 - StudyFlow",
  description: "나의 학습 기록, 저장한 팁, 실천 통계를 확인하세요.",
};

export default function MyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MyPageContent />
      </main>
      <Footer />
    </div>
  );
}
