import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TipDetail } from "@/components/tip-detail";
import { getTipById, productivityTips } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return productivityTips.map((tip) => ({ id: tip.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const tip = getTipById(id);
  if (!tip) return { title: "팁을 찾을 수 없습니다" };
  return {
    title: `${tip.title} - StudyFlow`,
    description: tip.summary,
  };
}

export default async function ProductivityTipDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tip = getTipById(id);

  if (!tip) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TipDetail tip={tip} />
      </main>
      <Footer />
    </div>
  );
}
