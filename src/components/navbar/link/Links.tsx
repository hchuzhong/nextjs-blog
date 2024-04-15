"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/action";

const linksConfig: {href: string; label: string}[] = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/contact",
        label: "Contact"
    },
    {
        href: "/blog",
        label: "Blog"
    }
]
export default function Links({session}: {session: any}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-around">
            <div className="hidden md:flex">
                {linksConfig.map(link => (
                    <NavLink item={link} key={link.label} />
                ))}
                {session?.user ? (
                    <>
                        { session?.user?.isAdmin && (<NavLink item={{href: "/admin", label: "Admin"}} />) }
                        <form action={handleGithubLogout}>
                            <button className="p-2 cursor-pointer font-bold bg-[--text] text-[--bg] rounded">Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{href: "/login", label: "Login"}} />
                )}
            </div>
            <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
                <Image src="/menu.png" alt="" width={24} height={24} />
            </button>
            {open && (
                <div className="md:hidden absolute top-24 right-0 w-6/12 h-[calc(100vh-96px)] flex flex-col items-center justify-center gap-2 overflow-hidden bg-[var(--bg)]">
                    {linksConfig.map(link => (
                        <NavLink item={link} key={link.label} />
                    ))}
                    {session ? (
                        <>
                            { isAdmin && (<NavLink item={{href: "/admin", label: "Admin"}} />) }
                            <button className="p-2 cursor-pointer font-bold bg-[--text] text-[--bg] rounded">Logout</button>
                        </>
                    ) : (
                        <NavLink item={{href: "/login", label: "Login"}} />
                    )}
                </div>
            )}
        </div>
    );
}