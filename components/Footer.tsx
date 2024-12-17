import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
    return (
        <>
            <hr className="opacity-50" />
            <footer className="dark:bg-black bg-white dark:text-white flex items-center justify-center w-full py-8  md:py-14">
                <div className="">
                    <div className="flex gap-3 items-center text-center justify-center">
                        <Image
                            width={56}
                            height={56}
                            className="rounded-full overflow-hidden object-cover w-10 h-10 sm:w-14 sm:h-14"
                            alt="logo"
                            src='/logo.jpg'
                        />
                        <p className="text-xl md:text-2xl font-bold">Sakib.dev</p>
                    </div>
                    <div className="text-center space-x-10 py-5 font-light">
                        <Link href='/about'>About</Link>
                        <Link href='/project'>Projects</Link>
                        <Link href='/contact'>Contact</Link>
                    </div>
                    <div className="flex items-center justify-center w-full gap-8 text-lg text-neutral-700 dark:text-netural-200">
                        <Link className="text-gray-400 hover:text-white transition-colors"
                            href="https://github.com/sakibansari546"><BsGithub /></Link>
                        <Link className="text-gray-400 hover:text-white transition-colors"
                            href="https://twitter.com/Sakib_654"><BsTwitterX /></Link>
                        <Link className="text-gray-400 hover:text-white transition-colors"
                            href="https://www.linkedin.com/in/sakib-ansari-61388326b/"><LiaLinkedin size={25} /></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}