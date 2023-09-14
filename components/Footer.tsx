"use client";

import React from "react";
import Link from "next/link";
import { footerlinks } from "./constants";
import Image from "next/image";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-yellow text-white">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 pt-10 flex flex-col gap-6 sm:flex-row justify-between">
        <div className="flex flex-col gap-4 sm:w-1/3 items-center sm:items-start">
          <div className="flex flex-row gap-2">
            <Link
              href="/"
              className="w-8 h-8 rounded-md relative cursor-pointer">
              <Image
                src="/logo.jpg"
                className="rounded-md object-contain"
                alt="paulosfaris"
                fill
              />
            </Link>
            <h4 className="text-xl font-medium">About paulosafaris</h4>
          </div>
          <p className="leading-normal text-white/80">
            Paulosafaris is a unique Kenya Tour Company based in Mombasa
            offering Kenya Coastal Beach Holidays, Adventures from Mombasa to
            Nairobi, East Africa Wildlife Tours from the Kenyan Coast, Tsavo
            Safaris from Mombasa and Maasai Mara Tours.
          </p>
        </div>
        <div className="flex  flex-col gap-4 sm:w-1/3  items-center sm:items-start">
          <h2 className="text-xl font-medium text-center">Useful Links</h2>
          <div className="flex flex-row flex-wrap gap-4 items-center">
            {footerlinks.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={
                  pathname == item.url
                    ? "text-white text-sm font-medium"
                    : "text-white/80 hover:text-white text-sm"
                }>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:w-1/3 items-center sm:items-start">
          <h4 className="text-xl font-medium text-center">Customer Service </h4>
          <div className="flex gap-2 text-sm flex-row items-center justify-center text-white/80">
            <HiLocationMarker size={18} />
            <p>Mombasa, KENYA</p>
          </div>
          <div className="text-sm text-white/90 flex flex-row gap-2 items-center justify-center">
            <HiPhone size={18} />
            <p className="flex items-center flex-wrap justify-center gap-1">
              +254710558659 <span>|</span> +254720484862
            </p>
          </div>
          <div className="flex flex-row items-center justify-center text-sm gap-2 text-white/80">
            <HiMail size={18} />
            <p>paul_otti@yahoo.com</p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 items-center justify-center pt-4">
            <Link
              href="https://pinterest.com/paulosafaris/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#e60023] hover:opacity-70  flex items-center justify-center h-6 w-6 rounded-full">
              <BsPinterest size={13} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/paul-otieno-294689136/"
              className="hover:opacity-70 text-white bg-[#0077b5] h-6 w-6 flex items-center justify-center  rounded-full"
              target="_blank"
              rel="noopener noreferrer">
              <BsLinkedin size={13} />
            </Link>
            <Link
              href="https://www.twitter.com/PauloSafaris"
              className="hover:opacity-70 text-white bg-[#00acee] h-6 w-6 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitter size={13} />
            </Link>
            <Link
              href="https://www.instagram.com/paulosafaris"
              className="hover:opacity-70 text-white bg-[#e1306c] h-6 w-6 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsInstagram size={13} />
            </Link>
            <Link
              href="https://www.facebook.com/paulosafariskenya/"
              className="hover:opacity-70 text-white bg-[#3b5998] h-6 w-6 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsFacebook size={13} />
            </Link>
            <Link
              href="https://www.tiktok.com/paulosafaris"
              className="hover:opacity-70 text-white bg-[#fe2c55] h-6 w-6 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer">
              <BsTiktok size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
