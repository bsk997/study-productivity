import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">
                StudyFlow
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {
                "실천 가능한 공부 팁과 생산성 도구로 매일 조금씩 더 나은 내가 되는 여정을 함께합니다."
              }
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              바로가기
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/study-tips"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                공부 팁
              </Link>
              <Link
                href="/productivity-tips"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                생산성 팁
              </Link>
              <Link
                href="/routines"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                루틴/도구
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              정보
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                이용약관
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                개인정보처리방침
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                문의하기
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {"© 2026 StudyFlow. All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
