"use client";

import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { HiPhone, HiMail } from "react-icons/hi";

import Image from "next/image";
import { payments } from "@/components/constants";

const Enquire = () => {
  const [sending, setSending] = useState(false);
  const [fullname, setFullname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  const sendEnquiry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      to_name: "Paulosafaris",
      from_name: fullname,
      email: emailAddress,
      countryorigin: country,
      contact: phone,
      startingdate: startDate,
      endingdate: enddate,
      message: enquiry,
      destination: destination,
    };

    try {
      await emailjs.send(
        "service_qrsdpmd"!,
        "template_xokmah1"!,
        templateParams,
        "KSHa03k1BgZcHc_z8"!
      );
      setSending(false);
      alert(
        "Thank you for reaching out. We will get back to you ASAP!-@PAULOSAFARIS"
      );
    } catch (error) {
      setSending(false);
      alert("SORRY! An error occured.Please try again");
    }

    setEmailAddress("");
    setFullname("");
    setPhone("");
    setEnquiry("");
    setCountry("");
    setStartDate("");
    setEndDate("");
    setDestination("");
  };

  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24 p-16 pb-8 sm:pb-12 ">
        <h2 className="text-4xl">Reservation.</h2>
        <div className="w-full flex flex-col gap-8 sm:gap-12 md:flex-row justify-between">
          {/* Booking Form */}
          <form
            className="flex flex-col md:w-2/3 w-full"
            onSubmit={sendEnquiry}>
            <p className="text-xs pb-2 text-gray-500">
              A field marked with * is required.
            </p>
            <div className="flex gap-4 sm:flex-row  flex-col w-full">
              <input
                type="text"
                disabled={sending}
                minLength={4}
                value={fullname}
                maxLength={80}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name*"
                className="py-3 px-6 my-2 outline-none border text-gray-500  placeholder:text-gray-500 rounded-md w-full shadow-sm border-gray-300 text-sm placeholder:text-sm"
                required
              />
              <input
                type="email"
                disabled={sending}
                minLength={11}
                maxLength={80}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Email Address*"
                className="py-3 px-6 my-2 outline-none border text-gray-500 placeholder:text-gray-500 w-full shadow-sm rounded-md border-gray-300 text-sm placeholder:text-sm"
                required
              />
            </div>

            <div className="flex gap-4 sm:flex-row  flex-col w-full">
              <input
                type="tel"
                disabled={sending}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number (eg (+254) 711 431 122)"
                className="py-3 px-6 my-2 outline-none border border-gray-300 text-sm placeholder:text-sm text-gray-500  placeholder:text-gray-500 w-full shadow-sm rounded-md"
                required
                minLength={10}
              />

              <input
                value={country}
                disabled={sending}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Your Country"
                className="py-3 px-6 my-2 outline-none border border-gray-300 text-sm placeholder:text-sm text-gray-500 placeholder:text-gray-500 w-full rounded-md shadow-sm"
                minLength={3}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex flex-row w-full gap-2 items-center">
                <p className="text-xs">Safari starts*</p>
                <input
                  type="date"
                  disabled={sending}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Phone No."
                  className="py-3 px-6 my-2 outline-none border text-gray-500 placeholder:text-gray-500 text-sm placeholder:text-sm border-gray-300 shadow-sm flex-1 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-row gap-2 w-full items-center">
                <p className="text-xs">Safari ends</p>
                <input
                  type="date"
                  disabled={sending}
                  value={enddate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Booking Date"
                  className="py-3 px-6 my-2 outline-none border boder-gray-300 text-sm placeholder:text-sm text-gray-500 placeholder:text-gray-500 shadow-sm rounded-md flex-1"
                />
              </div>
            </div>

            <input
              value={destination}
              disabled={sending}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Enter Safari Destination*"
              className="py-3 px-6 my-4 outline-none border rounded-md shadow-sm text-sm placeholder:text-sm placeholder:text-gray-500 text-gray-500 border-gray-300"
              required
            />

            <textarea
              value={enquiry}
              disabled={sending}
              onChange={(e) => setEnquiry(e.target.value)}
              className="py-3 px-6 text-gray-500 outline-none rounded-md border border-gray-300 text-sm placeholder:text-sm shadow-sm placeholder:text-gray-500 my-4"
              rows={5}
              placeholder="Outline your requirements"></textarea>

            <button
              disabled={!fullname || !emailAddress || sending}
              type="submit"
              className="disabled:cursor-not-allowed outline-none border duration-150 transition-all ease-out border-[#e3170a] hover:bg-transparent hover:text-[#e3170a] py-2 px-4 bg-red  text-white/90 cursor-pointer font-medium text-sm rounded-sm w-fit my-4 shadow-sm active:scale-95">
              {sending ? "Sending..." : "Send Enquiry"}
            </button>
          </form>

          {/* Contacts Section */}
          <div className="flex flex-col md:w-1/3 gap-6 w-full items-center sm:items-start">
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl">Reach Us On</h4>
              <div className="text-gray-500 flex items-center justify-center gap-2">
                <HiPhone size={18} />
                <p>+25471055659 | +254720484862</p>
              </div>
              <div className="text-gray-500 flex items-center gap-2">
                <HiMail size={18} />
                <p>paul_otti@yahoo.com</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 text-green">
              <Link
                href="https://www.linkedin.com/in/paul-otieno-294689136"
                className="hover:opacity-60 text-[#0077b5]"
                target="_blank"
                rel="noopener noreferrer">
                <BsLinkedin size={16} />
              </Link>
              <Link
                href="https://www.twitter.com/PauloSafaris"
                className="hover:opacity-60 text-[#00acee]"
                target="_blank"
                rel="noopener noreferrer">
                <BsTwitter size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/paulosafaris"
                className="hover:opacity-60 text-[#e1306c]"
                target="_blank"
                rel="noopener noreferrer">
                <BsInstagram size={16} />
              </Link>
              <Link
                href="https://www.facebook.com/paulosafariskenya/"
                className="hover:opacity-60 text-[#3b5998]"
                target="_blank"
                rel="noopener noreferrer">
                <BsFacebook size={16} />
              </Link>
              <Link
                href="https://www.tiktok.com/paulosafaris"
                className="hover:opacity-60 text-[#fe2c55]"
                target="_blank"
                rel="noopener noreferrer">
                <BsTiktok size={16} />
              </Link>
              <Link
                href="https://pinterest.com/paulosafaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e60023] hover:opacity-60">
                <BsPinterest size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="flex flex-col gap-4 pt-6 items-center sm:items-start">
          <h4 className="text-2xl">Accepted Payments</h4>
          <div className="flex flex-row flex-wrap gap-8 md:gap-10 lg:gap-12 items-center sm:items-start">
            {payments.map((mode) => (
              <div
                key={mode.id}
                className="relative shadow-md w-28 h-24 rounded-md">
                <Image
                  src={mode.img}
                  alt={mode.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className=" pt-8 sm:pt-10 text-sm text-opacity-60">
            Check out our safari reservation{" "}
            <Link
              href="/terms_conditions"
              className=" text-red underline cursor-pointer hover:no-underline">
              terms and conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Enquire;
