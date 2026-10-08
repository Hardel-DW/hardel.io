import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Live from "@/components/ui/Live";

export default function NotFound() {
    return (
        <section id="top" className="card relative flex min-h-[60dvh] flex-col items-center justify-center gap-4 overflow-hidden px-6 py-24 text-center">
            <Live />
            <p className="font-mono text-sm text-oak-400">404</p>
            <h1 className="text-4xl font-semibold tracking-display text-cream-50 sm:text-5xl">Chunk not found</h1>
            <p className="max-w-sm text-lg text-cream-400">This part of the world was never generated.</p>
            <Button href="/" variant="primary" className="mt-3">
                <Icon name="arrowBack" className="size-4.5" />
                Back to spawn
            </Button>
        </section>
    );
}
