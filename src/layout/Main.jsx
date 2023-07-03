import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Home from "../home/Home";

const Main = () => {
  
  return (
    <div className="  mx-auto bg-stone-950">
      <Navbar />
      {/* <Home/> */}
      <Outlet />
      <Footer />
    
    </div>
  );
};

export default Main;
//bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500