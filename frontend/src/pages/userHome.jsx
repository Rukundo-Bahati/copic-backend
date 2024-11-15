import UserNavbar from "../components/usernavbar";
import Bg from "../images/usertwo.png";
import { useState } from "react";
import imageOne from "../images/userone.png";
import imageTwo from "../images/userthree.png";
import imageThree from "../images/four.png";
import {  FaAngleRight } from "react-icons/fa";

export default function UserHome() {
  const images = [imageOne, Bg, imageTwo, imageThree];

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  

  return (
    <div
      className="bg-black bg-opacity-100"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <UserNavbar />
      <div className="flex items-center pl-10 pr-10 pb-10 gap-5 text-white justify-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-[40px] font-bold">
            Choose your own Photographer
          </h2>
          <p className="text-center  text-[25px]">
            We connect you to Rwanda’s
            <br /> best Photographers in just one simple Click.
            <br /> Explore Photographers now
          </p>
          <button className="h-10 w-24 text-white  bg-[#B60418] hover:bg-[#8B0313] transition-all duration-300  ">
            Explore
          </button>
        </div>
        <FaAngleRight
          className="text-[#B60418] w-10 h-10"
          onClick={handleClick}
        />
      </div>
      <div className="flex space-x-2 items-center justify-center pt-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-red-500" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
