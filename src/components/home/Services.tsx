import type React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import { HEX_PATH } from "@/components/ui/HexDefs";
import Icon, { type IconName } from "@/components/ui/Icon";
import Live from "@/components/ui/Live";

const WAVE = `M0 20${"c12-9 25-9 37 0s25 9 37 0".repeat(8)}`;
const CLUSTER: readonly (readonly [number, number])[] = [
    [0, 0],
    [1, 0],
    [0.5, 0.866],
    [-0.5, 0.866],
    [0, 1.732]
];

export default function Services() {
    return (
        <section id="services" className="card reveal flex flex-col gap-10 p-6 sm:p-10">
            <SectionTitle label="Services">
                <strong>What I can build</strong> for your project
            </SectionTitle>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Service icon="dataObject" title="Datapacks" index={0}>
                    Custom mechanics, loot, recipes and enchantments in <strong>vanilla</strong>, no mod required.
                </Service>
                <Service icon="extension" title="Mods & plugins" index={1}>
                    <strong>Fabric</strong> and <strong>NeoForge</strong> mods, <strong>Paper</strong> plugins, client or server side.
                </Service>
                <Service icon="landscape" title="Worldgen & structures" index={2}>
                    Biomes, terrain, dimensions and hand-built <strong>structures</strong> with their own loot.
                </Service>
                <Service icon="deployedCode" title="Models & textures" index={3}>
                    <strong>3D models</strong>, pixel-art textures and animations that fit the vanilla style.
                </Service>
                <Service icon="lightMode" title="Shaders" index={4}>
                    Lighting, water, sky and <strong>post-processing</strong> that stay smooth.
                </Service>
                <Service icon="language" title="Websites" index={5}>
                    Fast static sites for your mod, your server or your brand. Like <strong>this one</strong>.
                </Service>
            </ul>
        </section>
    );
}

function Service({ icon, title, index, children }: { icon: IconName; title: string; index: number; children: React.ReactNode }) {
    return (
        <li className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-line bg-bark-950/60 p-6 transition-colors duration-200 hover:border-bark-700 hover:bg-bark-950">
            <Live duration={22 + index * 6} glow={0.35} wander />
            <Waves index={index} />
            <Hexes />
            <span className="hexagon relative grid w-11 place-items-center bg-bark-800 text-oak-400 transition-colors duration-200 group-hover:bg-oak-600 group-hover:text-white">
                <Icon name={icon} />
            </span>
            <div className="relative flex flex-col gap-1.5">
                <h3 className="text-[17px] font-semibold text-cream-50">{title}</h3>
                <p className="keys text-[15px] text-pretty text-cream-400">{children}</p>
            </div>
        </li>
    );
}

function Waves({ index }: { index: number }) {
    return (
        <div className="pointer-events-none absolute -top-2 -right-15 h-14 w-80 origin-center rotate-28 overflow-hidden" aria-hidden>
            <svg viewBox="0 0 444 40" className="wave absolute -top-1.5 left-0 h-10 w-111 text-oak-600/45" style={{ "--duration": `${18 + index * 3}s` }}>
                <path d={WAVE} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 444 40" className="wave absolute top-3 left-0 h-10 w-111 text-oak-600/30" style={{ "--duration": `${27 + index * 2}s` }}>
                <path d={WAVE} fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" />
            </svg>
        </div>
    );
}

function Hexes() {
    return (
        <svg viewBox="-0.6 -0.2 3 2.6" className="pointer-events-none absolute -bottom-10 -left-9 w-36 text-oak-600/25" aria-hidden>
            {CLUSTER.map(([x, y]) => (
                <path key={`${x}-${y}`} d={HEX_PATH} transform={`translate(${x} ${y}) scale(0.92 1.063)`} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            ))}
        </svg>
    );
}
