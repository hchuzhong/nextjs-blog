"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({item}: {item: {label: string, href: string}}) {
    const pathName = usePathname();
    const regularStyling = "min-w-24 py-2 px-4 rounded-2xl text-center mx-1";
    const activeStyling = "bg-[var(--text)] text-[var(--bg)]";
    
    return (
        <Link href={item.href} className={`${regularStyling} ${pathName === item.href && activeStyling}`}>{item.label}</Link>
    );
}