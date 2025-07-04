import { useState } from "react";
import { PiCaretDown, PiCaretRight, PiX } from "react-icons/pi";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface ISubMenu {
  href: string;
  label: string;
  subMenu?: ISubMenu[];
}

const menuItems = [
  { href: "/", label: "Trang chủ" },
  { href: "#", label: "Về Cozy Stay" },
  {
    href: "#",
    label: "Các loại phòng",
  },
  {
    href: "#",
    label: "Dịch vụ tại Cozy Stay",
    subMenu: [
      { href: "#", label: "Nhà hàng" },
      { href: "#", label: "Sự kiện" },
    ],
  },
  { href: "#", label: "Tin tức & Bài viết" },
  { href: "#", label: "Liên hệ" },
];

const NavbarMobile = (props: IProps) => {
  const { open, setOpen } = props;
  const [openSubMenu, setOpenSubMenu] = useState("");

  const onClose = () => {
    setOpen(false);
  };

  const Icon = openSubMenu === "service" ? PiCaretDown : PiCaretRight;

  const handleClick = (subMenu: string) => {
    if (openSubMenu === subMenu) {
      setOpenSubMenu("");
    } else {
      setOpenSubMenu(subMenu);
    }
  };

  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      <div
        className={`lg:hidden z-50 w-[70%] fixed top-0 left-0 bottom-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center text-[20px] border-b border-[var(--shop-color-border)] p-[15px]">
          <p className="font-bold">Danh mục</p>
          <PiX className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="px-[15px] ">
          <ul>
            {menuItems.map((item: ISubMenu, index: number) => (
              <li className={`my-[18px] text-[15px]`} key={index}>
                <div
                  className={`${
                    item?.subMenu
                      ? `flex items-center justify-between ${
                          openSubMenu === "service"
                            ? "!text-[var(--shop-color-hover)]"
                            : "text-black"
                        }`
                      : ``
                  }`}
                >
                  <a
                    href={item?.href}
                    className=" cursor-pointer active:text-[var(--shop-color-hover)]"
                  >
                    {item?.label}
                  </a>
                  {item?.subMenu && (
                    <Icon
                      onClick={() => {
                        !item?.subMenu ? null : handleClick("service");
                      }}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                {item?.subMenu && (
                  <ul
                    className={`pl-[15px] transition-all duration-300 ease-in-out
                  ${openSubMenu === "service" ? "block" : "hidden"}`}
                  >
                    {item?.subMenu.map((subItem: ISubMenu, index: number) => (
                      <li className={`my-[18px] text-[15px]`} key={index}>
                        <a
                          href={subItem?.href}
                          className="text-black cursor-pointer hover:text-[var(--shop-color-hover)]"
                        >
                          {subItem?.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
