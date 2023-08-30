"use client";

import Image from "next/image";
import { tsavowest } from "@/components/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <h2 className="text-4xl capitalize">Tsavo West National Park</h2>

        <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
          {/* Image and overview */}
          <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2">
            {/* Image Carausel*/}
            <div className="w-full h-[300px] sm:h-[350px] overflow-hidden">
              <Slider {...settings}>
                <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/tsavowest/juckle.jpg"
                    fill
                    alt="juckle"
                  />
                </div>
                <div className="w-full h-[300px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/tsavowest/wilddogs.jpg"
                    fill
                    alt="wilddogs"
                  />
                </div>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
                  <Image
                    className="object-cover rounded-md"
                    src="/tsavowest/zebra.jpg"
                    fill
                    alt="zebras"
                  />
                </div>
              </Slider>
            </div>
            <div>
              <p className="text-gray-700">
                Tsavo West National Park, located in southeastern Kenya, is a
                captivating wilderness that epitomizes the essence of African
                landscapes. Spanning approximately 9,065 square kilometers, this
                remarkable park boasts diverse terrain, including volcanic
                hills, vast savannahs, and lush greenery. Home to an array of
                wildlife, such as elephants, lions, giraffes, and rhinoceros,
                Tsavo West offers thrilling game drives and rewarding wildlife
                sightings. Visitors are enthralled by the crystal clear waters
                of Mzima Springs, surrounded by verdant vegetation, and the
                enchanting lava flows of Shetani, showcasing the unique
                geological features of the park. Tsavo West National Park is an
                alluring destination for nature enthusiasts and wildlife
                aficionados alike.
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
                First World War Site-East African campaign of the world war was
                fought in the Bundu meaning bush. This last gentleman war was
                waged under the code of honor-sometimes or under guerilla
                tactics adopted from Africcan tribal fights. The Gided tours of
                the Crater, Kichwa Teembo and Mzima fort will enable you trail
                the real footsteps of the word war veterans.
              </li>
              <li>
                Lake Jipe lies astride Kenya and Tanzania border and is teeming
                with aquatic life. Bird watching is also major activity around
                the lake.
              </li>
              <li>
                Ngulia Sanctuary - where the growing population of endangered
                black Rhino.
              </li>
              <li>Vibrant volcanic arena.</li>
              <li>
                Poacher Lookout and roaring rocks - for viewing movement of
                herds
              </li>
              <li>
                The spectacle Mzima Springs is the sight of fifty million
                gallons of crystall clear water gushing out from the under
                parched lava rocks.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Key Features</h6>
            <ul className="list-disc pl-6 text-sm text-gray-700">
              <li>
                Leopard, Cheeter, Wild dogs, Buffalo, Elephant, Giraffe, Zebra,
                Lion, Crocodile, Mongoose, Hyrax, Dik-dik, Lesser Kudu, and
                Nocturnal Porcupine
              </li>
              <li>Prolific birdlife features 600 species</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h6 className="text-xl">Park Activities</h6>
            <ul className="list-disc text-sm text-gray-700 pl-6">
              <li>Bird Watching, Camping, Game Viewing, Photography, Scenic</li>
            </ul>
          </div>
        </div>

        {/*Park  Gallery*/}
        <h3 className="text-xl tracking-tight">Park Gallery</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tsavowest.map((item) => (
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
      </div>
    </section>
  );
};

export default TsavoWest;
