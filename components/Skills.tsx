import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPrisma, SiSocketdotio, SiTypescript } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

export function Skills() {
    const data = [
        {
            title: "Frontend",
            content: (
                <div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg font-normal mb-8">
                        I focus on building responsive and user-friendly interfaces using HTML,
                        CSS, and JavaScript. With React.js and React Router DOM, I create
                        dynamic and efficient single-page applications. I manage state with
                        Redux Toolkit to ensure smooth data flow across the app.
                        <br />
                        For UI components, I work with design libraries like ShadCN UI and
                        Daisy UI, ensuring clean and modern interfaces. I focus on
                        performance, accessibility, and responsiveness, delivering scalable
                        applications that work seamlessly on all devices.
                        <br />
                        currently I&apos;m foucsing on Next.js TypeScript.
                    </p>
                    <div className="grid grid-cols-3 gap-5 md:grid-cols-6">
                        <FaHtml5 size={55} color="#E34F26" /> {/* HTML5 Orange */}
                        <FaCss3Alt size={55} color="#1572B6" /> {/* CSS3 Blue */}
                        <FaJs size={55} color="#F7DF1E" /> {/* JavaScript Yellow */}
                        <FaReact size={55} color="#61DAFB" /> {/* React Blue */}
                        <RiNextjsFill size={60} color="white" /> {/* Next.js Black */}
                        <SiTypescript size={50} color="#3178C6" /> {/* TypeScript Blue */}
                    </div>

                </div>
            ),
        },
        {
            title: "Backend",
            content: (
                <div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg font-normal mb-8">
                        In the Backend I building secure, scalable, and high-performance backend
                        systems. My expertise includes Express.js for creating RESTful
                        APIs, ensuring fast and easy integration. I prioritize web
                        security by applying best practices such as input validation,
                        authentication, encryption, and protecting against vulnerabilities like
                        SQL injection and XSS attacks.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg font-normal mb-8">
                        I’ve worked with Socket.IO for real-time communication, optimized
                        performance using Redis for caching, and leveraged Kafka for
                        asynchronous messaging and distributed data processing. My
                        experience spans both SQL (PostgreSQL) and NoSQL (MongoDB)
                        databases, building reliable data architectures.
                        <br />I also use Docker to simplify development and deployment, and
                        AWS for scaling applications seamlessly. My focus is on delivering
                        backend solutions that are secure, robust, and ready to meet real-world
                        challenges.
                    </p>
                    <div className="grid grid-cols-3 gap-5 md:grid-cols-6">
                        <FaNodeJs size={55} color="#339933" /> {/* Node.js Green */}
                        <SiSocketdotio size={55} color="white" /> {/* Socket.io Black */}
                        <SiExpress className="bg-white text-black rounded-full p-2 object-cover font-bold" size={55} color="black" /> {/* Express.js Black */}
                        <DiRedis size={60} color="#DC382D" /> {/* Redis Red */}
                        <SiMongodb size={60} color="#47A248" /> {/* MongoDB Green */}
                        <BiLogoPostgresql size={50} color="#336791" /> {/* PostgreSQL Blue */}
                        <SiPrisma size={50} color="white" /> {/* Prisma Blue */}
                    </div>

                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Card grid component
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
