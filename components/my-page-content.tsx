"use client";

import { useState } from "react";
import {
  User,
  BookOpen,
  Zap,
  Flame,
  Target,
  Settings,
} from "lucide-react";
import { allTips, categoryLabels, type TipCategory } from "@/lib/data";
import { TipCard } from "@/components/tip-card";
import { cn } from "@/lib/utils";

const interestOptions: TipCategory[] = [
  "memorization",
  "focus",
  "exam-prep",
  "note-taking",
  "time-management",
  "procrastination",
  "routine",
  "tools",
];

export function MyPageContent() {
  const [interests, setInterests] = useState<Set<TipCategory>>(
    new Set(["focus", "memorization", "time-management"])
  );
  const [activeTab, setActiveTab] = useState<"saved" | "stats" | "settings">(
    "saved"
  );

  // Mock saved tips (first 3)
  const savedTips = allTips.slice(0, 3);

  const toggleInterest = (cat: TipCategory) => {
    setInterests((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  // Mock stats
  const stats = {
    streak: 7,
    totalCompleted: 23,
    savedCount: 12,
    weeklyGoal: 5,
    weeklyDone: 3,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8">
      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">
            {"학습자님, 반가워요!"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {"꾸준함이 실력이 됩니다"}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-accent" />
            <span className="text-xs text-muted-foreground">
              {"연속 실천"}
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">
            {stats.streak}
            <span className="text-sm font-normal text-muted-foreground">
              {"일"}
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">
              {"실천 완료"}
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">
            {stats.totalCompleted}
            <span className="text-sm font-normal text-muted-foreground">
              {"개"}
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">{"저장한 팁"}</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">
            {stats.savedCount}
            <span className="text-sm font-normal text-muted-foreground">
              {"개"}
            </span>
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-xs text-muted-foreground">
              {"주간 목표"}
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-card-foreground">
            {stats.weeklyDone}
            <span className="text-sm font-normal text-muted-foreground">
              /{stats.weeklyGoal}
            </span>
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-accent transition-all"
              style={{
                width: `${(stats.weeklyDone / stats.weeklyGoal) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex gap-1 border-b border-border">
        {(
          [
            { key: "saved", label: "저장한 팁", icon: BookOpen },
            { key: "stats", label: "실천 통계", icon: Target },
            { key: "settings", label: "관심 주제", icon: Settings },
          ] as const
        ).map(({ key, label, icon: Icon }) => (
          <button
            type="button"
            key={key}
            onClick={() => setActiveTab(key)}
            className={cn(
              "flex items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              activeTab === key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "saved" && (
          <div className="flex flex-col gap-4">
            {savedTips.length > 0 ? (
              savedTips.map((tip) => (
                <TipCard key={tip.id} tip={tip} variant="compact" />
              ))
            ) : (
              <div className="py-16 text-center">
                <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/50" />
                <p className="mt-3 text-sm text-muted-foreground">
                  {"아직 저장한 팁이 없어요"}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "stats" && (
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-card-foreground">
              {"최근 7일 실천 기록"}
            </h3>
            <div className="mt-6 flex items-end justify-between gap-2">
              {["월", "화", "수", "목", "금", "토", "일"].map((day, i) => {
                const heights = [60, 80, 40, 100, 70, 30, 90];
                return (
                  <div key={day} className="flex flex-1 flex-col items-center gap-2">
                    <div className="w-full max-w-10 overflow-hidden rounded-lg bg-secondary">
                      <div
                        className="rounded-lg bg-primary transition-all"
                        style={{ height: `${heights[i]}px` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-lg bg-primary/5 px-4 py-3">
              <span className="text-sm text-foreground">
                {"이번 주 평균 실천률"}
              </span>
              <span className="text-lg font-bold text-primary">{"67%"}</span>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <p className="text-sm text-muted-foreground">
              {"관심 있는 주제를 선택하면 맞춤 추천을 받을 수 있어요"}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {interestOptions.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => toggleInterest(cat)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    interests.has(cat)
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-card-foreground hover:bg-secondary"
                  )}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {interests.size}
              {"개 주제 선택됨"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
