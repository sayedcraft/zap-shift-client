// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
// import casio from "../../assets/brands/casio.png";
// import randstad from "../../assets/brands/randstad.png";
// import star from "../../assets/brands/star.png";
// import start_people from "../../assets/brands/start_people.png";
// import moonstar from "../../assets/brands/moonstar.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandLogo = [amazon, amazon_vector];
  return (
    <div className="border-1 my-5">
      <Swiper
        loop={true}
        slidesPerView={4}
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
  );
};

export default Brands;
