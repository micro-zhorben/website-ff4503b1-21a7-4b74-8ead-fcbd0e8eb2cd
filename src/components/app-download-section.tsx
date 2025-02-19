import { Apple, SmartphoneCharging } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AppDownloadSection() {
  return (
    <section className="container grid gap-8 py-12 md:grid-cols-2 md:py-16">
      <div className="flex flex-col justify-center space-y-6">
        <Typography.H2>随时随地开始健身</Typography.H2>
        <Typography.P>
          下载我们的移动应用，开启您的健康生活方式。支持iOS和Android平台，让您随时随地追踪健身进展。
        </Typography.P>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="gap-2">
            <Apple className="h-5 w-5" />
            App Store下载
          </Button>
          <Button variant="outline" className="gap-2 text-foreground">
            <SmartphoneCharging className="h-5 w-5" />
            Android下载
          </Button>
        </div>
      </div>

      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg bg-muted">
        <div className="h-full w-full bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat" />
      </AspectRatio>
    </section>
  );
}