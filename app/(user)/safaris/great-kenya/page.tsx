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

export default function GreatKenya() {
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
        <h2 className="text-4xl capitalize">Great Kenya (8 days).</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/great-kenya/four.jpg"
                fill
                alt="cheeter"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/great-kenya/impala.jpg"
                fill
                alt="impalas"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/great-kenya/one.jpg"
                fill
                alt="elephants"
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
            Tsavo East N. Park, Amboseli N. Park, Nairobi N. Park, L. Nakuru,
            Maasai Mara N. Park, L. Naivasha
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
                      Day 1: Mombasa to Tsavo East National Park
                    </h6>
                    <p>
                      Pick up from your location in Mombasa. Depart for Tsavo
                      East National Park. Enjoy a game drive en route to your
                      accommodation. Overnight at a lodge/camp within Tsavo
                      East.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Day 2: Tsavo East to Amboseli National Park
                    </h6>
                    <p>
                      Early morning game drive in Tsavo East. Return to the
                      lodge for breakfast. Depart for Amboseli National Park.
                      Arrive and embark on an afternoon game drive. Overnight at
                      a lodge/camp within Amboseli.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 3: Amboseli to Nairobi
                    </h6>
                    <p>
                      Early morning game drive in Amboseli. Return to the lodge
                      for breakfast. Depart for Nairobi. Arrive and have leisure
                      time to explore the attractions of Nairobi City. Overnight
                      in Nairobi.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 4: Nairobi National Park and Lake Nakuru
                    </h6>
                    <p>
                      Early morning breakfast. Embark on a game drive in Nairobi
                      National Park. Return to the hotel for breakfast. Depart
                      for Lake Nakuru National Park. Afternoon game drive in
                      Lake Nakuru. Overnight at a lodge/camp near Lake Nakuru.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 5: Lake Nakuru to Maasai Mara
                    </h6>
                    <p>
                      Early morning game drive in Lake Nakuru. Return to the
                      lodge for breakfast. Depart for Maasai Mara National
                      Reserve. Arrive and enjoy an afternoon game drive.
                      Overnight at a lodge/camp in Maasai Mara.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 6: Full Day in Maasai Mara
                    </h6>
                    <p>
                      Enjoy a full day of game drives in Maasai Mara. Witness
                      the incredible wildlife and landscapes. Experience the
                      Great Migration (if in season). Overnight at the same
                      lodge/camp.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 7: Maasai Mara to Lake Naivasha
                    </h6>
                    <p>
                      Morning game drive in Maasai Mara. After breakfast, depart
                      for Lake Naivasha. Arrive and enjoy a boat ride on Lake
                      Naivasha. Explore Crescent Island for a walking safari.
                      Overnight in Lake Naivasha.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 8: Lake Naivasha to Nairobi Airport
                    </h6>
                    <p>
                      Morning at leisure or optional activities. After
                      breakfast, depart for Nairobi. Arrive in Nairobi and
                      explore any last-minute attractions or shopping. Transfer
                      to Nairobi Airport for your departure.
                    </p>
                  </div>

                  <p className="text-green uppercase text-lg mt-8">
                    Enjoy your comprehensive Kenyan safari adventure!
                  </p>
                </div>
              </div>
            )}
          </div>
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
}
