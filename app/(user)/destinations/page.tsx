import Link from 'next/link';
import Image from 'next/image';
import { getDestinations } from "../../../sanity/sanity-utils"
import { urlForImage } from '@/sanity/lib/image';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Safari Destinations',
  description: 'Amboseli National Park, Maasai Mara National Reserve,Tsavo, Sweetwaters, Lake Naivasha, Lake Nakuru, Taita Hills Sanctuary, Samburu Game Reserve, Maru National Park, Nairobi National Park, Lake Bogoria, Lake Baringo, Solio Ranch, Mount Kenya, Abadare National Park, Lake Manyara, Kilimanjaro National Park, Serengeti Game Reserve.(We are also flexible to customize destinations to acccommodate client needs)',
}

export default async function Destinations(){

  const destinations = await getDestinations();

  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl">Destinations.</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-8">
          {destinations.map((dest) => {
            console.log(dest.image);
            return (
              <Link
                href={`/destinations/${dest.slug}`}
                prefetch
                key={dest._id}
                className="group relative w-full h-[150px] sm:h-[180px] flex flex-col  bg-white shadow-sm rounded-md items-center">
                <Image
                  src={urlForImage(dest.image).url()}
                  alt={dest.name}
                  fill
                  className="object-cover rounded-md group-hover:scale-105 duration-300 ease-out filter group-hover:grayscale transition-all"
                />
                <div className=" px-1 py-[2px] w-fit absolute bottom-0 bg-green left-0 rounded-bl-md right-0 ">
                  <h4 className="text-yellow text-sm capitalize">
                    {dest.name}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );

}

