import ProjectHeading from "@/components/ProjectHeading";
import ProjectWrapper from "@/components/ProjectWrapper";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import { Suspense } from "react";

export default async function Page() {

    return (
        <div className="py-8 px-4">
            <ProjectHeading />
            <Suspense fallback={<ProjectsSkeleton />} >
                <ProjectWrapper />
            </Suspense>
        </div>
    )
}