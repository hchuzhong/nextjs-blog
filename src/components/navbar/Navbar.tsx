import Link from "next/link";
import Links from "./link/Links";

export default function Navbar() {
    return (
        <div className="h-24 flex items-center justify-between">
            <Link className="text-lg font-bold" href={'/'}>Z-Blog</Link>
            <Links />
        </div>
    );
}