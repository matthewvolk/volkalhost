import { Metadata } from "next";
import Link from "next/link";

import { descending, formatDate } from "@/lib/date";

import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = () => {
  const posts = allBlogs.sort(descending);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <hr className="my-8 dark:border-slate-800" />
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col space-y-2 p-4"
              >
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  {post.description}
                </p>
                {post.updated ? (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatDate(post.updated)}
                  </p>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatDate(post.published)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
