import React from "react";
import { Link } from "react-router-dom";

const AuthenticationButton = () => {
  return (
    <>
      <div className=" flex gap-[34px]">
        <button className="w-[140px] h-[61px] bg-[#E6D2FF] text-[#8D34FF] rounded cursor-pointer">
          <Link to="/auth/sign-in">Log In</Link>
        </button>
        <button className="w-[140px] h-[61px] bg-[#8D34FF] text-[#F5F5F5] rounded cursor-pointer ">
         <Link to="/auth/sign-up" >Sign Up</Link> 
        </button>
      </div>
    </>
  );
};

export default AuthenticationButton;
