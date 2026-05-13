// import React from "react";


import img from '../../assets/bookingIcon.png'

const Work = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">How it Works</h1>
      <div className=" gap-5 w-full flex-col grid lg:flex-row md:grid-cols-2 lg:grid-cols-4">
        <div className="card bg-white rounded-box grid h-48 p-5">
          <img src={img} alt="" />
          <h1 className="font-bold my-2">Booking Pick & Drop</h1>
          <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className="card bg-white rounded-box grid h-48 p-5">
         <img src={img} alt="" />
          <h1 className="font-bold my-2">Cash On Delivery</h1>
          <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div className="card bg-white rounded-box grid h-48 p-5">
         <img src={img} alt="" />
          <h1 className="font-bold my-2">Delivery Hub</h1>
          <p>From personal packages to business shipments — we deliver on time, every time. </p>
        </div>
        <div className="card bg-white rounded-box grid h-48 p-5">
      <img src={img} alt="" />
          <h1 className="font-bold my-2">Booking SME & Corporate</h1>
          <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
