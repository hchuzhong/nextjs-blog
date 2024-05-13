import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";
import Link from '@/components/link/link';
import Pagination from "@/components/pagination/pagination";
import { MAX_DISPLAY } from '@/lib/global';

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Page",
};


const getData = async (searchParams: { [key: string]: string | string[] | undefined }) => {
  let params = '';
  for (const param in searchParams) {
    if (searchParams[param] !== undefined) {
      params += `${param}=${searchParams[param]}&`;
    }
  }
  const res = await fetch(`http://localhost:3000/api/blog?${params}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const response = await getData(searchParams);
  const {posts, totalPages, page} = response;

  return (
    <div className="flex-1 flex flex-col">
      <ul className="flex-1">
        {posts.map((post) => {
          const { slug, createdAt, title, desc } = post;
          const summary = desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
          return (
            <li key={slug} className="py-5">
              <article className="flex flex-col space-y-2 xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time>{createdAt.toString().slice(0, 16)}</time>
                  </dd>
                </dl>
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-100 dark:text-gray-400">
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
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </div>
  );
}
