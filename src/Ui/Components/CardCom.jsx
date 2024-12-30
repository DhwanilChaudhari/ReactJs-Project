import { Button } from "flowbite-react";
import React from "react";

export default function CardCom({ item }) {
  return (
    <div className="p-1">
      <div
        className=" p-4 mt-5 rounded-lg"
        style={{ backgroundColor: item.cardcolor }}
      >
        <div className="cursor-pointer">
          <a
            style={{
              width: "32px",
              height: "32px",
              lineHeight: "26px",
              background: "#bc8b573d",
              borderRadius: "100px",
              display: "flex",
              marginLeft: "auto",
              padding: "8px",
            }}
            className="product-wishlist"
          >
            <img
              src="https://in.ajmal.com/IconLike-9bG.svg"
              alt="wishlist"
              style={{ width: "100%", height: "auto" }}
            />
          </a>
          <div className="product-img  h-[300px] p-2 rounded-lg text-center ">
            <img
              src={item?.thumbnail}
              alt=""
              srcSet=""
              className="m-auto h-[300px]  content-center  "
            />
          </div>
          <div className="mb-2 p-1 pt-2">
            <button className="  bg-red-800 rounded-full text-white py-1 border-none">
              {item.percentage}
            </button>
            <p className="text-[15px] mt-2 text-gray-500">{item.title}</p>
            <h2 className="text-[22px] mt-1 card-title title single-line-ellipsis">
              {item.description}
            </h2>
            <p className="py-2">
              <p className="mr-2  text-gray-500">{item.discountPercentage}% </p>
              <del className="mr-2  text-gray-500">₹ {item.price} </del>
              <b className="text-[20px]">{item.price}</b>
            </p>
            <div className="flex  justify-center space-x-4 ">
              <Button className="btn">Buy Now</Button>
              <Button className="btn">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
