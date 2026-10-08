import type React from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const SOLID = "bevel relative h-11 justify-center px-5 text-ui font-semibold whitespace-nowrap";

const VARIANTS = {
    primary: `${SOLID} bg-oak-600 text-white hover:bg-oak-500`,
    secondary: `${SOLID} border border-line bg-bark-900 text-cream-50 hover:border-bark-700 hover:bg-bark-800`,
    ghost: `${SOLID} text-cream-400 hover:bg-bark-800 hover:text-cream-50`,
    link: "font-mono text-sm text-oak-300 hover:text-oak-400"
} as const;

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof VARIANTS; glow?: boolean };

export default function Button({ variant = "secondary", glow, className, href, children, ...rest }: ButtonProps) {
    const external = href?.startsWith("http");
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={cn("group inline-flex items-center gap-2 transition-colors duration-150 ease-soft", glow ? `${SOLID} text-white` : VARIANTS[variant], className)}
            {...rest}>
            {glow && <span aria-hidden className="beam-ring" />}
            {glow && <span aria-hidden className="bevel-face bg-oak-600 transition-colors duration-150 group-hover:bg-oak-500" />}
            <span className="relative inline-flex items-center gap-2">{children}</span>
            {variant === "link" && <Icon name="northEast" className="size-3.5 transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </a>
    );
}
