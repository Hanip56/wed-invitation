import FadeInScrollWrapper from "../fadeInScrollWrapper";

const Intro = () => {
  const latitude = -7.220348;
  const longitude = 107.52167;

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <>
      <FadeInScrollWrapper>
        <div className="pt-16 pb-8 flex flex-col justify-center items-center gap-6 px-2">
          <img src="/bismillah.png" className="w-60" />
          <p className="max-w-80 text-center text-sm font-cormorant-garamond">
            Tanpa mengurangi rasa hormat, perkenankan kami mengundang
            Bapak/Ibu/Saudara/i, serta kerabat sekalian untuk menghadiri acara
            pernikahan kami :
          </p>
        </div>
      </FadeInScrollWrapper>

      <FadeInScrollWrapper>
        <div className="pb-8 flex flex-col justify-center items-center gap-6  font-cormorant-garamond">
          <div className="bg-[url(/pria.jpeg)] bg-cover bg-center bg-no-repeat h-80 w-full relative">
            <div className="absolute left-0 top-0 w-full h-0 from-transparent to-white bg-gradient-to-t" />
            <div className="absolute left-0 bottom-0 w-full h-40 from-transparent to-white bg-gradient-to-b" />
          </div>
          <div className="-mt-14 z-10 text-center space-y-2">
            <h2 className="text-4xl">Wafiq Abdul Aziz</h2>
            <p className="mt-2">
              Putra Bpk. Entis Sutisna <br /> & Ibu Tita Kartika
            </p>
            <h2 className="text-4xl">&</h2>
            <h2 className="text-4xl">Neng Desi</h2>
            <p className="mt-2">
              Putri Bpk. Nendi Hermansyah <br /> & Ibu Iis Syarinah
            </p>
          </div>
          <div className="bg-[url(/wanita.jpeg)] bg-cover bg-center bg-no-repeat h-80 w-full relative -mt-12">
            <div className="absolute left-0 top-0 w-full h-40 from-transparent to-white bg-gradient-to-t" />
            <div className="absolute left-0 bottom-0 w-full h-0 from-transparent to-white bg-gradient-to-b" />
          </div>
        </div>
      </FadeInScrollWrapper>

      <FadeInScrollWrapper>
        <div className="pt-8 border-gray-300 flex flex-col gap-6  font-cormorant-garamond p-6 mx-4 rounded-4xl shadow-lg">
          <h1 className="text-4xl text-center">
            SAVE <span className="font-allison text-3xl">The</span> DATE
          </h1>
          <div className="py-6 border-gray-300 font-ibm-plex-sans text-sm space-y-1">
            <div className="flex [&>*]:flex-1">
              <div>Hari/Tanggal</div>
              <div>: Minggu, 11 Mei 2025</div>
            </div>
            <div className="flex [&>*]:flex-1">
              <div>Akad Nikah</div>
              <div>: 09.00 WIB</div>
            </div>
            <div className="flex [&>*]:flex-1">
              <div>Resepsi</div>
              <div>: 12.00 WIB</div>
            </div>
            <p className="mt-6">Bertempat di Kp. Citamiang RT 03/RW 05</p>
            <div className="flex justify-center mt-6">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex bg-black py-2 px-4 rounded-full text-white uppercase text-[0.7rem] cursor-pointer">
                  <span>
                    <img
                      src="/location-icon.png"
                      className="size-4 shrink-0 mr-2"
                    />
                  </span>{" "}
                  Lihat di map
                </button>
              </a>
            </div>
          </div>
        </div>
      </FadeInScrollWrapper>
    </>
  );
};

export default Intro;
