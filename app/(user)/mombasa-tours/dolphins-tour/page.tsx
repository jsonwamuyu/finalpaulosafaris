"use client";

import Image from "next/image";
import { HiArrowCircleRight, HiLocationMarker } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function DolphinsTour() {
  const [toggle, setToggle] = useState("description");

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
      <div className="max-w-4xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col gap-8 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl capitalize">Dolphins Watching Tour.</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[250px] sm:h-[300px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/dolphin-tour/four.jpg"
                fill
                alt="dolphins"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/dolphin-tour/one.jpg"
                fill
                alt="dolphins"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/dolphin-tour/two.jpg"
                fill
                alt="dolphins"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/dolphin-tour/three.jpg"
                fill
                alt="dolpgins"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>Wasin Island Kenya</p>
          </div>
        </div>
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className={
                toggle == "description"
                  ? "bg-[#29ab87] text-white px-4 py-2  text-sm"
                  : "bg-slate-200 px-4 py-2 hover:bg-[#29ab87] hover:text-white text-base"
              }
              onClick={() => setToggle("description")}>
              Description
            </button>
            <button
              type="button"
              className={
                toggle == "itinerary"
                  ? "bg-[#29ab87] text-white text-sm py-2 px-4"
                  : "py-2 px-4 bg-slate-200 hover:text-white hover:bg-[#29ab87] text-sm"
              }
              onClick={() => setToggle("itinerary")}>
              Itinerary
            </button>
          </div>

          {/* desc,itinerary, price */}
          <div className="space-y-8 pt-12">
            {toggle == "description" ? (
              <div className="space-y-6">
                <h4 className=" text-3xl">Description</h4>
                <div className="space-y-4">
                  <h6 className="text-2xl">Includes</h6>
                  <ul className="pl-6 text-base space-y-2">
                    <p>
                      <span className="inline-block mr-2">
                        <FaCheckCircle size={16} className="text-green" />
                      </span>
                      All park entrance fees to include government taxes and
                      service of an english speaking professional guide.
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <FaCheckCircle size={16} className="text-green" />
                      </span>
                      Game drives as detailed in the itinerary.
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <FaCheckCircle size={16} className="text-green" />
                      </span>
                      Meal plan as described, B=Breakfast, L=Lunch and D=Dinner.
                    </p>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h6 className="text-2xl">Excludes</h6>
                  <ul className="pl-6 text-base space-y-2">
                    <p>
                      <span className="inline-block mr-2">
                        <GiPadlock size={14} className="text-yellow" />
                      </span>
                      Between snacks, parks, attractions, and events not
                      included in your itinerary.
                    </p>
                    <p>
                      <span className="inline-block mr-2">
                        <GiPadlock size={14} className="text-yellow" />
                      </span>
                      Alcoholic and non-alcoholic beverages (Mineral water
                      provided in the minivan while on game drive).
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <GiPadlock size={14} className="text-yellow" />
                      </span>
                      International airfares and departure taxes.
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <GiPadlock size={14} className="text-yellow" />
                      </span>
                      Tips, laundry, drinks, and personal needs or any item of
                      personal nature.
                    </p>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h4 className="text-3xl">Itinerary</h4>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Morning:</h6>
                    <p>
                      Depart from your accommodation in Mombasa or Diani Beach
                      and head towards Shimoni, the departure point for the
                      Wasini Island tour.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">Dolphin Watching:</h6>
                    <p>
                      Embark on a traditional dhow (sailing boat) for your
                      dolphin watching adventure. The crew will provide safety
                      instructions and insights about marine life of the area .
                      Midmorning - set sail into the Indian Ocean in search of
                      dolphins. Enjoy the scenic views of the coastline along
                      the way.Around midday return from dolphin watching and
                      head back to Shimoni for your lunch.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Lunch:</h6>
                    <p>
                      Enjoy a delicious Swahili-style seafood lunch at a local
                      restaurant in Shimoni. This will include crabs, robsters,
                      fresh seafood, coconut rice, and other traditional dishes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Afternoon:</h6>
                    <p>
                      After lunch you will explore the Shimoni Slave Caves.
                      These historic caves were used during the slave trade and
                      provide insight into a dark period of history. Guided
                      tours are available to learn about importance of the
                      caves. Later you will take a short boat ride from Shimoni
                      to Wasini Island, known for its laid-back atmosphere and
                      beautiful surroundings.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Wasini Island Exploration:
                    </h6>
                    <p>
                      You can take a leisurely stroll through the village,
                      interact with the friendly locals, and take in the
                      picturesque views.You will also visit the Wasini Island
                      Coral Garden. This is an opportunity for snorkeling or
                      simply enjoying the clear waters and vibrant marine life.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Sunset and Departure:
                    </h6>
                    <p>
                      As the day winds down, relax on the beach, enjoy the
                      sunset, and reflect on your adventures of the day. You can
                      now at your preferred time depart from Wasini Island and
                      head back to your accommodation, concluding your memorable
                      1-day Dolphin Tour at Wasini Island.
                    </p>
                  </div>

                  <p className="text-green uppercase pt-6">
                    Enjoy your dolphin watching tour and the unique experiences
                    it offers!
                  </p>
                </div>
              </div>
            )}
          </div>
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
