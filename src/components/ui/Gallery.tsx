import { useState } from "react";
import Lightbox, { type Slide } from "@/components/ui/Lightbox";
import Picture from "@/components/ui/Picture";
import { cn } from "@/lib/utils";

export type Shot = Slide & { tag: string; span?: "wide" | "tall" | "big" };

export default function Gallery({ shots }: { shots: readonly Shot[] }) {
    const [filter, setFilter] = useState<string | null>(null);
    const [open, setOpen] = useState<number | null>(null);
    const tags = [...new Set(shots.map((shot) => shot.tag))];
    const visible = shots.filter((shot) => filter === null || shot.tag === filter);
    return (
        <div className="flex flex-col gap-6">
            {tags.length > 1 && (
                <div className="no-scrollbar -mx-2 flex gap-1.5 overflow-x-auto px-2">
                    <Chip selected={filter === null} onSelect={() => setFilter(null)}>
                        All
                    </Chip>
                    {tags.map((tag) => (
                        <Chip key={tag} selected={filter === tag} onSelect={() => setFilter(tag)}>
                            {tag}
                        </Chip>
                    ))}
                </div>
            )}
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
                <span className="ml-auto font-mono text-micro text-oak-300">{shot.tag}</span>
            </span>
        </button>
    );
}
