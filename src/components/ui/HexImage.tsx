import { cn } from "@/lib/utils";

type HexImageProps = { src: string; alt: string; size: number; className?: string; live?: boolean; eager?: boolean };

export default function HexImage({ src, alt, size, className, live, eager }: HexImageProps) {
    return (
        <span className={cn("hexagon relative block overflow-hidden p-px", !live && "bg-line", className)}>
            {live && <span aria-hidden className="hex-ring" />}
            <img
                src={src}
                alt={alt}
                width={size}
                height={Math.round(size / 0.866)}
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : undefined}
                className="hexagon relative size-full bg-bark-900 object-cover"
            />
        </span>
    );
}
