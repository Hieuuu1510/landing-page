import { Button, Drawer } from "antd";
import React, { useState } from "react";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavbarMobile = (props: IProps) => {
  const { open, setOpen } = props;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Danh mục"
      // closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={open}
      placement="left"
      width={"50%"}
      className="navbar_mobile"
    >
      {/* <p className="cursor-pointer">Trang chủ</p>
      <p className="cursor-pointer">Về Cozy Stay</p>
      <p className="cursor-pointer">Các loại phòng</p>
      <p className="cursor-pointer">Dịch vụ tại Cozy Stay</p>
      <p className="cursor-pointer">Tin tức & bài viết</p>
      <p className="cursor-pointer">Liên hệ</p> */}
      <ul className="!text-black">
        <li className="cursor-pointer my-[18px] text-[15px] !text-black">
          <a href="/">Trang chủ</a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="">Về Cozy Stay</a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="">Các loại phòng</a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="">Dịch vụ tại Cozy Stay</a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="">Tin tức & Bài viết</a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="">Liên hệ</a>
        </li>
      </ul>
    </Drawer>
  );
};

export default NavbarMobile;
