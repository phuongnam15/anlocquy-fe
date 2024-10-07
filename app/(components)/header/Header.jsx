"use client";

import Image from "next/image";
import logo1 from "../../../public/assets/images/logo/ALQ_Logo-011.png";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { useSidebarSemiCircleContext } from "@/app/(contexts)/sidebarSemiCircle";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const { setIsShowSidebar } = useSidebarSemiCircleContext();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="flex justify-center h-auto">
      <div className="container flex justify-between items-center text-gray-200 absolute">
        <div className="flex items-center gap-[0.3rem]">
          <Image
            src={logo1}
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14"
            alt="logo"
          />
          <h1 className="font-DFVN-1 text-[#fcbf69] text-md md:text-lg lg:text-xl xl:text-2xl">
            AN LỘC QUÝ
          </h1>
        </div>

        <div className="flex gap-2 sm:gap-6 md:gap-8 items-center">
          <div
            ref={searchRef}
            className={`relative flex items-center transition-all duration-300 ${
              isSearchActive ? "h-[2.5rem] border-b border-white w-32 sm:w-48 md:w-64" : "w-8 justify-center"
            }`}
          >
            <Search
              className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer transition-transform duration-300 ${
                isSearchActive ? "absolute scale-90" : ""
              }`}
              onClick={() => setIsSearchActive(!isSearchActive)}
            />

            {isSearchActive && (
              <input
                type="text"
                placeholder="tìm kiếm..."
                className="absolute w-full pl-10 bg-transparent outline-none focus:border-[#fcbf69] transition-all duration-300"
              />
            )}
          </div>

          <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 cursor-pointer" />
          <Menu
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
            onClick={() => setIsShowSidebar(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
