"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

interface PlanItem {
  id: string;
  text: string;
  done: boolean;
}

type WeekPlan = Record<string, PlanItem[]>;

export function WeeklyPlanner() {
  const [plan, setPlan] = useState<WeekPlan>(() =>
    Object.fromEntries(DAYS.map((d) => [d, []]))
  );
  const [inputDay, setInputDay] = useState<string | null>(null);
  const [inputText, setInputText] = useState("");

  const addItem = (day: string) => {
    if (!inputText.trim()) return;
    const newItem: PlanItem = {
      id: `${day}-${Date.now()}`,
      text: inputText.trim(),
      done: false,
    };
    setPlan((prev) => ({
      ...prev,
      [day]: [...prev[day], newItem],
    }));
    setInputText("");
    setInputDay(null);
  };

  const toggleItem = (day: string, id: string) => {
    setPlan((prev) => ({
      ...prev,
      [day]: prev[day].map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    }));
  };

  const removeItem = (day: string, id: string) => {
    setPlan((prev) => ({
      ...prev,
      [day]: prev[day].filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
      <h2 className="text-lg font-bold text-card-foreground">
        {"주간 공부 플래너"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {"이번 주 공부 계획을 요일별로 정리하세요"}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
        {DAYS.map((day) => (
          <div
            key={day}
            className="flex flex-col rounded-xl border border-border bg-background p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                {day}
              </span>
              <span className="text-xs text-muted-foreground">
                {plan[day].filter((i) => i.done).length}/{plan[day].length}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-1.5">
              {plan[day].map((item) => (
                <div key={item.id} className="group flex items-start gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleItem(day, item.id)}
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0 rounded-sm border transition-colors",
                      item.done
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}
                    aria-label={item.done ? "완료 취소" : "완료"}
                  >
                    {item.done && (
                      <svg
                        viewBox="0 0 16 16"
                        fill="white"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
                      </svg>
                    )}
                  </button>
                  <span
                    className={cn(
                      "flex-1 text-xs leading-relaxed",
                      item.done
                        ? "text-muted-foreground line-through"
                        : "text-card-foreground"
                    )}
                  >
                    {item.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(day, item.id)}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label="삭제"
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              ))}
            </div>

            {inputDay === day ? (
              <div className="mt-2 flex gap-1">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addItem(day);
                    if (e.key === "Escape") setInputDay(null);
                  }}
                  placeholder="할 일 입력..."
                  className="flex-1 rounded-md border border-input bg-background px-2 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  autoFocus
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setInputDay(day);
                  setInputText("");
                }}
                className="mt-2 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <Plus className="h-3 w-3" />
                {"추가"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
