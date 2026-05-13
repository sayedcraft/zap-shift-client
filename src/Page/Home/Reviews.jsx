// import React from 'react';

import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({reviewsPromise}) => {
    const reviews=use(reviewsPromise)
    console.log(reviews)
    return (
        <div className="my-20">
            <div className="text-center mb-10">
                <h3 className="text-3xl text-center font-bold">Reviews</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim alias autem cupiditate modi ipsa fugit nisi tempore dolorum eius repellendus repudiandae dignissimos assumenda, in pariatur nulla officia porro totam.</p>
            </div>
            <Swiper
            loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                coverflowEffect={{
                    rotate:30,
                    stretch:'50%',
                    depth:200,
                    modifier:1,
                    scale:0.75,
                    slideShadows:true
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={true}
                modules={[EffectCoverflow,Pagination,Autoplay]}
                className="mySwiper"
            >
                {reviews.map(review=><SwiperSlide key={review.id}>
                    <ReviewCard review={review}></ReviewCard>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Reviews;