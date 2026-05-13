// import React from "react";

import Banner from "./Banner";
import Brands from "./Brands";
import Reviews from "./Reviews";
import Service from "./Service";
import Work from "./Work";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Work></Work>
      <Service></Service>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
