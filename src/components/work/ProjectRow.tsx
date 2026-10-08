import Icon from "@/components/ui/Icon";
import type { Project } from "@/lib/projects";
import { cn, compact } from "@/lib/utils";

export default function ProjectRow({ project, delay }: { project: Project; delay: number }) {
    const Root = project.href ? "a" : "div";
    return (
        <Root
            href={project.href}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noreferrer" : undefined}
            style={{ "--delay": `${delay}ms` }}
            className={cn("group rise flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors duration-150", project.href && "hover:bg-bark-800")}>
            <img src={project.icon} alt="" width={44} height={44} className="size-11 shrink-0 rounded-lg border border-line" />
            <span className="flex min-w-0 flex-1 flex-col">
                <span className="font-semibold text-cream-50">{project.name}</span>
                <span className="truncate text-sm text-cream-400">{project.text}</span>
            </span>
            {project.downloads !== undefined && <span className="hidden shrink-0 font-mono text-label text-cream-500 sm:block">{compact(project.downloads)} downloads</span>}
            {project.status && (
                <span className="hidden shrink-0 items-center gap-2 font-mono text-label text-cream-500 sm:flex">
                    <span className={cn("size-1.5 rounded-full", project.status === "Beta" ? "bg-leaf-400" : "bg-oak-400")} />
                    {project.status}
                </span>
            )}
            {project.href && <Icon name="northEast" className="size-4 shrink-0 text-cream-500 transition-colors group-hover:text-cream-50" />}
        </Root>
    );
}
