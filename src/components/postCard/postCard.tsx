import Image from "next/image";
import Link from "next/link";

export default function PostCard({post}) {
    return (
        <div className="flex flex-col gap-4 mb-5 overflow-y-auto">
            <div className="flex">
                {<div className="relative w-11/12 h-96">
                    {post.img && <Image className="object-cover" src={post.img} alt="" fill />}
                </div>}
                <span className="text-xs -rotate-90 m-auto">01.01.2024</span>
            </div>
            <div className="">
                <h1 className="text-2xl font-bold mb-5">{post.title}</h1>
                <p className="mb-5 font-light text-gray-500 w-11/12">{post.body}</p>
                <Link href={`/blog/${post.slug}`} className="underline">READ MORE</Link>
            </div>
        </div>
    );
}