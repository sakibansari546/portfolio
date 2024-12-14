import React from 'react'
import { Cover } from './ui/cover'
import { WavyBackground } from './ui/wavy-background'

const Hero = () => {
    return (
        <>
            <main className="w-full min-h-screen flex items-center justify-center gap-10">
                <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Hey its me, <span className="text-[#f78764]">Sakib</span> <br />{" "}
                        Trust me, I&apos;m a{" "}
                        <Cover>
                            Developer
                        </Cover>
                    </h1>
                    <p className="mt-4 font-normal text-xs md:text-base text-neutral-300/70 max-w-lg text-center mx-auto leading-relaxed">
                        <span className="text-white/80 font-ld text-xs md:text-sm">
                            Why Work With Me?
                        </span>{" "}
                        I’m a{" "}
                        <span className="text-white/80 font-">
                            hardworking full-stack developer
                        </span>{" "}
                        with strong expertise in backend technologies like
                        <span className="text-white/80 font-"> RESTful APIs</span>,{" "}
                        <span className="text-white/80 font-">Socket.IO</span>,
                        <span className="text-white/80 font-"> Kafka</span>,{" "}
                        <span className="text-white/80 font-">Docker</span>,
                        <span className="text-white/80 font-"> AWS</span> etc. and databases
                        (<span className="text-white/80 font-">MongoDB</span> and
                        <span className="text-white/80 font-"> PostgreSQL</span>).
                        {/* <br /> */}
                        On the frontend, I work with{" "}
                        <span className="text-white/80 font-">React.js</span>,
                        <span className="text-white/80 font-"> Redux Toolkit</span>, and{" "}
                        <span className="text-white/80 font-">React Hook Form</span>, while
                        learning <span className="text-white/80 font-">Next.js</span> and{" "}
                        <span className="text-white/80 font-">TypeScript</span>.
                        {/* <br /> */}
                        I’m dedicated to building{" "}
                        <span className="text-white/80 font-">robust</span>,{" "}
                        <span className="text-white/80 font-">scalable</span>, and{" "}
                        <span className="text-white/80 font-">user-friendly</span>{" "}
                        solutions.
                    </p>

                    <p className="text-center text-white/40 font-extralight">~ChatGpt</p>
                </div>
            </main>

            {/* Wavy Background Section */}
            <section className="relative w-full h-[400px] md:h-[500px]">
                {/* Wavy Background */}
                <WavyBackground className="absolute top-0 left-0 w-full h-full z-10" />

                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="bg-white text-black py-2 px-8 text-lg font-semibold rounded-full shadow-lg">
                        Ask Me Anything
                    </button>
                </div>
            </section>
        </>
    )
}

export default Hero
