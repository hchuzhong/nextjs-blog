import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Page",
};


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default async function BlogPage() {
  // const posts = await getPosts();
  const posts = await getData();
  return (
    <div className="flex flex-wrap justify-between">
      {posts.map(post => <div className="w-full md:w-[45%] xl:w-[30%]" key={post.id}><PostCard post={post} /></div>)}
    </div>
  );
}
