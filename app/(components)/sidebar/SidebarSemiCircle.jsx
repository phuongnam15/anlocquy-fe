"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import facebook from "../../../public/assets/images/logo/facebook.png";
import tiktok from "../../../public/assets/images/logo/tiktok.png";
import youtube from "../../../public/assets/images/logo/youtube.png";
import zalo from "../../../public/assets/images/logo/zalo.png";
import Image from "next/image";
import CloseIcon from "../../../public/assets/images/icon/delete.png";
import { useSidebarSemiCircleContext } from "@/app/(contexts)/sidebarSemiCircle";
import { useRouter } from "next/navigation";

const socialIcons = [
  { icon: facebook, name: "facebook-icon" },
  { icon: tiktok, name: "tiktok-icon" },
  { icon: youtube, name: "youtube-icon" },
  { icon: zalo, name: "zalo-icon" },
];

const listRoute = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Giới thiệu An Lộc Quý",
    href: "/about",
  },
  {
    title: "Cửa hàng",
    href: "/store",
  },
  {
    title: "Bài viết",
    href: "/post",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
];

const SidebarSemiCircle = () => {
  const { isShowSidebar, setIsShowSidebar } = useSidebarSemiCircleContext();
  const router = useRouter();

  return (
    <div
      className={`fixed ${
        isShowSidebar ? "right-0" : "-right-[150%]"
      } z-50 float-end h-full bg-rectangle bg-cover flex flex-col items-end px-8 justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-18 xl:gap-19 2xl:gap-21 transition-all duration-300`}
      style={{ width: "50vh" }}
    >
      <div
        className="flex text-white justify-center items-center gap-4 relative group cursor-pointer"
        onClick={() => setIsShowSidebar(false)}
      >
        <button className="font-light text-md sm:text-lg">Thoát</button>
        <Image
          src={CloseIcon}
          alt="delete-icon"
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
        <span className="absolute -bottom-1 w-full border-t border-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </div>
      <ul className="flex flex-col items-end text-white text-2xl 2xl:text-3xl font-light gap-3 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-3">
        {listRoute.map((item, index) => (
          <li
            key={index}
            className="relative group hover:text-[#FEDC92] cursor-pointer hover:font-medium transition-all duration-75"
            onClick={() => router.push(item.href)}
          >
            <p className="mb-2">{item.title}</p>
            <span className="absolute left-0 bottom-0 w-full h-1 border-t border-[#FEDC92] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col items-end text-white text-md font-light gap-1 text-xs md:text-md lg:text-sm xl:text-sm">
        <li className="font-bold">Địa chỉ</li>
        <li>
          <LocationOnIcon />
          588 Nguyễn Trãi, Thanh Xuân, Hà Nội
        </li>
        <li>
          <LocationOnIcon />
          81 Nguyễn Văn Cừ, Hạ Long, Quảng Ninh
        </li>
        <li className="font-bold">Liên hệ</li>
        <li>SĐT: 0969171665</li>
        <li>Email: anlocquy@gmail.com</li>
        <li className="my-3">
          <hr className="border-t border-gray-200 w-24" />
        </li>
        <li className="flex gap-2">
          {socialIcons.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.icon}
                alt={item.name}
                width={25}
                height={25}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default SidebarSemiCircle;
