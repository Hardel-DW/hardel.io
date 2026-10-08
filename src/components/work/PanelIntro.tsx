import type React from "react";

export default function PanelIntro({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 font-mono text-sm text-oak-400">
                <span className="hexagon inline-block w-2 bg-oak-400" />
                {title}
            </h3>
            <p className="keys max-w-2xl text-pretty text-cream-200">{children}</p>
        </div>
    );
}
