import { SparklesCore } from "./ui/sparkles";

export default function ProjectHeading() {
    return (
        <>
            <div className="mt-52 w-full bg-white dark:bg-black flex flex-col items-center overflow-hidden rounded-md">
                <h1 className="md:text-7xl text-5xl lg:text-7xl font-bold text-center text-black dark:text-white relative z-20">
                    Projects
                </h1>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#f78764] dark:via-[#ffb07e] to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#b86f52] dark:via-[#ff9470] to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[rgb(99,65,51)] dark:via-[rgb(160,90,70)] to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#392a16] dark:via-[#613820] to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor={"#ffffff"} // For light/dark mode
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
        </>
    )
}
