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

export default function TsavoSpecial() {
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
        <h2 className="text-4xl capitalize">Tsavo Special(3 days).</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/tsavo-special/wdogs.jpg"
                fill
                alt="wild dogs"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/tsavo-special/lion.jpg"
                fill
                alt="lion"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/tsavo-special/elephants.jpg"
                fill
                alt="elephants"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full text-">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>Tsavo East N. Park & Taita Hills Sanctuary</p>
          </div>
        </div>
        <div>
          <p className="">
            Tsavo East National Park is situated in the Taita Taveta County of
            Kenya near Voi town and lies approximately 173 km northwest of
            Mombasa. Established in 1948 and covering an area of 1374 square
            kilometers. Its part of the great Tsavo Nationa Park together with
            Tsavo West National Park.
          </p>
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
              type="button"
              // className="py-2 px-4 text-white bg-slate-200 hover:bg-[#29ab87] text-sm"
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
                      Day 1: Mombasa to Tsavo East National Park
                    </h6>
                    <p>
                      Pick up from your location in Mombasa. Begin your journey
                      to Tsavo East National Park. Enjoy a game drive en route
                      to your accommodation. Overnight at a lodge/camp within
                      Tsavo East.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Day 2: Tsavo East to Taita Hills Sanctuary
                    </h6>
                    <p>
                      Early morning game drive in Tsavo East. Return to your
                      lodge for breakfast. Depart for Taita Hills Sanctuary.
                      Arrive and embark on an afternoon game drive. Overnight at
                      a lodge/camp within Taita Hills.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 3: Taita Hills to Mombasa (Airport)
                    </h6>
                    <p>
                      Early morning game drive in Taita Hills Sanctuary. Return
                      to the lodge for breakfast. Depart for Mombasa, with a
                      game drive en route. Arrive in Mombasa, and if time
                      permits, explore local attractions. Transfer to Mombasa
                      Airport for your departure.
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
        <Link
          href="/reservation"
          className="border text-sm w-fit border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
}
