import React from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

const FullscreenVideo = () => {
  return (
    <>
      <div className='relative h-screen'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src='/promotion-video.mp4' type='video/mp4' />
          <source src='/promotion-video.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 flex flex-col items-center justify-center px-4'></div>
      </div>
    </>
  );
};

export default FullscreenVideo;
