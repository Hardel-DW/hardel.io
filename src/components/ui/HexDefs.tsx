export const HEX_PATH = "M0.42 0.04Q0.5 0 0.58 0.04L0.92 0.21Q1 0.25 1 0.33L1 0.67Q1 0.75 0.92 0.79L0.58 0.96Q0.5 1 0.42 0.96L0.08 0.79Q0 0.75 0 0.67L0 0.33Q0 0.25 0.08 0.21Z";

export default function HexDefs() {
    return (
        <svg width="0" height="0" className="absolute" aria-hidden>
            <defs>
                <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
                    <path d={HEX_PATH} />
                </clipPath>
            </defs>
        </svg>
    );
}
