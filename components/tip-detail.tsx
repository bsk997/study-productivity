"use client";

import { useState } from "react";
import {
  type Tip,
  categoryLabels,
  difficultyLabels,
  getRelatedTips,
} from "@/lib/data";
import { TipCard } from "@/components/tip-card";
import {
  Clock,
  Eye,
  Bookmark,
  Share2,
  CheckCircle2,
  Circle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TipDetailProps {
  tip: Tip;
}

export function TipDetail({ tip }: TipDetailProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [saved, setSaved] = useState(false);
  const relatedTips = getRelatedTips(tip);

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const backHref =
    tip.type === "study" ? "/study-tips" : "/productivity-tips";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
      <Link
        href={backHref}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {"목록으로 돌아가기"}
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {categoryLabels[tip.category]}
        </span>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {difficultyLabels[tip.difficulty]}
        </span>
      </div>

      <h1 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl text-balance">
        {tip.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {tip.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Eye className="h-4 w-4" />
          {tip.views.toLocaleString()}
          {"회 조회"}
        </span>
        <span className="flex items-center gap-1.5">
          <Bookmark className="h-4 w-4" />
          {tip.saves.toLocaleString()}
          {"회 저장"}
        </span>
      </div>

      {/* Summary Box */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h2 className="text-sm font-semibold text-primary">{"핵심 요약"}</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          {tip.summary}
        </p>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground">
        {tip.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>
            {paragraph.split("**").map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="font-semibold">
                  {part}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        ))}
      </div>

      {/* Checklist */}
      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <h2 className="text-base font-bold text-card-foreground">
          {"실천 체크리스트"}
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">
          {"하나씩 체크하며 실천해보세요"}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {tip.checklist.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => toggleCheck(index)}
              className="flex items-start gap-3 text-left"
            >
              {checkedItems.has(index) ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              ) : (
                <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              )}
              <span
                className={cn(
                  "text-sm transition-colors",
                  checkedItems.has(index)
                    ? "text-muted-foreground line-through"
                    : "text-card-foreground"
                )}
              >
                {item}
              </span>
            </button>
          ))}
        </div>
        {checkedItems.size === tip.checklist.length && (
          <div className="mt-4 rounded-lg bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary">
            {"모든 항목을 완료했어요! 대단합니다!"}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => setSaved(!saved)}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors",
            saved
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-card-foreground hover:bg-secondary"
          )}
        >
          <Bookmark className={cn("h-4 w-4", saved && "fill-current")} />
          {saved ? "저장됨" : "저장하기"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: tip.title,
                text: tip.summary,
                url: window.location.href,
              });
            }
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
        >
          <Share2 className="h-4 w-4" />
          {"공유하기"}
        </button>
      </div>

      {/* Related Tips */}
      {relatedTips.length > 0 && (
        <div className="mt-14">
          <h2 className="text-lg font-bold text-foreground">{"관련 팁"}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedTips.map((related) => (
              <TipCard key={related.id} tip={related} variant="compact" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
