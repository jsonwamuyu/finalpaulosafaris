"use client";

import { useState } from "react";
import {  HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import Link from "next/link";

  
  export default function FAQs(){
  
    const [toggle, setToggle] = useState(false);
    const [toggleOne, setToggleOne] = useState(true);
    const [toggleTwo, setToggleTwo] = useState(false)
    const [toggleThree, setToggleThree] = useState(false)
    const [toggleFour, setToggleFour] = useState(false)
    const [toggleFive, setToggleFive] = useState(false)
    const [toggleSix, setToggleSix] = useState(false)
  
    return (
      <section className="w-full min-h-screen">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <h2 className="text-4xl">FAQs.</h2>

          <div className="w-full sm:max-w-5xl flex-col space-y-4 ">
            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center">
                {toggleOne ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleOne(!toggleOne)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleOne(!toggleOne)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  What are the things included in the safari package?
                </h4>
              </div>
              {toggleOne && (
                <p className="text-base text-gray-500 pl-8 ">
                  Inluded are all expenses in respect of safari vehicles, driver
                  guide as per itinerary, meals while on safari, accomodation,
                  entrance fees to National parks and Game reserves.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center">
                {toggle ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggle(!toggle)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggle(!toggle)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  Time taken to receive refunds?
                </h4>
              </div>
              {toggle && (
                <p className="text-base text-gray-500 pl-8 ">
                  Refunds are processed within 30 days of reservation
                  cancelling. This is a subject to our{" "}
                  <Link href="/terms_conditions" className="text-red underline">
                    terms and conditions
                  </Link>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center">
                {toggleTwo ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleTwo(!toggleTwo)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleTwo(!toggleTwo)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  What kind of vehicles used?
                </h4>
              </div>
              {toggleTwo && (
                <p className="text-base text-gray-500 pl-8 ">
                  Tours car, pop up top safari minibus and 4x4 Land Cruiser
                  Jeeps will be provided depending on safari program/itinerary
                  and number of participants. The company reserves the rights to
                  employ of the same standard sub-contractor(s).
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center">
                {toggleThree ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleThree(!toggleThree)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleThree(!toggleThree)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  Is the weather generally favourable for me?
                </h4>
              </div>
              {toggleThree && (
                <p className="text-base text-gray-500 pl-8 ">
                  East africa climate is typically sunny,dry, and warm,though
                  there are some variations.December through March is warmer
                  with high chance of occasional rains. April expect more rains.
                  May throuh November is cooler and drier.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center ">
                {toggleFour ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleFour(!toggleFour)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleFour(!toggleFour)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  Whare can I store my valuables while on safari?
                </h4>
              </div>
              {toggleFour && (
                <p className="text-base text-gray-500 pl-8 ">
                  Safaris are typically safe, we highly encourage you to
                  practice some level of precautions. You are highly recommended
                  that the valuables that are unnecessary during the safari be
                  left at home.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center ">
                {toggleFive ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleFive(!toggleFive)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleFive(!toggleFive)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  Would you recommend malaria jab?
                </h4>
              </div>
              {toggleFive && (
                <p className="text-base text-gray-500 pl-8 ">
                  Yes, because malaria is common in East Africa.We recommend you
                  to consult your local travel clinic or personal physician for
                  the most appropriate medication. You can also carry some
                  insect repellant.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 relative ">
              <div className="flex flex-row gap-2 sm:items-center">
                {toggleSix ? (
                  <HiMinusCircle
                    size={20}
                    onClick={() => setToggleSix(!toggleSix)}
                    className="cursor-pointer text-green"
                  />
                ) : (
                  <HiPlusCircle
                    size={20}
                    onClick={() => setToggleSix(!toggleSix)}
                    className="cursor-pointer text-green"
                  />
                )}
                <h4 className="text-xl capitalize flex-1">
                  Do I need sunscreen while on safari?
                </h4>
              </div>
              {toggleSix && (
                <p className="text-base text-gray-500 pl-8 ">
                  Its highly recommended to bring along your preferred form of
                  sun protection.This include SPF30 or higher sunblock, hats,
                  sunglasses, and thin long-sleeve shirts and pants.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );}