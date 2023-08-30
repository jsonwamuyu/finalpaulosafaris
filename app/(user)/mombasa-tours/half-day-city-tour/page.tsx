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

export default function HalfDayCityTour() {
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
        <h2 className="text-4xl capitalize">Mombasa City Half Day Tour.</h2>

        {/* Image Carausel*/}
        <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
          <Slider {...settings}>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/city-tour/one.jpg"
                fill
                alt="mombasa"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/city-tour/two.jpg"
                fill
                alt="mombasa"
              />
            </div>
            <div className="w-full h-[300px] sm:h-[350px] relative">
              <Image
                className="object-cover rounded-md"
                src="/mombasa-tours/city-tour/crocodile.jpg"
                fill
                alt="crocodile"
              />
            </div>
          </Slider>
        </div>
        {/* location */}
        <div className="flex justify-between items-center flex-row gap-8 w-full">
          <div className="flex flex-row gap-1 sm:items-center text-black/70">
            <HiLocationMarker size={18} />
            <p>
              Mombasa Old Town, Wood Carvings Center(Akamba), Croccodile
              Farm(Nyali)
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
                      Start your day with a pickup from your accommodation at
                      your own convinient time. Then head to Mombasa Old Town
                      which is known for its historic charm and vibrant culture.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">Mombasa Old Town:</h6>
                    <p>
                      Explore the narrow winding streets and admire the
                      distinctive architecture. Visit historical sites like Fort
                      Jesus and the Old Port. Experience the blend of Swahili,
                      Arab, and European influences.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Mid-mornig</h6>
                    <p>
                      Depart from Mombasa Old Town and head to the Akamba Wood
                      Carvings Center.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">
                      Akamba Wood Carvings Center (Akamba Craftsmen Cooperative
                      Society):
                    </h6>
                    <p>
                      Arrive at the wood carvings center, home to skilled
                      artisans. Learn about traditional wood carving techniques
                      and see intricate creations. Have the opportunity to
                      purchase unique souvenirs.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Late Morning:</h6>
                    <p>
                      Leave the wood carvings center and proceed to the
                      Crocodile Farm.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h6 className="font-medium text-xl">
                      Crocodile Farm (Mamba Village - Nyali):
                    </h6>
                    <p>
                      Arrive at the Crocodile Farm, a sanctuary for crocodiles
                      and other reptiles. Witness the impressive crocodile
                      feeding session. Explore the lush gardens and enjoy a
                      relaxing atmosphere.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h6 className="text-xl font-medium">Afternoon:</h6>
                    <p>
                      Conclude your half-day tour. Depending on your
                      preferences, you can be dropped off at your accommodation
                      or another location in Mombasa.
                    </p>
                  </div>
                  <p className="text-green uppercase text-lg mt-8">
                    Enjoy your Mombasa city tour and the unique experiences it
                    offers!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <Link
          href="/reservation"
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out w-fit font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </div>
    </section>
  );
}
