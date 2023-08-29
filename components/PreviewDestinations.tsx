import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { prev_destination } from './constants'
import { HiArrowCircleRight } from "react-icons/hi";

const PreviewDestinations = () => {
  return (
    <section className="w-full duration-300 ease-out transition-all bg-white">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 py-16">
        <div className="flex gap-1 flex-row justify-between">
          <h2 className="text-4xl">Top destinations.</h2>
          <Link
            className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] hidden sm:flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium"
            href="/destinations">
            <p>View More</p>
            <HiArrowCircleRight size={18} />
          </Link>
        </div>
        <div className="w-full py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
            {prev_destination.map((item) => (
              <Link
                href={item.url}
                className=" group cursor-pointer relative w-full h-[200px] rounded-md"
                key={item.id}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className=" object-cover rounded-md group-hover:grayscale group-hover:scale-105 transition-all filter duration-300 ease-out"
                  fill
                />
                <div className=" px-1 py-[2px] w-fit rounded-sm absolute bottom-1 bg-green left-1 right-0 flex flex-col">
                  <p className="text-white text-sm capitalize">{item.place}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            className="border sm:hidden text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out w-fit font-medium"
            href="/destinations">
            <p>View More</p>
            <HiArrowCircleRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewDestinations;