import React from "react";

const FullscreenVideo = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/promotion-video.mp4" type="video/mp4" />
        <source src="/promotion-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl text-white mb-6">
            Επαγγελματικές Υπηρεσίες Προώθησης
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Δημιουργούμε αξέχαστες εμπειρίες και επιτυχημένα events για την επιχείρησή σας
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FullscreenVideo;
