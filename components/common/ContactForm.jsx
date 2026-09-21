"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { validateContactForm } from "@/lib/validations/contact";

export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const values = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            message: String(formData.get("message") ?? ""),
        };

        const validationErrors = validateContactForm(values);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setSent(true);
        toast.success("وصلت رسالتك! هنرد عليك قريب.");
    }

    if (sent) {
        return (
            <div className="flex min-h-96 flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-8" />
                </span>

                <h3 className="mt-5 text-2xl font-black text-foreground">
                    شكراً ليك!
                </h3>

                <p className="mt-2 text-muted-foreground">
                    وصلت رسالتك، هنرد عليك قريب.
                </p>

                <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                        setSent(false);
                        setErrors({});
                    }}
                >
                    إرسال رسالة تانية
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-foreground"
                >
                    الاسم
                </label>

                <Input
                    id="name"
                    name="name"
                    placeholder="اكتب اسمك"
                    className="h-12 bg-background"
                    aria-invalid={Boolean(errors.name)}
                />

                {errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-foreground"
                >
                    الإيميل
                </label>

                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="h-12 bg-background text-left"
                    dir="ltr"
                    aria-invalid={Boolean(errors.email)}
                />

                {errors.email && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.email}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-foreground"
                >
                    الرسالة
                </label>

                <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-32 resize-none bg-background"
                    aria-invalid={Boolean(errors.message)}
                />

                {errors.message && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                        {errors.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                variant="brand"
                size="lg"
                className="h-12 w-full rounded-lg text-base font-bold"
            >
                إرسال
                <Send className="size-4" />
            </Button>
        </form>
    );
}