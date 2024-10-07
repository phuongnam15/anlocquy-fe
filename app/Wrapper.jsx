"use client";

import Footer from "./(components)/footer/Footer";
import Header from "./(components)/header/Header";
import SidebarSemiCircle from "./(components)/sidebar/SidebarSemiCircle";
import "./globals.css";
import Image from "next/image";
import bg1 from "../public/assets/images/background/bg1.png";
import { SidebarSemiCircleContextProvider } from "./(contexts)/sidebarSemiCircle";
import bantho from "../public/assets/images/intro/bantho.png";
import Introduce from "./(components)/introduce/Introduce";

const WrapperLayout = ({ children }) => {
  const currentPath = window.location.pathname;

  return (
    <div>
      {/* sidebar */}
      <SidebarSemiCircle />

      {/* introduce */}
      {currentPath == "/" && <Introduce />}

      {/* main section */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* background */}
        <div className="absolute z-[-10] inset-0 overflow-hidden flex flex-col w-full h-full bg-[#0F1816]">
          <div className="relative">
            <div className="absolute -bottom-5 h-10 w-full bg-[#2a2e26]"></div>
            <Image src={bg1} alt="bg-1" className="w-full" />
          </div>
          <div className="bg-image-2 bg-cover bg-repeat-y w-full h-full"></div>
        </div>

        {/* content */}
        <div className="flex flex-col flex-grow pt-10">
          {currentPath != "/" && <Header />}
          <main className="flex-1 py-20">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const Wrapper = ({ children }) => {
  return (
    <SidebarSemiCircleContextProvider>
      <WrapperLayout>{children}</WrapperLayout>
    </SidebarSemiCircleContextProvider>
  );
};

export default Wrapper;
