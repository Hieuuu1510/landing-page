import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-[76px] bg-[var(--backgroundHeader)] text-white p-[10px]">
      <div className="flex items-center justify-between w-[1410px] my-0 mx-auto">
        <div className="uppercase cursor-pointer font-black text-[26px] px-[10px]">
          Cozy Stay
        </div>
        <>
          <ul className="flex gap-4">
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
        </>
        <div className="cursor-pointer px-[20px] py-[10px] bg-[var(--shop-color-main)] tracking-[1px] rounded-[22px]">
          Đặt phòng
        </div>
      </div>
    </header>
  );
};

export default Navbar;
