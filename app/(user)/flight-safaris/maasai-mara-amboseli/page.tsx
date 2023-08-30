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

export default function MaasaiMaraAmboseli() {
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
          Masai Mara & Amboseli Flight Tour.
        </h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/impalas.JPG"
                fill
                alt="impalas"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/rhin.JPG"
                fill
                alt="rhinos"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nothern-kenya/lions.JPG"
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
            <p>Maasai Mara & Amboseli National Parks</p>
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
                      Day 1: Arrival and Transfer to Maasai Mara
                    </h6>
                    <p>
                      You will board flight from Nairobi to Maasai Mara
                      airstrip. Upon arrival, you will be picked up by a
                      minivan/4x4 Land Cruise. You will enjoy a game drive en
                      route to your hotel where you will have lunch and relax,
                      preparing for the afternoon game drive.At your convinient
                      time you will embark on an afternoon game drive in the
                      park. You will spend your night at the hotel as you
                      prepare for the next day full day game drive.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Day 2: Full Day Game Drive
                    </h6>
                    <p>
                      You will begin your day with an early morning breakfast at
                      the lodge and later park lunch boxes for a full day of
                      game drives. You will have an opportunity to explore the
                      diverse landscapes and wildlife of Maasai Mara park. Later
                      in the evening you will return to your lodge and spend
                      another night as you prepare to departure the following
                      day to Amboseli National Park.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 3: Maasai Mara to Amboseli
                    </h6>
                    <p>
                      There will be an early morning game drive and then return
                      to the lodge for breakfast. You will enjoy a game drive en
                      route on your way to Maasai Mara Airstrip. You will board
                      a flight to Amboseli Airstrip. Upon arrival, a guide will
                      drive you to your hotel and on the way, you will enjoy a
                      game drive en route. You will have your lunch and relax
                      before embarking on the evening game drive. You will spend
                      the night at your Amboseli accommodation as you prepare
                      for the full day game drive that will take place the day
                      that follows.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 4: Full Day Game Drive in Amboseli
                    </h6>
                    <p>
                      You will start your day with an early morning breakfast
                      then pack lunch boxes for a full day of game drives. You
                      will explore the iconic landscapes and wildlife of
                      Amboseli then in the evening at your own convinient time
                      you will return to the lodge. You will spend another night
                      at your Amboseli accommodation as you prepare for your
                      depature the following morning.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Day 5: Amboseli Morning Game Drive and Departure
                    </h6>
                    <p>
                      You will embark on an early morning game drive in Amboseli
                      the on a later time return to the lodge for your
                      breakfast. You will enjoy a game drive en route to
                      Amboseli Airstrip where you will board your flight to your
                      preferred destination.
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
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium w-fit">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
}
