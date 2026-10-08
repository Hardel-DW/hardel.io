export type Kind = "tag" | "attr" | "value" | "bind" | "text" | "punct";
export type Token = { id: number; kind: Kind; text: string };
export type Line = { number: number; tokens: Token[] };

const PATTERN = /(<\/?)([\w:-]+(?:\/[\w:-]+)*)|([\w:-]+)(=)("[^"]*"|\{[^}]*\})|(\/?>)|(\{\{[^}]*\}\})|(\s+)|([^<>{}\s]+)/g;

function parts(match: RegExpMatchArray): Omit<Token, "id">[] {
    if (match[2])
        return [
            { kind: "punct", text: match[1] },
            { kind: "tag", text: match[2] }
        ];
    if (match[5])
        return [
            { kind: "attr", text: match[3] },
            { kind: "punct", text: "=" },
            { kind: match[5].startsWith("{") ? "bind" : "value", text: match[5] }
        ];
    if (match[6]) return [{ kind: "punct", text: match[6] }];
    if (match[7]) return [{ kind: "bind", text: match[7] }];
    return [{ kind: "text", text: match[0] }];
}

function tokenize(line: string): Token[] {
    return [...line.matchAll(PATTERN)].flatMap(parts).map((token, id) => ({ id, ...token }));
}

export function highlight(source: string): Line[] {
    return source
        .trim()
        .split("\n")
        .map((text, index) => ({ number: index + 1, tokens: tokenize(text) }));
}
