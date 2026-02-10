import Link from "next/link";
import { Clock, Eye, Bookmark, ArrowRight } from "lucide-react";
import {
  type Tip,
  categoryLabels,
  difficultyLabels,
} from "@/lib/data";
import { cn } from "@/lib/utils";

interface TipCardProps {
  tip: Tip;
  variant?: "default" | "compact" | "featured";
}

const difficultyColor: Record<string, string> = {
  beginner: "bg-primary/10 text-primary",
  intermediate: "bg-accent/10 text-accent",
  advanced: "bg-destructive/10 text-destructive",
};

export function TipCard({ tip, variant = "default" }: TipCardProps) {
  const href =
    tip.type === "study"
      ? `/study-tips/${tip.id}`
      : `/productivity-tips/${tip.id}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
      >
        <div className="flex-1">
          <p className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {tip.title}
          </p>
          <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {tip.duration}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {tip.views.toLocaleString()}
            </span>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md lg:p-8"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {categoryLabels[tip.category]}
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                difficultyColor[tip.difficulty]
              )}
            >
              {difficultyLabels[tip.difficulty]}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary lg:text-xl text-balance">
            {tip.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {tip.summary}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {tip.duration}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {tip.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Bookmark className="h-3.5 w-3.5" />
              {tip.saves.toLocaleString()}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            자세히 보기
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {categoryLabels[tip.category]}
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            difficultyColor[tip.difficulty]
          )}
        >
          {difficultyLabels[tip.difficulty]}
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-card-foreground transition-colors group-hover:text-primary text-balance">
        {tip.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {tip.summary}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {tip.duration}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {tip.views.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <Bookmark className="h-3 w-3" />
          {tip.saves.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}
