
export default function Badge({ className = "", children, icon: Icon = null }) {
    return (
        <div className={`${className} mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-primary`}>
            {Icon && <Icon className="size-3.5" />}
            {children}
        </div>
    );
}

