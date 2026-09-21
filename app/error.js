// app/error.js
"use client";

export default function Error({ reset }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="text-center">
                <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
                    F
                </div>

                <h1 className="text-3xl font-black text-foreground">
                    حصل خطأ غير متوقع
                </h1>

                <p className="mt-3 text-muted-foreground">
                    حصلت مشكلة بسيطة. حاول تاني.
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    حاول مرة تانية
                </button>
            </div>
        </main>
    );
}

