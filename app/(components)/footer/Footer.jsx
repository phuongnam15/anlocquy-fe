import Image from "next/image";
import logoDathongbao from "../../../public/assets/images/logo/dathongbao.png";
import facebook from "../../../public/assets/images/logo/facebook.png";
import tiktok from "../../../public/assets/images/logo/tiktok.png";
import youtube from "../../../public/assets/images/logo/youtube.png";
import zalo from "../../../public/assets/images/logo/zalo.png";
import logo1 from "../../../public/assets/images/logo/ALQ_Logo-011.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import cornerTop from "../../../public/assets/images/background/corner-top.svg";
import cornerBottom from "../../../public/assets/images/background/corner-bottom.svg";
import line from "../../../public/assets/images/background/line.svg";

const socialIcons = [
  { icon: facebook, name: "facebook-icon" },
  { icon: tiktok, name: "tiktok-icon" },
  { icon: youtube, name: "youtube-icon" },
  { icon: zalo, name: "zalo-icon" },
];

const Footer = () => {
  return (
    <div className="relative bottom-0">
      <div className="relative bg-contact bg-repeat border-[3px] border-[#d3b058] py-2 md:py-3 lg:py-5">
        <div className="bg-[#0F1816] absolute inset-0 opacity-90 z-0"></div>
        <div className="container mx-auto p-4 flex flex-col md:flex-row relative items-center justify-between gap-3 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          <h1 className="whitespace-nowrap font-medium text-white text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-DFVN-1">
            NHẬN TƯ VẤN
          </h1>

          <div className="w-full md:w-auto flex flex-row flex-1 gap-2 md:gap-3 lg:gap-5 items-center">
            <input
              type="text"
              className="rounded-xl w-full md:w-auto flex-1 pl-2 lg:pl-5 pr-1 py-3 xl:py-4 text-sm md:text-md lg:text-lg"
              placeholder="Họ và tên"
            />
            <input
              type="text"
              className="rounded-xl w-full md:w-auto flex-1 pl-2 lg:pl-5 pr-1 py-3 xl:py-4 text-sm md:text-md lg:text-lg"
              placeholder="Số điện thoại"
            />
            <button className="whitespace-nowrap rounded-xl bg-[#fedc92] font-medium px-3 sm:px-5 md:px-10 lg:px-12 py-3 xl:py-4 text-sm md:text-md lg:text-lg transition duration-300 hover:bg-[#fbbf24]">
              Liên hệ
            </button>
          </div>
        </div>
      </div>
      <div className="pb-4 lg:pt-8 flex flex-col gap-4">
        {/* video */}
        <div className="w-full h-96 bg-gray-400 mb-6 lg:hidden"></div>

        {/* address */}
        <div className="container flex justify-center items-center">
          <div className="h-full w-full relative">
            <Image
              src={cornerTop}
              className="absolute -top-[10px] -left-[10px] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16"
              alt="corner-top"
            />
            <Image
              src={cornerBottom}
              className="absolute -bottom-[10px] -left-[10px] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16"
              alt="corner-bottom"
            />
            <span className="absolute border-t border-[#c4ab75] w-1/2 -bottom-1.5 left-[50%] -translate-x-1/2"></span>
            <div className="flex flex-col gap-3 py-7 px-8 lg:px-10 xl:px-12 2xl:px-14 w-full">
              <div className="flex">
                <div className="flex flex-col gap-5 flex-1">
                  {/* logo */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-[0.3rem]">
                      <Image
                        src={logo1}
                        className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        alt="Picture of the author"
                      />
                      <h1 className="font-DFVN-1 text-[#fcbf69] text-lg sm:text-xl md:text-2xl">
                        AN LỘC QUÝ
                      </h1>
                    </div>
                    <span className="border-t border-gray-200 w-20"></span>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-col w-full justify-between gap-4">
                    {/* showroom */}
                    <div className="text-white gap-2 flex flex-col">
                      <h1 className="text-md sm:text-lg md:text-xl">
                        Showroom của chúng tôi được đặt tại
                      </h1>
                      <p className="text-xs sm:text-sm font-light text-gray-300">
                        {" "}
                        <LocationOnIcon />
                        588 Nguyễn Trãi, Thanh Xuân, Hà Nội
                      </p>
                      <p className="text-xs sm:text-sm font-light text-gray-300">
                        <LocationOnIcon />
                        81 Nguyễn Văn Cừ, Hạ Long, Quảng Ninh
                      </p>
                    </div>

                    {/* contact */}
                    <div className="text-white gap-2 flex flex-col">
                      <h1 className="text-md sm:text-lg md:text-xl">Liên hệ</h1>
                      <p className="text-xs sm:text-sm font-light text-gray-300">
                        SĐT: 0969171665
                      </p>
                      <p className="text-xs sm:text-sm font-light text-gray-300">
                        Email: anlocquy@gmail.com
                      </p>
                      <span className="border-t border-gray-200 w-20 mt-3 md:hidden lg:block"></span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-400 hidden lg:block flex-1"></div>
              </div>

              {/* logo */}
              <div className="flex justify-between items-center">
                <Image
                  src={logoDathongbao}
                  alt="logo-dathongbao"
                  className="w-20 h-8 md:w-28 md:h-11"
                />
                <div className="flex gap-2">
                  {socialIcons.map((item, index) => {
                    return (
                      <Image
                        key={index}
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-[0.55rem] sm:text-xs">
          Copyright © 2024 ANLOCQUY · All Rights Reserved · Design by AMAI
          agency
        </p>
      </div>
    </div>
  );
};

export default Footer;
