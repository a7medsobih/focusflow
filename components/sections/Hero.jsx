import {
  ArrowLeft,
  CheckSquare,
  ChevronDown,
  Star,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Reveal from "../animations/Reveal";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-background via-accent/60 to-accent pt-24 pb-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-24 size-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 size-[400px] rounded-full bg-primary/10 blur-3xl" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <Reveal direction="right">
              <Badge icon={Star}>
                <span className="text-md font-semibold">
                  ركّز على اللي يهمك
                </span>
              </Badge>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.1}>
              <h1 className="mb-6 max-w-2xl text-4xl font-black leading-[1.2] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                نظّم يومك،
                <br />
                <span className="text-primary">وزود إنتاجيتك</span>
                <br />
                مع FocusFlow
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={0.2}>
              <p className="mb-10 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                التطبيق الأبسط لإدارة مهامك اليومية بدون تشتيت، ركز على اللي
                يهمك وبس.
              </p>
            </Reveal>

            {/* Actions */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="brand"
                  size="2xl"
                  className="rounded-full text-md px-7"
                >
                  <a href="#contact">
                    حمّل التطبيق مجاناً
                    <ArrowLeft />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="2xl"
                  className="rounded-full text-md border-2 px-7"
                >
                  <a href="#features">
                    اعرف أكثر
                    <ChevronDown />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Product Visual */}
          <Reveal direction="left" delay={0.2}>
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 blur-[80px]" />

              {/* Phone */}
              <div className="relative z-10">
                <PhoneMockup />
              </div>

              {/* Completed Tasks */}
              <div className="absolute right-0 top-1 z-20 rounded-2xl border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm md:right-10">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckSquare className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      مهام مكتملة
                    </p>

                    <p className="text-sm font-bold text-foreground">
                      ١٢ مهمة اليوم
                    </p>
                  </div>
                </div>
              </div>

              {/* Productivity */}
              <div className="absolute bottom-16 left-0 z-20 rounded-2xl border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm md:-left-10">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      إنتاجيتك
                    </p>

                    <p className="text-sm font-bold text-primary">
                      +٤٠٪ هذا الأسبوع
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div >
    </section >
  );
}