import React from "react";
import "./hero.css";
import PrimaryButton from "../blocks/PrimaryButton";
import Image from "next/image";
import backdropImage from  "../../assets/images/404SVG/Group 74.png"

const HeroSection = () => {
  return (
    <div className="hero-background px-2">
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="hero-heading-animate text-3xl text-center md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold ">
          Think <span className="text-gradient-primary">Smarter</span>,Grow{" "}
          <span className="text-gradient-primary">Faster</span>
        </h1>
        <p className="hero-subtitle-animate pt-2 md:pt-4 max-w-2xl text-center text-md md:text-lg tracking-wider">
          Unlock buisness potential with cutting-edge AI solutions
        </p>
        <div className="hero-buttons-animate flex justify-center gap-2 mt-8 md:mt-10 pb-5 md:pb-20">
          <PrimaryButton
            text="Get a Free Quote"
            className={"button-background-gradient text-white"}
          />
          <PrimaryButton
            text="Explore Our Work"
            className={" text-primary border border-primary"}
          />
        </div>
        <div className="pb-7">
            <Image src={backdropImage} alt="backdrop-img" className="w-32 "/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
