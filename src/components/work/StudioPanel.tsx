import BrowserFrame from "@/components/ui/BrowserFrame";
import Button from "@/components/ui/Button";
import Picture from "@/components/ui/Picture";
import PanelIntro from "@/components/work/PanelIntro";

const STUDIO = {
    hub: "https://voxel.hardel.io",
    domain: "voxel.hardel.io",
    image: "/projects/studio.webp"
} as const;

export default function StudioPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Voxel Studio">
                A mod that adds an <strong>in-game editor</strong> to create mods and datapacks without leaving Minecraft. Enchantments, recipes, loot tables and structures, edited live and synced
                with the server.
            </PanelIntro>
            <BrowserFrame domain={STUDIO.domain} className="bg-bark-950">
                <Picture src={STUDIO.image} alt="Voxel Studio structure editor" eager className="aspect-video w-full object-cover object-top" />
            </BrowserFrame>
            <Button variant="link" href={STUDIO.hub} className="mt-auto">
                {STUDIO.domain}
            </Button>
        </div>
    );
}
