import Product from "@/components/Product";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        \{/* Products grid heading*/}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Runnig Shoies
          </div>
        </div>
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
