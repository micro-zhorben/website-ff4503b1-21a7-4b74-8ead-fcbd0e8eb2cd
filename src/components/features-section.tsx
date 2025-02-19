import { Heart, Timer, Star, Activity } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "多样化运动追踪",
      description: "支持跑步、骑行、游泳等多种运动模式的数据记录",
    },
    {
      icon: <Timer className="h-8 w-8 text-secondary" />,
      title: "智能训练计划",
      description: "根据您的目标和水平，生成个性化的训练方案",
    },
    {
      icon: <Heart className="h-8 w-8 text-destructive" />,
      title: "健康数据监测",
      description: "全面监测心率、卡路里消耗等健康指标",
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      title: "成就系统",
      description: "通过完成目标获得成就徽章，保持运动动力",
    },
  ];

  return (
    <section className="container space-y-8 py-12 md:py-16">
      <div className="text-center">
        <Typography.H2>强大功能，助力健身之旅</Typography.H2>
        <Typography.P>
          我们提供全方位的健身追踪功能，让您的运动更加科学有效
        </Typography.P>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}