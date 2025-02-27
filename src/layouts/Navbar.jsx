import React from "react";
import { Outlet } from "react-router-dom";
import navLogo from "../assets/Group 9283.png";
import AuthenticationButton from "../components/AuthenticationButton";
import menuImg from "../assets/Vector.png"

const Navbar = () => {
  return (
    <>
      <nav className="container p-[25px] mx-auto md:px-[15px] lg:py-[33px] lg:px-[99px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={navLogo} alt="Nav-Logo" />
          <h2 className="hidden md:block font-[sansita] text-[28.33px] ">Perfume House</h2>
        </div>
        {/* div-2 for auth btns */}
        <div>
          {/* div for btns */}
          <div className="hidden md:block">
            <AuthenticationButton />
          </div>
          {/* div for menu/hamburger img */}
          <div className="md:hidden">
            <img src={menuImg} alt="menu-img" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
