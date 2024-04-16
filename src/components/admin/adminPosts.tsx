import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import Image from "next/image";

export default async function AdminPosts() {
    const posts = await getPosts();
    return (
        <div className="flex flex-col items-center mb-5">
            <h3>Posts</h3>
            {posts.map((post) => (
                <div key={post.id} className="w-full h-16 my-2 flex items-center justify-between gap-5">
                    <div className="flex items-center gap-5">
                        <div className="relative w-12 h-12">
                            <Image className="object-cover" src={post.img ?? '/noavatar.png'} alt="" fill />
                        </div>
                        <span>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button className="py-1 px-2 bg-red-500 rounded border-none">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}