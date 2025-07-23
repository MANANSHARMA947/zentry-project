import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidder">
      <div
        className="relative z-10 h-dvh w-screen overflow-hidden rounder-lg bg-blue-75"
        id="video-frame">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick}>
              <video ref={nextVdRef} src={getVideoSource(currentIndex+1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
