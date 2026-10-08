import { useState } from "react";
import SectionTitle from "@/components/home/SectionTitle";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { CHANNEL, VIDEOS, type Video } from "@/lib/videos";

export default function Videos() {
    const [playing, setPlaying] = useState<Video | null>(null);
    return (
        <section id="projects" className="card reveal flex flex-col gap-8 p-6 sm:p-10">
            <SectionTitle label="Projects" align="left">
                A few <strong>cool</strong> projects
            </SectionTitle>
            <ol className="fade-bottom no-scrollbar -my-2 flex min-h-0 flex-1 flex-col overflow-y-auto border-l border-line py-2 pb-10 max-lg:max-h-72">
                {VIDEOS.map((video) => (
                    <li key={video.youtube}>
                        <button type="button" onClick={() => setPlaying(video)} className="group relative flex w-full cursor-pointer items-center gap-4 py-2.5 pl-5 text-left">
                            <span className="hexagon absolute top-1/2 -left-1.25 w-2.5 -translate-y-1/2 bg-oak-400 transition-transform duration-300 ease-soft group-hover:scale-125" />
                            <span className="font-mono text-[13px] text-cream-500">{video.year}</span>
                            <span className="flex-1 font-medium text-cream-200 transition-colors group-hover:text-cream-50">{video.title}</span>
                            <Icon name="youtube" className="size-4.5 text-youtube transition-transform duration-300 ease-soft group-hover:scale-110" />
                        </button>
                    </li>
                ))}
            </ol>
            <a href={CHANNEL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-sm text-oak-300 transition-colors hover:text-oak-400">
                <Icon name="youtube" className="size-4 text-youtube" />
                All videos on YouTube
                <Icon name="northEast" className="size-3.5 transition-transform duration-300 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
