import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import PanelIntro from "@/components/work/PanelIntro";
import { MODRINTH_DOWNLOADS, MODRINTH_URL, type Project } from "@/lib/projects";
import { cn, compact } from "@/lib/utils";

type Side = "left" | "middle" | "right";

const SIDES: readonly Side[] = ["left", "middle", "right"];
const REST = {
    left: { "--dir": -1, "--rest-y": "12px", "--rest-r": "-6deg" },
    right: { "--dir": 1, "--rest-y": "16px", "--rest-r": "4deg" }
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-center sm:py-6">
                {NEO.map((project, index) => (
                    <NeoCard key={project.name} project={project} side={SIDES[index]} />
                ))}
            </div>
            <Button variant="link" href={MODRINTH_URL} className="mt-auto">
                <Icon name="modrinth" className="size-4" />
                {compact(MODRINTH_DOWNLOADS)}+ downloads on Modrinth
            </Button>
        </div>
    );
}

function NeoCard({ project, side }: { project: Project; side: Side }) {
    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            style={side === "middle" ? undefined : REST[side]}
            className={cn(
                "card group flex items-center gap-4 p-4 hover:border-oak-600/60 sm:w-52 sm:flex-col sm:items-start sm:p-5",
                side === "middle" && "relative z-2 bg-bark-800 transition duration-500 ease-soft sm:hover:z-10 sm:hover:-translate-y-3",
                side === "left" && "neo-card sm:-mr-5",
                side === "right" && "neo-card sm:-ml-5"
            )}>
            <img src={project.icon} alt="" width={64} height={64} className="size-14 shrink-0 rounded-xl border border-line sm:size-16" />
            <span className="flex min-w-0 flex-col gap-1">
                <span className="font-semibold text-cream-50">{project.name}</span>
                <span className="font-mono text-xs text-oak-300">{project.downloads !== undefined && `${compact(project.downloads)} downloads`}</span>
                <span className="text-sm text-cream-400">{project.text}</span>
            </span>
        </a>
    );
}
