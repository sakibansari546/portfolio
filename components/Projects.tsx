// // import { prisma } from "@/app/seeds/projects";
// import { Suspense } from "react";

// import ProjectHeading from "./ProjectHeading";
// import ProjectWrapper from "./ProjectWrapper";
// import ProjectsSkeleton from "./skeletons/ProjectsSkeleton";

// export default async function Projects() {
//     // const projects = await prisma.project.findMany({ include: { technology: true } });
//     return (
//         <section className="projects">
//             <ProjectHeading />
//             <Suspense fallback={<ProjectsSkeleton />} >
//                 <ProjectWrapper />
//             </Suspense>
//         </section>
//     )
// }