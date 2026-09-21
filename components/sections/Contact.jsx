import { Mail } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/common/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden scroll-mt-16 bg-background py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-12">
        {/* Content */}
        <div>
          <Reveal direction="right">
            <Badge>إحنا هنا عشان نساعدك</Badge>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <h2 className="text-4xl font-black text-foreground sm:text-5xl">
              خلينا نتواصل
            </h2>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
              عندك سؤال أو حابب تعرف أكتر عن FocusFlow؟ ابعتلنا رسالة.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.3}>
            <a
              href="mailto:hello@focusflow.com"
              dir="ltr"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 font-bold text-primary transition-colors hover:bg-primary/10"
            >
              <Mail className="size-4" />
              hello@focusflow.com
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal direction="left" delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}