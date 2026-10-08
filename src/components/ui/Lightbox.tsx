import type React from "react";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import Picture from "@/components/ui/Picture";
import { cn } from "@/lib/utils";

export type Slide = { src: string; title: string; caption: string };

const SIDES = {
    previous: { label: "Previous", icon: "chevronLeft", motion: "group-hover:-translate-x-1 group-aria-disabled:-translate-x-3" },
    next: { label: "Next", icon: "chevronRight", motion: "group-hover:translate-x-1 group-aria-disabled:translate-x-3" }
} as const;

type LightboxProps = { slides: readonly Slide[]; start: number; onClose: () => void };

export default function Lightbox({ slides, start, onClose }: LightboxProps) {
    const [index, setIndex] = useState(start);
    const last = slides.length - 1;
    const go = (target: number) => setIndex(Math.min(Math.max(target, 0), last));
    const onKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
    };
    return (
        <Modal label={slides[index].title} onClose={onClose} onKeyDown={onKeyDown}>
            <div className="pointer-events-none absolute inset-0 grid grid-cols-[1fr_min(72rem,100%-5rem)_1fr] sm:grid-cols-[1fr_min(72rem,100%-12rem)_1fr]">
                <Side side="previous" disabled={index === 0} onClick={() => go(index - 1)} />
                <div className="card pointer-events-auto grid grid-cols-1 self-center overflow-hidden transition-transform duration-500 ease-soft starting:scale-98">
                    {slides.map((slide, i) => (
                        <figure
                            key={slide.src}
                            inert={i !== index}
                            data-side={i < index ? "before" : "after"}
                            className="col-start-1 row-start-1 flex flex-col transition-[opacity,translate,visibility] duration-500 ease-soft inert:invisible inert:opacity-0 inert:data-[side=after]:translate-x-6 inert:data-[side=before]:-translate-x-6">
                            <Picture src={slide.src} alt={slide.title} eager className="aspect-video max-h-[72dvh] w-full bg-bark-950 object-contain" />
                            <figcaption className="flex items-center gap-4 border-t border-line px-5 py-4">
                                <span className="min-w-0 flex-1">
                                    <span className="block font-semibold text-cream-50">{slide.title}</span>
                                    <span className="block truncate text-sm text-cream-400">{slide.caption}</span>
                                </span>
                                <span className="font-mono text-sm text-cream-500 tabular-nums">
                                    {i + 1} / {slides.length}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <Side side="next" disabled={index === last} onClick={() => go(index + 1)} />
            </div>
        </Modal>
    );
}

function Side({ side, disabled, onClick }: { side: keyof typeof SIDES; disabled: boolean; onClick: () => void }) {
    const { label, icon, motion } = SIDES[side];
    return (
        <button
            type="button"
            aria-label={label}
            aria-disabled={disabled}
            onClick={onClick}
            className="group pointer-events-auto grid cursor-pointer touch-manipulation place-items-center text-cream-400 focus-visible:outline-none aria-disabled:pointer-events-none">
            <Icon
                name={icon}
                className={cn(
                    "size-10 rounded-lg transition duration-300 ease-soft group-hover:text-cream-50 group-focus-visible:outline-2 group-focus-visible:outline-oak-400 group-aria-disabled:opacity-0 sm:size-16",
                    motion
                )}
            />
        </button>
    );
}
