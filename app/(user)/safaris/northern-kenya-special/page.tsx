"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NorthernKenyaSpecial() {
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
        <h2 className="text-4xl capitalize">
          Northern Kenya Special (6 days).
        </h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/impalas.jpg"
                fill
                alt="impalas"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/rhin.jpg"
                fill
                alt="rhinos"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/lions.jpg"
                fill
                alt="lions"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>
              Aberdare N. Park, Samburu G. Reserve, Mt. Kenya & Sweetwaters
              Sanctuary
            </p>
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
                      Full board accommodation whilst on safari.
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
                      Accommodation in double/ twin/ tripple room sharing.
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <FaCheckCircle size={16} className="text-green" />
                      </span>
                      Meal plan as described, B=Breakfast, L=Lunch and D=Dinner.
                    </p>

                    <p>
                      <span className="inline-block mr-2">
                        <FaCheckCircle size={16} className="text-green" />
                      </span>
                      Exclusive transport in a safari tour bus 4x4 with a game
                      viewing roof hatch and UHF radio.
                    </p>

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
                      All transport and game drives will be in a 4x4 tour
                      minivan with an open roof hatch. A vehicle can take a
                      maximum of 6 people each guaranteed a window seat.
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
                    <h6 className="text-xl font-medium">
                      Day 1: Aberdare National Park
                    </h6>
                    <p>
                      Depart early from Nairobi. Arrive at Aberdare National
                      Park and embark on a game drive. Enjoy the diverse
                      landscapes and wildlife. Spend the night at a lodge or
                      camp within the park.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Day 2: Samburu Game Reserve
                    </h6>
                    <p>
                      After breakfast, depart for Samburu Game Reserve. Arrive
                      and go on an afternoon game drive. Look out for unique
                      wildlife species like the reticulated giraffe and Grevy's
                      zebra. Spend the night at a lodge or camp within the
                      reserve.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 3: Samburu Game Reserve
                    </h6>
                    <p>
                      Enjoy a full day of game drives in Samburu. Explore
                      different areas of the reserve and witness the wildlife
                      interactions. Immerse yourself in the rugged beauty of the
                      region. Overnight at the same lodge or camp.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 4: Mount Kenya National Park or Meru National Park
                    </h6>
                    <p>
                      Depart for either Mount Kenya National Park or Meru
                      National Park, depending on your choice. Arrive and enjoy
                      game drives or other activities available. Experience the
                      unique ecosystems of the chosen park. Spend the night at a
                      lodge or camp within the park.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 5: Sweetwaters Chimpanzee Sanctuary
                    </h6>
                    <p>
                      Head to Sweetwaters Chimpanzee Sanctuary. Visit the
                      chimpanzee sanctuary and the Ol Pejeta Conservancy. Enjoy
                      game drives and see the Big Five. Spend the night at a
                      lodge or camp within the conservancy.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 6: Return to Nairobi
                    </h6>

                    <p>
                      Have an early breakfast. Depart for Nairobi, approximately
                      a 3 to 4-hour drive. Arrive in Nairobi and be dropped off
                      at the airport for your flight.
                    </p>
                  </div>

                  <p className="text-green uppercase text-lg mt-8">
                    Enjoy your safari adventure!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
