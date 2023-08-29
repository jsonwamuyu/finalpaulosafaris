import React from 'react'

import Image from 'next/image'
import { getTestimonials } from '@/sanity/sanity-utils'
import { urlForImage } from '@/sanity/lib/image';

export default async function Testimonials(){

  const testimonials = await getTestimonials();

  return (
    <section className="w-full">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col space-y-6">
        <h2 className="text-4xl">Tours Reviews.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 gap-6">
          {testimonials?.map((item) => (
            <article
              key={item._id}
              className="flex flex-row p-2 gap-2 shadow-sm rounded-md bg-white justify-between">
              <div className="relative h-[45px] w-[45px] rounded-full">
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.client}
                  className="rounded-full object-cover"
                  fill
                />
              </div>
              <div className="flex space-y-1 flex-col flex-1">
                <h3 className="text-green text-lg font-medium">
                  {item.client}
                </h3>
                <blockquote className="text-gray-600 text-sm">
                  {item.message}
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}