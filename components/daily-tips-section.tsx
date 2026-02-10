import { getDailyStudyTip, getDailyProductivityTip } from "@/lib/data";
import { TipCard } from "@/components/tip-card";
import { BookOpen, Zap } from "lucide-react";

export function DailyTipsSection() {
  const studyTip = getDailyStudyTip();
  const productivityTip = getDailyProductivityTip();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-foreground lg:text-2xl">
          {"오늘의 추천 팁"}
        </h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {"오늘 바로 실천해볼 수 있는 팁을 선별했어요"}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              {"공부 팁"}
            </span>
          </div>
          <TipCard tip={studyTip} variant="featured" />
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
              <Zap className="h-4 w-4 text-accent" />
            </div>
            <span className="text-sm font-semibold text-foreground">
              {"생산성 팁"}
            </span>
          </div>
          <TipCard tip={productivityTip} variant="featured" />
        </div>
      </div>
    </section>
  );
}
