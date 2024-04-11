import Links from "./link/Links";

export default function Navbar() {
    return (
        <div className="h-24 flex items-center justify-between">
            <div className="text-lg font-bold">Logo</div>
            <Links />
        </div>
    );
}