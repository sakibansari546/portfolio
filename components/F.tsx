
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Features() {
    return (
        <div className="py-32">
            <h1 className="text-5xl text-black font-bold dark:text-white text-center pb-14">
                Features
            </h1>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        image: "https://via.placeholder.com/350",
        name: "Charles Dickens",
        title: "Author of A Tale of Two Cities",
    },
    {
        image: "https://via.placeholder.com/350",
        name: "William Shakespeare",
        title: "Author of Hamlet",
    },
    {
        image: "https://via.placeholder.com/350",
        name: "Jane Austen",
        title: "Author of Pride and Prejudice",
    },
    {
        image: "https://via.placeholder.com/350",
        name: "Herman Melville",
        title: "Author of Moby-Dick",
    },
];