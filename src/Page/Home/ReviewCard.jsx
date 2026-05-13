// import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {userName,review:testimonial,user_photoURL} = review;
  return (
    <div className="flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body p-5">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-4xl text-info mb-4" />

          {/* Testimonial Text */}
          <p className="text-base leading-6 text-base-content/80">
            {testimonial}
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-info/50 my-4"></div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div>
                <img src={user_photoURL} alt="" className=""/>
            </div>

            <div>
              <h3 className="font-bold text-lg text-black ">
                {userName}
              </h3>
              <p className="text-sm text-base-content/60">
                Senior Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
