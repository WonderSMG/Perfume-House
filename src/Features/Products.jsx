import React from 'react'
import { perfumes } from '../product';
import ratings from "../assets/star img.png"
import prices from "../assets/prices(discounted).png"


const Products = () => {
  return (
    <>
      <main className="">
        <div className=" md:grid grid-cols-3">
          {perfumes.map((perfume) => {
            return (
              <div key={perfume.id} className="card bg-base-100 w-[335.55px] md:w-[256.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px] shadow-sm ">
                <figure>
                  <img className='' src={perfume.image} alt={perfume.id} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{perfume.title}</h2>
                  <div>
                    <img src={ratings} alt="perf-rating" />
                    <img src={prices} alt="perf-prices" />
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products