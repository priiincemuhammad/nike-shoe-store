import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full md:py-10">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* cart contents  */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart left  */}
          <div className="flex-[2] ">
            <div className="text-lg font-bold">Cart items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* cart right  */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      $2,700
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                {/* BUTTON START */}
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                  Checkout
                </button>
                {/* BUTTON END */}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
