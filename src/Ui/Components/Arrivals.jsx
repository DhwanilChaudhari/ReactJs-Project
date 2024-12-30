import React from "react";

export default function Arrivals() {
  return (
    <div className="bg-white py-10 flex justify-between items-center mt-[10px] w-[1400px]">
      <p className="text-5xl title font-italic ">New Arrivals </p>
      <div
        href="#"
        className=" flex items-center inherit-color text-black hover:text-[#bc8b57] "
      >
        Discover all{" "}
        <img
          className="ms-1"
          width="18px"
          src="/public/arrow-right.svg"
          alt=""
        />{" "}
      </div>
    </div>
  );
}
