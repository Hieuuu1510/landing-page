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
      onClose={onClose}
      open={open}
      placement="left"
      width={"50%"}
      className="navbar_mobile"
    >
      <ul>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="/" className="!text-black">
            Trang chủ
          </a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="" className="!text-black">
            Về Cozy Stay
          </a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="" className="!text-black">
            Các loại phòng
          </a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="" className="!text-black">
            Dịch vụ tại Cozy Stay
          </a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="" className="!text-black">
            Tin tức & Bài viết
          </a>
        </li>
        <li className="cursor-pointer my-[18px] text-[15px]">
          <a href="" className="!text-black">
            Liên hệ
          </a>
        </li>
      </ul>
    </Drawer>
  );
};

export default NavbarMobile;
