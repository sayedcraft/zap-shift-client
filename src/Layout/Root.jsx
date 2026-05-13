// import React from 'react';
import { Outlet } from "react-router";
import Navbar from "../Page/Shared/Navbar";
import Footer from "../Page/Shared/Footer";

const Root = () => {
  return (
    <div className=" bg-base-300 ">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
