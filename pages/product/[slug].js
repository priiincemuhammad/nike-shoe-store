import React from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import DetailsCarousel from "@/components/DetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* column left  */}
          <div className="w-full md:w-auto  flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <DetailsCarousel />
          </div>
          {/* column right  */}
          <div className="flex-[1] py-3">
            <h1 className="text-[34px] font-semibold mb-2">Jordan Retro 6 G</h1>
            <div className="text-lg font-semibold mb-2">Mean's Golfe shoes</div>
            <div className="text-lg font-semibold ">MRP : $1,900</div>
            <div className="font-medium text-md text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="font-medium text-md text-black/[0.5] mb-2">
              {`(Also includes all aplicable duties)`}
            </div>
            {/* produt sizes */}
            <div className="mb-10">
              {/* size heading  */}
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-md">Select size</div>
                <div className="font-medium text-md text-black/[0.5] cursor-pointer">
                  Select Gide
                </div>
              </div>
              {/* all sizes  */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 6.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 7.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>
              </div>
              {/* show errors */}
              <div className="text-red-600 mt-3">
                Size selection is required!
              </div>
            </div>
            {/* product buttons */}
            <div className="mb-8">
              <button className="w-full bg-black text-white rounded-full py-4 font-medium text-lg transition-transform active:scale-95 hover:opacity-75 mb-3">
                Add to cart
              </button>
              <button className="w-full border border-black text-black flex justify-center items-center gap-2 rounded-full py-4 font-medium text-lg transition-transform active:scale-95 hover:opacity-75 mb-3">
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>
            </div>
            {/* product details */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="tex-md mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="tex-md mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
