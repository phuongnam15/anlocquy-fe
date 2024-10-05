import Image from "next/image";
import Header from "../header/Header";
import bantho from "../../../public/assets/images/intro/bantho.png";

const Introduce = () => {
  return (
    <div className="w-full relative">
      <div className="translate-y-10">
        <Header />
      </div>
      <div className="h-[40rem] bg-black"></div>
      <Image src={bantho} alt="bantho" className="w-full relative z-10" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -bottom-1 bg-[#2b2f25]"
      >
        <path
          fill="#2b2f25"
          fillOpacity="1"
          d="M0,256L60,229.3C120,203,240,149,360,144C480,139,600,181,720,208C840,235,960,245,1080,234.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Introduce;
