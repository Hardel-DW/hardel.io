import SectionTitle from "@/components/home/SectionTitle";
import HexImage from "@/components/ui/HexImage";
import Live from "@/components/ui/Live";

export default function About() {
    return (
        <section id="about" className="card relative flex flex-col gap-8 overflow-hidden p-6 sm:p-10">
            <Live duration={26} glow={0.4} wander />
            <SectionTitle label="About" align="left">
                <strong>Hey</strong>, I'm Hardel
            </SectionTitle>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <HexImage src="/hardel.webp" alt="Hardel" size={112} live className="w-28 shrink-0" />
                <div className="flex flex-col gap-4">
                    <p className="keys text-pretty text-cream-400">
                        25 years old, French <strong>developer</strong> and <strong>web designer</strong>, living off Minecraft full time. I build <strong>technical mods</strong> for developers and
                        content creators, and I dig into the <strong>lowest layers</strong> of the game.
                    </p>
                    <p className="keys text-pretty text-cream-400">Tech lover, always chasing the next thing to learn :3, i love animes, friends, stars and hugs. Also cute, apparently {">.<"}</p>
                </div>
            </div>
        </section>
    );
}
