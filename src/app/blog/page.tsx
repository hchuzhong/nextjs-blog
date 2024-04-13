import PostCard from "@/components/postCard/postCard";

export default function BlogPage() {
  const postCardStyleing = "w-full md:w-[45%] xl:w-[30%] "
  return (
    <div className="flex flex-wrap justify-between">
      <div className={postCardStyleing}><PostCard /></div>
      <div className={postCardStyleing}><PostCard /></div>
      <div className={postCardStyleing}><PostCard /></div>
      <div className={postCardStyleing}><PostCard /></div>
    </div>
  );
}
