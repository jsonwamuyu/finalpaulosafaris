import React from 'react';
import Image from 'next/image';
import { getDestination } from '@/sanity/sanity-utils';
import { urlForImage } from '@/sanity/lib/image';
import { HiArrowCircleRight } from "react-icons/hi";
import Link from "next/link";

export default async function Destination({
  params,
}: {
  params: { slug: string };
}) {
  const destination = await getDestination(params.slug);

  return (
    <section className="w-full min-h-screen">
      <div className="max-w-4xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl">{destination.name}</h2>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px]">
          <Image
            src={urlForImage(destination.image).url()}
            alt={destination.name.substring(0, 20)}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <p>{destination.content}</p>
        </div>
        <Link
          href="/reservation"
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
}