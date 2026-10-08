import SectionTitle from "@/components/home/SectionTitle";
import Gallery, { type Shot } from "@/components/ui/Gallery";

const SHOTS: readonly Shot[] = [
    { src: "/gallery/shaders/soul-sight.webp", title: "Soul Sight", caption: "Re:Zero. A shader that shows the world the way Subaru sees souls.", tag: "Shaders", span: "big" },
    { src: "/gallery/structures/runic-crystal.webp", title: "Runic Crystal", caption: "Yggdrasil. A purple beacon that maps the nearest labyrinth.", tag: "Structures", span: "tall" },
    { src: "/gallery/structures/vanaheim-stele.webp", title: "Vanaheim Stele", caption: "Yggdrasil. The stele that leads to Vanaheim.", tag: "Structures" },
    { src: "/gallery/structures/vanaheim.webp", title: "Vanaheim", caption: "Yggdrasil. A hall grown around a cherry tree.", tag: "Structures" },
    { src: "/gallery/structures/runic-dimension.webp", title: "Runic Dimension", caption: "Yggdrasil. A lightless, hostile realm with its own worldgen.", tag: "Dimensions", span: "wide" },
    { src: "/gallery/structures/asgard-night.webp", title: "Asgard by Night", caption: "Yggdrasil. The sky city lit up after dark.", tag: "Structures", span: "wide" },
    { src: "/gallery/structures/asgard-enchanting.webp", title: "Asgard Enchanting Hall", caption: "Yggdrasil. Where Asgard keeps its enchanting table.", tag: "Structures", span: "wide" },
    { src: "/gallery/structures/runic-fracture.webp", title: "Runic Fracture", caption: "Yggdrasil. A rift torn open by runic magic.", tag: "Structures" },
    { src: "/gallery/structures/alfheim.webp", title: "Alfheim", caption: "Yggdrasil. The realm of the light elves.", tag: "Structures" },
    { src: "/gallery/structures/asgard.webp", title: "Asgard", caption: "Yggdrasil. A fortress above the clouds, home of Gungnir.", tag: "Structures", span: "big" },
    { src: "/gallery/structures/neogard.webp", title: "Neogard", caption: "Yggdrasil. The stele that leads to Asgard.", tag: "Structures", span: "wide" },
    { src: "/gallery/structures/helheim.webp", title: "Helheim", caption: "Yggdrasil. A dark realm deep beneath the earth.", tag: "Structures" },
    { src: "/gallery/structures/asflors-sword.webp", title: "Asflors Sword", caption: "Yggdrasil. A blade planted in the ground.", tag: "Structures" },
    { src: "/gallery/structures/asflors-village.webp", title: "Asflors Village", caption: "Yggdrasil. A village grown around a giant flower.", tag: "Structures", span: "wide" },
    { src: "/gallery/whisper/crafting.webp", title: "Crafting Screen", caption: "Whisper of Ether. A custom crafting interface with search.", tag: "Interfaces" },
    { src: "/gallery/whisper/furnaces.webp", title: "Furnaces", caption: "Whisper of Ether. A wall of custom furnaces.", tag: "Models" }
];

export default function Showcase() {
    return (
        <section id="showcase" className="card reveal flex flex-col gap-10 p-6 sm:p-10">
            <SectionTitle label="Showcase">
                A <strong>glimpse</strong> into my work
            </SectionTitle>
            <Gallery shots={SHOTS} />
        </section>
    );
}
