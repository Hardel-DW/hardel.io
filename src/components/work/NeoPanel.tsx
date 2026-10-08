import { useState } from "react";
import TextLink from "@/components/ui/TextLink";
import PanelIntro from "@/components/work/PanelIntro";
import { MODRINTH_DOWNLOADS, MODRINTH_URL, type Project } from "@/lib/projects";
import { cn, compact } from "@/lib/utils";

type Phase = "idle" | "enter" | "leave";
type Side = "left" | "middle" | "right";

const SIDES: readonly Side[] = ["left", "middle", "right"];
const REST = {
    left: { "--out": "-56px", "--rest-y": "12px", "--rest-r": "-6deg" },
    right: { "--out": "56px", "--rest-y": "16px", "--rest-r": "4deg" }
} as const;

const NEO: readonly Project[] = [
    { name: "Neo Enchant+", icon: "/projects/neoenchant.webp", text: "A new suite of data-driven enchantments.", href: "https://modrinth.com/mod/neoenchant", downloads: 255916 },
    { name: "Yggdrasil", icon: "/projects/yggdrasil-structure.webp", text: "The Nine Realms as gigantic structures.", href: "https://modrinth.com/mod/yggdrasil-structure", downloads: 213710 },
    { name: "BeyondEnchant", icon: "/projects/beyondenchant.webp", text: "Enchantment levels past the vanilla limits.", href: "https://modrinth.com/mod/beyondenchant", downloads: 94229 }
];

export default function NeoPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Neo ecosystem">
                Data-driven <strong>enchantments</strong>, <strong>structures</strong> and gameplay, shipped as a <strong>datapack</strong> and as a <strong>mod</strong> for Fabric, NeoForge, Forge
                and Quilt.
            </PanelIntro>
            <div className="flex flex-wrap items-end justify-center gap-y-4 py-6">
                {NEO.map((project, index) => (
                    <NeoCard key={project.name} project={project} side={SIDES[index]} />
                ))}
            </div>
            <TextLink href={MODRINTH_URL} icon="modrinth" className="mt-auto">
                {compact(MODRINTH_DOWNLOADS)}+ downloads on Modrinth
            </TextLink>
        </div>
    );
}

function NeoCard({ project, side }: { project: Project; side: Side }) {
    const [phase, setPhase] = useState<Phase>("idle");
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onPointerEnter={() => setPhase("enter")}
            onPointerLeave={() => setPhase("leave")}
            style={side === "middle" ? undefined : REST[side]}
            className={cn(
                "card group flex w-52 flex-col gap-4 p-5 transition-[border-color] duration-300 hover:border-oak-600/60",
                side === "middle" && "relative z-2 bg-bark-800 transition-[translate,border-color] duration-300 ease-soft hover:z-10 hover:-translate-y-3",
                side === "left" && "neo-card sm:-mr-5",
                side === "right" && "neo-card sm:-ml-5",
                phase === "enter" && "neo-surface",
                phase === "leave" && "neo-sink"
            )}>
            <img src={project.icon} alt="" width={64} height={64} className="size-16 rounded-xl border border-line" />
            <span className="flex flex-col gap-1">
                <span className="font-semibold text-cream-50">{project.name}</span>
                <span className="font-mono text-xs text-oak-300">{project.downloads !== undefined && `${compact(project.downloads)} downloads`}</span>
                <span className="text-sm text-cream-400">{project.text}</span>
            </span>
        </a>
    );
}
