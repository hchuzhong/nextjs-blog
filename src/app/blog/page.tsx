import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="flex flex-wrap justify-between">
      {posts.map(post => <div className="w-full md:w-[45%] xl:w-[30%]" key={post.id}><PostCard post={post} /></div>)}
    </div>
  );
}
