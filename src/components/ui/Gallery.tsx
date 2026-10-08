import { useState } from "react";
import Lightbox, { type Slide } from "@/components/ui/Lightbox";
import Picture from "@/components/ui/Picture";
import { cn } from "@/lib/utils";

type Filter = Kind | "All";
type Kind = (typeof KINDS)[number];
export type Shot = Slide & { kind: Kind; span?: "wide" | "tall" | "big" };

const KINDS = ["Structures", "Worldgen", "Textures", "Models", "Shaders", "Enchantments"] as const;

export default function Gallery({ shots }: { shots: readonly Shot[] }) {
    const [filter, setFilter] = useState<Filter>("All");
    const [open, setOpen] = useState<number | null>(null);
    const kinds = KINDS.filter((kind) => shots.some((shot) => shot.kind === kind));
    const visible = shots.filter((shot) => filter === "All" || shot.kind === filter);
    return (
        <div className="flex flex-col gap-6">
            <div className="no-scrollbar -mx-2 flex gap-1.5 overflow-x-auto px-2">
                {(["All", ...kinds] as const).map((kind) => (
                    <Chip key={kind} selected={filter === kind} onSelect={() => setFilter(kind)}>
                        {kind}
                    </Chip>
                ))}
            </div>
            <div className="grid grid-flow-dense auto-rows-37.5 grid-cols-2 gap-2.5 sm:auto-rows-45 md:grid-cols-4 lg:auto-rows-52.5">
                {shots.map((shot) => (
                    <Tile key={shot.src} shot={shot} shown={visible.includes(shot)} delay={visible.indexOf(shot) * 60} onOpen={() => setOpen(visible.indexOf(shot))} />
                ))}
            </div>
            {open !== null && <Lightbox slides={visible} start={open} onClose={() => setOpen(null)} />}
        </div>
    );
}

function Chip({ selected, onSelect, children }: { selected: boolean; onSelect: () => void; children: string }) {
    return (
        <button
            type="button"
            aria-pressed={selected}
            onClick={onSelect}
            className="h-8 shrink-0 cursor-pointer rounded-full border border-line px-3.5 font-mono text-label text-cream-400 transition-colors duration-150 not-aria-pressed:hover:border-bark-700 not-aria-pressed:hover:text-cream-50 aria-pressed:border-oak-500 aria-pressed:bg-oak-600 aria-pressed:text-white">
            {children}
        </button>
    );
}

function Tile({ shot, shown, delay, onOpen }: { shot: Shot; shown: boolean; delay: number; onOpen: () => void }) {
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={shot.title}
            hidden={!shown}
            style={{ "--delay": `${delay}ms` }}
            className={cn(
                "group rise relative cursor-zoom-in overflow-hidden rounded-xl border border-line bg-bark-950 text-left",
                shot.span === "big" && "col-span-2 row-span-2",
                shot.span === "wide" && "col-span-2",
                shot.span === "tall" && "row-span-2"
            )}>
            <Picture src={shot.src} alt="" className="size-full object-cover transition-transform duration-700 ease-soft group-hover:scale-103" />
            <span className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center gap-2 rounded-lg bg-bark-950/85 px-3 py-1.5 opacity-0 transition duration-300 ease-soft group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-cream-50">{shot.title}</span>
                <span className="ml-auto font-mono text-micro text-oak-300">{shot.kind}</span>
            </span>
        </button>
    );
}
