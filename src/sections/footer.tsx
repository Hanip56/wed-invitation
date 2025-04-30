import React from "react";
import FadeInScrollWrapper from "../fadeInScrollWrapper";

const Footer = () => {
  return (
    <div className="font-cormorant-garamond mt-52">
      {/* <h3 className="font-cormorant-garamond uppercase text-xl">
        Kepada Yth. <br />
        Bapak/ibu/Saudara/i
      </h3> */}
      <div className="w-full h-[30vh] bg-[url(/wed.jpg)] bg-no-repeat bg-cover bg-center relative">
        <div className="h-40 bg-gradient-to-t from-transparent to-white absolute left-0 top-0 w-full"></div>
        <div className="absolute left-0 -top-[30vh] w-full p-6">
          <FadeInScrollWrapper>
            <div className="flex flex-col justify-center items-center gap-6 px-2">
              <img src="/jazakumullah.png" className="w-60" />
              <p className="max-w-72 text-center font-ibm-plex-sans text-xs">
                Dan terima kasih kami ucapkan atas kehadiran dan Do'a restu
                Bapak/Ibu/Saudara/i.
              </p>
              <h3 className="text-3xl mt-10">
                WAFIQ
                <span className="font-allison text-2xl">And</span> NENG
              </h3>
            </div>
          </FadeInScrollWrapper>
        </div>
      </div>
    </div>
  );
};

export default Footer;
