"use client";

import { motion } from "framer-motion";
import { Check, Circle, Plus, Target } from "lucide-react";

const tasks = [
    {
        title: "مراجعة البريد الإلكتروني",
        time: "09:00 ص",
        completed: true,
    },
    {
        title: "إنهاء تصميم المشروع",
        time: "11:30 ص",
        completed: true,
    },
    {
        title: "مكالمة مع فريق العمل",
        time: "02:00 م",
        completed: false,
    },
    {
        title: "قراءة لمدة 30 دقيقة",
        time: "06:00 م",
        completed: false,
    },
];

export default function PhoneMockup() {
    return (
        <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <div className="relative w-[280px] sm:w-[300px] py-10 lg:py-0">
                {/* Phone */}
                <div className="relative overflow-hidden rounded-[2.75rem] border-[7px] border-foreground bg-background shadow-2xl shadow-primary/20">
                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground" />

                    {/* App */}
                    <div className="max-h-[490px] bg-muted/40 px-5 pb-6 pt-12">
                        {/* Header */}
                        <div className="mb-7 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-muted-foreground">
                                    صباح الخير 👋
                                </p>

                                <h2 className="mt-1 text-xl font-black text-foreground">
                                    أحمد
                                </h2>
                            </div>

                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Target className="size-5" />
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="mb-6 rounded-2xl bg-primary p-4 text-primary-foreground shadow-lg shadow-primary/20">
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <p className="text-xs opacity-80">إنجاز اليوم</p>
                                    <p className="mt-1 text-lg font-black">٢ من ٤ مهام</p>
                                </div>

                                <span className="text-2xl font-black">50%</span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-white/20">
                                <div className="h-full w-1/2 rounded-full bg-white" />
                            </div>
                        </div>

                        {/* Tasks Header */}
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-sm font-bold text-foreground">
                                مهام اليوم
                            </h3>

                            <span className="text-xs font-semibold text-primary">
                                ٤ مهام
                            </span>
                        </div>

                        {/* Tasks */}
                        <div className="space-y-2.5">
                            {tasks.map((task) => (
                                <div
                                    key={task.title}
                                    className="flex items-center gap-3 rounded-2xl border bg-background px-3 py-3 shadow-sm"
                                >
                                    <div
                                        className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 ${task.completed
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-border"
                                            }`}
                                    >
                                        {task.completed && <Check className="size-3.5" />}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p
                                            className={`truncate text-xs font-semibold ${task.completed
                                                ? "text-muted-foreground line-through"
                                                : "text-foreground"
                                                }`}
                                        >
                                            {task.title}
                                        </p>

                                        <p className="mt-0.5 text-[10px] text-muted-foreground">
                                            {task.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Add Button */}
                        <div className="mt-5 flex justify-end">
                            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                                <Plus className="size-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone shadow / glow */}
                <div className="absolute -bottom-5 left-1/2 -z-10 h-10 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl" />
            </div>
        </motion.div>
    );
}