import TextLink from "@/components/ui/TextLink";
import PanelIntro from "@/components/work/PanelIntro";
import ProjectRow from "@/components/work/ProjectRow";
import type { Project } from "@/lib/projects";

export const LEAF: readonly Project[] = [
    { name: "Leafs", icon: "/projects/leafs.png", text: "Fabric with multithread region and worldgen, each at its own 20 TPS.", href: "https://leafs.hardel.io", status: "Beta" },
    { name: "Maple", icon: "/projects/maple.png", text: "Less memory and cpu, faster worldgen, no config.", href: "https://github.com/Hardel-DW/Maple", status: "In development" },
    { name: "Firefly", icon: "/projects/firefly.png", text: "Multithreaded light engine, identical to vanilla.", status: "In development" },
    { name: "Prune", icon: "/projects/prune.png", text: "Porting the plugin loader optimization to Fabric", status: "In development" }
];

export default function LeafPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Leaf ecosystem">
                Server-side multithread for Fabric and NeoForge. Compatible with <strong>mods</strong>, <strong>datapacks</strong>, <strong>commands</strong>. Up to an infinite number of players
            </PanelIntro>
            <div className="-mx-4 flex flex-col">
                {LEAF.map((project, index) => (
                    <ProjectRow key={project.name} project={project} delay={index * 70} />
                ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-6">
                <TextLink href="https://leafs.hardel.io" icon="eco">
                    leafs.hardel.io
                </TextLink>
                <TextLink href="https://github.com/Hardel-DW/leafs.mods" icon="github">
                    Source
                </TextLink>
            </div>
        </div>
    );
}
