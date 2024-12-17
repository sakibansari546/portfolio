export default function ProjectsSkeleton() {
    return (
        <div className="min-h-screen bg-black p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[1, 2, 3].map((card) => (
                    <div key={card} className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-4 px-6">
                        <div className="p-6 space-y-4">
                            {/* Title skeleton */}
                            <div className="h-7 bg-zinc-800 rounded-md w-3/4 animate-pulse rounded-xl"></div>
                            {/* Subtitle skeleton */}
                            <div className="h-4 bg-zinc-800 rounded-md w-full animate-pulse rounded-xl"></div>
                        </div>
                        {/* Image skeleton */}
                        <div className="h-48 bg-zinc-800 animate-pulse rounded-xl"></div>
                        <div className="p-6 flex justify-between items-center">
                            {/* "Try now" text skeleton */}
                            <div className="h-4 bg-zinc-800 rounded-md w-20 animate-pulse rounded-xl"></div>
                            {/* Button skeleton */}
                            <div className="h-9 bg-zinc-800 rounded-md w-24 animate-pulse rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

