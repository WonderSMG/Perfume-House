import React from "react";
import Products from "../Features/Products";
import Carts from "../Features/Carts";

const Home = () => {
  return (
    <>
      <main className="container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] md:grid grid-cols-3 gap-8">
        <section className="col-span-2">
          <Products />
        </section>

        <section className="border">
          <Carts />
        </section>
      </main>
    </>
  );
};

export default Home;
