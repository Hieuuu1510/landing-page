import { useEffect, useRef, useState } from "react";
import { PiList } from "react-icons/pi";
import NavbarMobile from "./components/navbarMobile";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState<boolean>(false);
  const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollEnd(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0,
      }
    );

    const el = navbarRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className="h-[1px] bg-[var(--backgroundHeader)]"
      ></div>
      <div
        className={`w-full h-auto bg-[var(--backgroundHeader)] text-white p-[10px] ${
          scrollEnd ? "navbar" : ""
        }`}
      >
        <div className="flex items-center justify-between max-w-[1410px] my-0 mx-auto md:max-w-[1210px]">
          <div className="flex gap-4 items-center">
            <PiList
              size={25}
              className="cursor-pointer block lg:hidden"
              onClick={() => setShowNavbarMobile(true)}
            />
            <div className="uppercase cursor-pointer font-black text-[26px] px-[10px]">
              Cozy Stay
            </div>
          </div>
          <ul className="hidden lg:flex">
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="/">Trang chủ</a>
            </li>
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="">Về Cozy Stay</a>
            </li>
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="">Các loại phòng</a>
            </li>
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="">Dịch vụ tại Cozy Stay</a>
            </li>
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="">Tin tức & Bài viết</a>
            </li>
            <li className="cursor-pointer my-[18px] mx-[15px]">
              <a href="">Liên hệ</a>
            </li>
          </ul>
          <div className="cursor-pointer px-[20px] py-[10px] bg-[var(--shop-color-main)] tracking-[1px] rounded-[22px]">
            Đặt phòng
          </div>
        </div>
      </div>
      {showNavbarMobile && (
        <NavbarMobile open={showNavbarMobile} setOpen={setShowNavbarMobile} />
      )}
    </>
  );
};

export default Navbar;
