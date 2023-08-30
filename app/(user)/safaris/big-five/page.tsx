"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BigFive() {
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
        <h2 className="text-4xl capitalize">Big Five (5 days).</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[250px] sm:h-[300px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/big-five/bufallo.jpg"
                fill
                alt="bufallos"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/big-five/rhino.jpg"
                fill
                alt="rhinos"
              />
            </div>
            <div className="w-full h-[250px] sm:h-[300px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/big-five/lions.JPG"
                fill
                alt="lions"
              />
            </div>
          </Slider>
        </div>

        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full text-">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>Lake Nakuru & Maasai Mara National Park</p>
          </div>
        </div>
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className={
                toggle == "description"
                  ? "bg-[#29ab87] text-white px-4 py-2  text-base"
                  : "bg-slate-200 px-4 py-2 hover:bg-[#29ab87] hover:text-white text-base"
              }
              onClick={() => setToggle("description")}>
              Description
            </button>
            <button
              className={
                toggle == "itinerary"
                  ? "bg-[#29ab87] text-white text-sm py-2 px-4"
                  : "py-2 px-4 bg-slate-200 hover:text-white hover:bg-[#29ab87] text-base"
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
                      Day 1: Arrival in Nairobi - Transfer to Lake Nakuru
                    </h6>
                    <p>
                      Arrive in Nairobi and meet your driver/guide. Depart for
                      Lake Nakuru after breakfast. Arrive at Lake Nakuru
                      National Park. Enjoy an afternoon game drive. Overnight at
                      a lodge/camp near Lake Nakuru.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Day 2: Full Day in Lake Nakuru
                    </h6>
                    <p>
                      Spend the full day exploring Lake Nakuru National Park.
                      Observe the diverse birdlife and wildlife, including
                      rhinos. Visit the scenic viewpoints and enjoy the
                      landscapes. Overnight at the same lodge/camp.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 3: Lake Nakuru to Maasai Mara
                    </h6>
                    <p>
                      Depart for Maasai Mara after breakfast. Arrive at Maasai
                      Mara National Reserve. Afternoon game drive in the Mara.
                      Overnight at a lodge/camp in Maasai Mara.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 4: Full Day in Maasai Mara
                    </h6>
                    <p>
                      Enjoy a full day of game drives in Maasai Mara. Witness
                      the incredible wildlife and potentially the Great
                      Migration. Explore different areas of the reserve.
                      Overnight at the same lodge/camp.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 5: Maasai Mara to Nairobi Departure
                    </h6>
                    <p>
                      Morning game drive in Maasai Mara. After breakfast, depart
                      for Nairobi. Arrive in Nairobi and proceed to any
                      last-minute shopping or sightseeing. Transfer to the
                      airport for your departure.
                    </p>
                  </div>

                  <p className="text-green uppercase text-lg mt-8">
                    Enjoy your time exploring Lake Nakuru and Maasai Mara!
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
