import Image from "next/image";
import Header from "../header/Header";
import bantho from "../../../public/assets/images/intro/bantho.png";
import bantho2 from "../../../public/assets/images/intro/bantho2.png";
import bantho3 from "../../../public/assets/images/intro/bantho3.png";
import { useEffect, useState } from "react";

const Introduce = () => {
  const [images, setImages] = useState([bantho, bantho2, bantho3]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev == images.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative">
      <div className="translate-y-10">
        <Header />
      </div>
      <div className="h-[40rem] bg-black"></div>
      <div className="w-full relative z-10 bg-[#2b2f26]">
        <div className="w-full relative overflow-hidden">
          <div
            className={`flex ${
              currentIndex == 0
                ? "transition-all duration-1500"
                : "transition-all duration-500"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((item, index) => (
              <div key={index} className="min-w-full h-auto relative">
                <Image
                  src={item}
                  alt={`intro-${index}`}
                  objectFit="cover"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute z-[-10] -bottom-2 h-4 bg-[#2b2f26] w-full"></div>
      </div>
    </div>
  );
};

export default Introduce;
