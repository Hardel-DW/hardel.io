import type React from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = { label: string; align?: "center" | "left"; className?: string; children: React.ReactNode };

export default function SectionTitle({ label, align = "center", className, children }: SectionTitleProps) {
    return (
        <div className={cn("flex flex-col gap-2", align === "center" && "items-center text-center", className)}>
            <p className="flex items-center gap-2 font-mono text-[13px] text-oak-400">
                <span className="hexagon inline-block w-2 bg-oak-400" />
                {label}
            </p>
            <h2 className="max-w-2xl text-[28px] leading-tight font-medium tracking-display text-balance text-cream-400 sm:text-[32px] [&_strong]:font-semibold [&_strong]:text-cream-50">
                {children}
            </h2>
        </div>
    );
}
