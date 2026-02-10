"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Sun, Coffee, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoutineItem {
  id: string;
  time: string;
  task: string;
  period: "morning" | "afternoon" | "evening";
}

const defaultRoutine: RoutineItem[] = [
  { id: "1", time: "06:30", task: "기상 + 물 한 잔", period: "morning" },
  { id: "2", time: "06:45", task: "10분 스트레칭", period: "morning" },
  { id: "3", time: "07:00", task: "아침 식사", period: "morning" },
  { id: "4", time: "07:30", task: "오늘의 목표 3가지 작성", period: "morning" },
  { id: "5", time: "08:00", task: "가장 중요한 과목 집중 학습", period: "morning" },
  { id: "6", time: "10:00", task: "포모도로 2세트 (복습)", period: "morning" },
  { id: "7", time: "12:00", task: "점심 식사 + 가벼운 산책", period: "afternoon" },
  { id: "8", time: "13:00", task: "가벼운 과목 학습", period: "afternoon" },
  { id: "9", time: "15:00", task: "문제 풀이 연습", period: "afternoon" },
  { id: "10", time: "17:00", task: "오늘 학습 내용 복습", period: "evening" },
  { id: "11", time: "19:00", task: "저녁 식사", period: "evening" },
  { id: "12", time: "20:00", task: "가벼운 독서 또는 정리", period: "evening" },
  { id: "13", time: "22:00", task: "내일 계획 작성", period: "evening" },
  { id: "14", time: "22:30", task: "수면 준비", period: "evening" },
];

const periodIcons = {
  morning: Sun,
  afternoon: Coffee,
  evening: Moon,
};

const periodLabels = {
  morning: "오전",
  afternoon: "오후",
  evening: "저녁",
};

export function DailyRoutine() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const groups = (["morning", "afternoon", "evening"] as const).map(
    (period) => ({
      period,
      items: defaultRoutine.filter((r) => r.period === period),
    })
  );

  const totalCompleted = completed.size;
  const totalItems = defaultRoutine.length;
  const progressPercent = Math.round((totalCompleted / totalItems) * 100);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-card-foreground">
            {"데일리 루틴 템플릿"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {"수험생을 위한 하루 루틴 가이드"}
          </p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">
            {progressPercent}%
          </span>
          <p className="text-xs text-muted-foreground">
            {totalCompleted}/{totalItems} {"완료"}
          </p>
        </div>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {groups.map(({ period, items }) => {
          const Icon = periodIcons[period];
          return (
            <div key={period}>
              <div className="mb-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {periodLabels[period]}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => toggle(item.id)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-secondary/50"
                  >
                    {completed.has(item.id) ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                    <span className="w-12 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
                      {item.time}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        completed.has(item.id)
                          ? "text-muted-foreground line-through"
                          : "text-card-foreground"
                      )}
                    >
                      {item.task}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
