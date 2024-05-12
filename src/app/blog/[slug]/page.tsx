import MarkdownEditor from "@/components/markdownEditor/markdownEditor";
import { getPost, getUser } from "@/lib/data";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

// export const generateMetadata = async ({params}: {params: any}) => {
//         const { slug } = params;
//         const post = await getPost(slug);
//         return {
//                 title: post.title,
//                 description: post.desc,
//         }
// }

const getData = async (slug: number) => {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
}

export default async function BlogChildPage({params}: {params: any}) {
    const { slug } = params;
    const post = await getPost('react mardown blog');
    const user = await getUser('661bb7145c2c3ad553939c51');

    const detailTexStyling = "flex flex-col gap-1";
    const detailTitleStyling = "text-gray-500 font-bold";
    const detailValueStyling = "font-medium";
    return (
        <div className="flex gap-12 h-[calc(100vh-192px)]">
            <div className="hidden md:block flex-1 relative h-[calc(100vh-192px)]">
                <Image className="object-cover" src={post.img} alt="" fill />
            </div>
            <div className="flex-[2] flex flex-col gap-6">
                <h1 className="text-4xl">{post.title}</h1>
                <div className="flex gap-4">
                    <div className="relative w-12 h-12">
                        <Image className="object-cover rounded-full" src={user.img ?? '/noavatar.png'} alt="" fill />
                    </div>
                    <div className={detailTexStyling}>
                        <span className={detailTitleStyling}>Author</span>
                        <span className={detailValueStyling}>{user.username}</span>
                    </div>
                    <div className={detailTexStyling}>
                        <span className={detailTitleStyling}>Published</span>
                        <span className={detailValueStyling}>{post.createdAt.toString().slice(0, 16)}</span>
                    </div>
                </div>
                <div className="prose prose-invert">
                    <ReactMarkdown>{post.desc}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
