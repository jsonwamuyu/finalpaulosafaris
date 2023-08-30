import React from 'react'
import Image from 'next/image';
import { getTeam } from '@/sanity/sanity-utils';
import { urlForImage } from '@/sanity/lib/image';
import { gallery } from '@/components/constants';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title:"About Us",
  description:"Paulosafaris is a unique Kenya Tour Company based in Mombasa offering Kenya Coastal Beach Holidays, Adventures from Mombasa to Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo Safaris from Mombasa and Maasai Mara Tours."
}

export default async function About() {

  const team = await getTeam();

  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-between pb-4">
          <h2 className=" text-4xl">About Paulosafaris.</h2>
          <p className=" md:max-w-md lg:max-w-lg">
            Paulosafaris is a unique Kenya Tour Company based in Mombasa
            offering Kenya Coastal Beach Holidays, Adventures from Mombasa to
            Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo
            Safaris from Mombasa and Maasai Mara Tours.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 pt-6 pb-8">
          <h2 className="text-2xl tracking-tight">Meet Our Team </h2>

          {/* Our Team */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {team?.map((item) => (
              <div
                key={item._id}
                className="h-[150px] w-full relative flex gap-2 rounded-md bg-white p-2 shadow-sm flex-col max-w-md ">
                <Image
                  src={urlForImage(item.image).url()}
                  fill
                  alt={item.firstname}
                  className="rounded-md object-cover"
                />
                <div className="bg-black rounded-bl-md bg-opacity-20 backdrop-blur-sm absolute w-fit bottom-0 left-0 right-0 drop-shadow-sm px-1 py-[2px] ">
                  <p className="text-yellow uppercase text-sm">
                    {item.firstname}
                    <span className="text-white capitalize">
                      ({item.designation})
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Gallery*/}
        <h3 className="text-2xl tracking-tight">Gallery</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {gallery?.map((item) => (
            <div
              key={item.id}
              className="w-full h-[150px] sm:h-[180px] relative rounded-md">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
