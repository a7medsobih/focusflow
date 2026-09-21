import Reveal from "@/components/animations/Reveal";

export default function FeatureCard({
    icon,
    title,
    description,
    visual,
    index = 0,
}) {
    return (
        <Reveal direction="up" delay={index * 0.1}>
            <article className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    {icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-foreground">
                    {title}
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
                    {description}
                </p>

                <div className="mt-7 h-40 overflow-hidden rounded-xl border border-border bg-secondary/60 p-4">
                    {visual}
                </div>
            </article>
        </Reveal>
    );
}