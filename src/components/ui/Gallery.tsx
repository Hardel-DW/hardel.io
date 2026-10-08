import type React from "react";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import Picture from "@/components/ui/Picture";
import { cn } from "@/lib/utils";

type Filter = Kind | "All";
type Kind = (typeof KINDS)[number];
export type Shot = { src: string; title: string; caption: string; kind: Kind; span?: "wide" | "tall" | "big" };

const KINDS = ["Structures", "Worldgen", "Textures", "Models", "Shaders", "Enchantments"] as const;

export default function Gallery({ shots }: { shots: readonly Shot[] }) {
    const [filter, setFilter] = useState<Filter>("All");
    const [open, setOpen] = useState<Shot | null>(null);
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
                    <Tile key={shot.src} shot={shot} shown={visible.includes(shot)} delay={visible.indexOf(shot) * 60} onOpen={() => setOpen(shot)} />
                ))}
            </div>
            {open && <Lightbox shots={visible} shot={open} onShot={setOpen} onClose={() => setOpen(null)} />}
        </div>
    );
}

function Chip({ selected, onSelect, children }: { selected: boolean; onSelect: () => void; children: string }) {
    return (
        <button
            type="button"
            aria-pressed={selected}
            onClick={onSelect}
            className={cn(
                "h-8 shrink-0 cursor-pointer rounded-full border px-3.5 font-mono text-label transition-colors duration-150",
                selected ? "border-oak-500 bg-oak-600 text-white" : "border-line text-cream-400 hover:border-bark-700 hover:text-cream-50"
            )}>
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

type LightboxProps = { shots: readonly Shot[]; shot: Shot; onShot: (shot: Shot) => void; onClose: () => void };

function Lightbox({ shots, shot, onShot, onClose }: LightboxProps) {
    const index = shots.indexOf(shot);
    const step = (delta: number) => onShot(shots[(index + delta + shots.length) % shots.length]);
    const onKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
    };
    return (
        <Modal label={shot.title} onClose={onClose} onKeyDown={onKeyDown}>
            <figure className="card flex w-full max-w-6xl flex-col overflow-hidden">
                <Picture key={shot.src} src={shot.src} alt={shot.title} eager className="aspect-video max-h-[72dvh] w-full bg-bark-950 object-contain" />
                <figcaption className="flex items-center gap-4 border-t border-line px-5 py-4">
                    <div className="min-w-0 flex-1">
                        <p className="font-semibold text-cream-50">{shot.title}</p>
                        <p className="truncate text-sm text-cream-400">{shot.caption}</p>
                    </div>
                    <span className="font-mono text-sm text-cream-500 tabular-nums">
                        {index + 1} / {shots.length}
                    </span>
                    <Arrow label="Previous" icon="chevronLeft" onClick={() => step(-1)} />
                    <Arrow label="Next" icon="chevronRight" onClick={() => step(1)} />
                </figcaption>
            </figure>
        </Modal>
    );
}

function Arrow({ label, icon, onClick }: { label: string; icon: "chevronLeft" | "chevronRight"; onClick: () => void }) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-line bg-bark-950 text-cream-400 transition-colors hover:bg-bark-800 hover:text-cream-50">
            <Icon name={icon} />
        </button>
    );
}
