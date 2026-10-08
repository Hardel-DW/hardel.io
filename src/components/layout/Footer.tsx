import HexImage from "@/components/ui/HexImage";
import Icon from "@/components/ui/Icon";
import { NAV, SOCIALS } from "@/lib/links";

export default function Footer() {
    return (
        <footer className="page">
            <div className="flex flex-col items-center gap-5 border-t border-line py-12 text-center">
                <a href="/#top" className="flex items-center gap-2.5 font-mono text-[15px] font-semibold text-cream-50">
                    <HexImage src="/favicon.png" alt="" size={28} className="w-7" />
                    hardel.io
                </a>
                <div className="flex gap-0.5">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className="grid size-9 place-items-center rounded-lg text-cream-400 transition-colors hover:bg-bark-800 hover:text-cream-50">
                            <Icon name={social.name} className="size-4.5" />
                        </a>
                    ))}
                </div>
                <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {NAV.map((item) => (
                        <a key={item.id} href={`/#${item.id}`} className="font-mono text-[13px] text-cream-400 transition-colors hover:text-cream-50">
                            {item.label}
                        </a>
                    ))}
                </nav>
                <p className="font-mono text-xs text-cream-500">© {new Date().getFullYear()} Hardel. Not affiliated with Mojang or Microsoft.</p>
            </div>
        </footer>
    );
}
