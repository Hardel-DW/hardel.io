import BrowserFrame from "@/components/ui/BrowserFrame";
import Icon from "@/components/ui/Icon";
import Picture from "@/components/ui/Picture";
import PanelIntro from "@/components/work/PanelIntro";
import type { Site } from "@/lib/projects";

const SITES: readonly Site[] = [
    { name: "Voxel", domain: "voxel.hardel.io", href: "https://voxel.hardel.io", text: "Hub for my datapacks and tools", image: "/sites/voxel.webp" },
    { name: "Leafs", domain: "leafs.hardel.io", href: "https://leafs.hardel.io", text: "Docs for a multithreading mod", image: "/sites/leafs.webp" },
    { name: "Oneiric Forge", domain: "oneiricforge.com", href: "https://www.oneiricforge.com/en-us/", text: "Home of a mapmaking team", image: "/sites/oneiricforge.webp" },
    { name: "Hardel", domain: "hardel.io", href: "https://hardel.io", text: "This cutty page", image: "/sites/hardel.webp" }
];

export default function WebPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Websites">
                The sites around my projects, static and fast. <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, Tailwind and Cloudflare Workers.
            </PanelIntro>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {SITES.map((site) => (
                    <a key={site.domain} href={site.href} target="_blank" rel="noreferrer" className="group">
                        <BrowserFrame domain={site.domain} className="flex h-full flex-col bg-bark-950 transition-colors duration-200 group-hover:border-bark-700">
                            <span className="overflow-hidden">
                                <Picture
                                    src={site.image}
                                    alt={site.name}
                                    eager
                                    className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-103"
                                />
                            </span>
                            <span className="flex flex-1 items-center justify-between gap-3 border-t border-line px-4 py-2">
                                <span className="text-sm text-cream-400 transition-colors group-hover:text-cream-200">{site.text}</span>
                                <Icon
                                    name="northEast"
                                    className="size-4 text-cream-500 transition duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-oak-400"
                                />
                            </span>
                        </BrowserFrame>
                    </a>
                ))}
            </div>
        </div>
    );
}
