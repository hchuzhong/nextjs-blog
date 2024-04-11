"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";

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
export default function Links() {
    const [open, setOpen] = useState(false);
    // TODO
    const session = true;
    const isAdmin = true;
    return (
        <div>
            <div className="hidden md:block">
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
            <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>Menu</button>
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