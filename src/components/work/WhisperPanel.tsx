import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Picture from "@/components/ui/Picture";
import PanelIntro from "@/components/work/PanelIntro";
import { cn } from "@/lib/utils";

const WHISPER = {
    modrinth: "https://modrinth.com/mod/whisper_of_ether",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/whisper-of-ether"
} as const;

export default function WhisperPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Whisper of Ether">
                A <strong>magic</strong> mod for Fabric. Forge <strong>runes</strong> into your weapons and armor, then automate the magic blocks that power them.
            </PanelIntro>
            <div className="my-auto grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Shot src="/gallery/whisper/splash.webp" alt="Whisper of Ether" className="col-span-2 aspect-video object-cover" />
                <Shot
                    src="/gallery/whisper/interfaces.webp"
                    alt="Rune forge interfaces"
                    className="col-span-2 aspect-1400/1184 bg-bark-950 object-contain p-3 sm:row-span-2 sm:h-0 sm:min-h-full sm:aspect-auto"
                />
                <Shot src="/gallery/whisper/crafting.webp" alt="Crafting screen" className="aspect-video object-cover" />
                <Shot src="/gallery/whisper/furnaces.webp" alt="Custom furnaces" className="aspect-video object-cover" />
            </div>
            <div className="flex flex-wrap gap-6">
                <Button variant="link" href={WHISPER.modrinth}>
                    <Icon name="modrinth" className="size-4" />
                    Modrinth
                </Button>
                <Button variant="link" href={WHISPER.curseforge}>
                    CurseForge
                </Button>
            </div>
        </div>
    );
}

function Shot({ src, alt, className }: { src: string; alt: string; className: string }) {
    return <Picture src={src} alt={alt} eager className={cn("card w-full", className)} />;
}
