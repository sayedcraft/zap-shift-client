// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import moonstar from "../../assets/brands/moonstar.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandLogo = [
    amazon,
    amazon_vector,
    casio,
    randstad,
    star,
    start_people,
    moonstar,
  ];
  return (
    <div className="my-5  ">
      <h1 className="font-bold text-center mb-4">
        We've helped thousands of sales teams
      </h1>
      <div className="border-l-4 border-r-4 border-l-lime-400 border-r-lime-400">
        <Swiper
          loop={true}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {brandLogo.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;

//
