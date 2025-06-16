// import React, { useState } from "react";

// const Slides = () => {
//   return (
//     <div
//       id="default-carousel"
//       className="relative w-full"
//       data-carousel="slide"
//     >
//       <div className="relative overflow-hidden h-[664px]">
//         <div
//           className=" duration-700 ease-in-out bg-[url('/images/slide_1_img.jpg')] bg-cover bg-center bg-no-repeat h-full"
//           data-carousel-item
//         ></div>
//         <div
//           className=" duration-700 ease-in-out bg-[url('/images/slide_2_img.jpg')] bg-cover bg-center h-full"
//           data-carousel-item
//         ></div>
//         <div
//           className=" duration-700 ease-in-out bg-[url('/images/slide_3_img.jpg')] bg-cover bg-center h-full"
//           data-carousel-item
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Slides;

import { useEffect, useState } from "react";

const slides = [
  "/images/slide_1_img.jpg",
  "/images/slide_2_img.jpg",
  "/images/slide_3_img.jpg",
];

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFlash(true); // Flash ON

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length); // Đổi ảnh
        setZooming(true); // Zoom IN ảnh mới
        setShowFlash(false); // Flash OFF

        setTimeout(() => setZooming(false), 1300); // Reset zoom
      }, 100); // Flash trước 100ms
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[691px] overflow-hidden">
      {/* Flash lớp phủ */}
      {showFlash && (
        <div className="absolute inset-0 bg-white opacity-70 animate-flash z-30 pointer-events-none" />
      )}

      {slides.map((src, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
              isActive && zooming ? "animate-zoom-in" : ""
            }`}
            style={{
              backgroundImage: `url(${src})`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 20 : 10,
            }}
          />
        );
      })}
    </div>
  );
}
