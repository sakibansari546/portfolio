import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-gray-300 px-4 md:px-8 py-8 ">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Hey! I&apos;m{' '}
                        <span className="text-[#f78764]">Sakib Ansari</span>{' '}
                        and I&apos;m a full stack developer.
                    </h1>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-48 h-48 relative shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Profile picture"
                                fill
                                className="rounded-2xl object-cover"
                                priority
                            />
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <Link
                                href="https://github.com/sakibansari546"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Github"
                            >
                                <BsGithub size={22} />
                            </Link>
                            <Link
                                href="https://x.com/Sakib_654"
                                target="_blank"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Twitter"
                            >
                                <BsTwitterX size={22} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/sakib-ansari-61388326b/"
                                target='_blank'
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LiaLinkedin size={28} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="space-y-8 max-w-4xl mt-12 md:text-lg">
                    <p className="">
                        Hey! I’m Sakib Ansari, an 18-year-old self-taught full-stack developer from Chandigarh. I’ve dedicated my time to mastering the art of web development after completing my 12th grade. While I’m skilled at working across both frontend and backend technologies, my ultimate goal is to specialize in advanced backend concepts like Redis, Kafka, AWS, and Docker. For me, web development is not just a skill but a way to bring ideas to life and create impactful solutions.
                    </p>

                    <p className="">
                        Over time, I’ve built a solid foundation in technologies like React.js, Next.js, Redux Toolkit, Tailwind CSS, SASS, React Hook Form, and basic TypeScript on the frontend, as well as Node.js, Express.js, MongoDB, PostgressSQL and Prisma on the backend. I’ve also explored real-time communication using Socket.IO and love experimenting with new frameworks and tools to enhance my skills. Through my projects, I’ve tackled real-world challenges, including a social media app for connecting users {' '}
                        <Link href="https://example.com/social-media" target="_blank" rel="noopener noreferrer" className="text-[#f78764] hover:underline">
                            *Socialize*
                        </Link>, a credit management system  for small businesses{' '}
                        <Link href="https://example.com/credit-management" target="_blank" rel="noopener noreferrer" className="text-[#f78764] hover:underline">
                            *Pended*
                        </Link>
                        , a secure authentication system with 2FA, forgot password, and Email verification features{' '}
                        <Link href="https://example.com/authentication-system" target="_blank" rel="noopener noreferrer" className="text-[#f78764] hover:underline">
                            *Authentication*
                        </Link>
                        , and a  chat application  for real-time communication{' '}
                        <Link href="https://example.com/chat-app" target="_blank" rel="noopener noreferrer" className="text-[#f78764] hover:underline">
                            *Chatify*.
                        </Link>
                    </p>

                    <p className="">
                        I’m always eager to collaborate, share ideas, and work on exciting projects. Whether it’s building a product, solving a technical challenge, or exploring new technologies, I believe in creating applications that are not only functional but also user-friendly and visually appealing.
                    </p>
                    <p className="">
                        Let’s connect and create something awesome together!
                    </p>
                </div>


            </div>
        </main>
    )
}

