import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { WeeklyPlanner } from "@/components/weekly-planner";
import { DailyRoutine } from "@/components/daily-routine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "루틴/도구 - StudyFlow",
  description:
    "포모도로 타이머, 주간 공부 플래너, 데일리 루틴 템플릿 등 공부에 바로 활용할 수 있는 도구를 제공합니다.",
};

export default function RoutinesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
          <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
            {"루틴 & 도구"}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            {"직접 활용할 수 있는 공부 템플릿과 도구를 모았어요"}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <PomodoroTimer />
            </div>
            <div className="lg:col-span-3">
              <DailyRoutine />
            </div>
          </div>

          <div className="mt-8">
            <WeeklyPlanner />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
