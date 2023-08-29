import Link from "next/link";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

const ContactUsBanner = () => {
  return (
    <section className="w-full -mt-[7px] bg-gradient-radial from-green-100 via-green-50 to-slate-100  filter">
      {/* <div className="absolute top-0 left-0 h-full bg-gradient-radial from-[#29ab87] to-yellow-500 w-full blur-3xl -z-[-50px] opacity-50  filter" /> */}

      <article className="max-w-4xl mx-auto justify-center items-center py-16 px-8 flex flex-col gap-6">
        <h5 className="text-5xl text-yellow font-medium text-center ">
          Contact paulosafaris.
        </h5>
        <p className="text-center text-base text-black/80">
          If you want to make a{" "}
          <span className="font-bold">Safari Resarvation</span>, or simply you
          want to get in touch with us regarding our fantastic collection of
          <span className="font-bold"> KENYA</span> and{" "}
          <span className="font-bold">TANZANIA Safaris</span>. Please do so at
          any given time. Our abled specialists will find the{" "}
          <span className="font-bold">Perfect Tour</span> tailor-made for you,
          whatever <span className="font-bold">Your Budget</span> is. Speak to a
          member of our team and reserve a
          <span className="font-bold"> Dream Gateway</span>.
        </p>
        <Link
          href="/reservation"
          className="border text-sm border-[#e3170a] py-2 px-4 outline-none hover:bg-transparent rounded-sm gap-2 hover:text-[#e3170a] flex flex-row items-center justify-center bg-[#e3170a] active:scale-95 text-white/90 duration-150 transition-all ease-out font-medium">
          <p>Enquire Now</p>
          <HiArrowCircleRight size={18} />
        </Link>
      </article>
    </section>
  );
};

export default ContactUsBanner;
