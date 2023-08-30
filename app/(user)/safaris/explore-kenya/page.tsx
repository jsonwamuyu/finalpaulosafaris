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

export default function ExploreKenya() {
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
        <h2 className="text-4xl capitalize">Explore Kenya (14 days).</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/explore-kenya/six.jpg"
                fill
                alt="sunset"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/explore-kenya/five.jpg"
                fill
                alt="zebras"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/explore-kenya/lion.jpg"
                fill
                alt="lions"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full">
          <p className=" text-black/70">
            <span className="inline-block mr-1">
              <HiLocationMarker size={18} />
            </span>
            Aberdare N. Park, Samburu G. Reserve, Sweetwaters Sanctuary, Solio
            Ranch, L. Nakuru, Maasai Mara, L. Naivasha N. Park, Amboseli N.
            Park, Tsavo East & West N. Park
          </p>
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
                      Day 1: Arrival in Nairobi - Aberdare National Park
                    </h6>
                    <p>
                      Arrive in Nairobi and meet your guide. Depart for Aberdare
                      National Park. Enjoy a game drive en route to your
                      accommodation. Overnight at a lodge/camp within Aberdare.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Days 2-3: Samburu Game Reserve
                    </h6>
                    <p>
                      After an early breakfast, depart for Samburu Game Reserve.
                      Spend two full days exploring Samburu. Enjoy game drives
                      and witness unique wildlife. Experience the rugged beauty
                      of Samburu. Overnight at a lodge/camp in Samburu.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 4: Sweetwaters Chimpanzee Sanctuary
                    </h6>
                    <p>
                      Depart for Sweetwaters Chimpanzee Sanctuary after an early
                      breakfast. Visit the chimpanzee sanctuary and Ol Pejeta
                      Conservancy. Enjoy game drives and see the Big Five.
                      Overnight at a lodge/camp in Sweetwaters.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Day 5: Solio Ranch</h6>
                    <p>
                      Depart for Solio Ranch after an early breakfast. Arrive
                      and embark on an afternoon game drive. Discover the
                      diverse wildlife and landscapes. Overnight at a lodge/camp
                      in Solio Ranch.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 6: Lake Nakuru National Park
                    </h6>
                    <p>
                      Depart for Lake Nakuru after an early breakfast. Arrive
                      and enjoy an afternoon game drive. Witness the flamingos
                      and other wildlife. Overnight at a lodge/camp near Lake
                      Nakuru.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Days 7-8: Maasai Mara National Park
                    </h6>
                    <p>
                      Depart for Maasai Mara after early breakfast. Spend two
                      full days exploring the Maasai Mara. Witness the Great
                      Migration (if in season). Encounter the Big Five and other
                      wildlife. Overnight at a lodge/camp in Maasai Mara.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 9: Lake Naivasha
                    </h6>
                    <p>
                      Depart for Lake Naivasha early after breakfast. Enjoy a
                      boat ride on Lake Naivasha. Explore Crescent Island for a
                      walking safari. Overnight in Lake Naivasha.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 10: Amboseli National Park
                    </h6>
                    <p>
                      Depart for Amboseli after breakfast. Arrive and embark on
                      an afternoon game drive. Enjoy iconic views of Mount
                      Kilimanjaro. Overnight at a lodge/camp in Amboseli.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 11: Tsavo West National Park
                    </h6>
                    <p>
                      Depart for Tsavo West after breakfast. Arrive and explore
                      the diverse landscapes. Visit Mzima Springs and enjoy a
                      game drive. Overnight at a lodge/camp in Tsavo West.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 12: Tsavo East National Park
                    </h6>
                    <p>
                      Depart for Tsavo East after breakfast. Arrive and enjoy a
                      game drive. Encounter the unique wildlife of Tsavo.
                      Overnight at a lodge/camp in Tsavo East.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 13: Return to Nairobi or Mombasa
                    </h6>
                    <p>
                      Depart for Nairobi or mombasa after early breakfast.
                      Arrive and have leisure time to explore Nairobi or
                      Mombasa. Overnight in Nairobi or Mombasa.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Day 14: Departure</h6>
                    <p>
                      After an early breakfast, transfer to your preferred
                      destination to catch your flight.
                    </p>
                  </div>
                  <p className="text-green uppercase text-lg mt-8">
                    Enjoy your in-depth exploration of the diverse landscapes
                    and wildlife! of Kenya
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
