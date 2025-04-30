import FadeInScrollWrapper from "../fadeInScrollWrapper";

const Hero = () => {
  return (
    <FadeInScrollWrapper>
      <div className="font-cormorant-garamond">
        {/* <h3 className="font-cormorant-garamond uppercase text-xl">
        Kepada Yth. <br />
        Bapak/ibu/Saudara/i
      </h3> */}
        <div className="w-full h-[90vh] bg-[url(/wed.jpg)] bg-no-repeat bg-cover bg-center relative mb-[8vh]">
          <div className="h-96 bg-gradient-to-b from-transparent to-white absolute left-0 bottom-0 w-full"></div>

          <div className="absolute left-0 -bottom-[10vh] w-full p-6">
            <h1 className="text-6xl tracking-tight text-center">
              WAFIQ
              <br /> <span className="font-allison text-5xl">And</span> NENG
            </h1>
          </div>
        </div>
      </div>
    </FadeInScrollWrapper>
  );
};

export default Hero;
