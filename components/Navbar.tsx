import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBuilding,
    IconFlare,
    IconHome,
} from "@tabler/icons-react";
import Image from "next/image";

export function Navbar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-32 w-32 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Projects",
            icon: (
                <IconBuilding className="h-32 w-32 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "AI",
            icon: (
                <IconFlare className="h-32 w-32 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Aceternity UI",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
    ];
    return (
        <header className="flex items-center justify-center  w-full fixed top-10 z-50">
            <nav>
                <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                />
            </nav>
        </header>
    );
}
