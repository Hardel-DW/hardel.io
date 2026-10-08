import Picture from "@/components/ui/Picture";
import TextLink from "@/components/ui/TextLink";
import PanelIntro from "@/components/work/PanelIntro";

const STUDIO = {
    hub: "https://voxel.hardel.io",
    image: "/projects/studio.webp"
} as const;

export default function StudioPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Voxel Studio">
                A mod that adds an <strong>in-game editor</strong> to create mods and datapacks without leaving Minecraft. Enchantments, recipes, loot tables and structures, edited live and synced
                with the server.
            </PanelIntro>
            <Picture src={STUDIO.image} alt="Voxel Studio" eager className="card aspect-video w-full object-cover object-top" />
            <TextLink href={STUDIO.hub} className="mt-auto">
                voxel.hardel.io
            </TextLink>
        </div>
    );
}
