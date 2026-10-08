import type React from "react";
import Honeycomb from "@/components/ui/Honeycomb";
import Icon, { type IconName } from "@/components/ui/Icon";
import { CREATORS, UNNAMED_CREATORS } from "@/lib/creators";
import { createHoneycomb } from "@/lib/honeycomb";
import { MODRINTH_DOWNLOADS, MODRINTH_FOLLOWERS } from "@/lib/projects";
import { cn } from "@/lib/utils";

const COMB = createHoneycomb({ columns: 40, rows: 8, radius: 26, seed: 3, density: 0 });
const YEARS = new Date().getFullYear() - 2017;

export default function Stats() {
    return (
        <section aria-label="Numbers" className="card relative overflow-hidden">
            <Honeycomb data={COMB} className="opacity-60" />
            <dl className="relative grid grid-cols-2 md:grid-cols-4">
                <Stat icon="schedule" label="Years of modding">
                    {YEARS}
                    <Plus />
                </Stat>
                <Stat icon="download" label="Downloads" className="border-l">
                    <span className="count tabular-nums" style={{ "--to": Math.floor(MODRINTH_DOWNLOADS / 1000) }}>
                        K
                    </span>
                    <Plus />
                </Stat>
                <Stat icon="group" label="Followers" className="border-t md:border-t-0 md:border-l">
                    {(MODRINTH_FOLLOWERS / 1000).toFixed(1)}K
                </Stat>
                <Stat icon="handshake" label="Creators" className="border-t border-l md:border-t-0">
                    {CREATORS.length + UNNAMED_CREATORS}
                    <Plus />
                </Stat>
            </dl>
        </section>
    );
}

function Plus() {
    return <span className="text-oak-400">+</span>;
}

function Stat({ icon, label, className, children }: { icon: IconName; label: string; className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("flex flex-col gap-2 border-line px-6 py-7 lg:px-10", className)}>
            <Icon name={icon} className="size-6 text-oak-400" />
            <dd className="text-4xl font-semibold tracking-display text-cream-50">{children}</dd>
            <dt className="font-mono text-label text-cream-400">{label}</dt>
        </div>
    );
}
