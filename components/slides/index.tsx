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
      }, 300); // thời gian chớp
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[637px] overflow-hidden">
      {/* Flash overlay */}
      <div
        className={`absolute inset-0 z-5 pointer-events-none transition-opacity duration-300 bg-gray-300 ${
          flash ? "opacity-70" : "opacity-0"
        }`}
      />

      {/* Text cố định */}
      <div className="absolute inset-0 z-6 flex items-center justify-center text-white text-center px-4">
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
                className={`w-full h-full object-cover transform transition-transform duration-1000 ${
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
