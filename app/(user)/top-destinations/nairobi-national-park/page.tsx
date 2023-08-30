"use client";

import Image from "next/image";
import { nairobi } from "@/components/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowCircleRight } from "react-icons/hi";
import Link from "next/link";

const TsavoWest = () => {
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
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12 flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
        <h2 className="text-4xl capitalize">Nairobi National Park</h2>

        <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
          {/* Image and overview */}
          <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2">
            {/* Image Carausel*/}
            <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
              <Slider {...settings}>
                <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nairobi/leopard.jpg"
                    fill
                    alt="leopard"
                  />
                </div>
                <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nairobi/impala.jpg"
                    fill
                    alt="impalas"
                  />
                </div>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/nairobi/zebra.jpg"
                    fill
                    alt="zebras"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <p className="text-gray-700">
                Nairobi National Park, located just a stone throw away from
                bustling capital city of Kenya, Nairobi, is a unique wildlife
                sanctuary. Spanning approximately 117 square kilometers, it
                boasts a diverse range of wildlife, including lions, giraffes,
                rhinos, and various bird species. Despite its proximity to the
                city, Nairobi National Park provides a captivating safari
                experience, offering visitors a chance to witness iconic animals
                against the backdrop of a modern urban skyline. It serves as a
                testament to the harmonious coexistence of wildlife and urban
                life.
              </p>
            </div>
          </div>
        </div>

        {/* Park activity, attraction,climate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full py-8 gap-4">
          <div className="space-y-2">
            <h6 className="text-xl">Attractions</h6>
            <ul className="list-disc text-sm text-gray-700 pl-6">
              <li>
                Diverse birdlife - over 400 bird species. At least 20 of which
                are seasonal European migrants.
              </li>
              <li>Spectacular wildebeest and zebra migration.</li>
              <li>Endangered black rhinoceros</li>
              <li>Ivory Burning Site monument.</li>
              <li>Big Four(Lion, bufallo, Leopard, and Rhino)</li>
              <li>Picnic facilities.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Key Features</h6>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>
                Bufallo, Giraffe, Lion, Leopard, Baboon, Zebra, Wildebeest, and
                Cheeter - 100 mammals species.
              </li>
              <li>400 migratory and endemic bird species.</li>
              <li>
                Picnic facilities- Corporate events , bush dinners, weddingsm
                picnics, team building seasons, video and film production.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Park Activities</h6>
            <ul className="list-disc text-sm text-gray-700 pl-6">
              <li>
                Corporate & events, Picnic, Camping, Game Viewing, Photography
              </li>
            </ul>
          </div>
        </div>

        {/*Park  Gallery*/}
        <h3 className="text-xl tracking-tight">Park Gallery</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {nairobi.map((item) => (
            <div
              key={item.id}
              className="w-full h-[150px] sm:h-[180px] relative rounded-md hover:scale-105 duration-300 ease-out transition-all">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
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
};

export default TsavoWest;
