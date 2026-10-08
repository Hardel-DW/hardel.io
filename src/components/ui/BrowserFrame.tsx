import type React from "react";
import { cn } from "@/lib/utils";

export default function BrowserFrame({ domain, className, children }: { domain: string; className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("card overflow-hidden", className)}>
            <div className="flex h-9 items-center gap-3 border-b border-line px-3.5">
                <span className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-bark-700" />
                    <span className="size-2.5 rounded-full bg-bark-700" />
                    <span className="size-2.5 rounded-full bg-bark-700" />
                </span>
                <span className="truncate font-mono text-xs text-cream-500">{domain}</span>
            </div>
            {children}
        </div>
    );
}
