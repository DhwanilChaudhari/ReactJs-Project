import React from "react";
import { Carousel } from "flowbite-react";

export default function HeroSlider() {
  return (
    <div className="h-[700px] w-[1400px]">
      <Carousel leftControl="L" rightControl="R">
        <img src="/src/assets/heroimg1.jpg" alt="..." />
        <img className="mt-[80px]" src="/src/assets/heroimg2.jpg" alt="..." />
        <img src="/src/assets/heroimg3.jpg" alt="..." />
        <img src="/src/assets/heroimg4.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
