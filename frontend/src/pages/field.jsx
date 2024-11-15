import { FaArrowRight } from "react-icons/fa";
import Bg from "../images/bg.png";
import { Link } from "react-router-dom";

export default function Choices() {
  const fields = [
    "Portrait Photographer",
    "Landscape Photographer",
    "Wildlife Photographer",
    "Fashion Photographer",
    "Wedding Photographer",
    "Sports Photographer",
    "Event Photographer",
  ];

  return (
    <div
      className="pb-10 z-10 p-10 overflow-hidden flex items-center flex-1 justify-center"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="bg-[#0A0B0C] pl-[50px] pt-10 pr-10 text-white h-[500px] w-[450px] rounded-lg items-center">
        <h1 className="font-bold text-[30px] pb-5">
          Select your <br /> field
        </h1>
        <div className="flex flex-col gap-2 pb-3">
          {fields.map((field, index) => (
            <div key={index} className="flex gap-5 ">
              <input type="checkbox" className="bg-white" />
              <p>{field}</p>
            </div>
          ))}
        </div>
        <button
          className="bg-[#B60418] text-white h-[40px] mx-[200px] max-w-[100px] flex items-center justify-center md:w-[100px] gap-2"
          style={{ minHeight: "50px", lineHeight: "40px", minWidth: "100px" }}
        >
          <Link to= "/details">Next </Link>
          <FaArrowRight />
        </button>
        <p className="pt-5">
          <span className="opacity-50 text-[15px]">Have an account?</span> Sign
          in now
        </p>
      </div>
    </div>
  );
}
