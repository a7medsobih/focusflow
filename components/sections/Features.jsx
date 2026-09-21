import {
  BellRing,
  CirclePlus,
  TrendingUp,
} from "lucide-react";

import FeatureCard from "@/components/common/FeatureCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/animations/Reveal";

import {
  AdditionVisual,
  AlertVisual,
  ProgressVisual,
} from "@/components/common/FeatureVisuals";

const features = [
  {
    icon: <CirclePlus className="size-5" />,
    title: "واجهة بسيطة",
    description: "بدون تعقيد، ضيف مهامك بضغطة واحدة.",
    visual: <AdditionVisual />,
  },
  {
    icon: <BellRing className="size-5" />,
    title: "تنبيهات ذكية",
    description: "عشان ماتنساش أي ميعاد مهم.",
    visual: <AlertVisual />,
  },
  {
    icon: <TrendingUp className="size-5" />,
    title: "تتبع الإنجاز",
    description: "شوف تقدمك اليومي بشكل واضح.",
    visual: <ProgressVisual />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-16 bg-secondary py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <Badge className="text-sm">
              مصمم عشان يسهّل يومك
            </Badge>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-black leading-tight text-foreground sm:text-4xl">
              كل اللي محتاجه في مكان واحد
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}