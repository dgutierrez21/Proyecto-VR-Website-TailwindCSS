import ModalVideo from "react-modal-video";

import "../modalVideo.scss";

import { BsPlayCircleFill } from "react-icons/bs";

import { useState } from "react";

export const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="grid place-items-center text-center lg:flex justify-between">
          <h3
            className="font-semibold text-2xl mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="250"
          >
            Awesome experiences with virtual reality world
          </h3>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="u5L9Mvh7tAk"
            onClose={() => setIsOpen(false)}
          />

          <div
            className="w-[270px] h-[180px] bg-videoBg bg-no-repeat bg-cover grid place-items-center"
            data-aos="fade-left"
            data-aos-offset="250"
          >
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <BsPlayCircleFill className="text-5xl text-white/80 hover:text-white hover:scale-110 transition-all duration-150 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
