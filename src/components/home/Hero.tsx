import Intro from "@/components/home/Intro";
import Button from "@/components/ui/Button";
import HexImage from "@/components/ui/HexImage";
import Honeycomb from "@/components/ui/Honeycomb";
import Icon from "@/components/ui/Icon";
import Live from "@/components/ui/Live";
import { CREATORS, UNNAMED_CREATORS } from "@/lib/creators";
import { createHoneycomb } from "@/lib/honeycomb";

const COMB = createHoneycomb({ columns: 13, rows: 13, radius: 34, seed: 7, density: 0.25 });

export default function Hero() {
    return (
        <section id="top" className="card relative grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
            <Live />
            <div className="flex flex-col justify-center gap-7 p-8 sm:p-12 lg:p-14">
                <div className="rise">
                    <Intro />
                </div>
                <h1 className="rise text-[34px] leading-[1.15] font-semibold tracking-display text-balance text-cream-50 sm:text-[42px]" style={{ "--delay": "80ms" }}>
                    Minecraft <Tag>datapack</Tag> & <Tag>mod</Tag> developer
                </h1>
                <p className="keys rise max-w-lg text-[17px] text-pretty text-cream-400" style={{ "--delay": "160ms" }}>
                    From vanilla <strong>datapacks</strong> to full <strong>Fabric</strong> and <strong>NeoForge</strong> mods, with <strong>worldgen</strong>, <strong>shaders</strong>,{" "}
                    <strong>3D models</strong> and the <strong>websites</strong> around them. Playing since Beta 1.7, developing since 1.12.
                </p>
                <div className="rise flex flex-col gap-3 pt-2" style={{ "--delay": "240ms" }}>
                    <p className="font-mono text-[13px] text-cream-500">Working with amazing content creators</p>
                    <div className="flex items-center gap-2.5">
                        {CREATORS.map((creator) => (
                            <a
                                key={creator.name}
                                href={creator.href}
                                target="_blank"
                                rel="noreferrer"
                                title={creator.name}
                                className="transition-transform duration-300 ease-soft hover:-translate-y-0.5">
                                <HexImage src={creator.avatar} alt={creator.name} size={48} eager className="w-12" />
                            </a>
                        ))}
                        <span className="hexagon grid w-12 place-items-center bg-bark-800 font-mono text-sm text-cream-400">+{UNNAMED_CREATORS}</span>
                    </div>
                </div>
            </div>
            <div className="relative flex min-h-115 flex-col items-center justify-center gap-6 overflow-hidden border-line max-lg:border-t lg:border-l">
                <Honeycomb data={COMB} className="mask-[radial-gradient(ellipse_70%_80%_at_50%_50%,#000_30%,transparent_78%)]" />
                <HexImage src="/hardel.webp" alt="Hardel" size={264} live eager className="rise w-56 sm:w-64" />
                <div className="rise relative flex flex-col items-center gap-3" style={{ "--delay": "200ms" }}>
                    <Button glow href="#contact" className="h-12 px-6 text-base">
                        Start a commission
                        <Icon name="arrowForward" className="size-4.5" />
                    </Button>
                    <p className="flex items-center gap-2 font-mono text-[13px] text-cream-400">
                        <span className="size-2 rounded-full bg-leaf-400" />
                        Open for commissions
                    </p>
                </div>
            </div>
        </section>
    );
}

function Tag({ children }: { children: string }) {
    return (
        <span className="whitespace-nowrap text-oak-300">
            <span className="text-oak-500">&lt; </span>
            {children}
            <span className="text-oak-500"> /&gt;</span>
        </span>
    );
}
