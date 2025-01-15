import Image from 'next/image'
import { CheckSquare, } from 'lucide-react'
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { prisma } from '@/lib/prisma';

export type ProjectType = {
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
} | null;



export default async function Page(props: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await props.params;

    const project: ProjectType = await prisma.project.findFirst({
        where: {
            id: projectId,
        },
        include: {
            technology: true,
        },
    })


    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Course Banner */}
                    <div className="bg-[#FFD700]/10 overflow-hidden rounded-lg">
                        <div className="relative aspect-[16/9]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#B8860B]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image className='w-full h-full object-cover' src={project?.image || ""} alt={project?.name || "Project Image"} width={300} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Info */}
                    <div className="space-y-6">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            {project?.name}
                        </h1>

                        <p className="text-sm md:text-md text-gray-400">
                            By: <span className="text-blue-400 hover:underline cursor-pointer">{project?.created_by}</span>
                        </p>

                        <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                            {project?.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={project?.github || "#"} target='__blank' className="flex-1 bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors text-center flex items-center justify-center gap-3">
                                <BsGithub /> <span>Github</span>
                            </Link>
                            <Link href={project?.live || "#"} target='__blank' className="flex-1 border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors text-center flex items-center justify-center gap-3">
                                <CheckSquare size={18} /><span>Live Demo</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-14">
                    <div className="border-b border-gray-700 mb-8">
                        <div className="-mb-px flex" aria-label="Tabs">
                            <h3 className='md:text-4xl text-2xl font-bold mb-1'>Tech Stack</h3>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mt-3'>
                            <h3 className="text-xl font-semibold border-b border-gray-700 mb-4">Frontend -</h3>
                            <ul className="list-disc ml-10 text-md md:text-lg">
                                {project?.technology?.frontend.map((tech, index) => (
                                    <li key={index} className="text-gray-300 pb-3 text-sm">{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <h3 className="text-xl font-semibold border-b border-gray-700 mb-4">Backend -</h3>
                            <ul className="list-disc ml-10 text-md md:text-lg">
                                {project?.technology?.backend.map((tech, index) => (
                                    <li key={index} className="text-gray-300 pb-3 text-sm">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}