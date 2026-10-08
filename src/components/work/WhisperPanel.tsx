import Picture from "@/components/ui/Picture";
import TextLink from "@/components/ui/TextLink";
import PanelIntro from "@/components/work/PanelIntro";

const WHISPER = {
    modrinth: "https://modrinth.com/mod/whisper_of_ether",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/whisper-of-ether",
    shots: [
        { src: "/gallery/whisper/splash.webp", alt: "Whisper of Ether" },
        { src: "/gallery/whisper/runic-forge.webp", alt: "Runic Forge" }
    ]
} as const;

export default function WhisperPanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Whisper of Ether">
                A <strong>magic</strong> mod for Fabric. Forge <strong>runes</strong> into your weapons and armor, then automate the magic blocks that power them.
            </PanelIntro>
            <div className="grid gap-3 sm:grid-cols-2">
                {WHISPER.shots.map((shot) => (
                    <Picture key={shot.src} src={shot.src} alt={shot.alt} eager className="card aspect-video w-full object-cover" />
                ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-6">
                <TextLink href={WHISPER.modrinth} icon="modrinth">
                    Modrinth
                </TextLink>
                <TextLink href={WHISPER.curseforge}>CurseForge</TextLink>
            </div>
        </div>
    );
}
