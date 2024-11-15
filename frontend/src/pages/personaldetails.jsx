import Logo from "../images/logo.png";
import Bg from "../images/bg.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Details() {
  return (
    <div
      className=" pb-10  z-10 "
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        height:"100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={Logo}
        className="w-[300px] flex items-start justify-start"
      ></img>
      <div className=" flex items-center justify-center flex-col ">
        <div className=" bg-[#0A0B0C] h-[400px] pb-10  flex md:w-[400px] max-w-[400px] flex-col items-center justify-center rounded-md text-white gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[30px]">Personal Details</h1>
            <p className="font-thin opacity-50">Set your Profile</p>
          
          </div>
          <input
              type="text"
              className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
              placeholder="Full Names"
            />
            <input
              type="text"
              className="md:w-[350px] max-w-[350px] h-[50px] text-white bg-opacity-35 bg-[#817575] focus:outline-none rounded-md text-center"
              placeholder="District Location"
            />
           <button
          className="bg-[#B60418] text-white h-[40px] max-w-[100px] flex items-center justify-center md:w-[100px] gap-2"
          style={{ minHeight: "50px", lineHeight: "40px", minWidth: "100px" }}
        >
          <Link to= "/user">Next </Link>
          <FaArrowRight />
        </button>
        <p className="pt-5">
          <span className="opacity-50 text-[15px]">New to Copic ?</span> Sign
          up now
        </p>

        </div>
      </div>
    </div>
  );
}
