"use client";

import React from "react";
import Image from "next/image";
import { maasai } from "@/components/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";

const Maasai = () => {
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
        <h2 className="text-4xl capitalize">Maasai mara game reserve</h2>

        <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
          {/* Image and overview */}
          <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2">
            {/* Image and overview */}
            <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2">
              {/* Image Carausel*/}
              <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
                <Slider {...settings}>
                  <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                    <Image
                      className="object-cover rounded-md"
                      src="/maasai/wbeasts.jpg"
                      fill
                      alt="wild beasts"
                    />
                  </div>
                  <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                    <Image
                      className="object-cover rounded-md"
                      src="/maasai/mara1.jpg"
                      fill
                      alt="elephants"
                    />
                  </div>
                  <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
                    <Image
                      className="object-cover rounded-md"
                      src="/maasai/ostrich.JPG"
                      fill
                      alt="ostrich"
                    />
                  </div>
                </Slider>
              </div>
              <div>
                <p className="text-gray-700">
                  Amboseli National Park, nestled at the foot of Mount
                  Kilimanjaro in southern Kenya, is a captivating wildlife
                  sanctuary known for its stunning vistas and diverse wildlife.
                  Spanning over 390 square kilometers, the park boasts vast
                  grasslands, seasonal swamps, and acacia woodlands, providing
                  an ideal habitat for numerous animal species, including
                  elephants, lions, giraffes, zebras, and various bird species.
                  Visitors to Amboseli are rewarded with breathtaking views of
                  tallest mountain in Africa as a backdrop to the abundant
                  wildlife. Renowned for its elephant herds and iconic
                  landscapes, Amboseli National Park offers an unforgettable
                  safari experience in the wilderness of heart of Africa.
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-700">
                Maasai Mara Game Reserve, located in southwestern Kenya, is a
                celebrated wildlife reserve and an integral part of the
                Serengeti ecosystem. Encompassing over 1,500 square kilometers,
                this pristine wilderness boasts a diverse landscape of
                savannahs, grasslands, and acacia woodlands. Maasai Mara is
                renowned for its remarkable wildlife, including the iconic
                African Big Five, and hosts the incredible Great Migration
                spectacle annually. Visitors can experience thrilling game
                drives, witness mesmerizing wildlife encounters, and immerse
                themselves in the vibrant culture of the Maasai people. With its
                abundant biodiversity and breathtaking scenery, Maasai Mara
                remains an unparalleled destination for unforgettable safari
                adventures.
              </p>
            </div>
          </div>
        </div>

        {/* Park activity, attraction,climate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full py-8 gap-4">
          <div className="space-y-2">
            <h6 className="text-xl">Attractions</h6>
            <ul className="list-disc text-sm text-gray-700 pl-6">
              <li>Lerge herds of elephants</li>
              <li>Mount Kilimanjaro</li>
              <li>Big Five</li>
              <li>
                Observation Hill which allows an overall view of the whole park
                especially the swamps and elephants
              </li>
              <li>
                Swamp bellow observation hill hosts many elephants, buffalos,
                hippos, and a variety of water fowls like pelican, Egyptian
                goose.
              </li>
              <li>Contemporary Maasai culture and indigenous lifestyle.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Key Features</h6>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>
                Leopard, Cheeter, Wild dogs, Buffalo, Elephant, Giraffe, Zebra,
                Lion, Crocodile, Mongoose, Hyrax, Dik-dik, Lesser Kudu, and
                Nocturnal Porcupine
              </li>
              <li>Prolific birdlife features 600 species</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Park Activities</h6>
            <li className="text-sm text-gray-700 pl-6">
              Bird Watching, Camping, Game Viewing, Photography, Scenic
            </li>
          </div>
        </div>

        {/*Park  Gallery*/}
        <h3 className="text-xl tracking-tight">Reserve Gallery</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {maasai.map((item) => (
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
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Maasai;
