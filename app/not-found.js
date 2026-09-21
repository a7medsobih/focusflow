// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="mb-4 text-6xl font-black text-primary">
          404
        </div>

        <h1 className="text-3xl font-black text-foreground">
          الصفحة مش موجودة
        </h1>

        <p className="mt-3 text-muted-foreground">
          الصفحة اللي بتدور عليها مش موجودة.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}

