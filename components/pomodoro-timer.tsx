"use client";

import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type TimerMode = "focus" | "short-break" | "long-break";

const DURATIONS: Record<TimerMode, number> = {
  focus: 25 * 60,
  "short-break": 5 * 60,
  "long-break": 15 * 60,
};

const MODE_LABELS: Record<TimerMode, string> = {
  focus: "집중",
  "short-break": "짧은 휴식",
  "long-break": "긴 휴식",
};

export function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>("focus");
  const [timeLeft, setTimeLeft] = useState(DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSets, setCompletedSets] = useState(0);

  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(DURATIONS[mode]);
  }, [mode]);

  const switchMode = useCallback(
    (newMode: TimerMode) => {
      setMode(newMode);
      setIsRunning(false);
      setTimeLeft(DURATIONS[newMode]);
    },
    []
  );

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          if (mode === "focus") {
            setCompletedSets((s) => s + 1);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress =
    ((DURATIONS[mode] - timeLeft) / DURATIONS[mode]) * 100;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
      <h2 className="text-lg font-bold text-card-foreground">
        {"포모도로 타이머"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {"25분 집중 + 5분 휴식으로 효율적으로 공부하세요"}
      </p>

      <div className="mt-6 flex items-center justify-center gap-2">
        {(Object.keys(DURATIONS) as TimerMode[]).map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => switchMode(m)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              mode === m
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {MODE_LABELS[m]}
          </button>
        ))}
      </div>

      <div className="relative mt-8 flex flex-col items-center">
        <div className="relative flex h-48 w-48 items-center justify-center">
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="6"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="text-center">
            <span className="text-4xl font-bold tabular-nums text-card-foreground">
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </span>
            <p className="mt-1 text-xs text-muted-foreground">
              {MODE_LABELS[mode]}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label={isRunning ? "일시정지" : "시작"}
        >
          {isRunning ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" />
          )}
        </button>
        <button
          type="button"
          onClick={reset}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary"
          aria-label="초기화"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 text-center">
        <span className="text-sm text-muted-foreground">
          {"오늘 완료한 세트: "}
          <span className="font-semibold text-primary">{completedSets}</span>
        </span>
      </div>
    </div>
  );
}
