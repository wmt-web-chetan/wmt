import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      >
        <source
          src="/Trend.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex flex-col items-center justify-center text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Our World
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-center max-w-2xl">
          Discover the beauty and serenity of nature with our immersive experiences.
        </p>
      </div>
    </div>
  );
};

export default VideoBackground;