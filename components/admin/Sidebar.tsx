"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, FolderPlus, LayoutDashboard, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UserButton } from "@clerk/nextjs"


const routes = [
    {
        label: "Projects",
        icon: LayoutDashboard,
        href: "/admin",
        color: "text-sky-500",
    },
    {
        label: "Create",
        icon: FolderPlus,
        href: "/admin/create",
        color: "text-violet-500",
    },
    {
        label: "Analytics",
        icon: BarChart,
        href: "/admin/analytics",
        color: "text-pink-700",
    },
]

interface SidebarProps {
    open: boolean
    onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
    const pathname = usePathname();


    return (
        <div
            className={cn(
                "fixed inset-y-0 left-0 z-50 flex w-72 pt-10 flex-col dark:bg-black transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                open ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="flex items-center justify-between p-4">
                <Link href="/admin" className="flex items-center">
                    <h1 className="text-2xl font-bold text-white">Sak<span className="text-[#f78764]">ib</span></h1>
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={onClose}
                >
                    <X className="h-6 w-6 text-white" />
                </Button>
            </div>
            <ScrollArea className="flex-1 px-3 py-2">
                <nav className="flex flex-col space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "flex items-center rounded-lg px-3 py-2 text-sm font-medium",
                                pathname === route.href
                                    ? "bg-white/10 text-white"
                                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                            )}
                            onClick={onClose}
                        >
                            <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="p-4">
                    <UserButton signInUrl="/sign-in" />
                    {/* <span>{user?.firstname}</span> */}
                </div>
            </ScrollArea>
        </div>
    )
}

