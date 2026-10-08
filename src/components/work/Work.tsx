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
import { cn } from "@/lib/utils";

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
                    className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
                    {TABS.map((tab) => (
                        <TabButton key={tab.id} tab={tab} selected={active === tab.id} onSelect={() => setActive(tab.id)} />
                    ))}
                </div>
                {TABS.map((tab) => (
                    <div key={tab.id} role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} hidden={active !== tab.id} className="enter flex min-w-0 flex-col">
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
            className={cn(
                "flex shrink-0 cursor-pointer items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors duration-200",
                selected ? "border-oak-600/60 bg-bark-800" : "border-line bg-bark-950/60 hover:border-bark-700 hover:bg-bark-950"
            )}>
            <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-bark-900 text-oak-400">
                {tab.image ? <img src={tab.image} alt="" width={44} height={44} className="size-full object-cover" /> : <Icon name="language" />}
            </span>
            <span className="flex flex-col">
                <span className={cn("font-semibold whitespace-nowrap", selected ? "text-cream-50" : "text-cream-200")}>{tab.name}</span>
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
