import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function CTASection() {
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-lg bg-card p-8 text-center shadow-lg md:p-12">
        <Typography.H2>准备好开始您的健身之旅了吗？</Typography.H2>
        <Typography.P className="mx-auto mt-4 max-w-2xl">
          立即下载应用，加入我们的健身社区。专业的训练指导、科学的数据分析，让您的每一次运动都充满意义。
        </Typography.P>
        <Button size="lg" className="mt-6 gap-2">
          免费开始 <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}