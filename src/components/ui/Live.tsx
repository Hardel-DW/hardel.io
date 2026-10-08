export default function Live({ duration = 18, glow = 0.55, wander }: { duration?: number; glow?: number; wander?: boolean }) {
    return (
        <span
            aria-hidden
            className="live-ring"
            style={{ "--duration": `${duration}s`, "--glow": glow, "--beam-ease": wander ? "ease-in-out" : "linear", "--direction": wander ? "alternate" : "normal" }}>
            <span className="live-beam" />
        </span>
    );
}
