import { prisma } from "@/app/seeds/projects";
import Project from "./Project";

export default async function ProjectWrapper() {
    const projects = await prisma.project.findMany({
        include: {
            technology: true,
        },
    });

    return (
        <div className="flex items-center justify-center gap-5 flex-wrap bg-white dark:bg-black">
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
}
