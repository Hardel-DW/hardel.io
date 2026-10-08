import type React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
    primary: "bg-oak-600 text-white hover:bg-oak-500",
    secondary: "border border-line bg-bark-900 text-cream-50 hover:border-bark-700 hover:bg-bark-800",
    ghost: "text-cream-400 hover:bg-bark-800 hover:text-cream-50"
} as const;

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof VARIANTS; glow?: boolean };

export default function Button({ variant = "secondary", glow, className, href, children, ...rest }: ButtonProps) {
    const external = href?.startsWith("http");
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={cn(
                "bevel group relative inline-flex h-11 items-center justify-center gap-2 px-5 text-ui font-semibold whitespace-nowrap transition-colors duration-150 ease-soft",
                glow ? "text-white" : VARIANTS[variant],
                className
            )}
            {...rest}>
            {glow && <span aria-hidden className="beam-ring" />}
            {glow && <span aria-hidden className="bevel-face bg-oak-600 transition-colors duration-150 group-hover:bg-oak-500" />}
            <span className="relative inline-flex items-center gap-2">{children}</span>
        </a>
    );
}
