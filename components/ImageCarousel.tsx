"use client";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


import Image from 'next/image';

const ImageCarousel = () => {

  const settings = {
    dots:false,
    infinite:true,
    speed:600,
    slidesToshow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:3000,
    responsive:[
      {
        breakpoint:480,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  }
  return (
    <div className="w-full overflow-hidden pt-[4rem] sm:pt-[4.5rem]">
      <Slider {...settings}>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
          <Image
            className="object-cover"
            src="/carausel/wildebeasts.jpg"
            fill
            alt="wildebeasts"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px]bg-inherit relative">
          <Image
            className="object-cover"
            src="/carausel/zebras.jpg"
            fill
            alt="zebras"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] bg-inherit relative">
          <Image
            className="object-cover"
            src="/carausel/birds.jpg"
            fill
            alt="birds"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px]bg-inherit relative">
          <Image
            className="object-cover"
            src="/carausel/zebra.jpg"
            fill
            alt="zebras"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] sm:h-[350px] bg-inherit relative">
          <Image
            className="object-cover"
            src="/carausel/bufallo.jpg"
            fill
            alt="bufallos"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/bird.jpg"
            fill
            alt="bird"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/impalas.jpg"
            fill
            alt="impalas"
          />
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            alt="animals"
            src="/carausel/car.jpg"
            className="object-cover"
            fill
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/flamingos.jpg"
            fill
            alt="flamingos"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/elephant.jpg"
            fill
            alt="elephants"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/lions.jpg"
            fill
            alt="lions"
          />
        </div>
        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/hotel.jpg"
            fill
            alt="hotel"
          />
        </div>
        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/rhino.jpg"
            fill
            alt="rhinos"
          />
        </div>
        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/wilddogs.jpg"
            fill
            alt="wilddogs"
          />
        </div>

        <div className="w-full  h-[300px] md:h-[400px] lg:h-[450px]  sm:h-[350px] relative">
          <Image
            className="object-cover"
            src="/carausel/elephants.jpg"
            fill
            alt="elephants"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
