import ProjectHeading from "./ProjectHeading";
import ProjectWrapper from "./ProjectWrapper";

export default function Projects() {
    console.log("server or client??");

    return (
        <section className="projects">
            <ProjectHeading />

            <div>
                <ProjectWrapper />
            </div>
        </section>
    )
}