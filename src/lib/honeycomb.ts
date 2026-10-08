type Point = readonly [number, number];

export type Cell = { id: number; points: string; delay: number; duration: number; peak: number; leaf: boolean };
export type Honeycomb = { width: number; height: number; outline: string; cells: Cell[] };

type Options = { columns: number; rows: number; radius: number; seed: number; density: number };

const SQRT3 = Math.sqrt(3);

function random(seed: number) {
    let state = seed;
    return () => {
        state = (state + 0x6d2b79f5) | 0;
        let value = Math.imul(state ^ (state >>> 15), 1 | state);
        value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
}

const format = ([x, y]: Point) => `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`;

function corners(center: Point, radius: number) {
    return Array.from({ length: 6 }, (_, index) => {
        const angle = ((index * 60 - 90) * Math.PI) / 180;
        return [center[0] + radius * Math.cos(angle), center[1] + radius * Math.sin(angle)] as const;
    });
}

function centers({ columns, rows, radius }: Options): Point[] {
    const width = SQRT3 * radius;
    return Array.from({ length: rows * columns }, (_, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;
        return [column * width + (row % 2) * (width / 2), row * radius * 1.5] as const;
    });
}

function nearest(point: Point, origins: readonly Point[]) {
    return Math.min(...origins.map((origin) => Math.hypot(point[0] - origin[0], point[1] - origin[1])));
}

export function createHoneycomb(options: Options): Honeycomb {
    const next = random(options.seed);
    const width = options.columns * SQRT3 * options.radius;
    const height = options.rows * options.radius * 1.5;
    const origins = Array.from({ length: 3 }, () => [next() * width, next() * height] as const);
    const hexes = centers(options).map((center) => ({ center, corners: corners(center, options.radius) }));
    const cells = hexes.flatMap(({ center, corners }, id) => {
        if (next() >= options.density) return [];
        const duration = 9 + next() * 8;
        const spread = (nearest(center, origins) / options.radius) * 0.9;
        return [{ id, points: corners.map(format).join(" "), delay: -((spread + next() * 6) % duration), duration, peak: 0.04 + next() * 0.22, leaf: next() < 0.1 }];
    });
    return { width, height, outline: hexes.map((hex) => `M${hex.corners.map(format).join("L")}Z`).join(""), cells };
}
