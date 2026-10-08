import SectionTitle from "@/components/home/SectionTitle";
import { HEX_PATH } from "@/components/ui/HexDefs";
import HexImage from "@/components/ui/HexImage";
import Icon, { type IconName } from "@/components/ui/Icon";
import Live from "@/components/ui/Live";
import { CONTACT } from "@/lib/links";

const LINES: readonly { icon: IconName; text: string; href: string }[] = [
    { icon: "discord", text: CONTACT.discord, href: CONTACT.discordUrl },
    { icon: "mail", text: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: "send", text: "Send a carrier pigeon.", href: CONTACT.pigeon }
];

export default function Contact() {
    return (
        <section id="contact" className="card relative flex flex-col gap-8 overflow-hidden p-6 sm:p-10">
            <Live />
            <SectionTitle label="Contact" align="left" className="max-sm:pr-24">
                <strong>Reach out</strong> for collaboration
            </SectionTitle>
            <div className="flex items-center gap-8">
                <Orbit />
                <ul className="flex min-w-0 flex-col gap-3">
                    {LINES.map((line) => (
                        <li key={line.text}>
                            <a
                                href={line.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 font-mono text-ui wrap-anywhere text-oak-300 transition-colors hover:text-oak-400">
                                <Icon name={line.icon} className="size-4.5 text-cream-400 transition-colors group-hover:text-oak-400" />
                                {line.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Rings />
        </section>
    );
}

function Orbit() {
    return (
        <div className="relative grid size-28 shrink-0 place-items-center max-sm:absolute max-sm:top-5 max-sm:right-5 max-sm:size-20">
            <svg viewBox="0 0 1 1.155" className="animate-orbit absolute inset-0 size-full text-oak-600" style={{ "--duration": "40s" }} aria-hidden>
                <path d={HEX_PATH} transform="scale(1 1.155)" fill="none" stroke="currentColor" strokeWidth={0.012} strokeDasharray="0.06 0.04" />
            </svg>
            <HexImage src="/hardel.webp" alt="" size={56} className="w-14 max-sm:w-10" />
        </div>
    );
}

function Rings() {
    return (
        <div className="pointer-events-none absolute -right-16 -bottom-24 w-72 text-bark-700 max-sm:hidden" aria-hidden>
            <svg viewBox="0 0 1 1.155" className="animate-orbit w-full" style={{ "--duration": "90s", "--direction": "reverse" }}>
                <path d={HEX_PATH} transform="scale(1 1.155)" fill="none" stroke="currentColor" strokeWidth={0.006} />
            </svg>
            <svg viewBox="0 0 1 1.155" className="animate-orbit absolute inset-0 w-full" style={{ "--duration": "60s" }}>
                <path d={HEX_PATH} transform="translate(0.2 0.231) scale(0.6 0.693)" fill="none" stroke="currentColor" strokeWidth={0.008} strokeDasharray="0.05 0.03" />
            </svg>
        </div>
    );
}
