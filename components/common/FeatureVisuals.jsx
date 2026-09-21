import {
    BellRing,
    Check,
    CirclePlus,
    Plus,
    TrendingUp,
} from "lucide-react";

export function AdditionVisual() {
    return (
        <div className="flex h-full flex-col justify-center gap-3">
            <div className="rounded-lg border border-border bg-background p-3 shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
                        <Plus className="size-4" />
                    </span>

                    <div className="h-2 w-28 rounded-full bg-muted" />
                </div>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-bold text-primary">
                <CirclePlus className="size-4" />
                إضافة مهمة جديدة
            </div>
        </div>
    );
}

export function AlertVisual() {
    return (
        <div className="relative flex h-full items-center justify-center">
            <div className="absolute size-24 rounded-full border border-primary/15" />
            <div className="absolute size-32 rounded-full border border-primary/10" />

            <div className="relative grid size-16 place-items-center rounded-2xl bg-background text-primary shadow-sm">
                <BellRing className="size-7" />

                <span className="absolute -left-2 -top-2 grid size-6 place-items-center rounded-full bg-destructive text-[10px] font-black text-white">
                    1
                </span>
            </div>
        </div>
    );
}

export function ProgressVisual() {
    return (
        <div className="flex h-full items-center justify-center gap-5">
            <div className="relative grid size-24 place-items-center rounded-full border-8 border-primary/20 border-t-primary">
                <div className="grid size-17 place-items-center rounded-full bg-background">
                    <span className="text-lg font-black text-foreground">75%</span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <Check className="size-4 text-primary" />
                    3 مهام
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <TrendingUp className="size-4" />
                    +12%
                </div>
            </div>
        </div>
    );
}