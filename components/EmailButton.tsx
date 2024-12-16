"use client";

import React from "react";
import { Button } from "./ui/moving-border";
import { MdEmail } from "react-icons/md";


export function EmailButton() {
    const handleEmailClick = () => {
        window.location.href = "mailto:sakib1335ansari@gmail.com";
    };
    return (
        <>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 py-3 px-5 flex items-center gap-3 text-md"
                onClick={handleEmailClick}
            >
                <MdEmail /> sakib1335ansari@gmail.com
            </Button>
        </>
    );
}

