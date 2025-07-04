import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  PiFacebookLogoFill,
  PiYoutubeLogoFill,
  PiInstagramLogoFill,
  PiTiktokLogoFill,
  PiYoutubeLogo,
  PiFacebookLogo,
  PiInstagramLogo,
  PiTiktokLogo,
} from "react-icons/pi";

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
    // const interval = setInterval(() => {
    //   // Bắt đầu chớp
    //   setFlash(true);
    //   setTimeout(() => {
    //     setFlash(false);
    //     if (swiperRef.current) {
    //       swiperRef.current.slideNext();
    //     }
    //   }, 300); // thời gian chớp
    // }, 3500);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-[691px] h-[967px] overflow-hidden">
      {/* Flash overlay */}
      <div
        className={`absolute inset-0 z-5 pointer-events-none transition-opacity duration-300 bg-gray-300 ${
          flash ? "opacity-70" : "opacity-0"
        }`}
      />

      <div className="absolute top-[80px] left-0 right-0 bottom-[80px] text-white z-20 mx-auto my-0 container lg:flex  px-[12px]">
        <div className="lg:w-[66.6666%] flex flex-col justify-end">
          <p className="text-[14px] lg:text-[16px] mb-5">
            WELCOME TO COZY STAY
          </p>
          <h2 className="text-[25px] lg:text-[60px] font-bold mb-[13px]">
            Nơi nghỉ dưỡng yên bình cho những người yêu thiên nhiên
          </h2>
          <p className="text-[14px] lg:text-[16px] mt-4 mb-5">
            Đắm mình trong những phẩm chất phục hồi của thiên nhiên, tránh xa
            những xáo trộn của cuộc sống thường ngày.
          </p>
          <div className="flex flex-row gap-[15px]">
            <button className="relative overflow-hidden group px-[30px] py-[10px] rounded-[30px] bg-[var(--backgroundHeader)] cursor-pointer text-[14px] text-[var(--shop-color-button-text)] transition-opacity duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] hover:opacity-90">
              <div
                className="absolute top-0 left-0 h-full w-0 bg-[var(--shop-color-main)] z-0 
                           transition-[width] duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] 
                          group-hover:w-full"
              ></div>

              <span className="relative z-20">Xem thêm</span>
            </button>

            <button className="px-[30px] py-2.5 rounded-[30px] border border-white text-[14px] cursor-pointer transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] hover:bg-[var(--shop-color-main)]">
              Đặt phòng
            </button>
          </div>
        </div>
        <div className="lg:w-[33.3333%]">
          <div className="social flex lg:block gap-2.5 pt-5">
            <div className="flex justify-end">
              <PiFacebookLogo className="cursor-pointer w-[40px] h-[40px] mb-2" />
            </div>
            <div className="flex justify-end">
              <PiYoutubeLogoFill className="cursor-pointer w-[40px] h-[40px] mb-2" />
            </div>
            <div className="flex justify-end">
              <PiInstagramLogo className="cursor-pointer w-[40px] h-[40px] mb-2" />
            </div>
            <div className="flex justify-end">
              <PiTiktokLogo className="cursor-pointer w-[40px] h-[40px] mb-2" />
            </div>
          </div>
          <div className="video lg:w-auto lg:max-h-[291px] max-w-[690px] max-h-[460px] relative lg:mt-[50px] mt-5">
            <img
              src="/images/slide_video_img.jpg"
              alt="image_video"
              className="rounded-[20px] lg:max-h-[291px] max-h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <PiYoutubeLogo className="cursor-pointer bg-white w-[70px] h-[70px] rounded-[50%] p-3 text-black hover:bg-[var(--shop-color-main)] hover:text-white transition-all duration-300 delay-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // loop={true}
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
