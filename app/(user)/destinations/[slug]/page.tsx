import React from 'react';
import Image from 'next/image';
import { getDestination } from '@/sanity/sanity-utils';
import { urlForImage } from '@/sanity/lib/image';


export default async function Destination({params}:{params:{slug: string}}) {

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
        <div className="flex flex-wrap flex-row gap-2"></div>
      </div>
    </section>
  );

}