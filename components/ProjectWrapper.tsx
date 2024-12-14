import Project from "./Project";

export default function ProjectWrapper() {
    return (
        <>
            <div className="flex items-center justify-center gap-5 flex-wrap">
                <Project />
                <Project />
                <Project />
            </div>
        </>
    )
}