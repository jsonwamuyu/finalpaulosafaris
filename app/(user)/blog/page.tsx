import Image from 'next/image';
import Link from 'next/link'
import {getBlogs} from "../../../sanity/sanity-utils"
import { urlForImage } from '@/sanity/lib/image';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title:"Blog",
  description:"We provide rich, informative and accurate content to our readers."
}

export default async function Blogs(){

  const blogs = await getBlogs();

  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-sm:pb-12 8 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl">Blogs.</h2>
        <article className="w-full flex flex-row gap-12 flex-wrap">
          {blogs?.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              prefetch
              key={blog._id}
              className="cursor-pointer flex flex-col sm:flex-row bg-white p-2 py-4 rounded-md gap-4">
              <div className="relative w-full sm:w-[200px] h-[200px] sm:h-[150px] rounded-md">
                <Image
                  src={urlForImage(blog.image).url()}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium sm:max-w-xs line-clamp-2">
                  {blog.title}
                </h3>
                <p className="line-clamp-2 sm:max-w-xs text-sm text-gray-600">
                  {blog.content}
                </p>
                {/* Author and published date */}
                <div className="flex flex-row gap-2 items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="w-[30px] h-[30px] rounded-full relative">
                      <Image
                        src={urlForImage(blog.authorimage).url()}
                        fill
                        className="rounded-full object-cover"
                        alt={blog.author}
                      />
                    </div>
                    <p className="text-yellow">{blog.author}</p>
                  </div>
                  <p className="text-[12px] text-gray-400 italic">
                    {new Date(blog._createdAt).toLocaleDateString("en", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </article>
      </div>
    </section>
  );
  
}