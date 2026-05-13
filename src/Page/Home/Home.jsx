// import React from "react";

import Banner from "./Banner";
import Brands from "./Brands";
import Service from "./Service";
import Work from "./Work";

const Home = () => {
  return (
    <div className="bg-base-300 "> 
      <Banner></Banner>
      <Work></Work>
      <Service></Service>
      <Brands></Brands>
    </div>
  );
};

export default Home;
