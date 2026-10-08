import type { Honeycomb as HoneycombData } from "@/lib/honeycomb";
import { cn } from "@/lib/utils";

export default function Honeycomb({ data, className }: { data: HoneycombData; className?: string }) {
    const viewBox = `0 0 ${data.width} ${data.height}`;

    return (
        <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
            <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
                <path d={data.outline} fill="none" vectorEffect="non-scaling-stroke" className="stroke-bark-700" />
            </svg>
            {data.cells.length > 0 && (
                <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
                    {data.cells.map((cell) => (
                        <polygon
                            key={cell.id}
                            points={cell.points}
                            className={cn("opacity-0 animate-honey", cell.leaf ? "fill-leaf-600" : "fill-oak-500")}
                            style={{ "--delay": `${cell.delay}s`, "--duration": `${cell.duration}s`, "--peak": cell.peak }}
                        />
                    ))}
                </svg>
            )}
        </div>
    );
}
