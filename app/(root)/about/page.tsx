import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-gray-300 px-4 md:px-8 py-8">
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
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="space-y-8 max-w-4xl mt-12">
                    <p className="text-lg">
                        I&apos;m Piyush Garg, and I&apos;ve always been passionate about technology and education. My
                        journey has taken me through various roles—content creator, developer, entrepreneur,
                        and innovator—all driven by a deep love for sharing knowledge and making complex
                        concepts more understandable.
                    </p>

                    <div>
                        <p className="text-lg mb-4">
                            As a YouTuber, I&apos;ve built{' '}
                            <Link href="#" className="text-[#f78764] hover:underline">
                                my channel
                            </Link>{' '}
                            around my passion for technology and education. My goal is to make the world of
                            programming and software development more accessible to everyone, regardless of their
                            background or experience level. I remember how challenging it was when I first started
                            learning to code, and that&apos;s why I&apos;m committed to breaking down complex concepts into
                            simple, easy-to-understand tutorials.
                        </p>
                    </div>

                    <p className="text-lg">
                        For me, YouTube is more than just a platform; it&apos;s a way to give back to the
                        community that helped me grow.
                    </p>

                    <div>
                        <p className="text-lg mb-4">
                            As a content creator, I realized there were significant gaps in the tools available
                            for educators like me. I decided to take matters into my own hands. That&apos;s how{' '}
                            <Link href="#" className="text-[#f78764] hover:underline">
                                Teachyst
                            </Link>{' '}
                            was born—a platform designed to empower educators to share their knowledge without
                            worrying about the technical side of things. Today, Teachyst serves over 10,000
                            students, and I&apos;m proud to say it&apos;s helping teachers and learners alike have a
                            smoother, more professional experience.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

