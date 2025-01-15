import { prisma } from "@/lib/prisma";
import Project from "./Project";

export type ProjectsType = Array<{
    id: string;
    name: string;
    short_desc: string;
    description: string | null;
    image: string;
    github: string;
    live: string;
    created_by: string;
    createdAt: Date;
    updatedAt: Date;
    technology: {
        id: string;
        frontend: string[];
        backend: string[];
    };
}> | null;


export default async function ProjectWrapper() {
    const projects: ProjectsType = await prisma.project.findMany({
        include: {
            technology: true,
        },
    });

    return (
        <div className="flex items-center justify-center gap-5 flex-wrap bg-white dark:bg-black">
            {projects.length > 0 ? (
                projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))
            ) : (
                <p>No projects available.</p>
            )}
        </div>
    );
}
