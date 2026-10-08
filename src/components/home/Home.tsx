import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Showcase from "@/components/home/Showcase";
import Stats from "@/components/home/Stats";
import Videos from "@/components/home/Videos";
import Work from "@/components/work/Work";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Work />
            <Showcase />
            <div className="grid gap-(--gap) lg:grid-cols-[1.2fr_0.8fr]">
                <div className="flex min-w-0 flex-col gap-(--gap)">
                    <About />
                    <Contact />
                </div>
                <Videos />
            </div>
        </>
    );
}
