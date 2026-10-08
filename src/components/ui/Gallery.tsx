import { useId, useState } from "react";
import Icon from "@/components/ui/Icon";
import Lightbox, { type Slide } from "@/components/ui/Lightbox";
import Picture from "@/components/ui/Picture";
import { cn } from "@/lib/utils";

export type Shot = Slide & { tag: string; span?: "wide" | "tall" | "big" };

const FOLD = 16;
const AREA = { single: 1, wide: 2, tall: 2, big: 4 } as const;

function fits(shots: readonly Shot[]) {
    let cells = 0;
    for (const [index, shot] of shots.entries()) {
        cells += AREA[shot.span ?? "single"];
        if (cells > FOLD) return index;
    }
    return shots.length;
}

export default function Gallery({ shots }: { shots: readonly Shot[] }) {
    const id = useId();
    const [filter, setFilter] = useState<string | null>(null);
    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState<number | null>(null);
    const count = (tag: string) => shots.filter((shot) => shot.tag === tag).length;
    const tags = [...new Set(shots.map((shot) => shot.tag))].sort((a, b) => count(b) - count(a));
    const visible = shots.filter((shot) => filter === null || shot.tag === filter);
    const fold = fits(visible);
    const shown = expanded ? visible : visible.slice(0, fold);
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
            <div
                id={id}
                data-folded={shown.length < visible.length}
                className="grid grid-flow-dense auto-rows-37.5 grid-cols-2 gap-2.5 data-[folded=true]:mask-b-from-[calc(100%-8rem)] sm:auto-rows-45 md:grid-cols-4 lg:auto-rows-52.5">
                {shots.map((shot) => {
                    const index = visible.indexOf(shot);
                    return <Tile key={shot.src} shot={shot} shown={shown.includes(shot)} delay={(index < fold ? index : index - fold) * 60} onOpen={() => setOpen(index)} />;
                })}
            </div>
            {fold < visible.length && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={id}
                    onClick={() => setExpanded(!expanded)}
                    className="group mx-auto flex h-9 cursor-pointer items-center gap-2 rounded-full border border-line pr-3 pl-4 font-mono text-label text-cream-400 transition-colors duration-150 hover:border-bark-700 hover:text-cream-50">
                    {expanded ? "Show less" : `Show ${visible.length - fold} more`}
                    <Icon name="chevronRight" className="size-4.5 rotate-90 transition-transform duration-300 ease-soft group-aria-expanded:-rotate-90" />
                </button>
            )}
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
