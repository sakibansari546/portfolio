
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export function Features() {
    return (
        <div className="py-32 dark:bg-black bg-white">
            <h1 className="text-5xl text-black font-bold  dark:text-white text-center pb-14">
                Some <span className="text-[#f78764]">Memories</span>
            </h1>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="normal"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        image: "/memory/1.jpg",
        name: "Charles Dickens",
        title: "Author of A Tale of Two Cities",
    },
    {
        image: "/memory/8.jpg",
        name: "William Shakespeare",
        title: "Author of Hamlet",
    },
    {
        image: "/memory/3.jpg",
        name: "Jane Austen",
        title: "Author of Pride and Prejudice",
    },
    {
        image: "/memory/4.jpg",
        name: "Herman Melville",
        title: "Author of Moby-Dick",
    },
];
const testimonials2 = [
    {
        image: "/memory/5.jpg",
        name: "Charles Dickens",
        title: "Author of A Tale of Two Cities",
    },
    {
        image: "/memory/6.jpg",
        name: "William Shakespeare",
        title: "Author of Hamlet",
    },
    {
        image: "/memory/7.jpg",
        name: "Jane Austen",
        title: "Author of Pride and Prejudice",
    },
    {
        image: "/memory/9.jpg",
        name: "Herman Melville",
        title: "Author of Moby-Dick",
    },
];