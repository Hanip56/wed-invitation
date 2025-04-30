import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Popup = ({ handleOpen }: { handleOpen: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [searchParams] = useSearchParams();

  const to = searchParams.get("to") || "";

  const handleBukaUndangan = () => {
    setVisible(false);
    setTimeout(() => handleOpen(), 1000);
  };

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 inset-0 bg-[url(/wed.jpg)] bg-no-repeat bg-cover bg-center z-50 text-white font-cormorant-garamond transition-opacity duration-1000"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="w-full h-full bg-black/50 py-10 px-4 flex flex-col justify-between items-center">
        <div className="text-center">
          <div className="text-xl italic">The Wedding of</div>
          <h3 className="text-4xl mt-2">
            WAFIQ <span className="font-allison text-2xl">And</span> NENG
          </h3>
        </div>
        <div className="text-center space-y-4 flex flex-col items-center">
          <div>
            Kepada Yth.
            <br /> Bapak/Ibu/Saudara/i
          </div>
          <h3 className="text-3xl underline">{to}</h3>
          <button
            className="bg-white py-2 px-4 rounded-full text-black font-ibm-plex-sans uppercase text-xs disabled:opacity-80 mt-4 flex items-center"
            onClick={handleBukaUndangan}
          >
            <span>
              <img src="/open-icon.png" className="size-4 shrink-0 mr-2" />
            </span>{" "}
            Buka undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
