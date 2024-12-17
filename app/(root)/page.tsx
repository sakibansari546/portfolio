import { Features } from "@/components/F";
import Hero from "@/components/Hero";
import { Skills } from "@/components/Skills";
import ProjectHeading from "@/components/ProjectHeading";
import ProjectWrapper from "@/components/ProjectWrapper";

import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";

import { Suspense } from "react";

export default function Home() {

  return (
    <>
      <Hero />
      <Skills />
      <div>
        <ProjectHeading />
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectWrapper />
        </Suspense>
      </div>
      <Features />
    </>
  );
}
