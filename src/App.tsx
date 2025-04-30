import Hero from "./sections/hero";
import CountdownTimer from "./sections/countdown";
import Intro from "./sections/intro";
import Comments from "./sections/comments";
import Footer from "./sections/footer";
import Popup from "./sections/popup";
import { useRef, useState } from "react";

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startAudio = () => {
    audioRef.current?.play();
  };
  return (
    <>
      {!isOpened && (
        <Popup
          handleOpen={() => {
            setIsOpened(true);
            startAudio();
          }}
        />
      )}

      {isOpened && (
        <div className="w-full sm:max-w-sm mx-auto">
          <Hero />
          <CountdownTimer
            targetDate={"2025-05-11T09:00:00"}
            timeZone="Asia/Jakarta"
          />
          <Intro />
          <Comments />
          <Footer />
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default App;
