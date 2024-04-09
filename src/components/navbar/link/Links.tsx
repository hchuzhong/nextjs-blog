import Link from "next/link";

const linksConfig = [
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
    },
    {
        href: "/admin",
        label: "Admin"
    }
]
export default function Links() {
    return (<>
        {linksConfig.map(link => (
            <Link key={link.label} href={link.href}>{link.label}</Link>
        ))}
    </>);
}