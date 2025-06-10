import React from "react";

const Slides = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden h-[691px]">
        <div
          className=" duration-700 ease-in-out bg-[url('/images/slide_1_img.jpg')] bg-cover bg-center h-full"
          data-carousel-item
        ></div>
        <div
          className=" duration-700 ease-in-out bg-[url('/images/slide_2_img.jpg')] bg-cover bg-center h-full"
          data-carousel-item
        ></div>
        <div
          className=" duration-700 ease-in-out bg-[url('/images/slide_3_img.jpg')] bg-cover bg-center h-full"
          data-carousel-item
        ></div>
      </div>
    </div>
  );
};

export default Slides;
