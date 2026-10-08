import SectionTitle from "@/components/home/SectionTitle";
import Gallery, { type Shot } from "@/components/ui/Gallery";

const SHOTS: readonly Shot[] = [
    { src: "/gallery/structures/asflors-village.webp", title: "Asflors Village", caption: "Yggdrasil. A village grown around a giant flower.", tag: "Structures", span: "big" },
    { src: "/gallery/structures/runic-fracture.webp", title: "Runic Fracture", caption: "Yggdrasil. A rift torn open by runic magic.", tag: "Worldgen", span: "tall" },
    { src: "/gallery/structures/alfheim.webp", title: "Alfheim", caption: "Yggdrasil. The realm of the light elves.", tag: "Worldgen" },
    { src: "/gallery/structures/asflors-sword.webp", title: "Asflors Sword", caption: "Yggdrasil. A blade planted in the ground.", tag: "Structures" }
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
