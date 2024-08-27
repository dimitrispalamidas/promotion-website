import React from "react";
import { Nunito } from "next/font/google";
import Navbar from "./Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

const FullscreenVideo = () => {
  return (
    <>
      <div className='relative w-full h-screen overflow-hidden -mt-[82px]'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/promotion-video.mp4'
          autoPlay
          loop
          muted
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center px-4'>
          <h1
            className={`text-white text-4xl font-bold leading-loose text-center ${nunito.className}`}
          >
            Η δημιουργικότητα
            <br />
            θέλει
            <br />
            τόλμη.
          </h1>
        </div>
      </div>
    </>
  );
};

export default FullscreenVideo;
