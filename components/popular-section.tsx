import { getPopularTips } from "@/lib/data";
import { TipCard } from "@/components/tip-card";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export function PopularSection() {
  const popularTips = getPopularTips(4);

  return (
    <section className="border-t border-border bg-secondary/20 py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground lg:text-2xl">
                {"인기 콘텐츠"}
              </h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {"가장 많이 본 팁과 가장 많이 저장된 콘텐츠"}
            </p>
          </div>
          <Link
            href="/study-tips"
            className="hidden text-sm font-medium text-primary hover:underline md:block"
          >
            {"전체 보기 →"}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/study-tips"
            className="text-sm font-medium text-primary hover:underline"
          >
            {"전체 보기 →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
