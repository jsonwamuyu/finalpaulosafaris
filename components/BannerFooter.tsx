"use client";

import Link from "next/link";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { bannerfooterlinks } from "./constants";
import { usePathname } from "next/navigation";

const BannerFooter = () => {
  const pathname = usePathname();
  return (
    <section className="w-full bg-yellow border-t border-white/30">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-wrap flex-row gap-4  md:gap-6 lg:gap-8 items-center justify-center sm:justify-between py-2 text-white  text-sm">
        <p className="text-white/80">
          &#169;2023 paulosafaris - All rights reserved
        </p>
        {/* <div className="flex items-center justify-center gap-4">
          {bannerfooterlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={
                pathname == link.url
                  ? "text-white font-medium text-base"
                  : "text-white/80 text-base hover:text-white"
              }>
              {link.name}
            </Link>
          ))}
        </div> */}
        <div className="flex flex-row items-center text-sm text-white/80">
          <p>Built with</p>
          <BsHeartFill className="h-3 w-3 text-red mx-2" />
          <Link
            href="https://johnsonmuchiri.vercel.app"
            rel="noopener noreferrer"
            className="hover:text-white">
            by Muchiri Wamuyu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerFooter;
