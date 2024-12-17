import { prisma } from "@/app/seeds/projects";
import Project from "./Project";

export default async function ProjectWrapper() {
    const projects = await new Promise((resolve) => {
        setTimeout(async () => {
            const result = await prisma.project.findMany({
                include: {
                    technology: true,
                },
            });
            resolve(result);
        }, 3000);
    });

    return (
        <>
            <div className="flex items-center justify-center gap-5 flex-wrap">
                {
                    projects.map((project) => (
                        <Project key={project.id} />
                    ))
                }
            </div>
        </>
    )
}