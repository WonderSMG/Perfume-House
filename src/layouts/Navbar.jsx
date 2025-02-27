import React from "react";
import { Outlet } from "react-router-dom";
import navLogo from "../assets/Group 9283.png";
import AuthenticationButton from "../authentication/AuthenticationButton";
import menuImg from "../assets/Vector.png"

const Navbar = () => {
  return (
    <>
      <nav className="container p-[25px] mx-auto md:py-[33px] md:px-[99px] border flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={navLogo} alt="Nav-Logo" />
          <h2 className="hidden md:block">Perfume House</h2>
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
