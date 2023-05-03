import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <>
      <Link
        href={"/product/1"}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img src={"/p1.png"} className="w-full" alt="product" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Produt name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">$25</p>
            <p className="text-base  font-medium line-through">$25</p>
            <p className="ml-auto text-base font-medium text-green-500">
              22% off
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
