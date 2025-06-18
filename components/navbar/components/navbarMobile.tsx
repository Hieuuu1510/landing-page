import { PiX } from "react-icons/pi";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavbarMobile = (props: IProps) => {
  const { open, setOpen } = props;

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* {open && ( */}
      <div
        // className={`fixed inset-0 z-40 transition-opacity duration-300 bg-black opacity-70`}
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          open ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      {/* )} */}
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
            {[
              ["/", "Trang chủ"],
              ["#", "Về Cozy Stay"],
              ["#", "Các loại phòng"],
              ["#", "Dịch vụ tại Cozy Stay"],
              ["#", "Tin tức & Bài viết"],
              ["#", "Liên hệ"],
            ].map(([href, label], idx) => (
              <li className=" my-[18px] text-[15px] " key={idx}>
                <a
                  href={href}
                  className="text-black cursor-pointer hover:text-[var(--shop-color-hover)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
