import BrowserFrame from "@/components/ui/BrowserFrame";
import Icon from "@/components/ui/Icon";
import Picture from "@/components/ui/Picture";
import PanelIntro from "@/components/work/PanelIntro";
import type { Site } from "@/lib/projects";

const SITES: readonly Site[] = [
    { name: "Voxel", domain: "voxel.hardel.io", href: "https://voxel.hardel.io", text: "Hub for my datapacks and tools.", image: "/sites/voxel.webp" },
    { name: "Leafs", domain: "leafs.hardel.io", href: "https://leafs.hardel.io", text: "Interactive docs for a multithreading mod.", image: "/sites/leafs.webp" },
    { name: "Hardel", domain: "hardel.io", href: "https://hardel.io", text: "This page.", image: "/sites/hardel.webp" }
];

export default function WebPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Websites">
                The sites around my projects, static and fast. <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, Tailwind and Cloudflare Workers.
            </PanelIntro>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {SITES.map((site) => (
                    <a key={site.domain} href={site.href} target="_blank" rel="noreferrer" className="group flex flex-col gap-3">
                        <BrowserFrame domain={site.domain} title={site.name} className="bg-bark-950 transition-colors duration-200 group-hover:border-bark-700">
                            <Picture src={site.image} alt={site.name} eager className="aspect-16/10 w-full object-cover object-top" />
                        </BrowserFrame>
                        <span className="flex items-center justify-between gap-3 px-1 max-sm:hidden">
                            <span className="text-sm text-cream-400">{site.text}</span>
                            <Icon name="northEast" className="size-4 text-cream-500 transition-colors group-hover:text-oak-400" />
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
