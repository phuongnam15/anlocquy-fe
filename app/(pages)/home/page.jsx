"use client";

import phat from "../../../public/assets/images/icon/phat.png";
import bantho2 from "../../../public/assets/images/icon/bantho2.png";
import odien from "../../../public/assets/images/icon/odien.png";
import batquai from "../../../public/assets/images/icon/batquai.png";
import Image from "next/image";
import landing1 from "../../../public/assets/images/background/landing1.png";
import landing2 from "../../../public/assets/images/background/landing2.png";
import landing3 from "../../../public/assets/images/background/landing3.png";
import leaf1 from "../../../public/assets/images/background/leaf-1.png";
import leaf2 from "../../../public/assets/images/background/leaf-2.png";
import leaf3 from "../../../public/assets/images/background/leaf-3.png";
import leaf4 from "../../../public/assets/images/background/leaf-4.png";
import cornerBottom2 from "../../../public/assets/images/background/corner-bottom-2.svg";
import arrow from "../../../public/assets/images/icon/arrow.svg";
import vector11 from "../../../public/assets/images/background/vector11.svg";
import vector12 from "../../../public/assets/images/background/vector12.svg";
import vector21 from "../../../public/assets/images/background/vector21.svg";
import vector22 from "../../../public/assets/images/background/vector22.svg";
import cornerTop from "../../../public/assets/images/background/corner-top.svg";
import carousel1 from "../../../public/assets/images/carousel/carousel-1.png";
import carousel2 from "../../../public/assets/images/carousel/carousel-2.png";
import arrow2 from "../../../public/assets/images/icon/arrow2.svg";
import service1 from "../../../public/assets/images/icon/service-1.svg";
import service2 from "../../../public/assets/images/icon/service-2.svg";
import service3 from "../../../public/assets/images/icon/service-3.svg";
import project1 from "../../../public/assets/images/background/project-1.jpg";
import project2 from "../../../public/assets/images/background/project-2.jpg";
import project3 from "../../../public/assets/images/background/project-3.jpg";
import projectTitle from "../../../public/assets/images/background/project-title.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useState } from "react";

const listCard = [
  {
    icon: phat,
    text: "Tượng",
  },
  {
    icon: bantho2,
    text: "Ban Thờ",
  },
  {
    icon: batquai,
    text: "Linh Phẩm Phong Thuỷ",
  },
  {
    icon: odien,
    text: "Đồ thờ cúng",
  },
];

const carouselImages = [
  {
    image: carousel1,
    name: "Nguyen Van A",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae, vero doloremque, quod asperiores officiis praesentium adipisci consequatur aspernatur recusandae labore, quos consequuntur! Magni earum illum iste blanditiis quasi error.",
  },
  {
    image: carousel2,
    name: "Nguyen Van b",
    feedback:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam dolor tempora illum modi? Provident, consectetur cum voluptatem reiciendis dolore eos temporibus sed reprehenderit deserunt magni corporis officiis, nesciunt nostrum.",
  },
];

const services = [
  { icon: service1, text: "THIẾT KẾ ĐỘC BẢN" },
  { icon: service2, text: "TƯ VẤN PHONG THUỶ" },
  { icon: service3, text: "SET UP TẬN NƠI" },
];

const projects = [
  {
    image: "./assets/images/background/project-1.jpg",
    text: "Gian thờ gia tiên ở Hà Đông",
  },
  {
    image: "./assets/images/background/project-2.jpg",
    text: "Gian thờ gia tiên ở Quảng Ninh",
  },
  {
    image: "./assets/images/background/project-3.jpg",
    text: "Công trình tượng Phật ở Sơn Tây",
  },
  {
    image: "./assets/images/background/project-1.jpg",
    text: "Gian thờ gia tiên ở Hà Đông",
  },
  {
    image: "./assets/images/background/project-2.jpg",
    text: "Gian thờ gia tiên ở Quảng Ninh",
  },
  {
    image: "./assets/images/background/project-3.jpg",
    text: "Công trình tượng Phật ở Sơn Tây",
  },
];

const news = [
  {
    image: "./assets/images/background/tamkhoa.webp",
    title: "Tiêu đề",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore eum aliquid perspiciatis sit culpa officia quas cumque ipsa! Est, provident. Libero facere unde perspiciatis natus distinctio. Itaque, molestias repellat?",
    datetime: "15/03/2024",
    total_comment: 3,
  },
  {
    image: "./assets/images/background/honganh.webp",
    title: "Tiêu đề",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore eum aliquid perspiciatis sit culpa officia quas cumque ipsa! Est, provident. Libero facere unde perspiciatis natus distinctio. Itaque, molestias repellat?",
    datetime: "15/03/2024",
    total_comment: 3,
  },
  {
    image: "./assets/images/background/tamkhoa.webp",
    title: "Tiêu đề",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore eum aliquid perspiciatis sit culpa officia quas cumque ipsa! Est, provident. Libero facere unde perspiciatis natus distinctio. Itaque, molestias repellat?",
    datetime: "15/03/2024",
    total_comment: 3,
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col gap-40">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 w-full justify-center px-10 sm:px-20 md:px-24 lg:px-40 gap-10 md:gap-10 lg:gap-16 xl:gap-20">
        {listCard.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center row-span-2 xl:gap-4"
            >
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-44 2xl:h-44 bg-white border-[#C09440] border-[3px] rounded-tl-[50%] rounded-br-[50%] mb-2">
                <Image
                  src={item.icon}
                  alt="phat"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-20 xl:h-20 2xl:w-[5rem] 2xl:h-[5rem]"
                />
              </div>
              <h1 className="font-semibold text-white self-start text-center w-full xl:text-xl">
                {item.text}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="gap-16 lg:gap-0 flex flex-col">
        {/* thờ tự  */}
        <div className="flex flex-col w-full container">
          <div className="flex flex-col md:flex-row gap-5 md:gap-3">
            <div className="flex-[1.5] lg:flex-[2] px-10 flex">
              <div className="relative w-full">
                <Image
                  src={landing1}
                  alt="landing-1"
                  className="relative md:absolute lg:relative z-10 w-full bottom-0"
                />
                <Image
                  src={leaf2}
                  alt="leaf"
                  className="absolute z-0 -bottom-2 sm:-bottom-4 lg:-bottom-6 -translate-x-[15%] w-32 sm:w-60 lg:w-80 xl:w-96"
                />
                <Image
                  src={cornerBottom2}
                  alt="corner"
                  className="absolute z-20 bottom-0 -right-11"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3 lg:gap-8 justify-center px-1 sm:px-3 xl:px-10">
              <div className="relative flex justify-end md:justify-start w-full mb-3">
                <Image
                  src={leaf1}
                  alt="leaf-1"
                  className="w-16 h-16 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -translate-x-[11.5rem] md:translate-x-0"
                />
                <div className="flex flex-row md:flex-col gap-1 md:gap-0 justify-end md:justify-normal items-center font-DFVN-1 absolute right-0 top-1/2 -translate-y-1/2 md:left-[20%] md:-translate-x-1/3 lg:left-[25%] xl:left-[32%] w-full text-white text-[1.25rem] lg:text-2xl xl:text-4xl">
                  <h1 className="tracking-wide">KHÔNG GIAN</h1>
                  <h1 className="tracking-wide md:ml-5">THỜ TỰ</h1>
                </div>
              </div>
              <p className="text-[#FEDC92] text-sm lg:text-[1rem] 2xl:text-xl tracking-wider font-light">
                Lorem ipsum dolor sit amet consectetur. Ut et sed et vitae purus
                tincidunt vel. Ac rhoncus ultrices nisi sem. Interdum lobortis
                odio euismod in bibendum ac tempus. Facilisi diam a urna quam
                tortor pulvinar velit faucibus.{" "}
              </p>
              <div className="flex gap-6 items-center justify-end w-full">
                <h1 className="md:text-md lg:text-lg md:text-xl text-[#FEDC92]">
                  Xem thêm
                </h1>
                <Image src={arrow} alt="arrow" className="translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative h-80 xl:h-96 hidden lg:block">
          <Image
            src={vector11}
            alt="vector-1"
            className="absolute rotate-[15deg] xl:rotate-0 -translate-y-12 left-1/2 -translate-x-[52%]"
          />
          <Image
            src={vector12}
            alt="vector-1"
            className="absolute -translate-y-12 left-1/2 -translate-x-[48%] rotate-[12deg] xl:rotate-2"
          />
        </div>

        {/* thờ phật */}
        <div className="flex flex-col w-full container">
          <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-3">
            <div className="flex flex-col flex-1 gap-3 lg:gap-8 justify-center px-1 sm:px-3 xl:px-10">
              <div className="relative flex justify-start translate-x-20 md:translate-x-0 w-full mb-3">
                <Image
                  src={leaf3}
                  alt="leaf-1"
                  className="w-16 h-16 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -translate-x-20 md:translate-x-0"
                />
                <div className="flex flex-row md:flex-col gap-1 md:gap-0 justify-end md:justify-normal items-center font-DFVN-1 absolute -left-11 lg:left-5 xl:-left-3 md:right-0 top-1/2 -translate-y-1/2 text-white text-[1.25rem] md:text-lg lg:text-3xl xl:text-4xl">
                  <h1 className="tracking-wide">KHÔNG GIAN</h1>
                  <h1 className="tracking-wide md:ml-5">THỜ PHẬT</h1>
                </div>
              </div>
              <p className="text-[#FEDC92] text-sm lg:text-[1rem] 2xl:text-xl tracking-wider font-light">
                Lorem ipsum dolor sit amet consectetur. Ut et sed et vitae purus
                tincidunt vel. Ac rhoncus ultrices nisi sem. Interdum lobortis
                odio euismod in bibendum ac tempus. Facilisi diam a urna quam
                tortor pulvinar velit faucibus.{" "}
              </p>
              <div className="flex gap-6 items-center justify-end w-full">
                <h1 className="text-lg md:text-xl text-[#FEDC92]">Xem thêm</h1>
                <Image src={arrow} alt="arrow" className="translate-y-0.5" />
              </div>
            </div>
            <div className="flex-[1.5] lg:flex-[2] px-10 flex">
              <div className="relative w-full">
                <Image
                  src={landing2}
                  alt="landing-1"
                  className="relative z-10 w-full bottom-0"
                />
                <Image
                  src={leaf2}
                  alt="leaf"
                  className="absolute z-0 -top-2 lg:-top-4 right-0 translate-x-[15%] w-36 sm:w-60 lg:w-80 xl:w-96"
                />
                <Image
                  src={cornerTop}
                  alt="corner"
                  className="absolute z-20 top-0 -left-11 w-[6.5rem]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative h-80 xl:h-96 hidden lg:block">
          <Image
            src={vector21}
            alt="vector-1"
            className="absolute left-1/2 -translate-x-1/2 -rotate-[17deg] xl:-rotate-3"
          />
          <Image
            src={vector22}
            alt="vector-1"
            className="absolute left-1/2 -translate-x-1/2 -rotate-[18deg] xl:-rotate-[5deg]"
          />
        </div>

        {/* thờ thần tài  */}
        <div className="flex flex-col w-full container">
          <div className="flex flex-col md:flex-row gap-5 md:gap-3">
            <div className="flex-[1.5] lg:flex-[2] px-10 flex">
              <div className="relative w-full">
                <Image
                  src={landing3}
                  alt="landing-1"
                  className="relative md:absolute lg:relative z-10 w-full bottom-0"
                />
                <Image
                  src={leaf2}
                  alt="leaf"
                  className="absolute z-0 -bottom-2 sm:-bottom-4 lg:-bottom-6 -translate-x-[15%] w-32 sm:w-60 lg:w-80 xl:w-96"
                />
                <Image
                  src={cornerBottom2}
                  alt="corner"
                  className="absolute z-20 bottom-0 -right-11"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3 lg:gap-8 justify-center px-1 sm:px-3 xl:px-10">
              <div className="relative flex justify-end md:justify-start w-full mb-3">
                <Image
                  src={leaf1}
                  alt="leaf-1"
                  className="w-16 h-16 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -translate-x-[16rem] md:translate-x-0"
                />
                <div className="flex flex-row md:flex-col gap-1 md:gap-0 justify-end md:justify-normal items-center font-DFVN-1 w-full absolute right-0 top-1/2 -translate-y-1/2 md:left-1/4 md:-translate-x-1/3 lg:left-[34%] text-white text-[1.25rem] md:text-lg lg:text-3xl xl:text-4xl">
                  <h1 className="tracking-wide">KHÔNG GIAN</h1>
                  <h1 className="tracking-wide md:ml-5">ThỜ THẦN TÀI</h1>
                </div>
              </div>
              <p className="text-[#FEDC92] text-sm lg:text-[1rem] 2xl:text-xl tracking-wider font-light">
                Lorem ipsum dolor sit amet consectetur. Ut et sed et vitae purus
                tincidunt vel. Ac rhoncus ultrices nisi sem. Interdum lobortis
                odio euismod in bibendum ac tempus. Facilisi diam a urna quam
                tortor pulvinar velit faucibus.{" "}
              </p>
              <div className="flex gap-6 items-center justify-end w-full">
                <h1 className="text-lg md:text-xl text-[#FEDC92]">Xem thêm</h1>
                <Image src={arrow} alt="arrow" className="translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="flex items-center flex-col font-DFVN-1 gap-10">
        <h1 className="text-white text-3xl">DỊCH VỤ</h1>
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {services.map((item, index) => {
            return (
              <div className="h-full relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="flex-[1.3] md:flex-1 flex items-end pb-2 lg:pb-4">
                    <Image
                      src={item.icon}
                      alt="service"
                      className="w-36 md:w-24 lg:w-28 xl:w-32"
                    />
                  </div>
                  <h1 className="text-2xl md:text-lg lg:text-xl xl:text-3xl text-white w-1/2 break-words text-center flex-1">
                    {item.text}
                  </h1>
                </div>
                <img
                  src="./assets/images/background/leaf-4.png"
                  alt=""
                  className=""
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* about */}
      <div className="w-full h-fit relative mask-image-1 overflow-hidden">
        <img
          src="./assets/images/background/quater.png"
          className="float-end w-[43%] lg:w-[45%]"
        />
        <img
          src="./assets/images/background/sen.png"
          className="right-0 absolute bottom-0 w-[13rem] h-[23rem]"
        />
        <img
          src="./assets/images/background/mask-2.webp"
          className="right-0 absolute bottom-0 w-2/3 z-20 translate-y-16 translate-x-14"
        />
        <div className="container absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="flex h-full">
            <div className="flex-1 flex flex-col justify-center gap-6 lg:px-20">
              <h1 className="font-DFVN-1 text-3xl text-white">VỀ CHÚNG TÔI</h1>
              <p className="text-[#FEDC92] text-sm lg:text-[1rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                cupiditate atque similique tempore provident consequuntur unde
                quis. Delectus minima molestiae beatae? Sapiente totam officiis
                saepe quia quod similique, culpa maiores. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Maxime cupiditate atque
                similique tempore provident consequuntur unde quis. Delectus
                minima molestiae beatae? Sapiente totam officiis saepe quia quod
                similique, culpa maiores.
              </p>
            </div>
            <div className="md:flex-[1.3] lg:flex-[1.5] relative flex items-end">
              <img
                src="./assets/images/background/nghenhan.png"
                alt="nghenhan"
                className="mask-image-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* feedbacks */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute w-[40%] h-full right-0 hidden lg:block glass mask-image-1 mask-image-2 z-20"></div>
        <div className="lg:absolute z-20 mb-7 lg:mb-0 flex flex-row lg:flex-col text-center text-white font-DFVN-1 text-xl md:text-3xl lg:text-4xl lg:text-end lg:pr-[4rem] xl:pr-[7.5rem] md:pt-10 lg:pt-20 justify-center gap-2 sm:gap-3 lg:gap-0 lg:right-0 lg:left-0">
          <h1 className="tracking-wide">PHẢN HỒI TỪ</h1>
          <h1 className="tracking-wide">KHÁCH HÀNG</h1>
        </div>
        <div
          className="flex transition-all duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {carouselImages.map((item, index) => (
            <div key={index} className="min-w-full h-auto relative">
              <Image
                src={item.image}
                alt={`Slide ${index}`}
                objectFit="cover"
                className="w-full mask-image mb-7 lg:mb-0"
              />
              <div className="lg:absolute top-0 bottom-0 right-0 w-full lg:w-[35%] text-white z-10 flex items-end px-5 sm:px-10 md:px-20 lg:pr-[4rem] xl:pr-[7.5rem] lg:pb-[4rem] xl:pb-[7.5rem]">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-6 text-end">
                  <div className="w-full lg:flex justify-end hidden">
                    <Image src={arrow2} alt="arrow-2" />
                  </div>
                  <h1 className="font-DFVN-1 text-lg lg:text-2xl text-[#FEDC92] lg:text-white">{item.name}</h1>
                  <p className="text-light text-[0.8rem] md:text-sm">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute lg:bottom-4 bottom-[34%] sm:bottom-[25%] left-1/2 transform -translate-x-1/2 gap-2 flex">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full border border-white cursor-pointer ${
                currentSlide === index ? "bg-white" : ""
              }`}
              onClick={() => moveToSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* projects */}
      <div className="flex items-center flex-col gap-10">
        <h1 className="text-white text-3xl font-DFVN-1">CÁC DỰ ÁN NỔI BẬT</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden relative border-2 outline-none border-[#FEDC92] 
                   w-[18rem] md:w-[20rem] 2xl:w-[24.5rem] h-[25rem] 2xl:h-[30rem] rounded-s-[60px] rounded-tr-[60px]"
            >
              <div
                className="bg-project bg-[length:410px_90px] absolute bottom-0 z-10 w-full 
                        h-1/6 border-t-2 border-[#FEDC92] text-white flex justify-center items-center"
              >
                <h1 className="text-base md:text-lg lg:text-xl">{item.text}</h1>
              </div>
              <img
                src={item.image}
                alt="project"
                className="lg:-translate-y-[8%]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* news */}
      <div className="container flex items-center flex-col gap-10">
        <h1 className="font-DFVN-1 text-3xl text-white">TIN PHONG THUỶ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 xl:gap-10 2xl:gap-12 w-full">
          {news.map((item, index) => {
            return (
              <div className="overflow-hidden h-[24rem] border border-[#FEDC92] rounded-s-lg rounded-tr-[32px] flex flex-col">
                <img
                  src={item.image}
                  alt=""
                  className="flex-[1.2] overflow-hidden h-full object-cover"
                />
                <div className="flex-1 bg-white border-t border-[#FEDC92] flex flex-col px-4">
                  <div className="flex-1 flex items-center py-2">
                    <h1 className="font-bold text-xl">{item.title}</h1>
                  </div>
                  <div className="flex-2 border-b border-gray-400 pb-2">
                    <p className="text-sm">{item.content}</p>
                  </div>
                  <div className="flex-1 py-3 text-xs flex items-center gap-2 font-semibold">
                    <span>{item.datetime}</span>
                    <FiberManualRecordIcon
                      sx={{ width: "10px", height: "10px", color: "gray" }}
                    />
                    <span>{item.total_comment} bình luận</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-6 items-center justify-end w-full">
          <h1 className="text-lg md:text-xl text-[#FEDC92]">Xem thêm</h1>
          <Image src={arrow} alt="arrow" className="translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
