import Link from "next/link";
import Links from "./link/Links";
import { auth } from "@/lib/auth";

export default async function Navbar() {
    const session = await auth();
    return (
        <div className="h-24 flex items-center justify-between">
            <Link className="text-lg font-bold" href={'/'}>Z-Blog</Link>
            <Links session={session} />
        </div>
    );
}