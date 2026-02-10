import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {"매일 새로운 공부 팁"}
            </span>
          </div>
          <h1 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-foreground lg:text-5xl text-balance">
            {"오늘의 공부 효율을"}
            <br />
            <span className="text-primary">{"1% 높여보세요"}</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            {
              "복잡한 이론 대신, 지금 바로 실천할 수 있는 공부법과 생산��� 도구를 만나보세요."
            }
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/study-tips"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {"오늘의 팁 보기"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/routines"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {"루틴 도구 사용하기"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
