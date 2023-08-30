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

export default function NairobiSpecial() {
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
        <h2 className="text-4xl capitalize">Nairobi Spacial.</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nairobi-special/leopard.jpg"
                fill
                alt="leopard"
              />
            </div>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nairobi-special/lion.jpg"
                fill
                alt="lion"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
              <Image
                className="object-cover rounded-md"
                src="/safaris/nairobi-special/giraffe.jpg"
                fill
                alt="giraffe"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>Nairobi National Park, Karen Blixen, Giraffe Center</p>
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
                    <h6 className="text-xl font-medium">
                      Morning: Nairobi National Park
                    </h6>
                    <p>
                      Start your day with an early breakfast and at your own
                      convinient time depart for Nairobi National Park, a unique
                      wildlife park located just outside the city. On arrival at
                      Nairobi National Park and begin your morning game drive.
                      Look out for a variety of wildlife including lions,
                      giraffes, rhinos, and more. You will conclude your game
                      drive and break for lunch.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Lunch Break:</h6>
                    <p>
                      You will enjoy lunch at a local restaurant near Nairobi
                      National Park. You can try some authentic Kenyan dishes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Afternoon: Giraffe Center and Karen Blixen Museum
                    </h6>
                    <p>
                      After lunch you depart for the Giraffe Center, a
                      conservation center dedicated to the endangered Rothschild
                      giraffe. You will have an opportunity to feed and interact
                      with these gentle giants. In the evening you will head to
                      the Karen Blixen Museum, located in the former home of the
                      famous Danish author, where you will explore the
                      beautifully preserved house and gardens.
                    </p>
                  </div>

                  <p className="text-green uppercase pt-6">
                    Enjoy your day exploring the fascinating attractions of
                    Nairobi City!
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
