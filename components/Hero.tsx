import React from 'react'
import { Cover } from './ui/cover'
import { WavyBackground } from './ui/wavy-background'

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full min-h-[80vh] flex items-center justify-start gap-10 bg-gradient-to-b from-neutral-100/30 via-white/30 to-neutral-200/30 dark:from-neutral-800 dark:via-neutral-900 dark:to-black">
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-white dark:to-neutral-400 bg-opacity-70 leading-tight">
                        Hey, It&apos;s me <span className="text-[#f78764]">Sakib</span> <br />
                        Trust me, I&apos;m a{" "}
                        <Cover>
                            Developer
                        </Cover>
                    </h1>
                    <p className="mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-300 max-w-xl text-left leading-relaxed">
                        <span className="font-medium text-md sm:text-md text-neutral-700 dark:text-neutral-200">
                            Why Work With Me?
                        </span>{" "}
                        I&apos;m a hardworking full-stack developer with strong expertise in backend technologies like RESTful APIs, Socket.IO, Kafka, Docker, AWS, etc., and databases (MongoDB and PostgreSQL).
                        <br />
                        On the frontend, I work with React.js, Redux Toolkit, and React Hook Form, while learning Next.js and TypeScript.
                        <br />
                        I&apos;m dedicated to building robust, scalable, and user-friendly solutions.
                    </p>

                    <p className="text-left text-neutral-600 dark:text-neutral-400 font-extralight mt-4 text-xs sm:text-sm">
                        ~ChatGpt
                    </p>
                </div>
            </section>


            {/* Wavy Background Section */}
            <section className="relative w-full h-[400px] md:h-[500px]">
                {/* Wavy Background */}
                <WavyBackground className="absolute top-0 left-0 w-full h-full z-10" />

                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pl-4">
                    <button className="bg-neutral-900 text-white py-2 px-6 md:px-8 text-md md:text-lg font-semibold rounded-full shadow-lg dark:bg-white dark:text-black">
                        Ask Me Anything
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hero
