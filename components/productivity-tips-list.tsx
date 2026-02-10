"use client";

import { useState, useMemo } from "react";
import {
  productivityTips,
  categoryLabels,
  type TipCategory,
} from "@/lib/data";
import { TipCard } from "@/components/tip-card";
import { cn } from "@/lib/utils";

const prodCategories: TipCategory[] = [
  "time-management",
  "procrastination",
  "routine",
  "tools",
];

type SortKey = "latest" | "popular" | "saved";

export function ProductivityTipsList() {
  const [activeCategory, setActiveCategory] = useState<TipCategory | "all">(
    "all"
  );
  const [sortBy, setSortBy] = useState<SortKey>("popular");

  const filteredTips = useMemo(() => {
    let tips =
      activeCategory === "all"
        ? productivityTips
        : productivityTips.filter((t) => t.category === activeCategory);

    switch (sortBy) {
      case "latest":
        return [...tips].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "popular":
        return [...tips].sort((a, b) => b.views - a.views);
      case "saved":
        return [...tips].sort((a, b) => b.saves - a.saves);
      default:
        return tips;
    }
  }, [activeCategory, sortBy]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {"전체"}
          </button>
          {prodCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
          {(
            [
              { key: "popular", label: "인기순" },
              { key: "latest", label: "최신순" },
              { key: "saved", label: "저장순" },
            ] as const
          ).map((opt) => (
            <button
              type="button"
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                sortBy === opt.key
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>

      {filteredTips.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">
            {"해당 카테고리의 팁이 아직 없습니다."}
          </p>
        </div>
      )}
    </div>
  );
}
