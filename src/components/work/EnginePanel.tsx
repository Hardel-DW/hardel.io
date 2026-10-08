import PanelIntro from "@/components/work/PanelIntro";
import { cn } from "@/lib/utils";

type Kind = "tag" | "attr" | "value" | "bind" | "text" | "punct";

const CODE: readonly (readonly (readonly [Kind, string])[])[] = [
    [
        ["punct", "<"],
        ["tag", "column"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"gap-3 p-5 rounded-xl bg-stone-900 shadow-xl"'],
        ["punct", ">"]
    ],
    [
        ["punct", "    <"],
        ["tag", "row"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"gap-2 items-center"'],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "item"],
        ["attr", " id"],
        ["punct", "="],
        ["value", '"minecraft:diamond_pickaxe"'],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"size-6"'],
        ["punct", "/>"]
    ],
    [
        ["punct", "        <"],
        ["tag", "text"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"font-bold text-white"'],
        ["punct", ">"],
        ["text", "Hello world"],
        ["punct", "</"],
        ["tag", "text"],
        ["punct", ">"]
    ],
    [
        ["punct", "    </"],
        ["tag", "row"],
        ["punct", ">"]
    ],
    [
        ["punct", "    <"],
        ["tag", "row"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"gap-1"'],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "text"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"text-stone-300"'],
        ["punct", ">"],
        ["text", "You mined"],
        ["punct", "</"],
        ["tag", "text"],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "text"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"font-bold text-amber-400"'],
        ["punct", ">"],
        ["bind", "{{blocks}}"],
        ["punct", "</"],
        ["tag", "text"],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "text"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"text-stone-300"'],
        ["punct", ">"],
        ["text", "blocks"],
        ["punct", "</"],
        ["tag", "text"],
        ["punct", ">"]
    ],
    [
        ["punct", "    </"],
        ["tag", "row"],
        ["punct", ">"]
    ],
    [
        ["punct", "    <"],
        ["tag", "stack"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"h-2 rounded-full bg-stone-800"'],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "div"],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"w-2/3 rounded-full bg-amber-500"'],
        ["punct", "/>"]
    ],
    [
        ["punct", "    </"],
        ["tag", "stack"],
        ["punct", ">"]
    ],
    [
        ["punct", "    <"],
        ["tag", "button"],
        ["attr", " id"],
        ["punct", "="],
        ["value", '"claim"'],
        ["attr", " class"],
        ["punct", "="],
        ["value", '"bg-amber-600 rounded-md"'],
        ["punct", ">"]
    ],
    [
        ["punct", "        <"],
        ["tag", "text"],
        ["attr", " key"],
        ["punct", "="],
        ["value", '"studio.claim"'],
        ["punct", "/>"]
    ],
    [
        ["punct", "    </"],
        ["tag", "button"],
        ["punct", ">"]
    ],
    [
        ["punct", "</"],
        ["tag", "column"],
        ["punct", ">"]
    ]
];

const LINES = CODE.map((tokens, line) => ({ number: line + 1, tokens: tokens.map(([kind, text], column) => ({ column, kind, text })) }));

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
                                    <span key={token.column} className={tokenClass(token.kind)}>
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
