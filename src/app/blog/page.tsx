import PostCard from "@/components/postCard/postCard";
import { getPosts, getRecentPosts } from "@/lib/data";
import { Metadata } from "next";
import Link from '@/components/link/link';
import { usePathname } from "next/navigation";
import Pagination from "@/components/pagination/pagination";

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
  const displayPosts = await getRecentPosts();
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(displayPosts.length / 5),
  }
  
  return (
    <div>
      <ul>
        {displayPosts.map((post) => {
          const { path, date, title, summary } = post
          return (
            <li key={path} className="py-5">
              <article className="flex flex-col space-y-2 xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{date.slice(0, 10)}</time>
                  </dd>
                </dl>
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {summary}
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  );
}
