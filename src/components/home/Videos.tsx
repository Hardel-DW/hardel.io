import { useState } from "react";
import SectionTitle from "@/components/home/SectionTitle";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { cn } from "@/lib/utils";
import { CHANNEL, VIDEOS, type Video } from "@/lib/videos";

const ROW = "group relative flex w-full cursor-pointer items-center gap-4 py-2.5 pl-5 text-left";
const BRANDS = { youtube: "text-youtube", twitch: "text-twitch" } as const;

export default function Videos() {
    const [playing, setPlaying] = useState<Video | null>(null);
    return (
        <section id="projects" className="card reveal flex flex-col gap-8 p-6 sm:p-10">
            <SectionTitle label="Projects" align="left">
                A few <strong>cool</strong> projects
            </SectionTitle>
            <ol className="mask-b-from-[calc(100%-40px)] no-scrollbar -my-2 flex min-h-0 flex-1 flex-col overflow-y-auto border-l border-line py-2 pb-10 max-lg:max-h-72">
                {VIDEOS.map((video) => (
                    <li key={video.title}>
                        {"youtube" in video ? (
                            <button type="button" onClick={() => setPlaying(video)} className={ROW}>
                                <Row year={video.year} title={video.title} brand="youtube" />
                            </button>
                        ) : (
                            <a href={video.twitch} target="_blank" rel="noreferrer" className={ROW}>
                                <Row year={video.year} title={video.title} brand="twitch" />
                            </a>
                        )}
                    </li>
                ))}
            </ol>
            <Button variant="link" href={CHANNEL}>
                <Icon name="youtube" className="size-4 text-youtube" />
                All videos on YouTube
            </Button>
            {playing && (
                <Modal label={playing.title} onClose={() => setPlaying(null)}>
                    <div className="card aspect-video w-full max-w-6xl overflow-hidden">
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${playing.youtube}?autoplay=1&rel=0`}
                            title={playing.title}
                            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                            allowFullScreen
                            className="size-full"
                        />
                    </div>
                </Modal>
            )}
        </section>
    );
}

function Row({ year, title, brand }: { year: number; title: string; brand: keyof typeof BRANDS }) {
    return (
        <>
            <span className="hexagon absolute top-1/2 -left-1.25 w-2.5 -translate-y-1/2 bg-oak-400 transition-transform duration-300 ease-soft group-hover:scale-125" />
            <span className="font-mono text-label text-cream-500">{year}</span>
            <span className="flex-1 font-medium text-cream-200 transition-colors group-hover:text-cream-50">{title}</span>
            <Icon name={brand} className={cn("size-4.5 transition-transform duration-300 ease-soft group-hover:scale-110", BRANDS[brand])} />
        </>
    );
}
