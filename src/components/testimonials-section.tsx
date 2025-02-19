import { Star } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "张明",
      role: "健身爱好者",
      content:
        "这款应用帮助我坚持运动已经半年了，界面简洁易用，功能非常实用。特别喜欢它的训练计划推荐功能！",
      avatar: "/placeholder.svg",
    },
    {
      name: "李华",
      role: "马拉松选手",
      content:
        "作为一名跑步爱好者，这个应用的数据分析功能给了我很大帮助。可以清晰地看到自己的进步，非常棒！",
      avatar: "/placeholder.svg",
    },
    {
      name: "王芳",
      role: "瑜伽教练",
      content:
        "界面设计很漂亮，使用起来非常流畅。社区功能让我认识了很多志同道合的朋友，互相鼓励很有动力。",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <section className="container space-y-8 py-12 md:py-16">
      <div className="text-center">
        <Typography.H2>用户心声</Typography.H2>
        <Typography.P>听听他们怎么说</Typography.P>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Typography.P className="mt-4">{testimonial.content}</Typography.P>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}