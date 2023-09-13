import Link from "next/link";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const ContactUsBanner = () => {
  return (
    <section className="w-full -mt-[7px] bg-slate-100">
      <article className="max-w-7xl mx-auto py-12 sm:py-16 px-8 flex flex-col space-y-8 justify-center items-center">
        <h2 className="text-4xl text-green text-center pb-8">Our Services</h2>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between gap-8 flex-col sm:flex-row">
            <div className="border p-4 rounded w-full">
              <h5 className="text-2xl leading-normal text-center sm:text-start">
                Kenya Tours
              </h5>
              <p className="text-gray-500 leading-normal text-center sm:text-start lg:max-w-lg mt-3">
                Samburu Game Reserve, Tsavo West/ East National Park, Maasai
                Mara Game Reserve, Solio Ranch, Amboseli National Park, Meru
                National Park,Sweetwaters Sanctuary, Nairobi National Park, Lake
                Nakuru National Park, Lake Naivasha National Park, Lake Bogiria,
                Lake Baringo, Taita Hills Sanctuary
              </p>
            </div>
            <div className="border p-4 rounded-md w-full">
              <h5 className="text-2xl leading-normal sm:text-start text-center">
                Tanzania Tours
              </h5>
              <p className="text-gray-600 leading-normal sm:text-start text-center lg:max-w-lg mt-3">
                Serengeti National Park, Arusha, Dar es Salaam, Kilimanjaro
                National Park, Lake Manyara National Park, Ngorongoro Crater
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-8 flex-col sm:flex-row">
            <div className="border rounded-md w-full p-4">
              <h5 className="text-2xl leading-normal sm:text-start text-center">
                Rwanda Tours
              </h5>
              <p className="text-gray-600 leading-normal sm:text-start text-center lg:max-w-lg mt-3">
                Gorilla Trekking - Volcanoes National Park
              </p>
            </div>

            <div className="border w-full rounded-md p-4">
              <h5 className="text-2xl sm:text-start leading-normal text-center">
                Uganda Tours
              </h5>
              <p className="text-center sm:text-start leading-normal text-gray-600 lg:max-w-lg mt-3">
                Gorilla and Chimp Trekking - Bwindi & Kibale National Park.
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center py-8 pt-12">
          <p className="text-center sm:text-start leading-normal text-gray-600 py-6 max-w-4xl">
            To make a <span className="font-bold">Safari Resarvation</span>, or
            simply you want to get in touch with us regarding our fantastic
            collection of{" "}
            <span className="font-bold underline decoration-[#ffc15c]">
              KENYA ,TANZANIA, UGANDA & RWANDA Safaris
            </span>{" "}
            . Please do so at any given time. Our abled specialists will find
            the <span className="font-bold">Perfect Tour</span> tailor-made for
            you, whatever <span className="font-bold">Your Budget</span> is.
            Speak to a member of our team and reserve a
            <span className="font-bold"> Dream Gateway</span>.
          </p>

          <Link
            href="/reservation"
            className="border text-sm w-fit border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
            <p>Enquire Now</p>
            <HiArrowCircleRight size={18} />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContactUsBanner;
