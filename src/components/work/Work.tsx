import type React from "react";
import { useState } from "react";
import SectionTitle from "@/components/home/SectionTitle";
import Icon from "@/components/ui/Icon";
import EnginePanel from "@/components/work/EnginePanel";
import LeafPanel from "@/components/work/LeafPanel";
import NeoPanel from "@/components/work/NeoPanel";
import StudioPanel from "@/components/work/StudioPanel";
import WebPanel from "@/components/work/WebPanel";
import WhisperPanel from "@/components/work/WhisperPanel";

type TabId = "leaf" | "neo" | "whisper" | "studio" | "engine" | "web";
type Tab = { id: TabId; name: string; meta: string; image?: string };

const TABS: readonly Tab[] = [
    { id: "leaf", name: "Leaf ecosystem", meta: "2026 - Present", image: "/projects/leafs.png" },
    { id: "neo", name: "Neo ecosystem", meta: "2024 - Present", image: "/projects/neo.png" },
    { id: "whisper", name: "Whisper of Ether", meta: "2025 - Present", image: "/projects/whisper.png" },
    { id: "studio", name: "Voxel Studio", meta: "In development", image: "/projects/studio.png" },
    { id: "engine", name: "Yu - Interface Engine", meta: "In development", image: "/projects/engine.png" },
    { id: "web", name: "Websites", meta: "2023 - Present" }
];

const YEARS = new Date().getFullYear() - 2017;

export default function Work() {
    const [active, setActive] = useState<TabId>("leaf");
    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const step = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
        if (step === 0) return;
        event.preventDefault();
        const next = TABS[(TABS.findIndex((tab) => tab.id === active) + step + TABS.length) % TABS.length];
        setActive(next.id);
        document.getElementById(`tab-${next.id}`)?.focus();
    };

    return (
        <section id="experience" className="card reveal flex flex-col gap-10 p-6 sm:p-10">
            <SectionTitle label="Experience">
                <strong>{YEARS}+ years</strong> of passion in the field
            </SectionTitle>
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
                <div
                    role="tablist"
                    aria-orientation="vertical"
                    onKeyDown={onKeyDown}
                    className="relative grid grid-cols-3 justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch sm:gap-2 lg:flex lg:flex-col lg:self-start">
                    {TABS.map((tab) => (
                        <TabButton key={tab.id} tab={tab} selected={active === tab.id} onSelect={() => setActive(tab.id)} />
                    ))}
                    <span
                        aria-hidden
                        className="tab-indicator pointer-events-none rounded-xl border border-oak-600/60 bg-bark-800 max-sm:hexagon max-sm:rounded-none max-sm:border-0 max-sm:bg-oak-500"
                    />
                </div>
                {TABS.map((tab) => (
                    <div
                        key={tab.id}
                        role="tabpanel"
                        id={`panel-${tab.id}`}
                        aria-labelledby={`tab-${tab.id}`}
                        hidden={active !== tab.id}
                        className="flex min-w-0 flex-col transition duration-500 ease-emphasized starting:translate-y-2 starting:opacity-0">
                        <Panel id={tab.id} />
                    </div>
                ))}
            </div>
        </section>
    );
}

function TabButton({ tab, selected, onSelect }: { tab: Tab; selected: boolean; onSelect: () => void }) {
    return (
        <button
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={onSelect}
            className="group relative z-1 flex min-w-0 cursor-pointer items-center gap-4 rounded-xl border border-line bg-bark-950/60 px-4 py-3.5 text-left transition-colors duration-200 aria-selected:tab-anchor aria-selected:border-transparent aria-selected:bg-transparent max-sm:hexagon max-sm:w-20 max-sm:rounded-none max-sm:border-0 max-sm:bg-line max-sm:p-0.5 sm:not-aria-selected:hover:border-bark-700 sm:not-aria-selected:hover:bg-bark-950">
            <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-bark-900 text-oak-400 transition-colors max-sm:hexagon max-sm:size-full max-sm:rounded-none max-sm:border-0 max-sm:group-aria-selected:bg-bark-800">
                {tab.image ? <img src={tab.image} alt="" width={44} height={44} className="size-full object-cover max-sm:size-10 max-sm:rounded-lg" /> : <Icon name="language" />}
            </span>
            <span className="flex min-w-0 flex-col max-sm:sr-only">
                <span className="font-semibold text-cream-200 transition-colors group-aria-selected:text-cream-50 lg:whitespace-nowrap">{tab.name}</span>
                <span className="font-mono text-label whitespace-nowrap text-cream-500">{tab.meta}</span>
            </span>
        </button>
    );
}

function Panel({ id }: { id: TabId }) {
    switch (id) {
        case "leaf":
            return <LeafPanel />;
        case "neo":
            return <NeoPanel />;
        case "whisper":
            return <WhisperPanel />;
        case "studio":
            return <StudioPanel />;
        case "engine":
            return <EnginePanel />;
        case "web":
            return <WebPanel />;
    }
}
