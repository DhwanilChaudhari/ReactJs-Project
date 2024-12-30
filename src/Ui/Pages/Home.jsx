import React from "react";
import data from "../Components/data.json";
import data2 from "../Components/datatwo.json";
import Bestseller from "../Components/Bestseller";
import HeroSlider from "../Components/HeroSlider";
import Arrivals from "../Components/Arrivals";
import Slider from "../Components/Slider";

export default function Home() {
  return (
    <div className="w-[1400px]">
      <HeroSlider />
      <Arrivals />
      <Slider data={data} />
      <Bestseller />
      <Slider data={data2} />
    </div>
  );
}
