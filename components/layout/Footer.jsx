// components/layout/Footer.jsx
import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-secondary">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row">
                {/* Logo */}
                <a
                    href="#hero"
                    className="flex items-center gap-2"
                    aria-label="FocusFlow"
                >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <Zap className="size-[18px]" />
                    </span>

                    <span className="text-xl font-black tracking-tight text-foreground">
                        Focus<span className="text-primary">Flow</span>
                    </span>
                </a>

                {/* Email */}
                <a
                    href="mailto:hello@focusflow.com"
                    dir="ltr"
                    className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                    hello@focusflow.com
                </a>

                {/* Copyright */}
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()}{" "}
                    <a
                        href="https://ahmedsobih-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                    >
                        Ahmed Sobih
                    </a>
                </p>
            </div>
        </footer>
    );
}

