import React from "react";
import { Carousel } from "flowbite-react";

export default function Studio() {
  return (
    <div>
      <h2 className="text-[40px] my-4 font-bold">
        Fragrance Indulgence With My Perfume
      </h2>
      <div className="flex my-8 mt-[40px] mb-[70px] ml-[450px] justify-center items-center size-[700px]">
        <img src="/src/assets/Article1.png" alt="" />
        <img src="/src/assets/Article2.png" alt="" />
      </div>
      <div className="flex align-item-center">
        <img
          src="/src/assets/1.jpg"
          alt=""
          className="flex mb-[10px] size-[800px]"
        />
        <img
          src="/src/assets/Brown Orange Light Blue Minimal Column Article Page (1)_page-0001.jpg"
          alt=""
          className="mt-[22px] ml-[40px]  size-[700px] h-[743px] w-[550px]"
        />
      </div>
    </div>
  );
}
