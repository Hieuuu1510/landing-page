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
    <div className="relative w-full lg:h-[691px] sm:h-[967px] overflow-hidden">
      {/* Flash overlay */}
      <div
        className={`absolute inset-0 z-5 pointer-events-none transition-opacity duration-300 bg-gray-300 ${
          flash ? "opacity-70" : "opacity-0"
        }`}
      />

      {/* Text cố định
      <div className="absolute inset-0 z-6 flex items-center justify-center text-white text-center px-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Trải Nghiệm Tuyệt Vời
          </h2>
          <p className="text-lg md:text-xl">
            Không gian sang trọng – Dịch vụ chuyên nghiệp
          </p>
        </div>
      </div> */}

      <div className="absolute top-[80px] left-0 right-0 bottom-[80px] text-white z-5 mx-auto my-0 container flex px-[12px]">
        <div className="lg:w-[66.6666%] flex flex-col justify-end">
          <p className="text-[16px] mb-5">WELCOME TO COZY STAY</p>
          <h2 className="text-[60px] font-bold mb-[13px]">
            Nơi nghỉ dưỡng yên bình cho những người yêu thiên nhiên
          </h2>
          <p className="text-[16px] mt-4 mb-5">
            Đắm mình trong những phẩm chất phục hồi của thiên nhiên, tránh xa
            những xáo trộn của cuộc sống thường ngày.
          </p>
          <div className="flex flex-row gap-[15px]">
            <button className="px-[30px] py-[10px] bg-[var(--backgroundHeader)] rounded-[30px] text-[14px] tracking-[1px] cursor-pointer">
              Xem thêm
            </button>
            <button className="btn btn-primary">Đặt phòng</button>
          </div>
        </div>
        <div className="lg:w-[33.3333%]">
          <div className="social">
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
          <div className="video lg:w-auto lg:max-h-[291px] xs:max-w-[690px] xs:max-h-[460px] relative mt-[50px]">
            <img
              src="/images/slide_video_img.jpg"
              alt="image_video"
              className="rounded-[20px] lg:max-h-[291px] xs:max-h-[460px] w-full object-cover"
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
