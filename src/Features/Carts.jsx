import React from "react";
import { perfumecart } from "../cart";

const Carts = () => {
  return (
    <>
      <main className="container mx-auto py-[26px] px-[24px] ">
        <h1 className="w-[300px] h-[36px] font-semibold text-[24px] leading-9 ">
          My cart Preview
        </h1>
        <div className=" w-[95px] h-[98px] rounded-[3px] grid gap-[10px] py-[26px] ">
          {perfumecart.map((perfume) => {
            return (
              <div>
                <div className="relative w-[95px] h-[98px] ">
                  <img
                    src={perfume.image}
                    alt="perfumeImg"
                    className="absolute "
                  />
                </div>
                <div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Carts;
