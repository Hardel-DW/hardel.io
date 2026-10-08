import PanelIntro from "@/components/work/PanelIntro";
import { highlight, type Kind } from "@/lib/highlight";
import { cn } from "@/lib/utils";

const SOURCE = `
<column class="gap-3 p-5 rounded-xl bg-stone-900 shadow-xl">
    <row class="gap-2 items-center">
        <item id="minecraft:diamond_pickaxe" class="size-6"/>
        <text class="font-bold text-white">Hello world</text>
    </row>
    <row class="gap-1">
        <text class="text-stone-300">You mined</text>
        <text class="font-bold text-amber-400">{{blocks}}</text>
        <text class="text-stone-300">blocks</text>
    </row>
    <stack class="h-2 rounded-full bg-stone-800">
        <div class="w-2/3 rounded-full bg-amber-500"/>
    </stack>
    <button id="claim" class="bg-amber-600 rounded-md">
        <text key="studio.claim"/>
    </button>
</column>
`;

const LINES = highlight(SOURCE);

export default function EnginePanel() {
    return (
        <div className="flex flex-1 flex-col gap-6">
            <PanelIntro title="Yu - Interface Engine">
                A <strong>UI engine</strong> for Minecraft. Screens are written in <strong>.mcui</strong> with utility classes and reactive bindings, then rendered in game. Items, blocks, entities and
                player heads are tags like any other.
            </PanelIntro>
            <div className="card relative flex flex-col gap-4 overflow-hidden bg-bark-950 p-5 sm:block sm:p-0">
                <pre className="no-scrollbar overflow-x-auto font-mono text-xs leading-7 sm:p-6">
                    <code>
                        {LINES.map((line) => (
                            <span key={line.number} className="block whitespace-pre">
                                <span className="mr-4 inline-block w-4 text-right text-bark-700 select-none">{line.number}</span>
                                {line.tokens.map((token) => (
                                    <span key={token.id} className={tokenClass(token.kind)}>
                                        {token.text}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </code>
                </pre>
                <Preview />
            </div>
        </div>
    );
}

function tokenClass(kind: Kind) {
    return cn(
        kind === "tag" && "text-oak-400",
        kind === "attr" && "text-oak-300",
        kind === "value" && "text-leaf-400",
        kind === "bind" && "text-cream-50",
        kind === "text" && "text-cream-200",
        kind === "punct" && "text-cream-500"
    );
}

function Preview() {
    return (
        <div className="card flex w-60 flex-col gap-4 border-bark-700 p-5 shadow-float sm:absolute sm:right-5 sm:bottom-5">
            <div className="flex items-center gap-2.5">
                <span className="font-semibold text-cream-50">Hello world</span>
            </div>
            <p className="text-sm text-cream-400">
                You mined <span className="count font-mono font-semibold text-oak-400 tabular-nums" style={{ "--to": 1284 }} /> blocks
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-bark-800">
                <div className="h-full w-2/3 origin-left animate-grow rounded-full bg-oak-500" />
            </div>
            <span className="bevel grid h-9 place-items-center bg-oak-600 text-sm font-semibold text-white bevel-2">Claim reward</span>
        </div>
    );
}
