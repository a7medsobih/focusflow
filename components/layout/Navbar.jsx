// components/layout/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants/navLinks";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header
                className={cn(
                    "fixed inset-x-0 top-0 z-50 font-sans transition-all duration-300",
                    scrolled
                        ? "border-b bg-background/60 py-3 shadow-sm backdrop-blur-md"
                        : "bg-transparent py-5"
                )}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
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

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-md font-semibold text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            asChild
                            variant="brand"
                            size="xl"
                            className="hidden rounded-full font-bold px-6 md:inline-flex"
                        >
                            <a href="#contact">حمّل مجاناً</a>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-xl md:hidden"
                            onClick={() => setMenuOpen(true)}
                            aria-label="فتح القائمة"
                            aria-expanded={menuOpen}
                        >
                            <Menu />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.button
                            type="button"
                            aria-label="إغلاق القائمة"
                            className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        {/* Side Drawer */}
                        <motion.aside
                            className="fixed right-0 top-0 z-[70] flex h-dvh w-[min(66vw,380px)] flex-col border-l bg-background p-6 font-sans shadow-2xl md:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            aria-label="القائمة الرئيسية"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between">
                                <a
                                    href="#hero"
                                    onClick={closeMenu}
                                    className="flex items-center gap-2"
                                    aria-label="FocusFlow"
                                >
                                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                        <Zap className="size-[18px]" />
                                    </span>

                                    <span className="text-xl font-black tracking-tight">
                                        Focus<span className="text-primary">Flow</span>
                                    </span>
                                </a>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-xl"
                                    onClick={closeMenu}
                                    aria-label="إغلاق القائمة"
                                >
                                    <X />
                                </Button>
                            </div>

                            {/* Links */}
                            <nav className="mt-10 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="rounded-xl px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.25,
                                        }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* CTA */}
                            <div className="mt-auto pt-8">
                                <Button
                                    asChild
                                    variant="brand"
                                    size="lg"
                                    className="w-full rounded-full"
                                >
                                    <a href="#contact" onClick={closeMenu}>
                                        حمّل التطبيق مجاناً
                                    </a>
                                </Button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}