"use client";

import React from "react";
import Image from "next/image";
import { nakuru } from "@/components/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowCircleRight } from "react-icons/hi";
import Link from "next/link";

const LakeNakuru = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToshow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl capitalize">Lake Nakuru National Park</h2>

        <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
          {/* Image and overview */}
          <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2">
            {/* Image Carausel*/}
            <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
              <Slider {...settings}>
                <div className="w-full h-[300px] sm:h-[350px] relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nakuru/flamingo.jpg"
                    fill
                    alt="flamingo"
                  />
                </div>
                <div className="w-full h-[300px] sm:h-[350px] relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nakuru/baboon.jpg"
                    fill
                    alt="Baboon"
                  />
                </div>
                <div className="w-full h-[300px] sm:h-[350px] relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nakuru/bufallo.jpg"
                    fill
                    alt="bufallo"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <p className="text-gray-700">
                Lake Nakuru National Park, located in Kenya - Rift Valley, is a
                compact gem known for its stunning pink flamingo spectacle. The
                park is centerpiece, Lake Nakuru, attracts a vast number of
                these elegant birds, creating a breathtaking sight. Beyond the
                flamingos, the park is home to a diverse range of wildlife,
                including rhinos, buffaloes, and elusive leopards. Its compact
                size makes it easy to explore, offering visitors a rewarding
                safari experience in a short amount of time.
              </p>
            </div>
          </div>
        </div>

        {/* Park activity, attraction,climate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full py-8 gap-4">
          <div className="space-y-2">
            <h6 className="text-xl">Attractions</h6>
            <ul className="list-disc text-sm text-gray-700 pl-6">
              <li>
                <span className="font-semibold">Flamingo</span> Greater and
                Lesser and other water birds including a variety of terrestrial
                birds numbering about 450 species in total.
              </li>
              <li>
                <span className="font-semibold">Mammals</span>- 56 different
                species including White Rhinos, Waterbuck etc.
              </li>
              <li>
                <span className="font-semibold">Waterfalls</span>: Makali
              </li>
              <li>
                <span className="font-semibold">Unique vegetation</span>- about
                550 different plant species including the unique and biggest
                euphobia forest in Africa, Picturesque landscape and yellow
                acacia woodlands.
              </li>
              <li>
                <span className="font-semibold">View-points</span>- Lion Hill,
                Baboon Clif, and Out of Africa.
              </li>
              <li>
                <span className="font-semibold">Hills</span>- Enasoit,
                Honeymoon, Lion Hill ridge etc.
              </li>
              <li>Cycle with rhino event every September yearly.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Key Features</h6>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>
                White Rhino, Boboon, Zebra, Lion, Waterbuck, Flamingo, Buffalo,
                Cheeter
              </li>
              <li>Prolific birdlife features 450 species</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Park Activities</h6>
            <ul className="list-disc pl-6 text-sm">
              <li className="text-sm text-gray-700 pl-6">
                Picnic, Bird Watching, Camping, Game Viewing, Photography,
                Hiking
              </li>
            </ul>
          </div>
        </div>

        {/*Park  Gallery*/}
        <h3 className="text-xl tracking-tight">Park Gallery</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {nakuru.map((item) => (
            <div
              key={item.id}
              className="w-full h-[150px] sm:h-[180px] relative rounded-md hover:scale-105 duration-300 ease-out transition-all">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
        <Link
          href="/reservation"
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all w-fit ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default LakeNakuru;
