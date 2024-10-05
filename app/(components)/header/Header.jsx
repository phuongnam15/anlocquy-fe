"use client";

import Image from "next/image";
import logo1 from "../../../public/assets/images/logo/ALQ_Logo-011.png";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { useMenuSemiCircleContext } from "@/app/(contexts)/menuSemiCircle";

const Header = () => {
  const { setIsShowMenu } = useMenuSemiCircleContext();

  return (
    <header className="flex justify-center h-auto">
      <div className="container flex justify-between items-center text-gray-200 absolute">
        <div className="flex items-center gap-[0.3rem]">
          <Image
            src={logo1}
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14"
            alt="logo"
          />
          <h1 className="font-DFVN-1 text-[#fcbf69] text-md md:text-lg lg:text-xl xl:text-2xl">AN LỘC QUÝ</h1>
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <Search className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
          <Menu
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
            onClick={() => setIsShowMenu(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
