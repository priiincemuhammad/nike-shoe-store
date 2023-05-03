import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const DetailsCarousel = () => {
  return (
    <div className="text-white w-full max-w-[1360px] text-[20px] mx-auto sticky top-52">
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={60}
        showStatus={false}
        className="productCarousel"
      >
        <img src="/p1.png" alt="banner" />
        <img src="/p2.png" alt="banner" />
        <img src="/p3.png" alt="banner" />
        <img src="/p4.png" alt="banner" />
        <img src="/p5.png" alt="banner" />
        <img src="/p6.png" alt="banner" />
        <img src="/p7.png" alt="banner" />
      </Carousel>
    </div>
  );
};

export default DetailsCarousel;
