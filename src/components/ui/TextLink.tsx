import type React from "react";
import Icon, { type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type TextLinkProps = { href: string; icon?: IconName; className?: string; children: React.ReactNode };

export default function TextLink({ href, icon, className, children }: TextLinkProps) {
    const external = href.startsWith("http");
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={cn("group inline-flex items-center gap-2 font-mono text-sm text-oak-300 transition-colors hover:text-oak-400", className)}>
            {icon && <Icon name={icon} className="size-4" />}
            {children}
            <Icon name="northEast" className="size-3.5 transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
    );
}
