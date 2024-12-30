import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-end  mt-5 pr-4 items-center">
        <button
          className="bg-gray-300 text-black font-bold border !border-[#ffffff] hover:bg-[rgb(0,0,0)] hover:text-[#000000] focus:border-none"
          onClick={() => navigate("/admin-product-form")}
        >
          Add New Product
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
