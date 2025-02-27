import React from "react";

const AuthenticationButton = () => {
  return (
    <>
      <div className=" flex gap-[34px]">
        <button className="w-[140px] h-[61px] bg-[#E6D2FF] text-[#8D34FF] rounded cursor-pointer">
          Log In
        </button>
        <button className="w-[140px] h-[61px] bg-[#8D34FF] text-[#F5F5F5] rounded cursor-pointer ">
          Sign In
        </button>
      </div>
    </>
  );
};

export default AuthenticationButton;
