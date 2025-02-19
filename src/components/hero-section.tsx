import { ArrowRight, Activity, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="container grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="flex flex-col justify-center space-y-6">
        <Typography.H1>
          通过智能健身追踪
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            实现您的健康目标
          </span>
        </Typography.H1>
        <Typography.P>
          专业的健身追踪应用，帮助您记录运动数据，制定个性化训练计划，实时监测进展，让健身更有效率。
        </Typography.P>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            立即开始 <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-foreground">
            了解更多
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <Activity className="h-8 w-8 text-primary" />
            <CardTitle>实时追踪</CardTitle>
            <CardDescription>记录您的每一次运动数据</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Trophy className="h-8 w-8 text-secondary" />
            <CardTitle>目标设定</CardTitle>
            <CardDescription>制定个性化的健身目标</CardDescription>
          </CardHeader>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader>
            <Users className="h-8 w-8 text-accent" />
            <CardTitle>社区互动</CardTitle>
            <CardDescription>
              加入充满活力的健身社区，获得支持与激励
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}