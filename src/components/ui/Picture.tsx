import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type PictureProps = { src: string; alt: string; className?: string; eager?: boolean };

export default function Picture({ src, alt, className, eager }: PictureProps) {
    const [failed, setFailed] = useState(false);
    if (failed) {
        return (
            <div role="img" aria-label={alt} className={cn("grid place-items-center bg-bark-800 text-bark-700", className)}>
                <Icon name="landscape" className="size-8" />
            </div>
        );
    }

    return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setFailed(true)} className={className} />;
}
