import { ProjectsTable } from "@/components/admin/projects-table"

export default function AdminPage() {
    return (
        <div className="space-y-4 w-full">
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <div className="border rounded-lg">
                <ProjectsTable />
            </div>
        </div>
    )
}

