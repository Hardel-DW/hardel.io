import type React from "react";
import HexImage from "@/components/ui/HexImage";
import Icon from "@/components/ui/Icon";
import { NAV, SOCIALS } from "@/lib/links";

const HEADER_SOCIALS = SOCIALS.filter((social) => social.name === "discord" || social.name === "x" || social.name === "youtube" || social.name === "github");

const closeOnLink = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.closest("a")) event.currentTarget.hidePopover();
};

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-(--gap) z-50">
            <div className="page">
                <div className="card flex h-14 items-center gap-6 pr-2.5 pl-4">
                    <nav className="scroll-spy flex items-center gap-6">
                        <a href="/#top" className="flex shrink-0 items-center gap-2.5 font-mono text-ui font-semibold text-cream-50">
                            <HexImage src="/favicon.png" alt="" size={28} eager className="w-7" />
                            hardel.io
                        </a>
                        <div className="hidden items-center gap-0.5 md:flex">
                            <NavLinks />
                        </div>
                    </nav>
                    <div className="ml-auto flex items-center gap-0.5">
                        {HEADER_SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="hidden size-9 place-items-center rounded-lg text-cream-400 transition-colors duration-150 hover:bg-bark-800 hover:text-cream-50 sm:grid">
                                <Icon name={social.name} className="size-4.5" />
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="bevel ml-2 hidden h-9 items-center gap-2 bg-oak-600 px-4 text-sm font-semibold text-white transition-colors duration-150 bevel-2 hover:bg-oak-500 sm:flex">
                            Commission
                        </a>
                        <button type="button" popoverTarget="menu" aria-label="Menu" className="grid size-9 cursor-pointer place-items-center rounded-lg text-cream-200 hover:bg-bark-800 md:hidden">
                            <Icon name="menu" />
                        </button>
                    </div>
                </div>
                <nav
                    id="menu"
                    popover="auto"
                    onClick={closeOnLink}
                    className="card scroll-spy fixed top-[calc(3.5rem+var(--gap)*2)] right-(--gap) left-(--gap) m-0 w-auto flex-col gap-1 p-2 open:flex md:hidden">
                    <NavLinks />
                    <a href="/#contact" className="bevel mt-1 flex h-10 items-center justify-center bg-oak-600 text-sm font-semibold text-white bevel-2">
                        Commission
                    </a>
                </nav>
            </div>
        </header>
    );
}

function NavLinks() {
    return NAV.map((item) => (
        <a
            key={item.id}
            href={`/#${item.id}`}
            className="shrink-0 rounded-lg px-3 py-1.5 text-ui font-medium text-cream-400 transition-colors duration-150 hover:text-cream-50 current:bg-bark-800 current:text-cream-50">
            {item.label}
        </a>
    ));
}
