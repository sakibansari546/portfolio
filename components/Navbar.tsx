"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header onBlurCapture={() => setTimeout(() => setIsOpen(false), 50)} className="bg-white dark:bg-neutral-900 dark:text-white w-full sticky  top-0 z-50 py-4 px-4 md:px-20">
            <div className="flex items-center justify-between">
                <div className="">
                    <Link href='/' className="logo flex items-center gap-3">
                        <Image
                            src='/logo.jpg'
                            alt="logo"
                            width={56}
                            height={56}
                            className="rounded-full overflow-hidden object-cover w-10 h-10 sm:w-14 sm:h-14"
                        />
                        <h1 className="text-lg md:text-2xl font-semibold">Sakib</h1>
                    </Link>
                </div>
                <nav>
                    {/* Hamburger button for mobile */}
                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        <div className={`w-6 h-0.5 bg-black dark:bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-black dark:bg-white mb-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>

                    {/* Navigation menu */}
                    <ul className={`flex flex-col md:flex-row absolute md:relative right-0 left-0 top-16 md:top-0 
                bg-white dark:bg-neutral-900 md:bg-transparent
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0'} 
                ${isOpen ? 'block' : 'hidden'} md:flex
                items-center md:justify-center gap-10 text-lg
                p-4 md:p-0`}>
                        <li className="transform transition hover:scale-110">
                            <Link href='/about'>About</Link>
                        </li>
                        <li className="transform transition hover:scale-110">
                            <Link href='/project'>Projects</Link>
                        </li>
                        <li className="transform transition hover:scale-110">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
