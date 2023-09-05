import React from 'react'

import Image from 'next/image'
import { getTestimonials } from '@/sanity/sanity-utils'
import { urlForImage } from '@/sanity/lib/image';
import { HiStar } from "react-icons/hi";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="w-full">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col space-y-6">
        <h2 className="text-4xl text-center">
          What Our <span className="text-green">Customers</span> Are Saying
        </h2>
        <p className="m-auto mt-4 max-w-lg text-center text-base text-gray-600">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex flex-1 mt-24 justify-evenly items-center gap-14 max-lg:flex-col">
          {testimonials?.map((item) => (
            <article
              key={item._id}
              className="flex items-center justify-center flex-col">
              <div className="relative h-[120px] w-[120px] rounded-full">
                <Image
                  className="object-cover rounded-full"
                  fill
                  src={urlForImage(item.image).url()}
                  alt={item.client}
                />
              </div>
              <blockquote className="mt-6 max-w-sm text-center text-gray-600 text-base">
                {item.message}
              </blockquote>
              <div className="mt-3 justify-center flex gap-2.5 items-center flex-row">
                <HiStar className="text-yellow h-6 w-6" />
                <p className="text-gray-500">(4.5)</p>
              </div>
              <h3 className="mt-1 text-xl font-medium text-green text-center">
                {item.client}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}