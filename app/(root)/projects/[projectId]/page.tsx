export default async function Page(props: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await props.params;
    return (
        <div className="text-black dark:text-white">
            {projectId}
        </div>
    )
}