"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function Project({ project }) {
    const { name, short_desc, image, github, live, id } = project;

    return (
        <CardContainer className="inter-var">
            {/* Wrap the whole CardBody inside Link, no need for nested <a> tag */}
            {/* <Link href={`/projects/${id}`}> */}
            <CardBody className="bg-gray-50 min-h-[400px] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-[#f78764] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {short_desc}
                </CardItem>
                <CardItem as={Link} href={`/projects/${id}`} translateZ="100" className="w-full mt-4">
                    <Image
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    {/* For external links, you don't need to wrap them in Link again */}
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={live}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Live now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={github}
                        target="__blank"
                        className="px-4 py-2 rounded-xl dark:text-white hover:underline text-black text-sm font-bold"
                    >
                        Github
                    </CardItem>
                </div>
            </CardBody>
            {/* </Link> */}
        </CardContainer>
    );
}
