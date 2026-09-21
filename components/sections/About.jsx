import { Check, Star } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

const valuePoints = [
  "بسيط ومنظم — مش مليان خصائص مش محتاجها",
  "سريع وخفيف — يشتغل حتى على الأجهزة القديمة",
  "خصوصيتك محفوظة — بياناتك عندك بس",
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden scroll-mt-16 bg-secondary/50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visual */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[480px]">
                <Image
                  src="/imgs/focusflow-about.jpg"
                  alt="بيئة عمل مرتبة تعكس التركيز والإنتاجية"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal direction="left">
              <Badge>قصتنا</Badge>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <h2 className="mb-6 text-3xl font-black leading-tight text-foreground sm:text-4xl">
                عملناه لأننا
                <br />
                <span className="text-primary">احتجناه بنفسنا</span>
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="mb-6 text-base leading-8 text-muted-foreground sm:text-lg">
                إحنا فريق صغير لاحظنا إن أغلب تطبيقات المهام معقدة ومليانة
                تفاصيل مش بنستخدمها. عشان كده عملنا FocusFlow، عشان يكون
                الأداة السريعة اللي تفتحها، تكتب مهمتك، وتقفلها في ثواني.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <p className="mb-10 text-base leading-8 text-muted-foreground sm:text-lg">
                من غير دوران، ومن غير تعقيد — بس الأدوات اللي تساعدك تركز
                على اللي يهمك فعلًا.
              </p>
            </Reveal>

            <div className="space-y-4">
              {valuePoints.map((point, index) => (
                <Reveal
                  key={point}
                  direction="left"
                  delay={0.35 + index * 0.08}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" />
                    </span>

                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}