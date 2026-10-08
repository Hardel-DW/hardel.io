function Chevron({ flip, delay }: { flip?: boolean; delay: number }) {
    return (
        <svg viewBox="0 0 10 16" className="animate-sway size-4 text-oak-500" style={{ "--sway": flip ? "3px" : "-3px", "--delay": `${delay}s` }} aria-hidden>
            <path d={flip ? "M3 2l5 6-5 6" : "M7 2 2 8l5 6"} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function Intro() {
    return (
        <p className="flex items-center gap-1 font-mono text-ui text-cream-400">
            <Chevron delay={0} />
            <span className="text-oak-300">Hardel</span>
            <span className="text-cream-500">/</span>
            <Chevron flip delay={-2} />
            <span className="animate-caret ml-1 inline-block h-4 w-2 bg-oak-400" />
        </p>
    );
}
