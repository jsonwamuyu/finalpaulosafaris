import Link from "next/link";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const ContactUsBanner = () => {
  return (
    <section className="w-full -mt-[7px] bg-slate-100">
      <article className="max-w-7xl mx-auto py-16 px-8 flex flex-col space-y-8">
        <div className=" space-y-4">
          <h2 className="text-4xl text-green text-center sm:text-start">
            Our Services
          </h2>
          <div className="text-center sm:text-start space-y-1">
            <h5 className="text-xl font-medium text-center sm:text-start">
              Kenya Tours
            </h5>
            <p className="text-black/80 text-base text-center sm:text-start">
              Samburu Game Reserve, Tsavo West/ East National Park, Maasai Mara
              Game Reserve, Solio Ranch, Amboseli National Park, Meru National
              Park,Sweetwaters Sanctuary, Nairobi National Park, Lake Nakuru
              National Park, Lake Naivasha National Park, Lake Bogiria, Lake
              Baringo, Taita Hills Sanctuary
            </p>
          </div>
          <div className="text-center sm:text-start space-y-1">
            <h5 className="text-xl font-medium text-center sm:text-start">
              Tanzania Tours
            </h5>
            <p className="text-black/80 text-base text-center sm:text-start">
              Serengeti National Park, Arusha, Dar es Salaam, Kilimanjaro
              National Park, Lake Manyara National Park, Ngorongoro Crater
            </p>
          </div>
          <div className="text-center sm:text-start space-y-1">
            <h5 className="text-xl font-medium text-center sm:text-start">
              Rwanda Tours
            </h5>
            <p className="text-black/80 text-base text-center sm:text-start">
              Gorilla Trekking - Volcanoes National Park
            </p>
          </div>

          <div className="text-center sm:text-start space-y-1">
            <h5 className="text-xl font-medium text-center sm:text-start">
              Uganda Tours
            </h5>
            <p className="text-center sm:text-start text-base text-black/80">
              Gorilla and Chimp Trekking - Bwindi & Kibale National Park.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-4xl text-green text-center sm:text-start ">
            Contact paulosafaris
          </h5>
          <p
            className="text-center sm:text-start text-base t
          ext-black/80">
            To make a <span className="font-bold">Safari Resarvation</span>, or
            simply you want to get in touch with us regarding our fantastic
            collection of
            <span className="font-bold"> KENYA</span>
            <span className="font-bold">
              ,TANZANIA, UGANDA & RWANDA Safaris
            </span>
            . Please do so at any given time. Our abled specialists will find
            the <span className="font-bold">Perfect Tour</span> tailor-made for
            you, whatever <span className="font-bold">Your Budget</span> is.
            Speak to a member of our team and reserve a
            <span className="font-bold"> Dream Gateway</span>.
          </p>
        </div>

        <Link
          href="/reservation"
          className="border text-sm w-fit border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </article>
    </section>
  );
};

export default ContactUsBanner;
