"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";


export default function Project({ project }) {
    const { name, short_desc, image, github, live, id } = project;

    return (

        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 min-h-[400px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-[#f78764] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
                >
                    {short_desc}
                </CardItem>
                <CardItem as={Link} href={`/projects/${id}`} translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={live}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Live now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={github}
                        target="__blank"
                        className="px-4 py-2 flex items-center gap-1.5 rounded-xl dark:text-white hover:underline text-black text-sm font-bold"
                    >
                        <BsGithub /> Github
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}