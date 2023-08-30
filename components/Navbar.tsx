"use client";

import { motion } from 'framer-motion';
import { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { links } from "./constants";
import Banner from "./Banner";
import { usePathname } from "next/navigation";
import { GrClose, GrMenu } from "react-icons/gr";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-10">
      <Banner />
      <nav className="py-2 flex items-center justify-between h-16 sm:h-[70px]  max-w-7xl m-auto px-4 sm:px-6 lg:px-8 ">
        <div className="rounded-md">
          <Link
            className="flex items-center flex-row gap-2"
            href="/"
            onClick={() => {
              window.scrollTo();
            }}>
            <Image
              src="https://i.pinimg.com/280x280_RS/4e/57/38/4e57387264b709884c5f3a19528e9df5.jpg"
              alt="paulosafaris"
              width={34}
              height={34}
              className="object-contain cursor-pointer rounded-md"
            />

            <p className="text-xl font-bold text-red">
              Paulo<span className="text-[#191919]">Safaris</span>
            </p>
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden sm:flex flex-row items-center justify-center gap-4 h-full text-base flex-1">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={
                pathname == item.url
                  ? "text-[#ffc15c] font-medium"
                  : "hover:text-[#ffc15c]"
              }>
              {item.name}
            </Link>
          ))}
        </ul>

        {/* menu/close icons */}
        <div
          className="sm:hidden h-full grid place-content-center z-10 cursor-pointer active:outline-none border-none"
          onClick={handleToggle}>
          {toggle ? <GrClose size={34} /> : <GrMenu size={34} />}
        </div>

        {/* Mobile links */}

        {toggle && (
          <div className="absolute sm:hidden top-[4rem] left-0 right-0 bg-yellow text-white/80 transition-all duration-300 ease-out h-auto z-50 bg-yellow border-b border-white/20">
            <ul className="flex flex-col gap-4 text-base items-center py-12">
              <motion.li
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.05, ease: "easeOut" }}
                onClick={handleToggle}>
                <Link
                  href="/"
                  className={
                    pathname == "/"
                      ? "text-white font-medium"
                      : "hover:text-white"
                  }>
                  HOME
                </Link>
              </motion.li>

              <motion.li
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={handleToggle}>
                <Link
                  className={
                    pathname == "/destinations"
                      ? "text-white font-medium"
                      : " hover:text-white"
                  }
                  href="/destinations">
                  DESTINATIONS
                </Link>
              </motion.li>

              <motion.li
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={handleToggle}>
                <Link
                  className={
                    pathname == "/blog"
                      ? "text-white font-medium"
                      : " hover:text-white"
                  }
                  href="/blog">
                  BLOG
                </Link>
              </motion.li>

              <motion.li
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onClick={handleToggle}>
                <Link
                  className={
                    pathname == "/about"
                      ? "text-white font-medium"
                      : " hover:text-white"
                  }
                  href="/about">
                  ABOUT US
                </Link>
              </motion.li>

              <motion.li
                whileInView={{ x: [-100, 0] }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                onClick={handleToggle}>
                <Link
                  className={
                    pathname == "/reservation"
                      ? "text-white font-medium"
                      : " hover:text-white"
                  }
                  href="/reservation">
                  CONTACT US
                </Link>
              </motion.li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};      
export default Navbar;