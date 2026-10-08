import type React from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HexDefs from "@/components/ui/HexDefs";
import Honeycomb from "@/components/ui/Honeycomb";
import { createHoneycomb } from "@/lib/honeycomb";

const EDGES = createHoneycomb({ columns: 44, rows: 26, radius: 30, seed: 11, density: 0.07 });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh flex-col">
            <HexDefs />
            <Honeycomb data={EDGES} className="fixed -z-10 hidden opacity-70 mask-[linear-gradient(to_right,#000,transparent_22%,transparent_78%,#000)] lg:block" />
            <Header />
            <main className="page flex flex-1 flex-col gap-(--gap) pt-[calc(3.5rem+var(--gap)*2)] pb-(--gap)">{children}</main>
            <Footer />
        </div>
    );
}
