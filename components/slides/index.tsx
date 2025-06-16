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

// import { useEffect, useState } from "react";

// const slides = [
//   "/images/slide_1_img.jpg",
//   "/images/slide_2_img.jpg",
//   "/images/slide_3_img.jpg",
// ];

// export default function Slides() {
//   const [current, setCurrent] = useState(0);
//   const [showFlash, setShowFlash] = useState(false);
//   const [zooming, setZooming] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setShowFlash(true); // Flash ON

//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % slides.length); // Đổi ảnh
//         setZooming(true); // Zoom IN ảnh mới
//         setShowFlash(false); // Flash OFF

//         setTimeout(() => setZooming(false), 1300); // Reset zoom
//       }, 100); // Flash trước 100ms
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[691px] overflow-hidden">
//       {/* Flash lớp phủ */}
//       {showFlash && (
//         <div className="absolute inset-0 bg-white opacity-70 animate-flash z-30 pointer-events-none" />
//       )}

//       {slides.map((src, idx) => {
//         const isActive = idx === current;
//         return (
//           <div
//             key={idx}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
//               isActive && zooming ? "animate-zoom-in" : ""
//             }`}
//             style={{
//               backgroundImage: `url(${src})`,
//               opacity: isActive ? 1 : 0,
//               zIndex: isActive ? 20 : 10,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  { id: 1, image: "/images/slide_1_img.jpg" },
  { id: 2, image: "/images/slide_2_img.jpg" },
  { id: 3, image: "/images/slide_3_img.jpg" },
];

const HeroSlider = () => {
  const swiperRef = useRef<any>(null);
  const [flash, setFlash] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Bắt đầu chớp
      setFlash(true);

      setTimeout(() => {
        setFlash(false);
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 250); // thời gian chớp
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Flash overlay */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-300 bg-white ${
          flash ? "opacity-80" : "opacity-0"
        }`}
      />

      {/* Text cố định */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Trải Nghiệm Tuyệt Vời
          </h2>
          <p className="text-lg md:text-xl">
            Không gian sang trọng – Dịch vụ chuyên nghiệp
          </p>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className={`w-full h-full object-cover transform transition-transform duration-700 ${
                  index === activeIndex ? "scale-100 animate-zoom" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
